(this.webpackJsonprecipe_app=this.webpackJsonprecipe_app||[]).push([[0],{15:function(e,t,n){},21:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c,s,a,i,r,l,o=n(1),d=n.n(o),j=n(32),p=n.n(j),b=(n(44),n(2)),x=(n(45),n(3)),h=n(4),u=n(20),O=function(e,t){return"USER"===t.type?t.payload:"CLEAR"===t.type?null:"UPDATE"===t.type?Object(u.a)(Object(u.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"===t.type?Object(u.a)(Object(u.a)({},e),{},{pic:t.payload}):e},m=n(6),f=n.n(m),g=n.p+"static/media/3.abd0188e.png",y=(n(21),n(0)),v=function(){var e=Object(o.useContext)(se),t=(e.state,e.dispatch),n=Object(x.f)(),c=Object(o.useState)(""),s=Object(b.a)(c,2),a=s[0],i=s[1],r=Object(o.useState)(""),l=Object(b.a)(r,2),d=l[0],j=l[1];return Object(y.jsxs)("div",{className:"login-screen",children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:g,className:"login-image"})}),Object(y.jsx)("div",{className:"mycard",children:Object(y.jsxs)("div",{className:"auth-card input-field",children:[Object(y.jsx)("h2",{style:{fontFamily:"sans-serif",margin:"30px auto"},children:"MyRecipe Diary"}),Object(y.jsx)("input",{type:"text",placeholder:"email",value:d,onChange:function(e){return j(e.target.value)}}),Object(y.jsx)("input",{type:"password",placeholder:"password",value:a,onChange:function(e){return i(e.target.value)}}),Object(y.jsx)("button",{className:"btn btn-success waves-effect waves-light #64b5f6 darken-1",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(d)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a,email:d})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?f.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),f.a.toast({html:"signedin success",classes:"#43a047 green darken-1"}),n.push("/"))})).catch((function(e){console.log(e)})):f.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})},style:{margin:"20px auto",width:"100%"},children:Object(y.jsx)("span",{style:{color:"#fff"},children:"Login"})}),Object(y.jsx)("h5",{children:Object(y.jsx)(h.b,{to:"/signup",className:"links-text",children:"Don't have an account?"})}),Object(y.jsx)("h6",{children:Object(y.jsx)(h.b,{to:"/reset",className:"links-text",children:"Forgot password?"})})]})})]})},N=n.p+"static/media/2.82b949ed.png",w=function(){var e=Object(x.f)(),t=Object(o.useState)(""),n=Object(b.a)(t,2),c=n[0],s=n[1],a=Object(o.useState)(""),i=Object(b.a)(a,2),r=i[0],l=i[1],d=Object(o.useState)(""),j=Object(b.a)(d,2),p=j[0],u=j[1],O=Object(o.useState)(""),m=Object(b.a)(O,2),g=m[0],v=m[1],w=Object(o.useState)(void 0),k=Object(b.a)(w,2),C=k[0],S=k[1];Object(o.useEffect)((function(){C&&D()}),[C]);var D=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,password:r,email:p,pic:C})}).then((function(e){return e.json()})).then((function(t){t.error?f.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(f.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):f.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})},A=function(){g?function(){var e=new FormData;e.append("file",g),e.append("upload_preset","recipe_pics"),e.append("cloud_name","talkytalky"),fetch("https://api.cloudinary.com/v1_1/talkytalky/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){S(e.url)})).catch((function(e){console.log(e)}))}():D()};return Object(y.jsxs)("div",{className:"login-screen",children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:N,className:"signup-image"})}),Object(y.jsx)("div",{className:"auth-card",children:Object(y.jsxs)("div",{className:" input-field",children:[Object(y.jsx)("h2",{style:{fontFamily:"sans-serif"},children:"MyRecipe Diary"}),Object(y.jsx)("input",{type:"text",placeholder:"name",value:c,onChange:function(e){return s(e.target.value)},style:{margin:"30px auto"}}),Object(y.jsx)("input",{type:"text",placeholder:"email",value:p,onChange:function(e){return u(e.target.value)}}),Object(y.jsx)("input",{type:"password",placeholder:"password",value:r,onChange:function(e){return l(e.target.value)}}),Object(y.jsxs)("div",{className:"file-field input-field",children:[Object(y.jsxs)("div",{className:"btn btn-warning #64b5f6 darken-1",children:[Object(y.jsx)("span",{style:{color:"#000"},children:"Upload Pic"}),Object(y.jsx)("input",{type:"file",onChange:function(e){return v(e.target.files[0])}})]}),Object(y.jsx)("div",{className:"file-path-wrapper",children:Object(y.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(y.jsx)("button",{className:"btn btn-success waves-effect waves-light #64b5f6 darken-1",onClick:function(){return A()},style:{marginBottom:"20px"},children:Object(y.jsx)("span",{style:{color:"#fff"},children:"SignUp"})}),Object(y.jsx)("h5",{children:Object(y.jsx)(h.b,{to:"/signin",className:"links-text",children:"Already have an account ?"})})]})})]})},k=function(){var e=Object(x.f)(),t=Object(o.useState)(""),n=Object(b.a)(t,2),c=n[0],s=n[1];return Object(y.jsx)("div",{className:"mycardreset",children:Object(y.jsx)("div",{style:{padding:"10%"},children:Object(y.jsxs)("div",{className:"auth-card",children:[Object(y.jsx)("h2",{children:"MyRecipe Diary"}),Object(y.jsx)("input",{type:"text",placeholder:"email",value:c,onChange:function(e){return s(e.target.value)}}),Object(y.jsx)("button",{className:"btn btn-success waves-effect waves-light #64b5f6 darken-1",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(c)?fetch("/reset-password",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c})}).then((function(e){return e.json()})).then((function(t){t.error?f.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(f.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):f.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})},children:Object(y.jsx)("span",{style:{color:"#fff"},children:"reset password"})})]})})})},C=function(){var e=Object(x.f)(),t=Object(o.useState)(""),n=Object(b.a)(t,2),c=n[0],s=n[1],a=Object(x.g)().token;console.log(a);return Object(y.jsx)("div",{className:"newPassword",children:Object(y.jsx)("div",{className:"mycardreset",style:{padding:"10%"},children:Object(y.jsxs)("div",{className:"auth-card",children:[Object(y.jsx)("h2",{children:"MyRecipe Diary"}),Object(y.jsx)("input",{type:"password",placeholder:"enter a new password",value:c,onChange:function(e){return s(e.target.value)}}),Object(y.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/new-password",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:c,token:a})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.error?f.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(f.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)}))},children:"Update password"})]})})})},S=(n(51),function(){var e=Object(o.useState)([]),t=Object(b.a)(e,2),n=(t[0],t[1],Object(o.useContext)(se)),c=n.state,s=n.dispatch,a=Object(x.f)();Object(o.useEffect)((function(){}),[]);return Object(y.jsx)("nav",{children:Object(y.jsxs)("div",{className:"nav-wrapper",style:{backgroundColor:"#2A2A2C"},children:[Object(y.jsx)(h.b,{to:"/",className:"brand-logo left",style:{marginLeft:"4.2%",textDecoration:"none",display:"inline"},children:Object(y.jsx)("span",{className:"navbar-title",style:{color:"white"},children:"MyRecipe Diary"})}),Object(y.jsx)("ul",{id:"nav-mobile",className:"right",children:c?[Object(y.jsx)("li",{children:Object(y.jsx)(h.b,{to:"/myrecipes",className:"navbar-ul",children:"My Recipes"})},"2"),Object(y.jsx)("li",{children:Object(y.jsx)(h.b,{to:"/add",className:"navbar-ul",children:"Add Recipe"})},"3"),Object(y.jsx)("li",{children:Object(y.jsx)("button",{className:"btn btn-primary #fafafa grey lighten-5",style:{margin:" auto 12px auto 2px",color:"#424242"},onClick:function(){localStorage.clear(),s({type:"CLEAR"}),a.push("/signin")},children:"Logout"})},"5")]:[Object(y.jsx)("li",{children:Object(y.jsx)(h.b,{to:"/signin",className:"navbar-ul",children:"SignIn"})},"6"),Object(y.jsx)("li",{children:Object(y.jsx)(h.b,{to:"/signup",className:"navbar-ul",children:"SignUp"})},"7")]})]})})}),D=n(10),A=n(14),E=A.a.div(c||(c=Object(D.a)(["\npadding: 80px 60px 30px 60px;\nbackground: #2A2A2C;\nbottom: 0;\nwidth: 100%;\n\n\n@media (max-width: 1000px) {\n\tpadding: 70px 30px;\n}\n"]))),I=A.a.div(s||(s=Object(D.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmax-width: 1000px;\n\tmargin: 0 auto;\n\t/* background: red; */\n"]))),R=A.a.div(a||(a=Object(D.a)(["\ndisplay: flex;\nflex-direction: column;\ntext-align: left;\nmargin-left: 60px;\n"]))),T=A.a.div(i||(i=Object(D.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill,\n\t\t\t\t\t\tminmax(185px, 1fr));\ngrid-gap: 20px;\n\n@media (max-width: 1000px) {\n\tgrid-template-columns: repeat(auto-fill,\n\t\t\t\t\t\tminmax(200px, 1fr));\n}\n"]))),U=A.a.a(r||(r=Object(D.a)(["\ncolor: #fff;\nmargin-bottom: 20px;\nfont-size: 18px;\ntext-decoration: none;\n\n&:hover {\n\tcolor: #E2DED1;\n\ttransition: 200ms ease-in;\n}\n"]))),_=A.a.p(l||(l=Object(D.a)(["\nfont-size: 24px;\ncolor: #fff;\nmargin-bottom: 40px;\nfont-weight: bold;\n"]))),z=function(){return Object(y.jsxs)(E,{children:[Object(y.jsx)("h1",{style:{color:"#C7BFAE",textAlign:"center",marginTop:"-50px",marginBottom:"30px"},children:"MyRecipe Diary: An online recipe saving and sharing app"}),Object(y.jsx)(I,{children:Object(y.jsxs)(T,{children:[Object(y.jsxs)(R,{children:[Object(y.jsx)(_,{children:"About Us"}),Object(y.jsx)(U,{href:"#",children:"Aim"}),Object(y.jsx)(U,{href:"#",children:"Vision"})]}),Object(y.jsxs)(R,{children:[Object(y.jsx)(_,{children:"Features"}),Object(y.jsx)(U,{href:"#",children:"Live Recipe Visualization"}),Object(y.jsx)(U,{href:"#",children:"Easy to use interface"})]}),Object(y.jsxs)(R,{children:[Object(y.jsx)(_,{children:"Contact Us"}),Object(y.jsx)(U,{href:"",children:"Mail Us"}),Object(y.jsx)(U,{href:"",children:"Any Query"})]}),Object(y.jsxs)(R,{children:[Object(y.jsx)(_,{children:"Social Media"}),Object(y.jsx)(U,{href:"https://www.linkedin.com/in/vaibhav-pathak-6a4301158/",children:Object(y.jsx)("span",{style:{marginLeft:"10px"},children:"Linkedin"})}),Object(y.jsx)(U,{href:"https://github.com/vaibhavpathak999/RecipeApp",children:Object(y.jsx)("span",{style:{marginLeft:"10px"},children:"GitHub"})})]})]})})]})},F=n(36),L=n(37),B=n(39),M=n(38),J=(n(53),n(22),n(54),n.p+"static/media/Visual Tool.747059c9.png"),P=n.p+"static/media/Share.5aa3d585.png",W=n.p+"static/media/recipes.ab02a731.png";n(55);var Z=function(){return Object(y.jsx)("div",{className:"container-fluid main-page-features",style:{padding:"1% 15% 0% 10%",margin:"7% 0%"},children:Object(y.jsxs)("div",{style:{backgroundColor:"#fff"},children:[Object(y.jsx)("h1",{className:"features-heading",style:{padding:"0px 30px 50px auto"},children:"Features"}),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col s12 m7",children:Object(y.jsxs)("div",{className:"featureCard",children:[Object(y.jsxs)("div",{className:"card-image",children:[Object(y.jsx)("img",{src:J}),Object(y.jsx)("span",{className:"card-title",style:{padding:"90px"},children:"Visualization"})]}),Object(y.jsxs)("div",{className:"card-content",children:[Object(y.jsx)("p",{children:Object(y.jsx)("b",{children:"So that you can focus on writing your recipes not memozing them."})}),Object(y.jsx)("p",{children:"One card is for filling the details for the recipe."}),Object(y.jsx)("p",{children:"Second card is for seeing all the changes live."})]})]})}),Object(y.jsx)("div",{className:"col s12 m7",children:Object(y.jsxs)("div",{className:"featureCard",children:[Object(y.jsxs)("div",{className:"card-image",children:[Object(y.jsx)("img",{src:W}),Object(y.jsx)("span",{className:"card-title",style:{color:"black"},children:"UI/UX"})]}),Object(y.jsxs)("div",{className:"card-content",children:[Object(y.jsx)("p",{children:Object(y.jsx)("b",{children:"Easy to use User Centered desing for app."})}),Object(y.jsx)("p",{children:" This web uses simple form filling for creating, updating the recipes."}),Object(y.jsx)("p",{children:" You will fall in love the design."})]})]})}),Object(y.jsx)("div",{className:"col s12 m7",children:Object(y.jsxs)("div",{className:"featureCard",children:[Object(y.jsxs)("div",{className:"card-image",children:[Object(y.jsx)("img",{src:P}),Object(y.jsx)("span",{className:"card-title",children:"Options"})]}),Object(y.jsxs)("div",{className:"card-content",children:[Object(y.jsx)("p",{children:Object(y.jsx)("b",{children:"You can easily share your amazing recipe to your frinds and family."})}),Object(y.jsx)("p",{children:" User can share recipes."}),Object(y.jsx)("p",{children:" User can update recipes."}),Object(y.jsx)("p",{children:" User can delete recipes."})]})]})})]})})]})})},V=function(e){Object(B.a)(n,e);var t=Object(M.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"container-fluid main-page",style:{padding:"1% 15% 0% 10%"},children:Object(y.jsx)("div",{className:"home-container",children:Object(y.jsxs)("div",{className:"row align-items-center",children:[Object(y.jsx)("div",{className:"text-content col-sm-12 col-md-6",children:Object(y.jsxs)("h1",{children:[Object(y.jsx)("span",{style:{color:"#F46E45",fontSize:"5rem"},children:"MyRecipe Diary"}),Object(y.jsx)("br",{})," is your new digital recipe diary."]})}),Object(y.jsx)("div",{className:"image-content col-sm-12 col-md-6",children:Object(y.jsx)("img",{src:N,href:"",alt:"foodplate image"})})]})})}),Object(y.jsx)(Z,{})]})}}]),n}(o.Component),Y=n(12);n(15);var $=function(e){var t=e.ingred,n=e.index,c=e.setRecipeIngredients,s=e.propName,a=Object(o.useState)(""),i=Object(b.a)(a,2),r=i[0],l=i[1],d=Object(o.useState)(!1),j=Object(b.a)(d,2),p=j[0],x=j[1],h=Object(o.useState)(!1),u=Object(b.a)(h,2),O=u[0],m=u[1];return Object(o.useEffect)((function(){console.log(p),p&&(c((function(e){return[].concat(Object(Y.a)(e),[r])})),x(!1),console.log(r))}),[r,p]),Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)("div",{children:Object(y.jsx)("input",{type:"text",placeholder:s,onChange:function(e){return l(e.target.value)},value:r})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"btn btn-primary waves-effect waves-light",style:{margin:"10px 0px 10px 15px"},disabled:O,onClick:function(){return x(!0),void m(!0)},children:" Add  "})})]},"".concat(t,"-").concat(n))};var G,H=function(e){var t=e.title,n=e.ingredients,c=e.instructions;return Object(y.jsx)("div",{style:{display:"flex",margin:"30px auto"},className:"container d-flex justify-content-center",children:Object(y.jsxs)("div",{className:"card p-3",style:{width:500},children:[Object(y.jsx)("label",{for:"card p-3",children:"See your recipe"}),Object(y.jsx)("img",{className:"recipeImage",src:N}),Object(y.jsx)("div",{className:"d-flex align-items-center",style:{padding:"2%"},children:Object(y.jsxs)("div",{className:"ml-3 w-100",children:[Object(y.jsx)("h3",{className:"mb-0 mt-0 recipeTitle",children:t||"Your Recipe Title"}),Object(y.jsx)("h5",{style:{padding:"25px 0px 0px 0px",color:"#4D4D4D"},children:"Ingredients"}),Object(y.jsx)("div",{className:"",children:n.map((function(e,t){if(e)return Object(y.jsx)("span",{className:"ingredients",children:e},e+t)}))}),Object(y.jsx)("h5",{style:{padding:"25px 0px 0px 0px",color:"#4D4D4D"},children:"Instructions"}),Object(y.jsx)("div",{className:"",children:c.map((function(e,t){if(e)return Object(y.jsxs)("p",{className:"instructions",children:[t,". ",e]},e+t)}))}),Object(y.jsx)("label",{for:"button mt-2",children:"Buttons for demonstrative purpose"}),Object(y.jsxs)("div",{className:"button mt-2 d-flex flex-row align-items-center",style:{marginLeft:"25px"},children:[Object(y.jsx)("button",{className:"btn btn-warning",style:{width:"90%",margin:"5px 15px"},children:" Delete"}),Object(y.jsx)("button",{className:"btn btn-primary",style:{margin:"5px 15px",width:"90%"},children:"Update "})]})]})})]})},"".concat(t))},Q=function(){var e=Object(x.f)(),t=Object(o.useState)(""),n=Object(b.a)(t,2),c=n[0],s=n[1],a=Object(o.useState)([""]),i=Object(b.a)(a,2),r=i[0],l=i[1],d=Object(o.useState)([""]),j=Object(b.a)(d,2),p=j[0],h=j[1],u=Object(o.useState)(""),O=Object(b.a)(u,2),m=O[0],g=O[1],v=Object(o.useState)(""),N=Object(b.a)(v,2),w=N[0],k=N[1];Object(o.useEffect)((function(){w&&fetch("/addrecipe",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({recipe_title:c,recipe_ingredients:r,recipe_instructions:p,pic:w})}).then((function(e){return e.json()})).then((function(t){t.error?f.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(f.a.toast({html:"Created Contact Successfully",classes:"#43a047 green darken-1"}),e.push("/myrecipes"))})).catch((function(e){console.log(e)}))}),[w]);var C={margin:"10px 20px 25px",maxWidth:"450px",padding:"30px",textAlign:"center",borderRadius:"20px",background:"#e0e0e0",boxShadow:"5px 5px 10px #bebebe,-5px -5px 10px #ffffff"};return Object(y.jsxs)("div",{className:"conatiner-fluid",style:{padding:"1% 15% 0% 15%",backgroundColor:"#E0E0E0"},children:[Object(y.jsx)("div",{style:{textAlign:"center",color:"#2E357E",padding:"20px",fontSize:"4rem"},children:Object(y.jsx)("h3",{children:"Add new recipe"})}),Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)("div",{children:Object(y.jsx)(H,{title:c,ingredients:r,instructions:p})}),Object(y.jsxs)("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center",width:"500px"},children:[Object(y.jsx)("label",{for:"RecipeTitle",style:{margin:"20px auto 0px auto"},className:"labelClass",children:"Recipe Title"}),Object(y.jsx)("input",{type:"text",id:"RecipeTitle",placeholder:"Recipe Title",value:c,onChange:function(e){return s(e.target.value)},style:{padding:"",maxWidth:"400px",margin:"auto auto 20px auto"}}),Object(y.jsx)("label",{for:"ingredients",className:"labelClass",children:"Ingredients"}),Object(y.jsxs)("div",{id:"ingredients",style:C,children:[r.map((function(e,t){return Object(y.jsx)($,{ingred:e,index:t,setRecipeIngredients:l,propName:"Enter Ingredient"})})),Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"btn btn-danger waves-effect waves-light ",style:{margin:"0px 0px 0px 10px"},onClick:function(){return function(e){var t=Object(Y.a)(r);t.splice(e,1),l(t),console.log(t)}(r.length-1)},children:" Delete "})})]}),Object(y.jsx)("label",{for:"Instructions",className:"labelClass",children:"Instructions"}),Object(y.jsxs)("div",{id:"Instructions",style:C,children:[p.map((function(e,t){return Object(y.jsx)($,{ingred:e,index:t,setRecipeIngredients:h,propName:"Enter Instruction"})})),Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"btn btn-danger waves-effect waves-light",style:{margin:"0px 0px 0px 10px",padding:"0px auto"},onClick:function(){return function(e){var t=Object(Y.a)(p);t.splice(e,1),h(t),console.log(t)}(p.length-1)},children:" Delete "})})]}),Object(y.jsxs)("div",{className:"file-field input-field",children:[Object(y.jsxs)("div",{className:"btn btn-primary #64b5f6 darken-1",children:[Object(y.jsx)("span",{children:"Upload Image"}),Object(y.jsx)("input",{type:"file",onChange:function(e){return g(e.target.files[0])}})]}),Object(y.jsx)("div",{className:"file-path-wrapper",children:Object(y.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(y.jsx)("button",{style:{margin:"20px 0px"},className:"btn btn-primary waves-effect waves-light #64b5f6  darken-1",onClick:function(){return function(){var e=new FormData;e.append("file",m),e.append("upload_preset","recipe_pics"),e.append("cloud_name","talkytalky"),fetch("https://api.cloudinary.com/v1_1/talkytalky/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){k(e.url)})).catch((function(e){console.log(e)}))}()},children:"Add Recipe"})]})]})]})},X=n(25),q=n.n(X),K=n(28),ee=Object(K.css)(G||(G=Object(D.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n    "]))),te=function(){var e=Object(o.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(o.useContext)(se),a=(s.state,s.dispatch,Object(o.useState)("#F46E45")),i=Object(b.a)(a,2),r=i[0];i[1];Object(o.useEffect)((function(){fetch("/myrecipes",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0,Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){c(e.recipe)}))}),[]);return Object(y.jsx)("div",{style:{backgroundColor:"#e0e0e0"},children:Object(y.jsx)("div",{className:"home container",style:{padding:"4%",marginBottom:"0px",display:"flex",flexDirection:"row",flex:"1 1 auto"},children:n===[]?Object(y.jsx)(q.a,{color:r,css:ee,size:150}):n.map((function(e,t){return Object(y.jsx)("div",{className:"container mt-5 d-flex justify-content-center",children:Object(y.jsxs)("div",{className:"card recipe-cards p-3",children:[Object(y.jsx)("img",{className:"recipeImage",src:e.photo}),Object(y.jsx)("div",{className:"d-flex align-items-center",style:{padding:"2%"},children:Object(y.jsxs)("div",{className:"ml-3 w-100",children:[Object(y.jsx)("h3",{className:"mb-0 mt-0",style:{margin:"40px 0px 40px 0px"},children:e.title}),Object(y.jsx)("h5",{className:"",style:{padding:"25px 0px 0px 0px",color:"#4D4D4D"},children:"Ingredients"}),Object(y.jsx)("div",{className:"",children:e.ingredients.map((function(e,t){if(e)return Object(y.jsx)("span",{className:"ingredients",children:e},e+t)}))}),Object(y.jsx)("h5",{className:"",style:{marginTop:"25px",color:"#4D4D4D"},children:"Instructions"}),Object(y.jsx)("div",{className:"",children:e.steps.map((function(e,t){if(e)return Object(y.jsxs)("p",{className:"instructions",children:[t,". ",e]},e+t)}))}),Object(y.jsxs)("div",{className:"button mt-2 d-flex flex-row align-items-center",style:{margin:"45px auto auto 0px",padding:"10px 0px"},children:[Object(y.jsxs)("button",{className:"btn btn-success",style:{margin:"5px 15px",width:"90%"},children:[Object(y.jsx)(h.b,{to:"/recipes/"+e._id,style:{textDecoration:"none",color:"white"},children:"Share"})," "]}),Object(y.jsxs)("button",{className:"btn btn-primary",style:{margin:"5px 15px",width:"90%"},children:[Object(y.jsx)(h.b,{to:"/updaterecipe/"+e._id,style:{textDecoration:"none",color:"white"},children:"Update"})," "]}),Object(y.jsxs)("button",{className:"btn btn-danger",onClick:function(){return t=e._id,void fetch("/deleterecipe/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0,Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));c(t)}));var t},style:{width:"90%",margin:"5px 15px"},children:[Object(y.jsx)(h.b,{to:"/myrecipes",style:{textDecoration:"none",color:"black"},children:"Delete"})," "]})]})]})})]})},t+n.title)}))})})},ne=function(){var e=Object(x.f)(),t=Object(o.useState)(""),n=Object(b.a)(t,2),c=n[0],s=n[1],a=Object(o.useState)([""]),i=Object(b.a)(a,2),r=i[0],l=i[1],d=Object(o.useState)([""]),j=Object(b.a)(d,2),p=j[0],h=j[1],u=Object(o.useState)(""),O=Object(b.a)(u,2),m=O[0],g=O[1],v=Object(o.useState)(""),N=Object(b.a)(v,2),w=N[0],k=N[1],C=Object(x.g)().postid;console.log(C),Object(o.useEffect)((function(){w&&fetch("/updaterecipe/".concat(C),{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:c,ingredients:r,steps:p,pic:w})}).then((function(e){return e.json()})).then((function(t){t.error?f.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(f.a.toast({html:"Recipe Updated Successfully",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[w]);var S={margin:"10px 20px 25px",maxWidth:"450px",padding:"30px",textAlign:"center",borderRadius:"20px",background:"#e0e0e0",boxShadow:"5px 5px 10px #bebebe,-5px -5px 10px #ffffff"};return Object(y.jsxs)("div",{className:"conatiner-fluid",style:{padding:"1% 15% 0% 15%",backgroundColor:"#E0E0E0"},children:[Object(y.jsx)("div",{style:{textAlign:"center",color:"#2E357E",padding:"20px",fontSize:"4rem"},children:Object(y.jsx)("h3",{children:"Update your recipe"})}),Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)("div",{children:Object(y.jsx)(H,{title:c,ingredients:r,instructions:p})}),Object(y.jsxs)("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center",width:"500px"},children:[Object(y.jsx)("label",{for:"RecipeTitle",style:{margin:"20px auto 0px auto"},className:"labelClass",children:"Recipe Title"}),Object(y.jsx)("input",{type:"text",id:"RecipeTitle",placeholder:"Recipe Title",value:c,onChange:function(e){return s(e.target.value)},style:{padding:"",maxWidth:"400px",margin:"auto auto 20px auto"}}),Object(y.jsx)("label",{for:"ingredients",className:"labelClass",children:"Ingredients"}),Object(y.jsxs)("div",{id:"ingredients",style:S,children:[r.map((function(e,t){return Object(y.jsx)($,{ingred:e,index:t,setRecipeIngredients:l,propName:"Enter Ingredient"})})),Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"btn btn-danger waves-effect waves-light ",style:{margin:"0px 0px 0px 10px"},onClick:function(){return function(e){var t=Object(Y.a)(r);t.splice(e,1),l(t),console.log(t)}(r.length-1)},children:" Delete "})})]}),Object(y.jsx)("label",{for:"Instructions",className:"labelClass",children:"Instructions"}),Object(y.jsxs)("div",{id:"Instructions",style:S,children:[p.map((function(e,t){return Object(y.jsx)($,{ingred:e,index:t,setRecipeIngredients:h,propName:"Enter Instruction"})})),Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"btn btn-danger waves-effect waves-light",style:{margin:"0px 0px 0px 10px",padding:"0px auto"},onClick:function(){return function(e){var t=Object(Y.a)(p);t.splice(e,1),h(t),console.log(t)}(p.length-1)},children:" Delete "})})]}),Object(y.jsxs)("div",{className:"file-field input-field",children:[Object(y.jsxs)("div",{className:"btn btn-primary #64b5f6 darken-1",children:[Object(y.jsx)("span",{children:"Upload Image"}),Object(y.jsx)("input",{type:"file",onChange:function(e){return g(e.target.files[0])}})]}),Object(y.jsx)("div",{className:"file-path-wrapper",children:Object(y.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(y.jsx)("button",{style:{margin:"20px 0px"},className:"btn btn-primary waves-effect waves-light #64b5f6  darken-1",onClick:function(){return function(){var e=new FormData;e.append("file",m),e.append("upload_preset","recipe_pics"),e.append("cloud_name","talkytalky"),fetch("https://api.cloudinary.com/v1_1/talkytalky/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){k(e.url)})).catch((function(e){console.log(e)}))}()},children:"Update"})]})]})]})},ce=function(){var e=Object(o.useState)(),t=Object(b.a)(e,2),n=(t[0],t[1]),c=Object(o.useState)(""),s=Object(b.a)(c,2),a=s[0],i=s[1],r=Object(o.useState)([]),l=Object(b.a)(r,2),d=l[0],j=l[1],p=Object(o.useState)([]),h=Object(b.a)(p,2),u=h[0],O=h[1],m=Object(o.useState)(""),f=Object(b.a)(m,2),g=f[0],v=f[1],N=Object(x.g)().postid,w=Object(o.useState)("#F46E45"),k=Object(b.a)(w,2),C=k[0];k[1];return console.log(N),Object(o.useEffect)((function(){fetch("/recipes/".concat(N),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e.recipeDetails),i(e.recipeDetails.title),j(e.recipeDetails.ingredients),O(e.recipeDetails.steps),v(e.recipeDetails.photo),n(e.recipeDetails)}))}),[]),Object(y.jsx)("div",{style:{backgroundColor:"#e0e0e0"},children:Object(y.jsx)("div",{className:"home container",style:{padding:"4%",marginBottom:"0px",display:"flex",flexDirection:"row",flex:"1 1 auto"},children:""===a?Object(y.jsx)(q.a,{color:C,css:ee,size:150}):Object(y.jsx)("div",{className:"container mt-5 d-flex justify-content-center",children:Object(y.jsxs)("div",{className:"card recipe-cards p-3",children:[Object(y.jsx)("img",{className:"recipeImage",src:g}),Object(y.jsx)("div",{className:"d-flex align-items-center",style:{padding:"2%"},children:Object(y.jsxs)("div",{className:"ml-3 w-100",children:[Object(y.jsx)("h3",{className:"mb-0 mt-0",style:{margin:"40px 0px 40px 0px"},children:a}),Object(y.jsx)("h5",{className:"",style:{padding:"25px 0px 0px 0px",color:"#4D4D4D"},children:"Ingredients"}),Object(y.jsx)("div",{className:"",children:d.map((function(e,t){if(e)return Object(y.jsx)("span",{className:"ingredients",children:e},e+t)}))}),Object(y.jsx)("h5",{className:"",style:{marginTop:"25px",color:"#4D4D4D"},children:"Instructions"}),Object(y.jsx)("div",{className:"",children:u.map((function(e,t){if(e)return Object(y.jsxs)("p",{className:"instructions",children:[t,". ",e]},e+t)}))}),Object(y.jsx)("button",{className:"btn btn-primary",style:{margin:"20px 175px"},onClick:function(){return function(){var e=document.createElement("input");e.value=window.location.href,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}()},children:"Copy URL"})]})})]})},"0"+a)})})},se=Object(o.createContext)(),ae=function(){var e=Object(x.f)(),t=Object(o.useContext)(se),n=(t.state,t.dispatch);return Object(o.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?n({type:"USER",payload:t}):e.location.pathname.startsWith("/reset")||e.push("/signin")}),[]),Object(y.jsxs)(x.c,{children:[Object(y.jsx)(x.a,{exact:!0,path:"/",children:Object(y.jsx)(V,{})}),Object(y.jsx)(x.a,{path:"/signin",children:Object(y.jsx)(v,{})}),Object(y.jsx)(x.a,{path:"/signup",children:Object(y.jsx)(w,{})}),Object(y.jsx)(x.a,{exact:!0,path:"/reset",children:Object(y.jsx)(k,{})}),Object(y.jsx)(x.a,{path:"/reset/:token",children:Object(y.jsx)(C,{})}),Object(y.jsx)(x.a,{exact:!0,path:"/add",children:Object(y.jsx)(Q,{})}),Object(y.jsx)(x.a,{exact:!0,path:"/myrecipes",children:Object(y.jsx)(te,{})}),Object(y.jsx)(x.a,{path:"/updaterecipe/:postid",children:Object(y.jsx)(ne,{})}),Object(y.jsx)(x.a,{path:"/recipes/:postid",children:Object(y.jsx)(ce,{})})]})};var ie=function(){var e=Object(o.useReducer)(O,null),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(y.jsx)(se.Provider,{value:{state:n,dispatch:c},children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)(S,{}),Object(y.jsx)(ae,{}),Object(y.jsx)(z,{})]})})};p.a.render(Object(y.jsx)(d.a.StrictMode,{children:Object(y.jsx)(ie,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.01f3623c.chunk.js.map