(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,a,t){e.exports=t(194)},144:function(e,a,t){},191:function(e,a){},194:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),o=t(12),i=t(121),s=t(39),u=t(126),m=t(253),d=(t(144),t(15)),p=t.n(d),v=t(23),f="ADD_MESSAGE",E=t(24),b=t.n(E),h=function(e){return{type:"NEW_MESSAGE",payload:e}},g=function(e){return{type:"ADD_CHANNEL",payload:e}},y=function(e){return{type:"ADD_SERVER",payload:e}},O=function(e){return{type:"CHANGE_SERVER",payload:e}},j=function(e){return{type:"CHANGE_channel",payload:e}},N=function(e){return function(){var a=Object(v.a)(p.a.mark(function a(t){var n,r;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n="".concat("https://simple-chat-apix.herokuapp.com","/user/data?userId=").concat(e),a.next=3,b.a.get(n);case 3:r=a.sent,t({type:"GET_INITIAL_DATA",payload:r.data});case 5:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},C=function(e){return{type:"SIGN_IN",payload:e}},x=t(27),S=Object(x.b)(),k=t(11),I=t(255),w=t(231),A=t(232),D=t(225),_=t(258),T=t(229);function M(e){var a=Object(o.c)(function(e){return e.chat}),t=Object.keys(a.servers),n=Object(o.b)(),c=e.setModalVisible,l=e.setModalType;return r.a.createElement("div",{className:"servers-container"},r.a.createElement(D.a,null,t.map(function(e){return r.a.createElement(_.a,{title:e.split("-")[0],key:e,placement:"right",className:"tooltip"},r.a.createElement(T.a,{className:"server-icon",onClick:function(){return function(e){n(O(e))}(e)}},r.a.createElement(w.a,null)))}),r.a.createElement(_.a,{title:"Create Server",key:"create-server",placement:"right",className:"tooltip"},r.a.createElement(T.a,{className:"server-icon",onClick:function(){return l("server-create-join"),void c(!0)}},r.a.createElement(A.a,null)))))}var R=t(233),P=t(235),V=t(238),G=t(195),L=t(234),J=t(68),K=t(236),B=t(237),H=t(239),W=t(127),U=t(240),F="https://simple-chat-apix.herokuapp.com";function X(e){var a=Object(o.c)(function(e){return e.chat}),t=Object.keys(a.servers[a.activeServer]),c=a.activeServer,l=Object(o.b)(),i=Object(o.c)(function(e){return e.user}),s=e.setDrawerVisible,u=e.setModalVisible,m=e.setModalType,d=Object(n.useState)(null),f=Object(k.a)(d,2),E=f[0],h=f[1],g=Object(n.useState)(null),y=Object(k.a)(g,2),O=y[0],N=y[1],C=Object(n.useState)(!1),x=Object(k.a)(C,2),S=x[0],I=x[1];Object(n.useEffect)(function(){function e(){return(e=Object(v.a)(p.a.mark(function e(){var a,t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.split("-")[1],e.next=3,b.a.get("".concat(F,"/server/admin?serverId=").concat(a,"&userId=").concat(i.userId));case 3:t=e.sent,I(t.data);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[c]);var w=function(e){m(e),u(!0)},A=function(e,a){"server"===a?h(e.currentTarget):"channel"===a&&N(e.currentTarget)},M=function(){h(null),N(null)};return r.a.createElement("div",{className:"channels-container"},r.a.createElement(D.a,{className:"channel-list"},r.a.createElement(G.a,{className:"title-container"},c.split("-")[0],S?r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{title:"Server Settings",key:"server-settings",placement:"right",className:"tooltip"},r.a.createElement(T.a,{onClick:function(e){return A(e,"server")}}," ",r.a.createElement(R.a,null)," "))):null),t.map(function(e,a){return r.a.createElement(L.a,{direction:"right",in:!0,timeout:200*(a+1),key:e+c},r.a.createElement(G.a,{onClick:function(a){return function(e){l(j(e)),"undefined"!==typeof s&&s(!1)}(e)},button:!0,className:"channel-item"},r.a.createElement(J.a,{variant:"body1"},r.a.createElement("i",{className:"channel-hashtag"},"#"),e.split("-")[0].toLowerCase()),S?r.a.createElement(_.a,{title:"Server Settings",key:"server-settings",placement:"right",className:"tooltip"},r.a.createElement(T.a,{onClick:function(e){return A(e,"channel")}}," ",r.a.createElement(P.a,{className:"channel-settings"})," ")):null))})),r.a.createElement("div",{className:"user-options"},r.a.createElement(G.a,{className:"user-info"},r.a.createElement(K.a,null,r.a.createElement(B.a,null,r.a.createElement(V.a,null))),r.a.createElement(H.a,{primary:i.userName}))),r.a.createElement(W.a,{id:"server-settings-menu",anchorEl:E,open:Boolean(E),onClick:M,onClose:M},r.a.createElement(U.a,null," Server Id - ",c.split("-")[1]," "),r.a.createElement(U.a,{onClick:function(){return w("server-rename")}}," Change Server Name "),r.a.createElement(U.a,{onClick:function(){return w("channel-create")}}," Add Channel ")),r.a.createElement(W.a,{id:"channel-settings-menu",anchorEl:O,open:Boolean(O),onClick:M,onClose:M},r.a.createElement(U.a,{onClick:function(){return w("channel-rename")}}," Change Channel Name "),r.a.createElement(U.a,{onClick:function(){return w("channel-delete")}}," Delete Channel ")))}var z=t(241),Y=t(242),q=t(243),Q=t(244),Z=t(245),$=t(247),ee=t(254),ae=t(129),te=t(246),ne=t(248);function re(e){var a=Object(o.c)(function(e){return e.user}).userId,t=Object(o.c)(function(e){return e.chat}),c=t.activeServer,l=t.activeChannel,i=Object(o.b)(),s=e.handleModalSuccess,u=e.modalType,m="https://simple-chat-apix.herokuapp.com",d=Object(n.useState)(!0),f=Object(k.a)(d,2),E=f[0],h=f[1],O=Object(n.useState)("left"),j=Object(k.a)(O,2),N=j[0],C=j[1],x=Object(n.useState)(!1),S=Object(k.a)(x,2),I=S[0],w=S[1],A=Object(n.useState)("left"),D=Object(k.a)(A,2),_=D[0],T=D[1],M=Object(n.useState)(!1),R=Object(k.a)(M,2),P=R[0],V=R[1],G=Object(n.useState)("left"),K=Object(k.a)(G,2),B=K[0],H=K[1],W=Object(n.useState)(""),U=Object(k.a)(W,2),F=U[0],X=U[1],re=Object(n.useState)(""),ce=Object(k.a)(re,2),le=ce[0],oe=ce[1],ie=Object(n.useState)(""),se=Object(k.a)(ie,2),ue=se[0],me=se[1],de=function(){var e=Object(v.a)(p.a.mark(function e(a,t){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(m,"/server/create?serverName=").concat(a,"&userId=").concat(t));case 3:n=e.sent,i(y(n.data)),r="Server ".concat(n.data.server.split("-")[0]," with ID ").concat(n.data.server.split("-")[1]," created"),s(r,!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s(e.t0.response.data,!1);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(a,t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(v.a)(p.a.mark(function e(a,t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(m,"/server/join?serverId=").concat(a,"&userId=").concat(t));case 3:n=e.sent,s(n.data,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(e.t0.response.data,!1);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(v.a)(p.a.mark(function e(t,n){var r,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(m,"/channel/create?channelName=").concat(t,"&server=").concat(n,"&userId=").concat(a));case 3:r=e.sent,i(g(r.data)),c="Server ".concat(r.data.channel.split("-")[0]," with ID ").concat(r.data.channel.split("-"[1])," created"),s(c,!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s(e.t0.response.data,!1);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(a,t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(v.a)(p.a.mark(function e(t,n){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(m,"/server/rename?serverName=").concat(t,"&serverId=").concat(n,"&userId=").concat(a));case 3:r=e.sent,s(r.data,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(e.t0.response.data,!1);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(v.a)(p.a.mark(function e(t,n){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(m,"/channel/rename?channelName=").concat(t,"&channelId=").concat(n,"&serverId=").concat(c.split("-")[1],"&userId=").concat(a));case 3:r=e.sent,s(r.data,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(e.t0.response.data,!1);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}(),be=function(){var e=Object(v.a)(p.a.mark(function e(t,n){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("".concat(m,"/channel/delete?channelId=").concat(n,"&serverId=").concat(c.split("-")[1],"&userId=").concat(a));case 3:r=e.sent,s(r.data,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(e.t0.response.data,!1);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}(),he=function(e,a){"Enter"===e.key&&a()};return"server-create-join"===u?r.a.createElement(ae.a,{className:"container-prompt"},r.a.createElement(L.a,{direction:N,in:E,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(z.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"h5",color:"primary",align:"center"},"Another server? Wow you're popular!")),r.a.createElement(z.a,{item:!0,sm:6,xs:12},r.a.createElement(Y.a,{className:"grid-card"},r.a.createElement(q.a,{onClick:function(){return C("right"),H("left"),w(!0),void h(!1)}},r.a.createElement(Q.a,null,r.a.createElement(J.a,{variant:"h5",color:"primary",gutterBottom:!0},"Create"),r.a.createElement(J.a,{variant:"body1",paragraph:!0},"Create a server and invite all your buddies."),r.a.createElement(Z.a,null,r.a.createElement(te.a,{className:"modal-card-icon"})),r.a.createElement($.a,{variant:"contained",color:"primary",className:"modal-button"},"Join a server"))))),r.a.createElement(z.a,{item:!0,sm:6,xs:12},r.a.createElement(Y.a,{className:"grid-card"},r.a.createElement(q.a,{onClick:function(){return C("right"),T("left"),V(!0),void h(!1)}},r.a.createElement(Q.a,null,r.a.createElement(J.a,{variant:"h5",color:"secondary",gutterBottom:!0},"Join"),r.a.createElement(J.a,{variant:"body1",paragraph:!0},"Join a friends server and pwn some noobs!"),r.a.createElement(Z.a,null,r.a.createElement(ne.a,{className:"modal-card-icon"})),r.a.createElement($.a,{variant:"contained",color:"secondary",className:"modal-button"},"Join a server"))))))),r.a.createElement(L.a,{direction:_,in:I,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(z.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"h5",color:"primary",align:"center"},"Create a Server!")),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(J.a,{variant:"body1",paragraph:!0}," Enter a Server Name to create a server and get access to unlimited chat channels! "),r.a.createElement(ee.a,{id:"create-server-field",label:"Server Name",value:F,onChange:function(e){return X(e.target.value)},onKeyPress:function(e){return he(e,function(){return de(F,a)})},margin:"dense",variant:"outlined",autoComplete:"off"})),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement($.a,{className:"modal-button",variant:"contained",color:"primary",onClick:function(){return de(F,a)}},"Create Server")))),r.a.createElement(L.a,{direction:B,in:P,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(z.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"h5",color:"primary",align:"center"},"Join a Server!")),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(J.a,{variant:"body1",paragraph:!0}," Enter a the Server Id provided by your friend and start chatting right now!  "),r.a.createElement(ee.a,{id:"join-server-field",label:"Server Id",value:le,onChange:function(e){return oe(e.target.value)},onKeyPress:function(e){return he(e,function(){return pe(le,a)})},margin:"dense",variant:"outlined",autoComplete:"off"})),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement($.a,{className:"modal-button",variant:"contained",color:"primary",onClick:function(){return pe(le,a)}},"Join Server"))))):"channel-create"===u?r.a.createElement(ae.a,{className:"container-prompt"},r.a.createElement(L.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(z.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"h5",color:"primary",align:"center"},"Create a Channel!")),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(J.a,{variant:"body1",paragraph:!0}," Enter a Channel Name for your new channel and start chatting right now!  "),r.a.createElement(ee.a,{id:"create-channel-field",label:"Channel Name",value:ue,onChange:function(e){return me(e.target.value)},onKeyPress:function(e){return he(e,function(){return ve(ue,c)})},margin:"dense",variant:"outlined",autoComplete:"off"})),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement($.a,{className:"modal-button",variant:"contained",color:"primary",onClick:function(){return ve(ue,c)}},"Create Channel"))))):"server-rename"===u?r.a.createElement(ae.a,{className:"container-prompt"},r.a.createElement(L.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(z.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"h5",color:"primary",align:"center"},"Rename Server")),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(J.a,{variant:"body1",paragraph:!0}," Enter a new Server Name for Server - ",c.split("-")[0]," "),r.a.createElement(ee.a,{id:"create-channel-field",label:"Channel Name",value:F,onChange:function(e){return X(e.target.value)},onKeyPress:function(e){return he(e,function(){return fe(F,c.split("-")[1])})},margin:"dense",variant:"outlined",autoComplete:"off"})),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement($.a,{className:"modal-button",variant:"contained",color:"primary",onClick:function(){return fe(F,c.split("-")[1])}},"Rename Server"))))):"channel-rename"===u?r.a.createElement(ae.a,{className:"container-prompt"},r.a.createElement(L.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(z.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"h5",color:"primary",align:"center"},"Rename Chanel")),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(J.a,{variant:"body1",paragraph:!0}," Enter a new Channel Name for Channel - ",l.split("-")[0]," "),r.a.createElement(ee.a,{id:"create-channel-field",label:"Channel Name",value:ue,onChange:function(e){return me(e.target.value)},onKeyPress:function(e){return he(e,function(){return Ee(ue,l.split("-")[1])})},margin:"dense",variant:"outlined",autoComplete:"off"})),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement($.a,{className:"modal-button",variant:"contained",color:"primary",onClick:function(){return Ee(ue,l.split("-")[1])}},"Rename Channel"))))):"channel-delete"===u?r.a.createElement(ae.a,{className:"container-prompt"},r.a.createElement(L.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(z.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"h5",color:"primary",align:"center"},"Rename Server")),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(J.a,{variant:"body1",paragraph:!0}," Are you sure you want to delete - ",l.split("-")[0]," ")),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement($.a,{className:"modal-button",variant:"contained",color:"primary",style:{backgroundColor:"green",marginRight:"8px"},onClick:function(){return be(ue,l.split("-")[1])}},"Yes"),r.a.createElement($.a,{className:"modal-button",variant:"contained",color:"primary",style:{backgroundColor:"red",marginLeft:"8px"},onClick:function(){return s("Not deleting channel",!1)}},"No"))))):void 0}var ce=t(257);function le(e){var a=e.content,t=e.visible,n=e.setVisible;return r.a.createElement(ce.a,{open:t,message:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},onEntered:function(){setTimeout(function(){n(!1)},2500)}})}function oe(e){var a=Object(o.c)(function(e){return e.user}),t=Object(o.b)(),c=e.setDrawerVisible,l=Object(n.useState)(!1),i=Object(k.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(null),d=Object(k.a)(m,2),p=d[0],v=d[1],f=Object(n.useState)(""),E=Object(k.a)(f,2),b=E[0],h=E[1],g=Object(n.useState)(!1),y=Object(k.a)(g,2),O=y[0],j=y[1];return r.a.createElement("div",{className:"sidebar-container"},r.a.createElement(M,{setModalVisible:u,setModalType:v}),r.a.createElement(X,{setDrawerVisible:c,setModalVisible:u,setModalType:v}),r.a.createElement(I.a,{open:s,"aria-labelledby":"server create modal","aria-describedby":"create a server",className:"modal-wrapper",onClose:function(){return u(!1)}},r.a.createElement(re,{handleModalSuccess:function(e,n){null!==e&&(u(!1),j(!0),h(e),n&&t(N(a.userId)))},modalType:p})),r.a.createElement(le,{visible:O,setVisible:j,content:b}))}var ie=t(250);function se(){var e,a=Object(o.c)(function(e){return e.chat}),t=a.activeServer,c=a.activeChannel;return Object(n.useEffect)(function(){e.scrollIntoView()}),r.a.createElement("div",{className:"messages-container"},r.a.createElement(D.a,null,a.servers[t][c].map(function(e,a){return null!==e.msg?r.a.createElement(ie.a,{in:!0,timeout:500},r.a.createElement(G.a,{className:"message",key:a},r.a.createElement(K.a,null,r.a.createElement(B.a,null,r.a.createElement("img",{src:"/Simple-Chat/user.png",alt:"user icon",height:"48"}))),r.a.createElement(H.a,{primary:e.from,secondary:e.msg,className:"message-text"}))):null})),r.a.createElement("div",{ref:function(a){return e=a}}))}var ue=t(249),me=(t(162),t(125)),de=t(119),pe=t.n(de);function ve(e){var a=Object(o.c)(function(e){return e.chat}),t=a.activeServer,c=a.activeChannel,l=Object(o.c)(function(e){return e.user}).userName,i=Object(o.b)(),s=Object(n.useState)(""),u=Object(k.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(!1),v=Object(k.a)(p,2),f=v[0],E=v[1];function b(e){"Enter"!==e.key||e.shiftKey||(i(h({server:t,channel:c,from:l,msg:m})),d(""))}return window.onclick=function(e){String(e.target.className).includes("send-message-emoji-menu")&&E(!1)},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"send-message-border"}),r.a.createElement("div",{className:"send-message-container"},r.a.createElement(ue.a,{"aria-label":"empty textarea",placeholder:"Message  #".concat(c.split("-")[0]),className:"message-text-area",value:m,onChange:function(e){return function(e){"\n"!==e.target.value&&d(e.target.value)}(e)},onKeyPress:function(e){return b(e)}}),r.a.createElement(pe.a,{className:"send-message-emoji-button",onClick:function(){return E(!f)}})),r.a.createElement("div",{className:f?"send-message-emoji-menu show":"send-message-emoji-menu hide"},r.a.createElement("div",{className:"emoji-wrapper"},r.a.createElement(me.a,{set:"emojione",onSelect:function(e){return function(e){d(m+e.native),E(!1)}(e)}}))))}var fe=t(251),Ee=t(252),be=t(120),he=t.n(be),ge=t(256),ye=t(64);function Oe(e){var a=Object(o.c)(function(e){return e.chat}),t=Object.keys(a.servers),c=Object.keys(a.servers[a.activeServer]),l=a.activeChannel,i=Object(n.useState)(!1),s=Object(k.a)(i,2),u=s[0],m=s[1];return r.a.createElement(fe.a,{position:"static"},r.a.createElement(Ee.a,{className:"navbar"},r.a.createElement(T.a,{edge:"start",color:"inherit","aria-label":"menu",className:"menu-burger-button",onClick:function(){return m(!0)}},r.a.createElement(he.a,null)),r.a.createElement(ge.a,{anchor:"left",open:u,onClose:function(){return m(!1)},onOpen:function(){return null}},r.a.createElement(oe,{channels:c,servers:t,setDrawerVisible:m})),r.a.createElement(J.a,{variant:"h6"}," ",r.a.createElement("i",{className:"channel-hashtag"},"#"),l.split("-")[0].toLowerCase()," "),r.a.createElement(ye.a,null,r.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))))}function je(){var e=Object(o.c)(function(e){return e.user}),a=Object(o.b)();return Object(n.useEffect)(function(){e.isSignedIn?a(N(e.userId)):S.push("/")},[a,e.isSignedIn,e.userId]),r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"sidebar-grid"},r.a.createElement(oe,null)),r.a.createElement("div",{className:"messages-grid"},r.a.createElement(Oe,null),r.a.createElement(se,null)),r.a.createElement("div",{className:"send-messages-grid"},r.a.createElement(ve,null)))}function Ne(){var e="https://simple-chat-apix.herokuapp.com",a=Object(o.b)(),t=Object(n.useState)(!0),c=Object(k.a)(t,2),l=c[0],i=c[1],s=Object(n.useState)("left"),u=Object(k.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(!1),E=Object(k.a)(f,2),h=E[0],g=E[1],y=Object(n.useState)(!1),O=Object(k.a)(y,2),j=O[0],N=O[1],x=Object(n.useState)(""),I=Object(k.a)(x,2),w=I[0],A=I[1],D=Object(n.useState)(!1),_=Object(k.a)(D,2),T=_[0],M=_[1],R=Object(n.useState)(!1),P=Object(k.a)(R,2),G=P[0],K=P[1],B=Object(n.useState)(""),H=Object(k.a)(B,2),W=H[0],U=H[1],F=Object(n.useState)(!1),X=Object(k.a)(F,2),te=X[0],re=X[1],ce=Object(n.useState)(!1),le=Object(k.a)(ce,2),oe=le[0],ie=le[1],se=function(e,a){"Enter"===e.key&&a()},ue=function(e,a,t){var n=!1;""===e?(M(!0),K("Name cannot be empty"),n=!0):M(!1),a.length<6?(re(!0),ie("Passwords must be 6 characters"),n=!0):re(!1),n||t()},me=function(){var t=Object(v.a)(p.a.mark(function t(n,r){var c,l;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.post("".concat(e,"/user/create?userName=").concat(n,"&userPass=").concat(r));case 3:c=t.sent,localStorage.setItem("user",JSON.stringify(c.data)),a(C(c.data)),S.push("/dashboard"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),(l=t.t0.response.data)&&(M(!0),K(l));case 13:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e,a){return t.apply(this,arguments)}}(),de=function(){var t=Object(v.a)(p.a.mark(function t(n,r){var c,l;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("".concat(e,"/user/login?userName=").concat(n,"&userPass=").concat(r));case 3:c=t.sent,localStorage.setItem("user",JSON.stringify(c.data)),a(C(c.data)),S.push("/dashboard"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),(l=t.t0.response.data)&&(M(!0),K(l),re(!0),ie(l));case 13:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement(ae.a,{className:"container-prompt"},r.a.createElement(L.a,{direction:m,in:l,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(z.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(z.a,{item:!0,sm:12,xs:12},r.a.createElement(J.a,{variant:"h5",color:"primary",align:"center"},"Create an account, or sign in!")),r.a.createElement(z.a,{item:!0,sm:6,xs:12},r.a.createElement(Y.a,{className:"grid-card"},r.a.createElement(q.a,{onClick:function(){return d("right"),g(!0),void i(!1)}},r.a.createElement(Q.a,null,r.a.createElement(J.a,{variant:"h5",color:"primary",gutterBottom:!0},"Create"),r.a.createElement(J.a,{variant:"body1",paragraph:!0},"Create a new account."),r.a.createElement(Z.a,null,r.a.createElement(ne.a,{className:"modal-card-icon"})),r.a.createElement($.a,{variant:"contained",color:"primary"},"Create"))))),r.a.createElement(z.a,{item:!0,sm:6,xs:12},r.a.createElement(Y.a,{className:"grid-card"},r.a.createElement(q.a,{onClick:function(){return d("right"),N(!0),void i(!1)}},r.a.createElement(Q.a,null,r.a.createElement(J.a,{variant:"h5",color:"secondary",gutterBottom:!0},"Login"),r.a.createElement(J.a,{variant:"body1",paragraph:!0},"Sign in to an existing account."),r.a.createElement(Z.a,null,r.a.createElement(V.a,{className:"modal-card-icon"})),r.a.createElement($.a,{variant:"contained",color:"secondary"},"Login "))))))),r.a.createElement(L.a,{direction:"left",in:h,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(z.a,{container:!0,spacing:1,justify:"center",alignItems:"center"},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"h5",color:"primary",align:"center"},"Create Account")),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(ee.a,{id:"username",label:"Username",values:w,error:T,helperText:G,onChange:function(e){return A(e.target.value)},margin:"dense",autoComplete:"off",variant:"outlined",onKeyPress:function(e){return se(e,function(){return ue(w,W,function(){return me(w,W)})})}})),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(ee.a,{id:"password",label:"Password",type:"password",values:W,error:te,helperText:oe,onChange:function(e){return U(e.target.value)},margin:"dense",autoComplete:"off",variant:"outlined",onKeyPress:function(e){return se(e,function(){return ue(w,W,function(){return me(w,W)})})}})),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement($.a,{variant:"contained",color:"primary",onClick:function(){return ue(w,W,function(){return me(w,W)})}},"Create")))),r.a.createElement(L.a,{direction:"left",in:j,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(z.a,{container:!0,spacing:2,justify:"center",alignItems:"center"},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"h5",color:"primary",align:"center"},"Login Account")),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(ee.a,{id:"username",label:"Username",values:w,error:T,helperText:G,onChange:function(e){return A(e.target.value)},margin:"dense",autoComplete:"off",variant:"outlined",onKeyPress:function(e){return se(e,function(){return ue(w,W,function(){return de(w,W)})})}})),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(ee.a,{id:"password",label:"Password",type:"password",values:W,error:te,helperText:oe,onChange:function(e){return U(e.target.value)},margin:"dense",autoComplete:"off",variant:"outlined",onKeyPress:function(e){return se(e,function(){return ue(w,W,function(){return de(w,W)})})}})),r.a.createElement(z.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement($.a,{className:"modal-login-button",variant:"contained",color:"primary",onClick:function(){return ue(w,W,function(){return de(w,W)})}},"Login"))))))}var Ce=function(){var e=Object(o.b)();return r.a.createElement(m.a,{theme:xe},r.a.createElement(i.a,null,function(){var a=JSON.parse(localStorage.getItem("user"));a&&(e(C(a)),S.push("/dashboard"))}(),r.a.createElement(s.a,{path:"/dashboard",exact:!0,component:je}),r.a.createElement(s.a,{path:"/",exact:!0,component:Ne})))},xe=Object(u.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"16px",backgroundColor:"black"}},MuiSnackbarContent:{root:{backgroundColor:"#202225",color:"white"}},MuiAppBar:{colorPrimary:{backgroundColor:"#36393E",position:"absolute"}}},palette:{type:"dark",primary:{main:"#7289da"},secondary:{main:"#3ca374"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600}}),Se=t(37),ke=t(123),Ie=t(124),we=t.n(Ie);function Ae(e,a,t){return a.on(e,function(e){"message"===e.type&&t.dispatch({type:f,payload:e.payload})})}var De,_e=t(33),Te=t(67),Me=t(20),Re={servers:{"Default-FANfDprXmt":{"general-0m5vBsRnfd":[],"gaming-p9DnvvrfWo":[],"programming-aRoD4umYpb":[],"cooking-v88UngJkiD":[],"misc-uSje5DwUH0":[],"/b/-Ry06VYrX3x":[]}},activeServer:"Default-FANfDprXmt",activeChannel:"general-0m5vBsRnfd"},Pe={isSignedIn:!1,isAdmin:!1,userId:null,userName:null},Ve=Object(Se.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,a=arguments.length>1?arguments[1]:void 0;switch(console.log(a.payload),a.type){case f:var t=a.payload,n=t.server,r=t.channel,c=t.from,l=t.msg;return Object(Me.a)({},e,{servers:Object(Me.a)({},e.servers,Object(_e.a)({},n,Object(Me.a)({},e.servers[n],Object(_e.a)({},r,[].concat(Object(Te.a)(e.servers[n][r]),[{from:c,msg:l}])))))});case"ADD_CHANNEL":return Object(Me.a)({},e,{servers:Object(Me.a)({},e.servers,Object(_e.a)({},a.payload.server,Object(Me.a)({},e.servers[a.payload.server],Object(_e.a)({},a.payload.channel,[]))))});case"ADD_SERVER":return Object(Me.a)({},e,{servers:Object(Me.a)({},e.servers,Object(_e.a)({},a.payload.server,Object(_e.a)({},a.payload.channel,[])))});case"GET_INITIAL_DATA":return Object(Me.a)({},e,{servers:a.payload,activeServer:Object.keys(a.payload)[0],activeChannel:Object.keys(a.payload[Object.keys(a.payload)[0]])[0]});case"CHANGE_SERVER":return Object(Me.a)({},e,{activeServer:a.payload,activeChannel:Object.keys(e.servers[a.payload])[0]});case"CHANGE_channel":return Object(Me.a)({},e,{activeChannel:a.payload});default:return Object(Me.a)({},e)}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIGN_IN":return console.log(a),Object(Me.a)({},e,{isSignedIn:!0,userId:a.payload.userId,userName:a.payload.userName});case"SIGN_OUT":return Object(Me.a)({},e,{isSignedIn:!1,userId:null,userName:"anon"+Math.floor(100*Math.random(0))});default:return e}}}),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Se.d,Le=Object(Se.e)(Ve,Ge(Object(Se.a)(ke.a,(De="https://simple-chat-apix.herokuapp.com",function(e){var a=we()(De),t=Ae("default",a,e);return function(n){return function(r){if("NEW_MESSAGE"!==r.type)return"SIGN_IN"===r.type&&(a.emit("simple-chat-userId",r.payload.userId),t.off(),t=Ae(r.payload.userId,a,e)),n(r);a.emit("simple-chat-new-message",r.payload)}}}))));l.a.render(r.a.createElement(o.a,{store:Le},r.a.createElement(Ce,null)),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.d1044908.chunk.js.map