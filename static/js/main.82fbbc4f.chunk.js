(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(13),i=n.n(o),r=(n(88),n(33)),s=n(6),c=n(7),u=n(9),m=n(8),d=n(10),h=(n(90),n(77)),p=n.n(h),f=n(31),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"clearfix",style:{padding:".5rem"}},l.a.createElement("div",{className:"float-left"},l.a.createElement("a",{target:"blank",href:"https://www.moneybutton.com"},l.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),l.a.createElement("h1",{className:"App-title"},"Customize your MoneyButton")),l.a.createElement("div",{className:"float-right",style:{padding:"5px"}},l.a.createElement(f.TwitterFollowButton,{screenName:"dfoderick"}))))}}]),t}(a.Component),y=n(2),g=n(3),E=n.n(g),v=n(12),w=n(39),A=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{padding:"1px"}},l.a.createElement(f.TwitterShareButton,{url:"https://moneybutton.com",options:{text:"#moneybutton is awesome",size:"large"}}))}}]),t}(a.Component),S=n(78),C=n.n(S),M=n(79),T=n.n(M),x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={openReceipt:!1,showDetails:!1,payment:null,transaction:null},n.showRawTransaction=function(){window.open("https://explorer.bitcoin.com/bch/tx/".concat(n.props.payment.txid),"_blank")},n.refreshTransaction=function(){n.loadTransaction(n.state.payment)},n.toggleReceipt=function(){n.setState({openReceipt:!n.state.openReceipt})},n.toggleDetails=function(){n.setState({showDetails:!n.state.showDetails})},n.clickTransaction=function(){n.setState({openReceipt:!0})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadTransaction(this.state.payment)}},{key:"componentDidUpdate",value:function(e,t){this.props.payment!==e.payment&&this.loadTransaction(this.props.payment)}},{key:"loadTransaction",value:function(e){var t=this;if(!e)return console.debug("skipping null payment"),null;var n=null;T.a.get("https://rest.bitcoin.com/v1/transaction/details/".concat(e.txid)).then(function(e){n=JSON.stringify(e.data),t.setState({transaction:n})}).catch(function(e){t.setState({transaction:null}),console.error(e)})}},{key:"timeConverter",value:function(e){var t=new Date(1e3*e),n=t.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+a+" "+n+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}},{key:"render",value:function(){var e=this,t="";this.props.payment&&(t=this.props.payment.txid);var n=[],a=null;return this.state.transaction&&(a=(n=JSON.parse(this.state.transaction)).vout[0]),l.a.createElement("div",null,l.a.createElement(y.b,{onClick:this.clickTransaction,style:{height:"30px",width:"75px",padding:"3px"}},"Receipt"),l.a.createElement(y.n,{isOpen:this.state.openReceipt,toggle:this.toggleReceipt,size:"lg",ref:function(t){return e.componentRef=t}},l.a.createElement(y.q,{toggle:this.toggleReceipt},"Transaction Receipt"),l.a.createElement(y.o,null,l.a.createElement("div",null,"txid: ",t),l.a.createElement("div",null,"time: ",this.timeConverter(n.time)),l.a.createElement("div",null,"value: ",a?a.value:"?"),l.a.createElement("div",null,"fees: ",n.fees),l.a.createElement("div",null,"addresses: ",a?a.scriptPubKey.addresses:"?"),l.a.createElement("div",null,"confirmations: ",n.confirmations),this.state.showDetails?l.a.createElement("div",null,this.state.transaction):null),l.a.createElement(y.p,null,l.a.createElement(C.a,{trigger:function(){return l.a.createElement(y.b,{color:"primary"},"Print")},content:function(){return e.componentRef}})," ",l.a.createElement(y.b,{color:"secondary",onClick:this.showRawTransaction},"Transaction")," ",l.a.createElement(y.b,{color:"secondary",onClick:this.toggleDetails},"Details")," ",l.a.createElement(y.b,{color:"secondary",onClick:this.refreshTransaction},"Refresh")," ",l.a.createElement(y.b,{color:"secondary",onClick:this.toggleReceipt},"Close"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.payment!==t.payment){if(!e.payment||"undefined"===e.payment.txid)return;return{payment:e.payment}}return{}}}]),t}(a.Component),k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isDebug:!1,debugTxid:"50eac9fafcbb060779f37bca4e54f5ff5e179656ba6bd2788530de7e89b62047",amount:"",reference:"",isAfterSwipeSuccess:!1,lastPayment:"",txid:""},n.handleChangeAmount=function(e){n.setState({amount:e.target.value})},n.handleChangeReference=function(e){n.setState({reference:e.target.value})},n.styleFont={fontFamily:"sans-serif"},n.mbOnPaymentCallback=function(e){var t=JSON.stringify(e);console.log(t),n.setState({isAfterSwipeSuccess:!0}),n.setState({lastPayment:e})},n.mbOnErrorCallback=function(e){n.setState({isAfterSwipeSuccess:!1}),console.error(e),alert('An error occured in Money Button. \n        Most likely there is a problem with they way you have set up your button. \n        The error message is "'.concat(e,'"'))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.to||"0",t=this.state.amount||this.props.defaultAmount||"0.01",n=this.state.amount||this.props.defaultAmount,a=this.props.display;return l.a.createElement("div",{style:{minWidth:"450px"}},l.a.createElement("datalist",{id:"amounts"},l.a.createElement("option",{value:"1",label:"$1"}),l.a.createElement("option",{value:"5"}),l.a.createElement("option",{value:"10"}),l.a.createElement("option",{value:"20",label:"$20"}),l.a.createElement("option",{value:"25"}),l.a.createElement("option",{value:"50",label:"$50"}),l.a.createElement("option",{value:"75"}),l.a.createElement("option",{value:"100",label:"$100"})),"dropdown"===a?l.a.createElement("div",{style:{float:"left",padding:"5px"}},l.a.createElement("div",{style:Object(v.a)({fontSize:"small"},this.styleFont)},this.props.labelAmount),l.a.createElement("div",{style:Object(v.a)({},this.styleFont)},l.a.createElement("select",{value:t,style:{width:"90px"},onChange:this.handleChangeAmount},l.a.createElement("option",{value:"1"},"$1"),l.a.createElement("option",{value:"5"},"$5"),l.a.createElement("option",{value:"10"},"$10"),l.a.createElement("option",{value:"20"},"$20"),l.a.createElement("option",{value:"50"},"$50"),l.a.createElement("option",{value:"75"},"$75"),l.a.createElement("option",{value:"100"},"$100")))):null,"input"===a?l.a.createElement("div",{style:{float:"left",padding:"5px"}},l.a.createElement("div",{style:Object(v.a)({fontSize:"small"},this.styleFont)},this.props.labelReference),l.a.createElement("div",{style:Object(v.a)({},this.styleFont)},l.a.createElement("input",{type:"text",maxLength:"20",id:"reference",value:this.state.reference,size:"15",onChange:this.handleChangeReference})),l.a.createElement("div",{style:Object(v.a)({fontSize:"small"},this.styleFont)},this.props.labelAmount),l.a.createElement("div",{style:Object(v.a)({fontSize:"small"},this.styleFont)},l.a.createElement("input",{type:"number",value:n,onChange:this.handleChangeAmount,min:this.props.minAmount,max:this.props.maxAmount,step:"0.01",size:"100px"}))):null,"slider"!==a&&a?null:l.a.createElement("div",{style:{float:"left",padding:"5px"}},l.a.createElement("div",{style:Object(v.a)({fontSize:"small"},this.styleFont)},this.props.labelAmount),l.a.createElement("div",{style:Object(v.a)({},this.styleFont)},l.a.createElement("input",{type:"range",min:this.props.minAmount,max:this.props.maxAmount,id:"donationamount",step:".01",list:"amounts",value:this.state.amount,onChange:this.handleChangeAmount}))),l.a.createElement("div",{style:{float:"left"}},l.a.createElement(w.a,{to:e,clientIdentifier:this.props.clientIdentifier,amount:t,currency:this.props.currency,type:this.props.type,label:this.props.labelMoneyButton,opReturn:this.props.devMode?null:this.state.reference,onPayment:this.mbOnPaymentCallback,onError:this.mbOnErrorCallback,buttonId:this.props.buttonId,devMode:this.props.devMode,buttonData:this.props.buttonData}),l.a.createElement("div",{style:{position:"relative",display:"inline-block",verticalAlign:"top",margin:"1px"}},this.state.isDebug||this.state.openReceipt||this.state.isAfterSwipeSuccess&&this.props.showTransaction?l.a.createElement("div",null,l.a.createElement(x,{payment:this.state.lastPayment})):null,this.state.isDebug||this.state.isAfterSwipeSuccess&&this.props.showSocialMedia?l.a.createElement("div",null,l.a.createElement(A,null)):null)))}}]),t}(l.a.Component);k.defaultProps=Object(v.a)({},a.Component.defaultProps,{currency:"USD",to:"0",type:"tip",labelMoneyButton:"Slide to Donate",labelReference:"Order Number",labelAmount:"Amount",maxAmount:100,minAmount:.01,showTransaction:!1,showSocialMedia:!1,hashTag:"",buttonId:null,buttonData:null,clientIdentifier:null});var O=k;var D=function(e){return l.a.createElement(y.c,{className:"card text-white bg-dark mb-6"},l.a.createElement(y.d,null,l.a.createElement(y.e,null,"If you found this site useful then please consider leaving a tip for the author."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{padding:"5px"}},l.a.createElement(O,{display:"slider",buttonId:"dropdown",devMode:!1,labelMoneyButton:"Tip me",labelAmount:"Tip Amount",labelReference:"",maxAmount:"20",buttonData:'{"website":"GitHub","category":"donation","description":"donation","owner":"dfoderick"}',showTransaction:!1,showSocialMedia:!0,type:"tip",to:"145",defaultAmount:"1"})),l.a.createElement("div",{style:{width:"50%",textAlign:"right",padding:"5px"}},l.a.createElement(f.TwitterFollowButton,{screenName:"dfoderick"})))))},I=n(81),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={copied:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t='\n        <div style="padding:5px">\n        <div>\n          '.concat(this.props.labelReference,'\n        </div>\n        <div>\n          <input type="text" maxLength="20" id="pay-reference" size="15" name="pay-reference" onkeyup="return changeReference(this, event);"></input>\n        </div>\n        <div>\n          ').concat(this.props.labelAmount,'\n        </div>\n        <div>\n          <input type="number" min="0.01" max="100000.00" step="0.01" size="100px" onkeyup="return changeAmount(this, event);" id="pay-amount" name="pay-amount"></input>\n        </div>\n      </div>\n      \n      <div id="pay-button"></div>\n      <script src="https://api.moneybutton.com/moneybutton.js"><\/script>\n      <script>\n        const mb_to = \'').concat(this.props.to,"';\n        const mb_type = '").concat(this.props.type,"';\n        const mb_currency = '").concat(this.props.currency,"';\n        const mb_label = '").concat(this.props.labelMoneyButton,"';\n        const mb_buttonId = '").concat(this.props.buttonId,"';\n        const mb_buttonData = '").concat(this.props.buttonData,"';\n        moneyButton.render(\n          document.getElementById('pay-button'), {\n            to: mb_to,\n            type: mb_type,\n            amount: 0,\n            currency: mb_currency,\n            label: mb_label,\n            buttonData: mb_buttonData\n          }\n        );\n      \n        function renderMoneyButton(amt, reference) {\n          moneyButton.render(\n            document.getElementById('pay-button'), {\n              to: mb_to,\n              type: mb_type,\n              amount: amt,\n              currency: mb_currency,\n              opReturn: reference,\n              label: mb_label,\n              buttonData: mb_buttonData\n            }\n          );\n        }\n      \n        function changeAmount(obj, event) {\n          if (event.target.value) {\n            renderMoneyButton(event.target.value, document.getElementById('pay-reference').value);\n          }\n        }\n      \n        function changeReference(obj, event) {\n          if (event.target.value) {\n            renderMoneyButton(document.getElementById('pay-amount').value, event.target.value);\n          }\n        }\n      \n      <\/script>\n          ");return l.a.createElement(y.c,null,l.a.createElement(y.d,null,l.a.createElement(y.e,null,l.a.createElement(I.CopyToClipboard,{text:t,onCopy:function(){return e.setState({copied:!0})}},l.a.createElement(y.b,null,"Copy to clipboard")),this.state.copied?l.a.createElement("span",{style:{color:"red"}}," ","Copied. Paste the code into your site."):null),l.a.createElement("div",null,l.a.createElement("textarea",{id:"mb-code",rows:"10",cols:"50",value:t,style:{overflow:"hidden",resize:"none"},readOnly:!0}))))}}]),t}(l.a.Component);j.defaultProps=Object(v.a)({},a.Component.defaultProps,{currency:"USD"});var B=j,P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={paid:!1,lastPayment:null},n.mbOnPaymentCallback=function(e){n.setState({paid:!0}),n.setState({lastPayment:e}),n.props.onPayment&&n.props.onPayment(e)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.state.paid?null:l.a.createElement(w.a,{to:"145",type:"buy",amount:".25",currency:"USD",buttonData:'{"website":"GitHub","category":"paywall","description":"swipe code","owner":"dfoderick"}',label:"to get code",onPayment:this.mbOnPaymentCallback}))}}]),t}(l.a.Component),R=n(82),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={devMode:!0,debugTxid:"50eac9fafcbb060779f37bca4e54f5ff5e179656ba6bd2788530de7e89b62047",type:"buy",to:"",currency:"USD",defaultAmount:"",labelMoneyButton:"Slide to Donate",labelAmount:"Enter Amount",labelReference:"Order Number",configTransactionAfterPayment:!1,configSocialMediaAfterPayment:!1,buttonId:"",clientIdentifier:"",hideAmount:!1,showSliderLive:!1,showDropDownLive:!1,showInputLive:!1,activeTab:"common",website:"",category:"",description:"",owner:"",paidForCode:!1},n.handleChange=function(e){return function(t){var a;n.setState((a={},Object(r.a)(a,e,t.target.value),Object(r.a)(a,"copied",!1),a))}},n.updateType=function(e){return function(t){t.target&&t.target.checked&&n.setState({type:e,copied:!1})}},n.toggleInput=function(){n.setState({showInputLive:!n.state.showInputLive})},n.toggleSlider=function(){n.setState({showSliderLive:!n.state.showSliderLive})},n.toggleDropDown=function(){n.setState({showDropDownLive:!n.state.showDropDownLive})},n.toggleShowTransaction=function(){n.setState({configTransactionAfterPayment:!n.state.configTransactionAfterPayment})},n.toggleShowSocialMedia=function(){n.setState({configSocialMediaAfterPayment:!n.state.configSocialMediaAfterPayment})},n.styles={padding:"3px"},n.whenPaid=function(e){n.setState({paidForCode:!0})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=JSON.stringify({website:this.state.website,category:this.state.category,description:this.state.description,owner:this.state.owner});return l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement("div",{style:{alignText:"left",padding:"20px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{width:"50%"}},l.a.createElement("p",null,"View source on GitHub ",l.a.createElement("a",{href:"https://github.com/dfoderick/money-button-donate"},"https://github.com/dfoderick/money-button-donate")))),l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement(y.c,{style:{width:"50%"}},l.a.createElement(y.d,null,l.a.createElement(y.e,null,"Customize your Money Button"),l.a.createElement(y.r,{tabs:!0},l.a.createElement(y.s,null,l.a.createElement(y.t,{className:E()({active:"common"===this.state.activeTab}),onClick:function(){e.toggleTab("common")}},"Common Settings")),l.a.createElement(y.s,null,l.a.createElement(y.t,{className:E()({active:"buttondata"===this.state.activeTab}),onClick:function(){e.toggleTab("buttondata")}},"ButtonData")),l.a.createElement(y.s,null,l.a.createElement(y.t,{className:E()({active:"advanced"===this.state.activeTab}),onClick:function(){e.toggleTab("advanced")}},"Advanced"))),l.a.createElement(y.v,{activeTab:this.state.activeTab},l.a.createElement(y.w,{tabId:"common"},l.a.createElement(y.g,null,l.a.createElement(y.h,{className:"form"},l.a.createElement(y.u,null,l.a.createElement(y.f,{style:{width:"50%"}},l.a.createElement(y.m,null,"Button Behavior")),l.a.createElement(y.f,null,l.a.createElement("input",{type:"radio",radioGroup:"type",checked:"tip"===this.state.type,onChange:this.updateType("tip")})," Tip"," ",l.a.createElement("input",{type:"radio",radioGroup:"type",checked:"buy"===this.state.type,onChange:this.updateType("buy")})," Buy")),l.a.createElement(y.u,null,l.a.createElement(y.f,{xs:"6"},l.a.createElement(y.m,null,"Send to (User Number or address)")),l.a.createElement(y.f,{xs:"6"},l.a.createElement(y.j,null,l.a.createElement(y.k,null,"User is required for Button to work!"),l.a.createElement(y.l,{type:"text",placeholder:"Send To User Number or address",valid:!1,required:!0,value:this.state.to,onChange:this.handleChange("to")}),l.a.createElement(y.i,{invalid:"true"},"A Money Button User Number is required! Otherwise the Try it Now buttons will not work!")))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement(y.m,null,"Default Amount")),l.a.createElement(y.f,null,l.a.createElement(y.l,{type:"number",step:"0.01",value:this.state.defaultAmount,onChange:this.handleChange("defaultAmount"),placeholder:"Default Amount"}))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement(y.m,null,"Money Button Label")),l.a.createElement(y.f,null,l.a.createElement(y.l,{type:"text",value:this.state.labelMoneyButton,onChange:this.handleChange("labelMoneyButton"),placeholder:"Money Button Label"}))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement(y.m,null,"Prompt for Amount")),l.a.createElement(y.f,null,l.a.createElement(y.l,{type:"text",value:this.state.labelAmount,onChange:this.handleChange("labelAmount"),placeholder:"Amount Prompt"}))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement(y.m,null,"Prompt for Reference")),l.a.createElement(y.f,null,l.a.createElement(y.l,{type:"text",value:this.state.labelReference,onChange:this.handleChange("labelReference"),placeholder:"Reference Prompt"})))))),l.a.createElement(y.w,{tabId:"buttondata"},l.a.createElement(y.g,null,l.a.createElement(y.h,{className:"form"},l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement(y.m,null,"Website")),l.a.createElement(y.f,null,l.a.createElement(y.l,{type:"text",value:this.state.website,onChange:this.handleChange("website"),placeholder:"Website"}))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement(y.m,null,"Category")),l.a.createElement(y.f,null,l.a.createElement(y.l,{type:"text",value:this.state.category,onChange:this.handleChange("category"),placeholder:"Category"}))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement(y.m,null,"Description")),l.a.createElement(y.f,null,l.a.createElement(y.l,{type:"text",value:this.state.description,onChange:this.handleChange("description"),placeholder:"Description"}))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement(y.m,null,"Owner")),l.a.createElement(y.f,null,l.a.createElement(y.l,{type:"text",value:this.state.owner,onChange:this.handleChange("owner"),placeholder:"Owner"}))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,t))))),l.a.createElement(y.w,{tabId:"advanced"},l.a.createElement(y.g,null,l.a.createElement(y.h,{className:"form"},l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement("label",{className:"col-sm-4 col-form-label"}),l.a.createElement(y.m,{check:!0},l.a.createElement(y.l,{type:"checkbox",value:this.state.configTransactionAfterPayment,onChange:this.toggleShowTransaction})," ","Show Receipt after payemnt",l.a.createElement(x,{payment:{txid:this.state.debugTxid}})))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement("label",{className:"col-sm-4 col-form-label"}),l.a.createElement(y.m,{check:!0},l.a.createElement(y.l,{type:"checkbox",value:this.state.configSocialMediaAfterPayment,onChange:this.toggleShowSocialMedia})," ","Share on Social Media",l.a.createElement(A,null)))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement(y.m,null,"Button Id")),l.a.createElement(y.f,null,l.a.createElement(y.l,{type:"text",value:this.state.buttonId,onChange:this.handleChange("buttonId"),placeholder:"Button Id"}))),l.a.createElement(y.u,null,l.a.createElement(y.f,null,l.a.createElement(y.m,null,"Client Identifier")),l.a.createElement(y.f,null,l.a.createElement(y.l,{type:"text",value:this.state.clientIdentifier,onChange:this.handleChange("clientIdentifier"),placeholder:"Client Identifier"}))))))))),l.a.createElement("div",null,l.a.createElement(P,{onPayment:this.whenPaid}),l.a.createElement(R.a,{radius:this.state.paidForCode?"0":"5px",transition:"400ms"},l.a.createElement("fieldset",{disabled:!this.state.paidForCode},l.a.createElement(B,{type:this.state.type,to:this.state.to,labelMoneyButton:this.state.labelMoneyButton,labelReference:this.state.labelReference,labelAmount:this.state.labelAmount,buttonId:this.state.buttonId,buttonData:t})))))),l.a.createElement(y.a,{color:"primary"},"The following 3 examples of Money Button work in demo mode. That means NO FUNDS will be spent from your account."),l.a.createElement(y.c,null,l.a.createElement(y.d,null,l.a.createElement(y.e,null,"Select amount with a textbox..."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{width:"50%"}},l.a.createElement(O,{display:"input",devMode:this.state.devMode,labelMoneyButton:this.state.labelMoneyButton,labelAmount:this.state.labelAmount,labelReference:this.state.labelReference,showTransaction:this.state.configTransactionAfterPayment,showSocialMedia:this.state.configSocialMediaAfterPayment,buttonId:this.state.buttonId,buttonData:t,clientIdentifier:this.state.clientIdentifier,type:this.state.type,to:this.state.to,defaultAmount:this.state.defaultAmount})),l.a.createElement(y.b,{color:"danger",onClick:this.toggleInput,style:{height:"40px"}},"Try it Live!"),l.a.createElement(y.n,{isOpen:this.state.showInputLive,toggle:this.toggleInput,size:"lg",className:this.props.className},l.a.createElement(y.q,{toggle:this.toggleInput},"This button is live! Use small amounts for testing"),l.a.createElement(y.o,null,l.a.createElement(O,{display:"input",devMode:!1,labelMoneyButton:this.state.labelMoneyButton,labelAmount:this.state.labelAmount,labelReference:this.state.labelReference,showTransaction:this.state.configTransactionAfterPayment,showSocialMedia:this.state.configSocialMediaAfterPayment,buttonId:this.state.buttonId,buttonData:t,clientIdentifier:this.state.clientIdentifier,type:this.state.type,to:this.state.to,defaultAmount:this.state.defaultAmount})),l.a.createElement(y.p,null,l.a.createElement(y.b,{color:"secondary",onClick:this.toggleInput},"Close")))))),l.a.createElement(y.c,null,l.a.createElement(y.d,null,l.a.createElement(y.e,null,"Select amount with a slider control..."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{width:"50%"}},l.a.createElement(O,{display:"slider",devMode:this.state.devMode,labelMoneyButton:this.state.labelMoneyButton,labelAmount:this.state.labelAmount,labelReference:this.state.labelReference,showTransaction:this.state.configTransactionAfterPayment,showSocialMedia:this.state.configSocialMediaAfterPayment,buttonId:this.state.buttonId,buttonData:t,clientIdentifier:this.state.clientIdentifier,type:this.state.type,to:this.state.to,defaultAmount:this.state.defaultAmount})),l.a.createElement(y.b,{color:"danger",onClick:this.toggleSlider,style:{height:"40px"}},"Try it Live!"),l.a.createElement(y.n,{isOpen:this.state.showSliderLive,toggle:this.toggleSlider,size:"lg",className:this.props.className},l.a.createElement(y.q,{toggle:this.toggleSlider},"This button is live! Use small amounts for testing"),l.a.createElement(y.o,null,l.a.createElement(O,{display:"slider",devMode:!1,labelMoneyButton:this.state.labelMoneyButton,labelAmount:this.state.labelAmount,labelReference:this.state.labelReference,showTransaction:this.state.configTransactionAfterPayment,showSocialMedia:this.state.configSocialMediaAfterPayment,buttonId:this.state.buttonId,buttonData:t,clientIdentifier:this.state.clientIdentifier,type:this.state.type,to:this.state.to,defaultAmount:this.state.defaultAmount})),l.a.createElement(y.p,null,l.a.createElement(y.b,{color:"secondary",onClick:this.toggleSlider},"Close")))))),l.a.createElement(y.c,null,l.a.createElement(y.d,null,l.a.createElement(y.e,null,"Select amount with a drop down control..."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{width:"50%"}},l.a.createElement(O,{display:"dropdown",devMode:this.state.devMode,labelMoneyButton:this.state.labelMoneyButton,labelAmount:this.state.labelAmount,labelReference:this.state.labelReference,showTransaction:this.state.configTransactionAfterPayment,showSocialMedia:this.state.configSocialMediaAfterPayment,buttonId:this.state.buttonId,buttonData:t,clientIdentifier:this.state.clientIdentifier,type:this.state.type,to:this.state.to,defaultAmount:this.state.defaultAmount})),l.a.createElement(y.b,{color:"danger",onClick:this.toggleDropDown,style:{height:"40px"}},"Try it Live!"),l.a.createElement(y.n,{isOpen:this.state.showDropDownLive,toggle:this.toggleDropDown,size:"lg",className:this.props.className},l.a.createElement(y.q,{toggle:this.toggleDropDown},"This button is live! Use small amounts for testing"),l.a.createElement(y.o,null,l.a.createElement(O,{display:"dropdown",devMode:!1,labelMoneyButton:this.state.labelMoneyButton,labelAmount:this.state.labelAmount,labelReference:this.state.labelReference,showTransaction:this.state.configTransactionAfterPayment,showSocialMedia:this.state.configSocialMediaAfterPayment,buttonId:this.state.buttonId,buttonData:t,clientIdentifier:this.state.clientIdentifier,type:this.state.type,to:this.state.to,defaultAmount:this.state.defaultAmount})),l.a.createElement(y.p,null,l.a.createElement(y.b,{color:"secondary",onClick:this.toggleDropDown},"Close"))))))),l.a.createElement(D,null))}}]),t}(a.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(169);i.a.render(l.a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/money-button-donate",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/money-button-donate","/service-worker.js");L?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):F(e)})}}()},77:function(e,t,n){e.exports=n.p+"static/media/logo.afe56a1f.svg"},83:function(e,t,n){e.exports=n(171)},88:function(e,t,n){},90:function(e,t,n){}},[[83,2,1]]]);
//# sourceMappingURL=main.82fbbc4f.chunk.js.map