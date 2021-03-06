import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import Auxi from '../../hoc/Auxi'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2,
        purchasable: false,
        purchased: false  
    }

    updatePurchaseState (ingredients) {
        
        const sum = Object.values( ingredients ).reduce( (sum, el) =>{
            return sum+el;
        }, 0 );
 
        this.setState({purchasable : sum > 0})
        
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
       
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        if(updatedCounted >= 0){
            updatedIngredients[type] = updatedCounted;
        }
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchased: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchased: false})
    }

    purchaseContinueHandler = () => {
        alert('Cintinue')
    }

    
    render() {
        let disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo ){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxi>
                <Modal show={this.state.purchased} modalClosed={this.purchaseCancelHandler }>
                    <OrderSummary 
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients} 
                        canceled={this.purchaseCancelHandler}
                        continued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                
                <BuildControls
                    disabled={disabledInfo} 
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                    price={this.state.totalPrice}
                    purchased={this.purchaseHandler}
                    purchasable={this.state.purchasable}/>
            </Auxi>
        );
    }
}

export default BurgerBuilder;