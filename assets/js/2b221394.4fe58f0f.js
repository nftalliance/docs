"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5937],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=c,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9530:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),c=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"Accounts",description:"Accounts... TBD"},u="Accounts",s={unversionedId:"arch/accounts",id:"arch/accounts",title:"Accounts",description:"Accounts... TBD",source:"@site/../../src/arch/05-accounts.md",sourceDirName:"arch",slug:"/arch/accounts",permalink:"/arch/accounts",editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/05-accounts.md",tags:[],version:"current",lastUpdatedAt:1651670649,formattedLastUpdatedAt:"5/4/2022",sidebarPosition:5,frontMatter:{title:"Accounts",description:"Accounts... TBD"},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/arch/security"},next:{title:"Ever OS",permalink:"/arch/ever-os"}},l={},p=[{value:"Account (contract)",id:"account-contract",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accounts"},"Accounts"),(0,o.kt)("h2",{id:"account-contract"},"Account (contract)"),(0,o.kt)("p",null,"Account (contract) is identified by its full address consisting of ",(0,o.kt)("inlineCode",{parentName:"p"},"workchain")," and ID. Full information about Account is stored in its state.  Account can have some balance, a place for its ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),", place for its ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," and many other fields."),(0,o.kt)("p",null,"It can have 1 owner, many owners and no owners at all."),(0,o.kt)("p",null,"Account ID is calculated during deploy from its initial code and data."))}f.isMDXComponent=!0}}]);