(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,function(t,e,a){t.exports=a(15)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),o=a(1),s=a(2),u=a(3),i=a(4),f=(a(12),a(13),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={currentKeyValue:""},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"button"},c.a.createElement("div",{className:"btnText",onClick:function(){t.props.onChange(t.props.value)}},this.props.value))}}]),a}(n.Component)),m=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={RegButtons:["C","()","%","/","7","8","9","x","4","5","6","-","1","2","3","+","00","0",".","="],ScientificButtons:["SIN","COS","TAN","COT","COSEC","SEC","&radic"],formula:"",calculation:""},t.clickHandler=function(e){var a=[],n=0;switch(e){case"+":case"-":case"x":case"/":t.setState((function(t){return{formula:t.formula.concat(e)}})),t.setState({calculation:""});break;case"=":if(t.state.formula.includes("+")&&(console.log("addition"),a=t.state.formula.split("+"),n=0,a.forEach((function(t){n+=parseInt(t)}))),t.state.formula.includes("-")){console.log("subtraction"),a=t.state.formula.split("-"),n=a[0];for(e=0;e<a.length-1;e++)n-=parseInt(a[e+1])}if(t.state.formula.includes("x")&&(console.log("multiply"),a=t.state.formula.split("x"),n=1,a.forEach((function(t){n*=parseInt(t)}))),t.state.formula.includes("/")){console.log("division"),a=t.state.formula.split("/"),n=a[0];for(e=0;e<a.length-1;e++)n/=parseInt(a[e+1])}console.log(n),t.setState({calculation:n.toString()});break;case"C":t.setState({calculation:"",formula:"",result:0});break;default:t.setState((function(t){return{formula:t.formula.concat(e),calculation:t.calculation.concat(e)}}))}},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"display"},c.a.createElement("div",{className:"userInput formula",type:"text"},this.state.formula),c.a.createElement("div",null),c.a.createElement("div",{className:"userInput",type:"text"},this.state.calculation)),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"buttons"},this.state.RegButtons.map((function(e,a){return c.a.createElement(f,{value:e,key:a,onChange:function(e){t.clickHandler(e)}})}))))}}]),a}(n.Component),p=(a(14),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",null,"CALCULATOR"),c.a.createElement("div",{className:"body"},c.a.createElement(m,null)))}}]),a}(n.Component));r.a.render(c.a.createElement(p,null),document.querySelector("#root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.1cf879b9.chunk.js.map