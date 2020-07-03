(this["webpackJsonpdeparture-time"]=this["webpackJsonpdeparture-time"]||[]).push([[0],{124:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),o=t(2),i=t.n(o),l=t(9),c=t(70),u=t(3),s=t.n(u),m=t(23),f=t(24),d=t(48);function b(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  padding: 20px;\n\n  span {\n    color: #fff;\n    font-weight: bold;\n    font-size: 18px;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(m.a)(["\n  height: 100%;\n  background: linear-gradient(-45deg, #7159c1, #ab59c1);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  main {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    max-width: 500px;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n\n    section {\n      display: flex;\n  \n      article {\n        display: flex;\n        flex-direction: column;\n        margin: 10px 5px;\n\n        span {\n          color: #fff;\n          font-weight: bold;\n          margin-bottom: 10px;\n        }\n      }\n    }\n\n    .error {\n      display: block;\n      margin-bottom: 10px;\n      span {\n        background-color: #ff0033;\n        color: #fff;\n        padding: 5px;\n        border-radius: 4px;\n        font-size: 12px;\n      }\n    }\n\n    button {\n      background: #3b9eff;\n      margin: 5px 0 0;\n      padding: 0px 10px;\n      height: 28px;\n      font-weight: bold;\n      border-radius: 4px;\n      color: #fff;\n      transition: background 150ms ease-in-out;\n      &:hover {\n        background: ",";\n      }\n      &:active {\n        background: ",";\n      }\n    }\n  }\n"]);return p=function(){return n},n}var h=f.b.div(p(),Object(d.b)(.03,"#3b9eff"),Object(d.a)(.05,"#3b9eff")),g=f.b.div(b());function x(){var n=s()().hour(0).minute(0),e=Object(a.useState)(s()().hour(8).minute(0)),t=Object(l.a)(e,2),o=t[0],i=t[1],u=Object(a.useState)(s()().hour(8).minute(0)),m=Object(l.a)(u,2),f=m[0],d=m[1],b=Object(a.useState)(s()().hour(12).minute(0)),p=Object(l.a)(b,2),x=p[0],j=p[1],O=Object(a.useState)(s()().hour(13).minute(0)),E=Object(l.a)(O,2),y=E[0],v=E[1],S=Object(a.useState)(s()().hour(17).minute(0)),k=Object(l.a)(S,2),H=k[0],w=k[1],T=Object(a.useState)(""),z=Object(l.a)(T,2),C=z[0],F=z[1],I=Object(a.useState)(""),q=Object(l.a)(I,2),M=q[0],A=q[1],B=Object(a.useState)(""),J=Object(l.a)(B,2),N=J[0],L=J[1],R=Object(a.useState)({}),U=Object(l.a)(R,2),V=U[0],D=U[1],G=function(n,e,t){return r.a.createElement("article",null,r.a.createElement("span",null,n),r.a.createElement(c.a,{showSecond:!1,defaultValue:e,onChange:function(n){return t(n)},onOpen:function(){return D({})},inputReadOnly:!0}))};return r.a.createElement(h,null,r.a.createElement("main",null,r.a.createElement("section",null,G("Carga Hor\xe1ria di\xe1ria",o,i)),r.a.createElement("section",null,G("1\xb0 entrada",f,d),G("1\xb0 saida",x,j)),r.a.createElement("div",{className:"error"},V&&V.errorTimeInitial&&r.a.createElement("span",null,"A hora inicial n\xe3o pode ser maior que a final")),r.a.createElement("section",null,G("2\xb0 entrada",y,v),G("2\xb0 saida",H,w)),r.a.createElement("div",{className:"error"},V&&V.errorTimeFinal&&r.a.createElement("span",null,"A hora inicial n\xe3o pode ser maior que a final")),r.a.createElement("button",{onClick:function(){if(function(){if(x<f)D({errorTimeInitial:!0});else{if(!(H<y))return!0;D({errorTimeFinal:!0})}return!1}()){var e=s.a.utc(x.diff(f)),t=s.a.utc(H.diff(y)),a=e.add(t),r=s()(o.diff(a)),i=H.clone().add(r.hours(),"hours");r.hours()<12?L(r.format("HH:mm")):L(n.format("HH:mm")),A(a.format("HH:mm")),F(i.format("HH:mm"))}}},"Calcular"),r.a.createElement(g,null,M&&r.a.createElement("span",null,"Horas trabalhadas: ",M," hrs"),N&&r.a.createElement("span",null,"Tempo que falta: ",N," hrs "),C&&r.a.createElement("span",null,"Melhor hor\xe1rio da \xfaltima sa\xedda: ",C," hrs"))))}function j(){var n=Object(m.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    border: 0;\n    box-sizing: border-box;\n  }\n  *:focus {\n    outline: 0;\n  }\n  \n  html,body, #root {\n    height: 100%;\n  }\n  body {\n    -webkit-font-smoothing: antialiased;\n  }\n  body, input, button {\n    font: 14px 'Lato', -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  }\n  a {\n    text-decoration: none; \n  }\n  button {\n    cursor: pointer;\n    font-size: 16px;\n  }\n  ul {\n    list-style: none;\n  }\n"]);return j=function(){return n},n}var O=Object(f.a)(j());var E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(O,null))};t(123);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},71:function(n,e,t){n.exports=t(124)}},[[71,1,2]]]);
//# sourceMappingURL=main.806c1fad.chunk.js.map