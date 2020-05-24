(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/original.b8503d26.png"},36:function(e,t,a){e.exports=a(80)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a(30),i=a.n(l),o=(a(41),a(6)),s=a(7),u=a(9),d=a(8),m=(a(42),function(e){return e.children}),p=(a(43),a(31)),h=a.n(p),f=function(e){return r.a.createElement("div",{className:"Logo",style:{height:e.height}},r.a.createElement("img",{src:h.a,alt:"burger"}))},g=(a(44),a(45),a(46),function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:e.link},e.children))}),v=function(){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(g,{link:"/burger"},"Burger Builder"),r.a.createElement(g,{link:"/orders"},"Orders"))},E=function(e){return r.a.createElement("div",{className:"Toolbar"},r.a.createElement(f,{height:"80%"}),r.a.createElement("nav",null,r.a.createElement(v,null)))},b=function(e){return r.a.createElement(m,null,r.a.createElement(E,null),r.a.createElement("main",{className:"Content"},e.children))},y=a(11),k=a(35),C=(a(52),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"bacon":e=r.a.createElement("div",{className:"Bacon"});break;case"salad":e=r.a.createElement("div",{className:"Salad"});break;default:e=null}return e}}]),a}(n.Component)),O=(a(53),function(e){var t=e.ingredients,a=Object.keys(t).map((function(e){return Object(k.a)(Array(t[e])).map((function(t,a){return r.a.createElement(C,{key:e+a,type:e})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===a.length&&(a=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:"Burger"},r.a.createElement(C,{type:"bread-top"}),a,r.a.createElement(C,{type:"bread-bottom"}))}),N=(a(54),a(55),function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:e.removed,disabled:e.check},"Less"),r.a.createElement("button",{className:"More",onClick:e.added},"More"))}),j=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],w=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),j.map((function(t){return r.a.createElement(N,{key:t.label,label:t.label,check:e.disabled[t.type],added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)}})})),r.a.createElement("button",{className:"OrderButton",onClick:e.purchased,disabled:!e.purchasable},"ORDER NOW"))},H=(a(56),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),S=(a(57),function(e){return r.a.createElement(m,null,r.a.createElement(H,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))}),T=(a(58),function(e){return r.a.createElement("button",{onClick:e.clicked,className:"Button "+e.btnType},e.children)}),P=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2))),r.a.createElement(T,{clicked:e.continued,btnType:"Success"},"CONTINUE"),r.a.createElement(T,{clicked:e.canceled,btnType:"Danger"},"CANCEL"))},I={salad:100,cheese:150,meat:250,bacon:200},x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:100,purchasable:!1,purchased:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(y.a)({},e.state.ingredients);n[t]=a;var r=I[t],c=e.state.totalPrice+r;e.setState({totalPrice:c,ingredients:n}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t]-1,n=Object(y.a)({},e.state.ingredients);a>=0&&(n[t]=a);var r=I[t],c=e.state.totalPrice-r;e.setState({totalPrice:c,ingredients:n}),e.updatePurchaseState(n)},e.purchaseHandler=function(){e.setState({purchased:!0})},e.purchaseCancelHandler=function(){e.setState({purchased:!1})},e.purchaseContinueHandler=function(){var t=[];for(var a in e.state.ingredients)t.push(encodeURIComponent(a)+"="+encodeURIComponent(e.state.ingredients[a]));t.push("price="+e.state.totalPrice);var n=t.join("&");e.props.history.push({pathname:"/checkout",search:"?"+n})},e}return Object(s.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.values(e).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(y.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(S,{show:this.state.purchased,modalClosed:this.purchaseCancelHandler},r.a.createElement(P,{price:this.state.totalPrice,ingredients:this.state.ingredients,canceled:this.purchaseCancelHandler,continued:this.purchaseContinueHandler})),r.a.createElement(O,{ingredients:this.state.ingredients}),r.a.createElement(w,{disabled:e,ingredientRemoved:this.removeIngredientHandler,ingredientAdded:this.addIngredientHandler,price:this.state.totalPrice,purchased:this.purchaseHandler,purchasable:this.state.purchasable}))}}]),a}(n.Component),B=a(33),F=(a(59),function(e){return r.a.createElement("div",{className:"CheckoutSummary"},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(O,{ingredients:e.ingredients})),r.a.createElement(T,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(T,{btnType:"Danger",clicked:e.checkoutContinued},"CONTINUE"))}),R=a(1),A=(a(60),a(34)),D=a.n(A).a.create({baseURL:"https://react-burger-a70e9.firebaseio.com/"}),L=(a(78),function(e){var t=null;switch(e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:"InputElement"},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:"InputElement"},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{onChange:e.changed,className:"InputElement",value:e.value},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:"InputElement"},e.elementConfig,{value:e.value}))}return r.a.createElement("div",{className:"Input"},r.a.createElement("label",{className:"Label"},e.label),t)}),M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:""},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Address"},value:""},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"easterEgg",displayValue:"EasterEgg"},{value:"endlessRunner",displayValue:"EndlessRunner"},{value:"defect",displayValue:"Defect"}]},value:"easterEgg"},comment:{elementType:"textarea",elementConfig:{type:"text",placeholder:"Comment"},value:""}}},e.orderHandler=function(t){t.preventDefault();var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ingredients,price:e.props.price,orderData:a};D.post("/orders.json",r).then((function(t){return e.props.history.push("/burger")}))},e.inputChangedHandler=function(t,a){var n=Object(y.a)({},e.state.orderForm),r=Object(y.a)({},n[a]);r.value=t.target.value,n[a]=r,e.setState({orderForm:n})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});return r.a.createElement("div",{className:"ContactData"},r.a.createElement("h4",null,"Enter your Contact Data"),r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(L,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),r.a.createElement(T,{btnType:"Success",clicked:this.orderHandler},"ORDER")))}}]),a}(n.Component),U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,totalPrice:0},e.checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(s.a)(a,[{key:"componentWillMount",value:function(){var e,t=new URLSearchParams(this.props.location.search),a={},n=0,r=Object(B.a)(t.entries());try{for(r.s();!(e=r.n()).done;){var c=e.value;"price"===c[0]?n=c[1]:a[c[0]]=+c[1]}}catch(l){r.e(l)}finally{r.f()}this.setState({ingredients:a,totalPrice:n})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(F,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(R.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(M,Object.assign({ingredients:e.state.ingredients},t,{price:e.state.totalPrice}))}}))}}]),a}(n.Component),W=(a(79),function(e){var t=[];for(var a in e.ingredients)t.push({name:a,amount:e.ingredients[a]});var n=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px"},key:e.name},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:"Order"},r.a.createElement("p",null,"Ingredients: ",n),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,Number.parseFloat(e.price).toFixed(2)," HUF")))}),V=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],loading:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;D.get("./orders.json").then((function(t){console.log(t.data);var a=[];for(var n in t.data)a.push(Object(y.a)({},t.data[n],{id:n}));e.setState({loading:!1,orders:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(W,{key:e.id,ingredients:e.ingredients,price:e.price})})))}}]),a}(n.Component),Y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null,r.a.createElement(R.c,null,r.a.createElement(R.a,{path:"/checkout",component:U}),r.a.createElement(R.a,{path:"/orders",component:V}),r.a.createElement(R.a,{path:"/burger",exact:!0,component:x}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.3a23a909.chunk.js.map