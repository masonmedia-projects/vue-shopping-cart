(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["get-started"],{"3bfc":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"bg-light relative z--1 p-4 p-md-5 mt-5 mt-md-4",attrs:{fluid:""}},[e("div",{staticClass:"animate w-100 bg-lightblue absolute z-0 left top",staticStyle:{height:"400px",top:"450px"},attrs:{"data-animate":"fade 1s"}}),t._l(t.$t("getStarted"),(function(a){return e("b-row",{key:a.id,staticClass:"bg-light shadow-lg mt-3 mb-4 relative",staticStyle:{"border-radius":"14px",background:"url('./img/Taieri.svg') right bottom","background-size":"500%"},attrs:{"no-gutters":"","align-v":"center","align-h":"center"}},[e("div",{staticClass:"absolute left top z-0 bg-light w-50 h-100",staticStyle:{"border-radius":"14px"}}),e("b-col",{staticClass:"text-left p-5 bg-light",attrs:{lg:"6","align-self":"center"}},[e("h1",{staticClass:"animate h5 text-muted mb-3",attrs:{"data-animate":"fade-up 1s"},domProps:{innerHTML:t._s(a.microTitle)}}),e("h5",{staticClass:"animate page-title font-weight-bold mb-4",attrs:{"data-animate":"fade-up 1.3s"},domProps:{innerHTML:t._s(a.title)}}),e("hr",{staticClass:"animate ml-0 mr-auto mt-0 mb-4 bg-lightblue",staticStyle:{height:"4px",width:"50px"},attrs:{"data-animate":"fade-up 1.6s"}}),e("p",{staticClass:"animate",attrs:{"data-animate":"fade-up 1.9s"},domProps:{innerHTML:t._s(a.text)}}),e("b-icon",{staticClass:"animate mt-2",attrs:{icon:"chevron-double-down","data-animate":"fade-up 2s",variant:"dark","font-scale":"2"}})],1),e("b-col",{staticClass:"p-5 min-h-50",attrs:{lg:"6","align-self":"stretch"}},[e("b-img",{staticClass:"animate w-100 cover",staticStyle:{"border-radius":"0 14px 14px 0",filter:"drop-shadow(2px 4px 10px #222222)"},attrs:{src:a.img.banner,alt:a.imgAlt.banner,"data-animate":"fade-in 1s"}})],1)],1)})),e("b-row",{staticClass:"text-left"},t._l(t.$t("allCategories"),(function(a){return e("b-col",{key:a.id,staticClass:"text-center",attrs:{xl:"4",md:"6"},on:{click:function(e){return t.itemDetails(a)}}},[e("b-card",{staticClass:"border-0 mb-3 shadow",attrs:{tag:"article","header-class":"font-weight-bold","body-class":"p-0"}},[e("b-avatar",{staticClass:"absolute left top z-1 m-2 shadow",class:a.color,attrs:{icon:"bookmarks-fill",size:"2.5rem",rounded:"lg"}}),e("b-card-img",t._b({staticStyle:{filter:"brightness(0.9)"},attrs:{"img-alt":a.imgAlt,src:a.img}},"b-card-img",t.imgProps,!1)),t._l(t.$t("getStarted"),(function(s){return e("b-card-text",{key:s.id,staticClass:"pt-4 px-5 pb-5"},[e("h2",{staticClass:"font-weight-bold",domProps:{innerHTML:t._s(a.name)}}),e("p",{domProps:{innerHTML:t._s(a.category)}}),e("b-button",{attrs:{variant:"lightblue mr-2 stretched-link"},domProps:{innerHTML:t._s(s.detailsBtn)}})],1)}))],2)],1)})),1)],2)},i=[],r=e("5752"),n={name:"GetStarted",mixins:[r["a"]],data:function(){return{selected:null,options:[{value:"",text:"All"},{value:"Leading Yourself",text:"Accessories"},{value:"Collaborating with & Inspiring Others",text:"Laptops"},{value:"Communicating Effectively & with Empathy",text:"Stationary"},{value:"Executing Strategic & Operational Excellence",text:"Stationary"},{value:"Fostering Innovation and Agility",text:"Stationary"}],category:"",imgProps:{center:!0,fluidGrow:!0,blank:!0,blankColor:"#bbb",width:"100%",height:"100%"}}},computed:{getStarted:function(){return this.$store.state.data.getStarted},topRated:function(){return this.$store.state.data.topRated},allCategories:function(){return this.$store.state.data.allCategories},dishesNearYou:function(){return this.$store.state.data.dishesNearYou}},methods:{itemDetails:function(t){this.$router.push({name:"ItemDetails",params:t})}}},l=n,o=e("2877"),c=Object(o["a"])(l,s,i,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=get-started.67bfd811.js.map