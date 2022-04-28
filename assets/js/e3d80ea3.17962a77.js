"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6715],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},819:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"4.2. JSON Metadata",sidebar_position:2,slug:"/standard/TIP-4.2"},p="Non-Fungible Token JSON Metadata (TIP-4.2)",s={unversionedId:"standard/TIP-4/2",id:"standard/TIP-4/2",title:"4.2. JSON Metadata",description:"Requires: TIP-6.1",source:"@site/../../src/standard/TIP-4/2.md",sourceDirName:"standard/TIP-4",slug:"/standard/TIP-4.2",permalink:"/standard/TIP-4.2",editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-4/2.md",tags:[],version:"current",lastUpdatedAt:1651155160,formattedLastUpdatedAt:"4/28/2022",sidebarPosition:2,frontMatter:{title:"4.2. JSON Metadata",sidebar_position:2,slug:"/standard/TIP-4.2"},sidebar:"tutorialSidebar",previous:{title:"4.1. Non-Fungible Token",permalink:"/standard/TIP-4.1"},next:{title:"4.3. On-chain indexes",permalink:"/standard/TIP-4.3"}},d={},m=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"JSON metadata",id:"json-metadata",level:2},{value:"TIP4_2JSON_Metadata.getJson()",id:"tip4_2json_metadatagetjson",level:3},{value:"Empty JSON metadata",id:"empty-json-metadata",level:2},{value:"JSON metadata type",id:"json-metadata-type",level:2},{value:"JSON metadata type: &quot;Basic NFT&quot;",id:"json-metadata-type-basic-nft",level:2},{value:"Example",id:"example",level:3},{value:"How to add the new JSON metadata type?",id:"how-to-add-the-new-json-metadata-type",level:2},{value:"References",id:"references",level:2}],u={toc:m};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"non-fungible-token-json-metadata-tip-42"},"Non-Fungible Token JSON Metadata (TIP-4.2)"),(0,l.kt)("p",null,"Requires: ",(0,l.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"Token-specific metadata is stored as a string in smart contract. To facilitate an off-chain working with metadata, it is JSON object. The below metadata structure allows the marketplaces to read and display the details about the assets which your NFTs represent."),(0,l.kt)("p",null,"This standard provides optional JSON fields and contract interface. "),(0,l.kt)("h2",{id:"motivation"},"Motivation"),(0,l.kt)("p",null,"A standard fields facilitate displaying of NFT data for: wallets, explorers, marketplaces, etc."),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("p",null,"The keywords \u201cMUST\u201d, \u201cMUST NOT\u201d, \u201cREQUIRED\u201d, \u201cSHALL\u201d, \u201cSHALL NOT\u201d, \u201cSHOULD\u201d, \u201cSHOULD NOT\u201d, \u201cRECOMMENDED\u201d, \u201cMAY\u201d, and \u201cOPTIONAL\u201d in this document are to be interpreted as described in ",(0,l.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119")),(0,l.kt)("h2",{id:"json-metadata"},"JSON metadata"),(0,l.kt)("p",null,"Return the metadata as JSON"),(0,l.kt)("p",null,"Every TIP4.2 compliant contract must implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"TIP4_2JSON_Metadata")," interface and ",(0,l.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")," interfaces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface TIP4_2JSON_Metadata {\n\n    /// @notice metadata in JSON format\n    /// @return json The JSON string with metadata\n    function getJson() external view responsible returns (string json);\n\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,l.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")," identifier for this interface is ",(0,l.kt)("inlineCode",{parentName:"p"},"0x24D7D5F5"),"."),(0,l.kt)("h3",{id:"tip4_2json_metadatagetjson"},"TIP4_2JSON_Metadata.getJson()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getJson() external view responsible returns (string json);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json")," (",(0,l.kt)("inlineCode",{parentName:"li"},"string"),") -  The JSON string with metadata")),(0,l.kt)("p",null,"The function return metadata as a JSON string."),(0,l.kt)("h2",{id:"empty-json-metadata"},"Empty JSON metadata"),(0,l.kt)("p",null,"Empty JSON metadata is represented as a blank JSON object or an empty string."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,l.kt)("h2",{id:"json-metadata-type"},"JSON metadata type"),(0,l.kt)("p",null,'Not empty JSON must have "type" field '),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"type":"string"}\n')),(0,l.kt)("p",null,'Application that read JSON metadata use "type" field for parsing standard or custom JSON fields.'),(0,l.kt)("h2",{id:"json-metadata-type-basic-nft"},'JSON metadata type: "Basic NFT"'),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Basic NFT")," use for links to files stores in web. JSON fields contain information about item, files and preview info."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Basic NFT")," describes fields that must be in JSON"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"Basic NFT"'),(0,l.kt)("td",{parentName:"tr",align:null},"Constant name for this type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"preview")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Object preview")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"preview.source")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Link to object. Contains protocol and data source. Delimiter is ",(0,l.kt)("strong",{parentName:"td"},":"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"preview.mimetype")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types"},"Mime type")," of object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"files")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of objects.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"file.source")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Link to object. Contains protocol and data source. Delimiter is ",(0,l.kt)("strong",{parentName:"td"},":"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"file.mimetype")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types"},"Mime type")," of object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"external_url")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"URL to website")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "type": "Basic NFT",\n    "name": "Sample Name",\n    "description": "Hello world!",\n    "preview": {\n        "source": "https://everscale.network/images/Backgrounds/Main/main-hero.png",\n        "mimetype": "image/png"\n    },\n    "files": [\n        {\n            "source": "https://everscale.network/images/Backgrounds/Main/main-hero.png",\n            "mimetype": "image/png"\n        }\n    ],\n    "external_url": "https://everscale.network"\n}\n')),(0,l.kt)("p",null,"You can extend ",(0,l.kt)("inlineCode",{parentName:"p"},"Basic NFT")," type for your custom fields."),(0,l.kt)("h2",{id:"how-to-add-the-new-json-metadata-type"},"How to add the new JSON metadata type?"),(0,l.kt)("p",null,"For added new metadata type of ",(0,l.kt)("a",{parentName:"p",href:"/standard/TIP-4.2"},"TIP-4.2")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create product that use new JSON type."),(0,l.kt)("li",{parentName:"ul"},"Send PR for change the docs."),(0,l.kt)("li",{parentName:"ul"},"Explain why it will be in Standard.")),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-721"},"Ethereum EIP-721")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.metaplex.com/token-metadata/specification"},"Solana v1.2.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TIPs/issues/62"},"TON NFT"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TIPs/issues/64"},"TON DATA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-12/tzip-12.md"},"Tezos TZIP12")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.binance.org/smart-chain/developer/nft-metadata-standard.html"},"BNS BEP721"))))}c.isMDXComponent=!0}}]);