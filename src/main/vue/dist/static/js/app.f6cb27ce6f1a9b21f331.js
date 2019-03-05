webpackJsonp([1],{"1/oy":function(e,t){},GfHa:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("Jmt5");var s=r("e6fC"),a=r("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=r("VU/8")({name:"App"},o,!1,function(e){r("c4Nv")},null,null).exports,n=r("/ocq"),d=r("mtWM"),m=r.n(d),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-alert",{attrs:{variant:"success",show:""}},[this._v(this._s(this.message))]),this._v(" "),t("br")],1)},staticRenderFns:[]},l={data:function(){return{users:[],addUserForm:{username:"",email:"",password:"",admin:!1},show:!1,editForm:{username:"",email:"",picture:"",password:"",admin:""},message:"",showMessage:!1,uname:"",pass:""}},components:{alert:r("VU/8")({props:["message"]},u,!1,null,null,null).exports},methods:{getUsers:function(){var e=this;m.a.get("http://localhost:5000/users",{auth:{username:this.uname,password:this.pass}}).then(function(t){e.users=t.data}).catch(function(e){console.error(e)})},addUser:function(e){var t=this;m.a.post("http://localhost:5000/users",e,{auth:{username:this.uname,password:this.pass}}).then(function(){t.getUsers(),t.message="User added!",t.showMessage=!0}).catch(function(e){console.error(e),t.getUsers()})},updateUser:function(e,t){var r=this,s="http://localhost:5000/users/"+t;m.a.put(s,e,{auth:{username:this.uname,password:this.pass}}).then(function(){r.getUsers(),r.message="User updated!",r.showMessage=!0}).catch(function(e){console.error(e),r.getUsers()})},removeUser:function(e){var t=this,r="http://localhost:5000/users/"+e;m.a.delete(r,{auth:{username:this.uname,password:this.pass}}).then(function(){t.getUsers(),t.message="User removed!",t.showMessage=!0}).catch(function(e){console.error(e),t.getUsers()})},initForm:function(){this.addUserForm.username="",this.addUserForm.email="",this.addUserForm.picture="",this.addUserForm.password="",this.addUserForm.admin=!1,this.editForm.username="",this.editForm.email="",this.editForm.picture="",this.editForm.password="",this.editForm.admin=!1},onSubmit:function(e){e.preventDefault(),this.$refs.addUserModal.hide();var t={username:this.addUserForm.username,email:this.addUserForm.email,picture:this.addUserForm.picture,password:this.addUserForm.password,admin:this.addUserForm.admin};this.addUser(t),this.initForm()},onSubmitUpdate:function(e){e.preventDefault(),this.$refs.editUserModal.hide();var t={username:this.editForm.username,email:this.editForm.email,picture:this.editForm.picture,password:this.editForm.password,admin:this.editForm.admin};this.updateUser(t,this.editForm.username)},onReset:function(e){e.preventDefault(),this.$refs.addUserModal.hide(),this.initForm()},onResetUpdate:function(e){e.preventDefault(),this.$refs.editUserModal.hide(),this.initForm(),this.getUsers()},onDeleteUser:function(e){this.removeUser(e.username)},editUser:function(e){this.editForm=e},login:function(){this.uname="",this.pass="",this.uname=this.$refs.loginname.value,this.pass=this.$refs.loginpass.value,this.getUsers(),this.check()},check:function(){var e=this,t="http://localhost:5000/user/"+this.uname;m.a.get(t).then(function(t){"true"===t.data[0]?e.show=!0:e.show=!1}).catch(function(e){console.error(e)})}},created:function(){this.getUsers()}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-10"},[r("h1",[e._v("Login")]),e._v(" "),r("table",{staticClass:"table table-hover"},[e._m(0),e._v(" "),r("tbody",[r("td",[r("input",{ref:"loginname",attrs:{placeholder:"username"}})]),e._v(" "),r("td",[r("input",{ref:"loginpass",attrs:{type:"password",placeholder:"password"}})]),e._v(" "),r("td",[r("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:function(t){e.login()}}},[e._v("\n                      Login\n                      ")])])])])]),e._v(" "),r("div",{staticClass:"col-sm-10"},[r("h1",[e._v("Users")]),e._v(" "),r("hr"),r("br"),r("br"),e._v(" "),e.showMessage?r("alert",{attrs:{message:e.message}}):e._e(),e._v(" "),e.show?r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.user-modal",modifiers:{"user-modal":!0}}],staticClass:"btn btn-success btn-sm",attrs:{type:"button"}},[e._v("\n              Add User\n      ")]):e._e(),e._v(" "),r("br"),r("br"),e._v(" "),r("table",{staticClass:"table table-hover "},[e._m(1),e._v(" "),r("tbody",e._l(e.users,function(t,s){return r("tr",{key:s},[r("td",[r("img",{staticClass:"rounded-circle",attrs:{src:t.picture,width:"50",height:"50"}})]),e._v(" "),r("td",[e._v(e._s(t.username))]),e._v(" "),r("td",[e._v(e._s(t.email))]),e._v(" "),r("td",[e._v(e._s(t.admin))]),e._v(" "),r("td",[e.show?r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.user-update-modal",modifiers:{"user-update-modal":!0}}],staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:function(r){e.editUser(t)}}},[e._v("\n                  Update\n              ")]):e._e(),e._v(" "),e.show?r("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(r){e.onDeleteUser(t)}}},[e._v("\n                  Delete\n              ")]):e._e()])])}),0)])],1)]),e._v(" "),r("b-modal",{ref:"addUserModal",attrs:{id:"user-modal",user:"Add a new user","hide-footer":""}},[r("b-form",{staticClass:"w-100",on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{id:"form-user-group",label:"User:","label-for":"form-user-input"}},[r("b-form-input",{attrs:{id:"form-user-input",type:"text",required:"",placeholder:"Enter user"},model:{value:e.addUserForm.username,callback:function(t){e.$set(e.addUserForm,"username",t)},expression:"addUserForm.username"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"form-email-group",label:"E-Mail:","label-for":"form-email-input"}},[r("b-form-input",{attrs:{id:"form-email-input",type:"text",required:"",placeholder:"Enter email"},model:{value:e.addUserForm.email,callback:function(t){e.$set(e.addUserForm,"email",t)},expression:"addUserForm.email"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"form-picture-group",label:"Image:","label-for":"form-picture-input"}},[r("b-form-input",{attrs:{id:"form-picture-input",type:"text",required:"",placeholder:"Enter Image"},model:{value:e.addUserForm.picture,callback:function(t){e.$set(e.addUserForm,"picture",t)},expression:"addUserForm.picture"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"form-password-group",label:"Password:","label-for":"form-password-input"}},[r("b-form-input",{attrs:{id:"form-password-input",type:"password",required:"",placeholder:"Enter Password"},model:{value:e.addUserForm.password,callback:function(t){e.$set(e.addUserForm,"password",t)},expression:"addUserForm.password"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"form-admin-group"}},[r("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:e.addUserForm.admin,callback:function(t){e.$set(e.addUserForm,"admin",t)},expression:"addUserForm.admin"}},[r("b-form-checkbox",{attrs:{value:"true"}},[e._v("Admin?")])],1)],1),e._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),e._v(" "),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1),e._v(" "),r("b-modal",{ref:"editUserModal",attrs:{id:"user-update-modal",user:"Update","hide-footer":""}},[r("b-form",{staticClass:"w-100",on:{submit:e.onSubmitUpdate,reset:e.onResetUpdate}},[r("b-form-group",{attrs:{id:"form-user-edit-group",label:"User:","label-for":"form-user-edit-input"}},[r("b-form-input",{attrs:{id:"form-user-edit-input",type:"text",required:"",placeholder:"Enter user"},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"form-email-edit-group",label:"E-Mail:","label-for":"form-email-edit-input"}},[r("b-form-input",{attrs:{id:"form-email-edit-input",type:"text",required:"",placeholder:"Enter email"},model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"form-picture-edit-group",label:"Image:","label-for":"form-picture-edit-input"}},[r("b-form-input",{attrs:{id:"form-picture-edit-input",type:"text",required:"",placeholder:"Enter Image"},model:{value:e.editForm.picture,callback:function(t){e.$set(e.editForm,"picture",t)},expression:"editForm.picture"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"form-password-edit-group",label:"Password:","label-for":"form-password-edit-input"}},[r("b-form-input",{attrs:{id:"form-password-edit-input",type:"password",required:"",placeholder:"Enter password"},model:{value:e.editForm.password,callback:function(t){e.$set(e.editForm,"password",t)},expression:"editForm.password"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"form-admin-edit-group"}},[r("b-form-checkbox-group",{attrs:{id:"form-edit-checks"},model:{value:e.addUserForm.admin,callback:function(t){e.$set(e.addUserForm,"admin",t)},expression:"addUserForm.admin"}},[r("b-form-checkbox",{attrs:{value:"true"}},[e._v("Admin?")])],1)],1),e._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Update")]),e._v(" "),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Cancel")])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[this._v("Username")]),this._v(" "),t("th",{attrs:{scope:"col"}},[this._v("Password")]),this._v(" "),t("th")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[e._v("Image")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Username")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("E-Mail")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Rights")]),e._v(" "),r("th")])])}]},p=r("VU/8")(l,c,!1,null,null,null).exports;a.a.use(n.a);var h=new n.a({routes:[{path:"/",name:"Users",component:p}],mode:"hash"});a.a.config.productionTip=!1,a.a.use(s.a),new a.a({el:"#app",router:h,components:{App:i},template:"<App/>"})},c4Nv:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f6cb27ce6f1a9b21f331.js.map