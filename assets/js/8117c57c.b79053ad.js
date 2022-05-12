"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9263],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),f=i,p=u["".concat(c,".").concat(f)]||u[f]||h[f]||n;return a?r.createElement(p,o(o({ref:t},d),{},{components:a})):r.createElement(p,o({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7342:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),o=["components"],s={title:"Core description",sidebar_position:0,slug:"/standard/TIP-2"},c="DeCert \u2014 Decentralized Certificates",l={unversionedId:"standard/TIP-2/core-description",id:"standard/TIP-2/core-description",title:"Core description",description:"Abstract",source:"@site/../../src/standard/TIP-2/core-description.md",sourceDirName:"standard/TIP-2",slug:"/standard/TIP-2",permalink:"/standard/TIP-2",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-2/core-description.md",tags:[],version:"current",lastUpdatedAt:1652344370,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:0,frontMatter:{title:"Core description",sidebar_position:0,slug:"/standard/TIP-2"},sidebar:"tutorialSidebar",previous:{title:"1. FB0A",permalink:"/standard/TIP-1.1"},next:{title:"1. Reverse DeCert",permalink:"/standard/TIP-2.1"}},d={},h=[{value:"Abstract",id:"abstract",level:2},{value:"Issuance",id:"issuance",level:2},{value:"Resolving",id:"resolving",level:2},{value:"Reverse resolving",id:"reverse-resolving",level:2},{value:"Search",id:"search",level:2},{value:"Example: Decentralized Name Service (DeNS)",id:"example-decentralized-name-service-dens",level:2},{value:"Example of NIC smart contract methods",id:"example-of-nic-smart-contract-methods",level:2},{value:"Free TON Name Identity Certificate convention",id:"free-ton-name-identity-certificate-convention",level:2},{value:"Example: Ownership Certificate",id:"example-ownership-certificate",level:2},{value:"Reference",id:"reference",level:2}],u={toc:h};function f(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"decert--decentralized-certificates"},"DeCert \u2014 Decentralized Certificates"),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"There is a clear need for unified decentralized and distributed certificate system in Free TON. As described in more details below, such system would be used in providing many services which requires a certified provable key-value store. For example a Decentralized Name Service (DeNS), a Prove of Ownership / Prove of Purchase certificate and many others."),(0,n.kt)("p",null,"Current solutions (for example a TON DNS, proposed ",(0,n.kt)("a",{parentName:"p",href:"https://ton.org/DNS-HOWTO.txt"},"here"),") are either a large smart contracts which maintains a full list of records, or a tree-like solutions which shards the list based on some parameters. Neither of these solutions are satisfactory due to a lack of scalability, high costs of maintenance, long search time, single point of failure and so on."),(0,n.kt)("p",null,"Here I present a completely distributed system, which does not require centralized record, nor a tree of domains or records with almost zero latency."),(0,n.kt)("p",null,"The design relies heavily on\u0435 the principles of TIP-3 Token architecture with some notable modifications."),(0,n.kt)("h2",{id:"issuance"},"Issuance"),(0,n.kt)("p",null,"Root is a smart contract contains a Code of Certificate smart contract without data. The Root has methods for Certificate Issuance, Certificate Code Retrieval, Root PubKey retrieval and Version history. Each Certificate can become a Root, therefore a Root smart contract and its Certificate smart contract are the same. The Code contains an address of its Root."),(0,n.kt)("p",null,"When a User wishes to register it is calling a Certificate Issuance method in Root, sending a Certificate Data (for example an alphanumeric string of a certificate body)."),(0,n.kt)("p",null,"Root is taking its Public Key and a Code of Certificate smart contract, inserts a Certificate Data sent by a User, calculates the address of Certificate and checks if the address already has a Certificate or any other Code deployed by sending a bounced true message calling ",(0,n.kt)("inlineCode",{parentName:"p"},"getData")," method."),(0,n.kt)("p",null,"If a contract exists it means that a Certificate with the same Certificate Data already exists. The contract then can return a registration information to the Root which will return it to a User. If a contract does not exist the message will bounce to the Root smart contract which will mean the Certificate can be registered."),(0,n.kt)("p",null,"If Certificate does not exist the Root will Issue the Certificate by deploying the Certificate Contract with its Data. On deploy the Certificate will check that it has been deployed from the root address by comparing the address of a Root inside with the deployer address. If there is no match the deploy will fail."),(0,n.kt)("p",null,"Of course additional business logic steps could be included between the last two steps, such as monetization or other mechanics as shown below in one of the examples."),(0,n.kt)("h2",{id:"resolving"},"Resolving"),(0,n.kt)("p",null,"To resolve the Name any User can now call Get method ",(0,n.kt)("inlineCode",{parentName:"p"},"Resolve")," of a Root locally to obtain an Address. Root will use Certificate Code, Root PubKey, insert a name User wishes to resolve into Certificate Code and calculate the address."),(0,n.kt)("p",null,"To resolve a Root smart contract one can take any Certificate Core and resolve for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Root")," name."),(0,n.kt)("p",null,"A user application can cash the Certificate Code smart contract and Root PubKey once, after which resolving any name is achieved locally with a simple address calculation, with no need for network connection at all."),(0,n.kt)("p",null,"The Certificate itself contains variable types of addresses of a target smart contracts to which the Certificate owner wishes the name to point. A user should choose which type of address they wish to use."),(0,n.kt)("h2",{id:"reverse-resolving"},"Reverse resolving"),(0,n.kt)("p",null,"In order to make a reverse resolving a smart contract need to state its certificate address. The user will check if certificate indeed has contract address."),(0,n.kt)("h2",{id:"search"},"Search"),(0,n.kt)("p",null,"Of course search is one of the most important features of any name system. Knowing a Certificate Code hash enables to retrieve all smart contracts having the same hash by simply querying the blockchain state. Decoding contract data will produce a full list of names under specific Root. It would be quite easy to produce a table with all the certificate records."),(0,n.kt)("h2",{id:"example-decentralized-name-service-dens"},"Example: Decentralized Name Service (DeNS)"),(0,n.kt)("p",null,"Let\u2019s consider a DeNS Root is a smart contract which contains a Code of the Name Identity Certificate (NIC) smart contract. The Root has methods for Identity Registering, NIC Code Retrieval, Root PubKey retrieval, Version history."),(0,n.kt)("p",null,"When a User wishes to register an Identity it is calling a \xabRegName\xbb method in DeNS Root with the signed message of UTF-8 string (Name) together with a Registration Bid (a hash of a Bid Value in TONs with some salt) with value attached 1 TON."),(0,n.kt)("p",null,"DeNS Root is taking its Public Key and a NIC Code inserts a Name, calculates the NIC address and checks if the address already has a NIC Code deployed by sending a bounced true message calling method \xabgetName\xbb. Return to User a Whois Information."),(0,n.kt)("p",null,"If it bounces or a registration period in Whois is less than 28 days DeNS Root will send the name into an Auction Smart Contract together with a Registration Bid Hash and a number of years before expiration. First bidder determines the duration of the auctioned name. Other users will be able to Bid for the same name but only for same duration with their Bids following exactly the same process. Auction duration is minimum 7 days per year of name duration but no more than 28 days. At the end of the Auction all participants will submit to the Auction contract a message signed from the address of the original bid together with their original bid price and salt. The winner of the auction will be determined by the highest bid per day and will pay the second higher price for the Name Certificate."),(0,n.kt)("p",null,"Once DeNS Root knows the Auction result it will wait until registration period ends if the name certificate has existed before or immediately deploy the NIC smart contract into the address calculated as a NIC Contract Code with a Name inserted into initial data and PubKey of the Owner passed in its constructor."),(0,n.kt)("p",null,"To resolve the Name any User can now call Get method \xabResolve\xbb of DeNS Root locally to obtain an Address. DeNS Root will use Code of NIC smart contract, a DeNS Root PubKey, insert any name they are wishing to resolve into NIC Code and calculate the address."),(0,n.kt)("p",null,"Since most of the time a user application will just cash the Code of NIC smart contract and DeNS PubKey, resolving any name is achieved locally with a simple address calculation, with no need for network connection at all."),(0,n.kt)("h2",{id:"example-of-nic-smart-contract-methods"},"Example of NIC smart contract methods"),(0,n.kt)("p",null,"Whois \u2014 sends all certificate data: a name, date of registration, owner PubKey"),(0,n.kt)("p",null,"GetWhois is a whois getter"),(0,n.kt)("p",null,"GetAddress by Type, for example \u2014 ADNL, Wallet,"),(0,n.kt)("p",null,"RegName\nGetResolve\nChangeAddress\nChangeOwnership"),(0,n.kt)("h2",{id:"free-ton-name-identity-certificate-convention"},"Free TON Name Identity Certificate convention"),(0,n.kt)("p",null,"Format: any alfa-numeric string except for a dot (.) and slash (/) which are prohibited."),(0,n.kt)("p",null,"Only top level names are provided by DeNS Root, but any NIC smart contract can point into a next level of hierarchy which is divided by /"),(0,n.kt)("p",null,"top-name/sub-name/"),(0,n.kt)("p",null,"The dot (.) is specifically prohibited as to not create confusions with a current internet domain system."),(0,n.kt)("h2",{id:"example-ownership-certificate"},"Example: Ownership Certificate"),(0,n.kt)("p",null,"The Certificate is issued by Root for ownership of an item. Let\u2019s call it certificate of Ownership or COW for short. COW will include a serial number of an item a User want to prove owning. Since the PubKey of an owner of certificate is presented it is easy to prove an ownership of an Item by finding the certificate with corresponding serial number calculating the address of this certificate with this number, POW Code and Root PubKey without a need to maintain any centralized ledger of said items. The transfer of ownership of an Item is easily supported as well by calling a ChangeOwnership Method in the POW signed by the owner private key."),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://forum.freeton.org/t/contest-proposal-decentralized-name-service-dens/7807"},"Contest Proposal: Decentralized Name Service (DeNS)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/standard/TIP-2.1"},"ReDeNS \u2014 Reverse DeCert (TIP-2.1)"))))}f.isMDXComponent=!0}}]);