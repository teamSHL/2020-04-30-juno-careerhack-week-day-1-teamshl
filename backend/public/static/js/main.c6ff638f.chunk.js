(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e){e.exports=JSON.parse('{"domain":"dev-sun3mq0i.auth0.com","clientId":"4kvRt5o3FeRYnutfa6mWICnf2ie9AZkg"}')},39:function(e,t,n){e.exports=n(75)},44:function(e,t,n){},65:function(e,t,n){},74:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=74},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),o=n.n(c),u=(n(44),n(6)),l=n(7),m=n(9),i=n(8),s=n(2),h=n.n(s),d=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeUsername=function(e){a.setState({username:e.target.value})},a.onChangeComment=function(e){a.setState({comment:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,comment:a.state.comment};h.a.post("http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com/comments/add",t).then((function(e){return console.log(e.data)})),window.location="/"},a.state={username:"",comment:"",users:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"comment"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",{htmlFor:"username"}," select your username: "),r.a.createElement("select",{name:"username",id:"username",ref:"userInput",required:!0,value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("label",{htmlFor:"comment"},"comment: "),r.a.createElement("textarea",{name:"comment",id:"comment",value:this.state.comment,onChange:this.onChangeComment,rows:"4",cols:"50"}," "),r.a.createElement("button",{type:"submit"},"add comment")))}}]),n}(a.Component),p=n(12),f=function(e){return r.a.createElement("tr",{className:"commentDetails"},r.a.createElement("td",null,e.comment.username,": "),r.a.createElement("td",null,e.comment.comment),r.a.createElement("td",null,r.a.createElement(p.a,{to:"/edit/"+e.comment._id},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteComment(e.comment._id)}},"delete")))},v=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).deleteComment=function(e){h.a.delete("http://localhost:5000/comments/"+e).then((function(e){return console.log(e.data)})),a.setState({comments:a.state.comments.filter((function(t){return t._id!==e}))})},a.state={comments:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com/comments/").then((function(t){e.setState({comments:t.data})})).catch((function(e){console.log(e)}))}},{key:"commentList",value:function(){var e=this;return this.state.comments.map((function(t){return r.a.createElement(f,{comment:t,deleteComment:e.deleteComment,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"viewComments"},r.a.createElement("h2",null,"comments:"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.commentList())))}}]),n}(a.Component),E=n(13),b=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeUsername=function(e){a.setState({username:e.target.value})},a.onChangeComment=function(e){a.setState({comment:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,comment:a.state.comment};h.a.post("http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com/comments/update/"+a.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"},console.log("commentEdit this.props",a.props),a.state={username:"",comment:"",users:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com/comments/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,comment:t.data.comment})})).catch=function(e){console.log(e)},h.a.get("http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"comment"},r.a.createElement("h3",null,"edit comment:"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null," username: "),r.a.createElement("select",{ref:"userInput",required:!0,value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("label",null,"Comment: "),r.a.createElement("input",{type:"textarea",name:"comment",id:"comment",value:this.state.comment,onChange:this.onChangeComment}),r.a.createElement("button",{type:"submit",value:"edit comment"},"edit comment")))}}]),n}(a.Component),g=Object(E.f)(b),O=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={articles:[],id:"",title:"",author:"",contentURL:"",comment:[],userName:"",userComment:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com:5000/articles").then((function(t){console.log(t),t.data.length>0&&e.setState({articles:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"thread"},r.a.createElement("h3",null,"Articles"),r.a.createElement("ol",null,this.state.articles.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("a",{href:e.contentURL},e.title))}))))}}]),n}(a.Component),w=(n(65),n(11)),C=n.n(w),j=n(15),k=n(16),y=n(19),S=n(38),x=function(){return window.history.replaceState({},document.title,window.location.pathname)},N=r.a.createContext(),U=function(){return Object(a.useContext)(N)},R=function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?x:n,o=Object(y.a)(e,["children","onRedirectCallback"]),u=Object(a.useState)(),l=Object(k.a)(u,2),m=l[0],i=l[1],s=Object(a.useState)(),h=Object(k.a)(s,2),d=h[0],p=h[1],f=Object(a.useState)(),v=Object(k.a)(f,2),E=v[0],b=v[1],g=Object(a.useState)(!0),O=Object(k.a)(g,2),w=O[0],U=O[1],R=Object(a.useState)(!1),D=Object(k.a)(R,2),W=D[0],_=D[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(C.a.mark((function e(){var t,n,a,r,u;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)(o);case 2:if(t=e.sent,b(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,c(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,i(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:u=e.sent,p(u);case 19:U(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=function(){var e=Object(j.a)(C.a.mark((function e(){var t,n,a=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},_(!0),e.prev=2,e.next=5,E.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,_(!1),e.finish(10);case 13:return e.next=15,E.getUser();case 15:n=e.sent,p(n),i(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(j.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.next=3,E.handleRedirectCallback();case 3:return e.next=5,E.getUser();case 5:t=e.sent,U(!1),i(!0),p(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(N.Provider,{value:{isAuthenticated:m,user:d,loading:w,popupOpen:W,loginWithPopup:I,handleRedirectCallback:z,getIdTokenClaims:function(){return E.getIdTokenClaims.apply(E,arguments)},loginWithRedirect:function(){return E.loginWithRedirect.apply(E,arguments)},getTokenSilently:function(){return E.getTokenSilently.apply(E,arguments)},getTokenWithPopup:function(){return E.getTokenWithPopup.apply(E,arguments)},logout:function(){return E.logout.apply(E,arguments)}}},t)},D=function(){var e=U(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout;return r.a.createElement("div",{className:"navigation"},r.a.createElement("nav",{className:"wrapper"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/",exact:!0},"SHLCNews")),r.a.createElement("li",null,r.a.createElement("div",{className:"loginButton"},!t&&r.a.createElement("button",{onClick:function(){return n({})}},"log in"),t&&r.a.createElement("button",{onClick:function(){return a()}},"log out"),t&&r.a.createElement("span",null," |",r.a.createElement(p.a,{to:"/profile"}," profile")))))))},W=function(){var e=U(),t=e.loading,n=e.user;return t||!n?r.a.createElement("div",null,"Loading..."):r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"profileDetails"},r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{src:n.picture,alt:"Profile"})),r.a.createElement("h2",null,n.nickname),r.a.createElement("h2",null,n.name)))},_=n(3),I=Object(_.a)(),z=function(e){var t=e.component,n=e.path,c=Object(y.a)(e,["component","path"]),o=U(),u=o.loading,l=o.isAuthenticated,m=o.loginWithRedirect;Object(a.useEffect)((function(){u||l||function(){var e=Object(j.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({appState:{targetUrl:window.location.pathname}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[u,l,m,n]);return r.a.createElement(E.a,Object.assign({path:n,render:function(e){return!0===l?r.a.createElement(t,e):null}},c))},A=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeUsername=function(e){a.setState({username:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username};console.log(t),h.a.post("http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com/users/add",t).then((function(e){return console.log(e.data)})),a.setState({username:""}),window.location="/"},a.state={username:""},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"addUser"},r.a.createElement("h3",null,"enter username:"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"username: "),r.a.createElement("input",{type:"text",value:this.state.username,onChange:this.onChangeUsername}),r.a.createElement("input",{type:"submit",value:"create user"})))}}]),n}(a.Component),L=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(E.b,{basename:"/",history:I},r.a.createElement("div",{className:"App"},r.a.createElement(D,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0}),r.a.createElement(z,{path:"/profile",component:W})),r.a.createElement(E.a,{path:"/",exact:!0,render:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(A,null),r.a.createElement(d,null),r.a.createElement(v,null))}}),r.a.createElement(E.a,{path:"/edit/:id",component:g})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(24);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,{domain:T.domain,client_id:T.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){I.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(L,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.c6ff638f.chunk.js.map