(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e){e.exports=JSON.parse('{"domain":"dev-sun3mq0i.auth0.com","clientId":"4kvRt5o3FeRYnutfa6mWICnf2ie9AZkg"}')},39:function(e,t,n){e.exports=n(75)},44:function(e,t,n){},65:function(e,t,n){},74:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=74},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),o=n.n(c),l=(n(44),n(3)),u=n(4),i=n(6),m=n(5),s=n(2),h=n.n(s),d=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeUsername=function(e){a.setState({username:e.target.value})},a.onChangeComment=function(e){a.setState({comment:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,comment:a.state.comment};h.a.post("http://localhost:5000/comments/add",t).then((function(e){return console.log(e.data)})),window.location="/"},a.state={username:"",comment:"",users:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"comment"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",{htmlFor:"username"}," select your username: "),r.a.createElement("select",{name:"username",id:"username",ref:"userInput",required:!0,value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("label",{htmlFor:"comment"},"comment: "),r.a.createElement("textarea",{name:"comment",id:"comment",value:this.state.comment,onChange:this.onChangeComment,rows:"4",cols:"50"}," "),r.a.createElement("button",{type:"submit"},"add comment")))}}]),n}(a.Component),p=n(10),f=function(e){return r.a.createElement("tr",{className:"commentDetails"},r.a.createElement("td",null,e.comment.username,": "),r.a.createElement("td",null,e.comment.comment),r.a.createElement("td",null,r.a.createElement(p.a,{to:"/edit/"+e.comment._id},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteComment(e.comment._id)}},"delete")))},v=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).deleteComment=function(e){h.a.delete("http://localhost:5000/comments/"+e).then((function(e){return console.log(e.data)})),a.setState({comments:a.state.comments.filter((function(t){return t._id!==e}))})},a.state={comments:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:5000/comments/").then((function(t){e.setState({comments:t.data})})).catch((function(e){console.log(e)}))}},{key:"commentList",value:function(){var e=this;return this.state.comments.map((function(t){return r.a.createElement(f,{comment:t,deleteComment:e.deleteComment,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"viewComments"},r.a.createElement("h2",null,"comments:"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.commentList())))}}]),n}(a.Component),b=n(13),E=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeUsername=function(e){a.setState({username:e.target.value})},a.onChangeComment=function(e){a.setState({comment:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,comment:a.state.comment};h.a.post("http://localhost:5000/comments/update/"+a.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"},console.log("commentEdit this.props",a.props),a.state={username:"",comment:"",users:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:5000/comments/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,comment:t.data.comment})})).catch=function(e){console.log(e)},h.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"comment"},r.a.createElement("h3",null,"edit comment:"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null," username: "),r.a.createElement("select",{ref:"userInput",required:!0,value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("label",null,"Comment: "),r.a.createElement("input",{type:"textarea",name:"comment",id:"comment",value:this.state.comment,onChange:this.onChangeComment}),r.a.createElement("button",{type:"submit",value:"edit comment"},"edit comment")))}}]),n}(a.Component),g=Object(b.f)(E),C=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onChangeTitle=function(t){e.setState({title:t.target.value})},e.onChangeUrl=function(t){e.setState({contentURL:t.target.value})},e.onSubmit=function(t){t.preventDefault();var n={title:e.state.title,author:e.state.author,contentURL:e.state.contentURL};h.a.post("http://localhost:5000/articles/add",n).then((function(e){return console.log(e.data)})),window.location="/"},e.state={title:"",author:"",contentURL:""},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"submit"},r.a.createElement("h2",null,"Submit Articles:"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"title"},r.a.createElement("label",{htmlFor:"title"},"title: "),r.a.createElement("input",{type:"text",name:"title",id:"title",value:this.state.title,onChange:this.onChangeTitle})),r.a.createElement("div",{className:"url"},r.a.createElement("label",{htmlFor:"url"},"url: "),r.a.createElement("input",{type:"url",name:"url",id:"url",value:this.state.url,onChange:this.onChangeUrl})),r.a.createElement("div",{className:"submitButton"},r.a.createElement("input",{type:"submit",value:"submit"}))))}}]),n}(a.Component),O=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={articles:[],id:"",title:"",author:"",contentURL:"",comment:[],userName:"",userComment:""},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com:5000/articles").then((function(t){console.log(t),t.data.length>0&&e.setState({articles:t.data,comment:[t.data.map((function(e){return e.comment}))],userName:t.data.map((function(e){return e.comment.userName})),entryDate:t.data.map((function(e){return e.comment.date})),userComment:t.data.map((function(e){return e.comment.comment}))})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"thread"},r.a.createElement("h3",null,"Articles"),r.a.createElement("ol",null,this.state.articles.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("a",{href:e.contentURL},e.title))}))))}}]),n}(a.Component),j=(n(65),n(12)),k=n.n(j),w=n(15),y=n(16),S=n(19),x=n(38),N=function(){return window.history.replaceState({},document.title,window.location.pathname)},U=r.a.createContext(),R=function(){return Object(a.useContext)(U)},D=function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?N:n,o=Object(S.a)(e,["children","onRedirectCallback"]),l=Object(a.useState)(),u=Object(y.a)(l,2),i=u[0],m=u[1],s=Object(a.useState)(),h=Object(y.a)(s,2),d=h[0],p=h[1],f=Object(a.useState)(),v=Object(y.a)(f,2),b=v[0],E=v[1],g=Object(a.useState)(!0),C=Object(y.a)(g,2),O=C[0],j=C[1],R=Object(a.useState)(!1),D=Object(y.a)(R,2),L=D[0],W=D[1];Object(a.useEffect)((function(){(function(){var e=Object(w.a)(k.a.mark((function e(){var t,n,a,r,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)(o);case 2:if(t=e.sent,E(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,c(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,m(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:l=e.sent,p(l);case 19:j(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=function(){var e=Object(w.a)(k.a.mark((function e(){var t,n,a=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},W(!0),e.prev=2,e.next=5,b.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,W(!1),e.finish(10);case 13:return e.next=15,b.getUser();case 15:n=e.sent,p(n),m(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,b.handleRedirectCallback();case 3:return e.next=5,b.getUser();case 5:t=e.sent,j(!1),m(!0),p(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(U.Provider,{value:{isAuthenticated:i,user:d,loading:O,popupOpen:L,loginWithPopup:T,handleRedirectCallback:_,getIdTokenClaims:function(){return b.getIdTokenClaims.apply(b,arguments)},loginWithRedirect:function(){return b.loginWithRedirect.apply(b,arguments)},getTokenSilently:function(){return b.getTokenSilently.apply(b,arguments)},getTokenWithPopup:function(){return b.getTokenWithPopup.apply(b,arguments)},logout:function(){return b.logout.apply(b,arguments)}}},t)},L=function(){var e=R(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout;return r.a.createElement("div",{className:"navigation"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/",exact:!0},"SHLCNews")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/submit"},"submit")),r.a.createElement("li",null,r.a.createElement("div",{className:"loginButton"},!t&&r.a.createElement("button",{onClick:function(){return n({})}},"log in"),t&&r.a.createElement("button",{onClick:function(){return a()}},"log out"),t&&r.a.createElement("span",null," |",r.a.createElement(p.a,{to:"/profile"}," profile")))))))},W=function(){var e=R(),t=e.loading,n=e.user;return t||!n?r.a.createElement("div",null,"Loading..."):r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"profileDetails"},r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{src:n.picture,alt:"Profile"})),r.a.createElement("h2",null,n.nickname),r.a.createElement("h2",null,n.name)))},T=n(7),_=Object(T.a)(),A=function(e){var t=e.component,n=e.path,c=Object(S.a)(e,["component","path"]),o=R(),l=o.loading,u=o.isAuthenticated,i=o.loginWithRedirect;Object(a.useEffect)((function(){l||u||function(){var e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({appState:{targetUrl:window.location.pathname}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l,u,i,n]);return r.a.createElement(b.a,Object.assign({path:n,render:function(e){return!0===u?r.a.createElement(t,e):null}},c))},I=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeUsername=function(e){a.setState({username:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username};console.log(t),h.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})),a.setState({username:""}),window.location="/"},a.state={username:""},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"addUser"},r.a.createElement("h3",null,"enter username:"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"username: "),r.a.createElement("input",{type:"text",value:this.state.username,onChange:this.onChangeUsername}),r.a.createElement("input",{type:"submit",value:"create user"})))}}]),n}(a.Component),F=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(b.b,{basename:"/",history:_},r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0}),r.a.createElement(A,{path:"/profile",component:W})),r.a.createElement(b.a,{path:"/submit",render:function(){return r.a.createElement(C,null)}}),r.a.createElement(b.a,{path:"/",exact:!0,render:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(I,null),r.a.createElement(d,null),r.a.createElement(v,null))}}),r.a.createElement(b.a,{path:"/edit/:id",component:g})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(24);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,{domain:M.domain,client_id:M.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){_.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(F,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.0437eba6.chunk.js.map