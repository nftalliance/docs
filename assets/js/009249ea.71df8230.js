"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5201],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="DeBot Specifications",c={unversionedId:"learn/decentralization/debot-specifications",id:"learn/decentralization/debot-specifications",title:"DeBot Specifications",description:"Objective",source:"@site/../../src/learn/decentralization/debot-specifications.md",sourceDirName:"learn/decentralization",slug:"/learn/decentralization/debot-specifications",permalink:"/learn/decentralization/debot-specifications",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/learn/decentralization/debot-specifications.md",tags:[],version:"current",lastUpdatedAt:1652344370,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"DePool Specifications",permalink:"/learn/decentralization/depool-specifications"},next:{title:"DeBot Consortium",permalink:"/learn/decentralization/debot-consortium"}},d={},u=[{value:"Objective",id:"objective",level:2},{value:"Basic terms",id:"basic-terms",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Proof of State",id:"proof-of-state",level:2},{value:"DeBot Interfaces",id:"debot-interfaces",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Description",id:"description",level:2},{value:"How to use DInterface in DeBot",id:"how-to-use-dinterface-in-debot",level:3},{value:"DeBot Start",id:"debot-start",level:3},{value:"DInterface specification",id:"dinterface-specification",level:2},{value:"DInterfaces support in DeBot Browser",id:"dinterfaces-support-in-debot-browser",level:2},{value:"DEngine versioning",id:"dengine-versioning",level:2},{value:"Example of DInterface",id:"example-of-dinterface",level:2},{value:"Description",id:"description-1",level:3},{value:"Functions",id:"functions",level:3},{value:"Declaration in Solidity",id:"declaration-in-solidity",level:3},{value:"Declaration in C++",id:"declaration-in-c",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Solidity",id:"solidity",level:4},{value:"DeBot Special Features",id:"debot-special-features",level:2},{value:"Get-methods",id:"get-methods",level:3},{value:"Developer Example",id:"developer-example",level:4},{value:"Support in DEngine",id:"support-in-dengine",level:4},{value:"Onchain function call",id:"onchain-function-call",level:3},{value:"Developer example",id:"developer-example-1",level:4},{value:"Support in DEngine",id:"support-in-dengine-1",level:4},{value:"Invoking DeBot",id:"invoking-debot",level:2},{value:"Security notes",id:"security-notes",level:2}],p={toc:u};function f(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"debot-specifications"},"DeBot Specifications"),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"Provide a ",(0,r.kt)("strong",{parentName:"p"},"secure")," and ",(0,r.kt)("strong",{parentName:"p"},"convenient")," environment to work with smart-contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"emulate calling smart-contract functions locally on the client;"),(0,r.kt)("li",{parentName:"ul"},"debug blockchain transactions;"),(0,r.kt)("li",{parentName:"ul"},"interact with smart-contracts deployed in the blockchain.")),(0,r.kt)("h2",{id:"basic-terms"},"Basic terms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DeBot")," \u2014 a smart contract facilitating conversation-like flow communication with a target smart contract;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target smart contract")," \u2014 a smart contract for which DeBot is created. DeBot is an interface to this smart contract;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DeBot protocol")," \u2014 a set of rules describing the communication between browser and DeBot: how to call DeBot\nfunctions and how to interpret its answers;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DeBot engine (DEngine)")," \u2014 a program component that executes DeBot and parses its answer using DeBot protocol;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DeBot browser")," \u2014 a program, which creates instances of DEngine for executed DeBot and renders the user interface.")),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DeBot Architecture",src:n(8874).Z,width:"631",height:"261"})),(0,r.kt)("p",null,"DeBot platform consists of the following elements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DeBot smart contract;"),(0,r.kt)("li",{parentName:"ul"},"DeBot browser;"),(0,r.kt)("li",{parentName:"ul"},"Target smart contract(s).")),(0,r.kt)("p",null,"One target smart contract can have several DeBot and vise versa. DeBot is deployed to the blockchain. DeBot browser\nruns on client. It downloads DeBot code and runs it inside the DEngine."),(0,r.kt)("h2",{id:"proof-of-state"},"Proof of State"),(0,r.kt)("p",null,"Transactions can be verified by running DeBot locally and comparing the result of execution to the account state in the\nblockchain."),(0,r.kt)("h2",{id:"debot-interfaces"},"DeBot Interfaces"),(0,r.kt)("h3",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"DeBot is a smart contract and smart contracts are isolated from each other and from the blockchain, their capabilities\nare limited by the commands of the virtual machine on which they are executed. But DeBot must have more possibilities.\nDeBot need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"receive input from users;"),(0,r.kt)("li",{parentName:"ul"},"query info about other smart contracts;"),(0,r.kt)("li",{parentName:"ul"},"query transactions and messages;"),(0,r.kt)("li",{parentName:"ul"},"receive data from external subsystems (like file system) and external devices (like NFC, camera and so on);"),(0,r.kt)("li",{parentName:"ul"},"call external function libraries that allow to do operations that are not supported by VM. For example, work with\njson, convert numbers to string and vice versa, encrypt/decrypt/sign data.")),(0,r.kt)("p",null,"To cover all these needs we should design different ",(0,r.kt)("strong",{parentName:"p"},"DeBot Interfaces")," (",(0,r.kt)("inlineCode",{parentName:"p"},"DInterfaces"),") which can be used in DeBot and\nwhich must be supported in DeBot Browsers. These interfaces should match the requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"comprehensive")," \u2014 interfaces should describe all types of communication accessible on modern devices;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"universal")," \u2014 interfaces should be abstract from certain OS and hardware;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"atomic")," \u2014 every communication channel should be separately described in the interface for further flexible resource\naccess management;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"convenient")," \u2014 even low-skilled developers should be able to use this interface in their DeBot.")),(0,r.kt)("p",null,"In this model DeBot Engine should act like a proxy between DeBot Browser and DeBot. But it can have builtin\nimplementation of very basic DInterfaces (e.g. working with json)."),(0,r.kt)("p",null,"Also, we need to describe the manifest for DeBot. DeBot developer will describe all needed interfaces in this manifest\nand the DeBot Browser will check it before running DeBot. We need this manifest to keep users secure and private when\nusing DeBot."),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Every DeBot must declare which DInterfaces it will use. For this purpose it must have ",(0,r.kt)("inlineCode",{parentName:"p"},"getRequiredInterfaces()")," function\nwhich returns array of required interfaces."),(0,r.kt)("p",null,"Every interface must have an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," which is an unsigned 256-bit integer and an address which is used in DeBot as a\ndestination ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," of internal messages. Address must be a standard Everscale address consisting of ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBOT_WC")," (equal\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"0xDB"),") as a ",(0,r.kt)("inlineCode",{parentName:"p"},"workchain_id")," part and interface ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," part (see ",(0,r.kt)("em",{parentName:"p"},'"Telegram Open Network Blockchain"'),"\nspecification, section 3.1.2 for details about TL-B scheme for address)."),(0,r.kt)("p",null,"For example, in solidity ",(0,r.kt)("inlineCode",{parentName:"p"},"getRequiredInterfaces")," can be implemented like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// Base contract for all DeBot\nabstract contract Debot {\n\n    i32 constant DEBOT_WC = - 31;\n\n    function getRequiredInterfaces() virtual returns (uint256[] interfaces);\n}\n\ncontract DebotA is Debot {\n\n    function getRequiredInterfaces() override returns (uint256[] interfaces) {\n        return [ID_TERMINAL, ID_MENU, ...];\n    }\n\n}\n")),(0,r.kt)("h3",{id:"how-to-use-dinterface-in-debot"},"How to use DInterface in DeBot"),(0,r.kt)("p",null,"To use an interface DeBot should import source file with DInterface declaration and call its methods as any other smart\ncontract methods in Everscale \u2014 by sending internal messages to interface address."),(0,r.kt)("p",null,"Before running the DeBot, DeBot Browser should provide callbacks for DEngine to receive all requests to DInterfaces.\nRequests are packed into internal messages. When Browser receives a message from DEngine it should unpack the message,\ndecode its body, call DInterface function, pack results to internal message and return it to DEngine\nusing ",(0,r.kt)("inlineCode",{parentName:"p"},"Dengine.send(msg)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface BrowserCallbacks {\n    // Message from Debot to Browser with encoded DInterface call\n    send(message: string): Promise<void>\n\n    // Request from DEngine to approve some action (for example, send mesage to blockchain)\n    approve(action: {}): boolean\n\n    // Request from DeBot to call another DeBot\n    invoke(debotAddress: string, message: string): Promise<void>\n}\n")),(0,r.kt)("h3",{id:"debot-start"},"DeBot Start"),(0,r.kt)("p",null,"Befor starting DeBot should also provide metadata, which includes its name, version, authorship information,\ndescription, language and ABI. This is accomplished through the ",(0,r.kt)("inlineCode",{parentName:"p"},"getDebotInfo()")," mandatory function. Along\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"getRequiredInterfaces()")," this function is defined in the base\ncontract ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/debots/blob/main/Debot.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"Debot.sol")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// Base contract for all DeBots\nabstract contract Debot {\n    /// @notice ACTION structure\n    struct Action {\n        // String that describes action step, should be printed to user\n        string desc;\n        // Name of debot function that runs this action\n        string name;\n        // Action type\n        uint8 actionType;\n        // Action attributes.\n        // Syntax: "attr1,attr2,attr3=value,...".\n        // Example: "instant,fargs=fooFunc,sign=by-user,func=foo"\n        string attrs;\n        // Context to transit to\n        uint8 to;\n        // Action internal data\n        TvmCell misc;\n    }\n\n    struct Context {\n        uint8 id;           // Context ordinal\n        string desc;        // message to be printed to the user\n        Action[] actions;   // list of actions\n    }\n\n    string s_dabi;\n\n    /*\n     * Public debot interface\n     */\n\n    /// @notice Returns list of interfaces used by DeBot.\n    function getRequiredInterfaces() public view virtual returns (uint256[] interfaces);\n    /// @notice Used for error handling for external messages if error code >= 400 (TVM) and < 500 (PROCESSING)\n    function getErrorDescription(uint32 error) public pure virtual returns (string desc);\n    /// @notice Invoked by DeBot Browser at debot startup. Returns array of debot contexts.\n    function fetch() public virtual returns (Context[] contexts);\n    /// @notice DeBot entry point.\n    function start() public virtual;\n\n    /// @notice Returns DeBot metadata.\n    /// @return name String with name of debot, e.g. "DePool".\n    /// @return version Semver version of debot, that will be converted to string like "x.y.z".\n    /// @return publisher String with info about who has deployed debot to blokchain, e.g. "TON Labs".\n    /// @return caption (10-20 ch.) String with short description, e.g. "Work with Smthg".\n    /// @return author String with name of author of DeBot, e.g. "Ivan Ivanov".\n    /// @return support Free TON address of author for questions and donations.\n    /// @return hello String with first messsage with DeBot description.\n    /// @return language (ISO-639) String with debot interface language, e.g. "en".\n    /// @return dabi String with debot ABI.\n    function getDebotInfo() public functionID(0xDEB) view virtual returns(\n        string name, string version, string publisher, string caption, string author,\n        address support, string hello, string language, string dabi, bytes icon\n    );\n\n    /// @notice Allow to set debot ABI. Do it before using debot.\n    function setABI(string dabi) public {\n        require(tvm.pubkey() == msg.pubkey(), 100);\n        tvm.accept();\n        s_dabi = dabi;\n    }\n\n    /// @notice Returns DeBot ABI.\n    /// @dev Deprecated. Remove later. https://github.com/tonlabs/TON-SDK/blob/dc0631a726295c4e7190361c417214c301ec4e01/ton_client/src/debot/dengine.rs#L175\n    function getDebotOptions() public view returns (\n        uint8 options, string debotAbi, string targetAbi, address targetAddr\n    ) {\n        debotAbi = s_dabi;\n        targetAbi = "";\n        targetAddr = address(0);\n        options = 1;\n    }\n}\n\ncontract MyDeBot is Debot {\n    function getErrorDescription(uint32 error) public pure override returns (string desc) {\n        tvm.log(format("getErrorDescription: {}", error));\n        desc = format("some description about code {}", error);\n        // TODO description error codes\n    }\n    function fetch() public override returns (Context[] contexts) {\n        tvm.log("fetch");\n        // TODO fetch Context\n    }\n    function start() public override {\n        tvm.log("start");\n        // TODO start\n    }\n\n    function getDebotInfo() public functionID(0xDEB) view override returns(\n        string name, string version, string publisher, string caption, string author,\n        address support, string hello, string language, string dabi, bytes icon\n    ) {\n        tvm.log("getDebotInfo");\n        name = "MyDeBot";\n        version = "1.0.0-alpha.0";\n        publisher = "Everscale";\n        caption = "My first DeBot";\n        author = "Everscale";\n        support = address.makeAddrStd(0, 0x0);\n        hello = "Hello first user!";\n        language = "en";\n        dabi = s_dabi;\n        icon = "";\n    }\n\n    function getRequiredInterfaces() public view override returns (uint256[] interfaces) {\n        tvm.log("getRequiredInterfaces");\n        // TODO add dependency interfaces\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run debug log:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx tonos-cli debot --debug fetch <ADDRESS>\n\n19:43:58 [DEBUG] (1) ton_client::debot::dengine: running getRequiredInterfaces, addr 0:5225bff6b13f40518f523c18c7af8dcc46a3369845d98cc7df4e36acca5f8490\n19:43:58 [INFO] getRequiredInterfaces\n\n19:43:58 [DEBUG] (1) ton_client::debot::dengine: running getDebotInfo, addr 0:5225bff6b13f40518f523c18c7af8dcc46a3369845d98cc7df4e36acca5f8490\n19:43:58 [INFO] getDebotInfo\n19:43:58 [DEBUG] (1) ton_client::debot::dengine: run_debot_external getDebotOptions, args: {}\n19:43:58 [DEBUG] (1) ton_client::debot::dengine: running getDebotOptions, addr 0:5225bff6b13f40518f523c18c7af8dcc46a3369845d98cc7df4e36acca5f8490\n19:43:58 [DEBUG] (1) ton_client::debot::dengine: run_debot_external fetch, args: {}\n19:43:58 [DEBUG] (1) ton_client::debot::dengine: running fetch, addr 0:5225bff6b13f40518f523c18c7af8dcc46a3369845d98cc7df4e36acca5f8490\n19:43:58 [INFO] fetch\nDeBot Info:\nName   : MyDeBot\nVersion: 1.0.0-alpha.0\nAuthor : Everscale\nPublisher: Everscale\nSupport: 0:0000000000000000000000000000000000000000000000000000000000000000\nDescription: My first DeBot\nHello first user!\nRun the DeBot (y/n)?\ny\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: running getRequiredInterfaces, addr 0:5225bff6b13f40518f523c18c7af8dcc46a3369845d98cc7df4e36acca5f8490\n19:44:02 [INFO] getRequiredInterfaces\n\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: running getDebotInfo, addr 0:5225bff6b13f40518f523c18c7af8dcc46a3369845d98cc7df4e36acca5f8490\n19:44:02 [INFO] getDebotInfo\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: run_debot_external getDebotOptions, args: {}\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: running getDebotOptions, addr 0:5225bff6b13f40518f523c18c7af8dcc46a3369845d98cc7df4e36acca5f8490\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: run_debot_external fetch, args: {}\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: running fetch, addr 0:5225bff6b13f40518f523c18c7af8dcc46a3369845d98cc7df4e36acca5f8490\n19:44:02 [INFO] fetch\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: switching to 0\n19:44:02 [DEBUG] (1) tonos_cli::debot::callbacks: switched to ctx 0\n\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: run_action: start\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: run_debot_external start, args: {}\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: running start, addr 0:5225bff6b13f40518f523c18c7af8dcc46a3369845d98cc7df4e36acca5f8490\n19:44:02 [INFO] start\n19:44:02 [DEBUG] (1) ton_client::debot::dengine: instant_switch = false, state_to = 0\n19:44:02 [DEBUG] (1) tonos_cli::debot::callbacks: no more actions, exit loop\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Before starting the DeBot, DeBot Browser creates new instance of DEngine with address of DeBot;"),(0,r.kt)("li",{parentName:"ol"},"DEngine downloads DeBot state, queries metadata and list of DInterfaces required by DeBot and returns the list to\nBrowser;"),(0,r.kt)("li",{parentName:"ol"},"Browser must check that it supports all required DInterfaces. If one of interfaces is not supported, Browser must\nreport error to the user (application) and not start the DeBot otherwise Browser must list requested interfaces to\nuser (application);"),(0,r.kt)("li",{parentName:"ol"},"All required interfaces should be approved by user (application);"),(0,r.kt)("li",{parentName:"ol"},"After the list of interfaces is approved, the DeBot Browser starts DeBot using ",(0,r.kt)("inlineCode",{parentName:"li"},"Dengine.start(callback)"),".")),(0,r.kt)("p",null,"On every interface call Browser should check permission for DeBot and on success execute it according to isolation\nrequirement if needed."),(0,r.kt)("p",null,"Below you can see DeBot start sequence:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DeBot sequence",src:n(2476).Z,width:"661",height:"771"})),(0,r.kt)("h2",{id:"dinterface-specification"},"DInterface specification"),(0,r.kt)("p",null,"Every DInterface must be discussed and accepted by DeBot Interface Specifications (DIS) Consortium before it can be used\nin DeBot. All accepted interfaces are published in ",(0,r.kt)("a",{parentName:"p",href:"/learn/decentralization/debot-consortium"},"DeBot Interface Specifications Consortium"),"."),(0,r.kt)("p",null,"Everybody can suggest new DInterface. Go to repo and follow the instructions."),(0,r.kt)("h2",{id:"dinterfaces-support-in-debot-browser"},"DInterfaces support in DeBot Browser"),(0,r.kt)("p",null,"DeBot Browser can support and implement any or all DInterfaces published in DIS repo depending on browser's\ncapabilities. For example, console browser cannot support external devices like camera, NFC, microphone and so on."),(0,r.kt)("p",null,"Some interfaces required for basic DeBot operation are built into the DEngine itself (SDK, Hex, JsonDeserialize). They\nare marked as such in their respective readme files in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/learn/decentralization/debot-consortium"},"DeBot Interface Specifications Consortium"),"."),(0,r.kt)("h2",{id:"dengine-versioning"},"DEngine versioning"),(0,r.kt)("p",null,"DEngine as a SDK module should have a version of SDK itself."),(0,r.kt)("p",null,"DIS statuses: Proposed, Accepted, Published."),(0,r.kt)("h2",{id:"example-of-dinterface"},"Example of DInterface"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RawInput")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8796536366ee21852db56dccb60bc564598b618c865fc50c8b1ab740bba128e3"))))),(0,r.kt)("h3",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Allows to get string from user"),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Function ",(0,r.kt)("inlineCode",{parentName:"p"},"input")),(0,r.kt)("p",null,"arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"answerId"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," \u2014 function id of result callback"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prompt"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes")," \u2014 string printed to the user and describing what to enter")),(0,r.kt)("p",null,"returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes")," \u2014 string entered by user")),(0,r.kt)("h3",{id:"declaration-in-solidity"},"Declaration in Solidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"interface IRawInput {\n    function input(uint32 answerId, string prompt) external returns (string value);\n}\n\nLibrary RawInput {\n    uint256 constant ID_RAWINPUT = 0x8796536366ee21852db56dccb60bc564598b618c865fc50c8b1ab740bba128e3\n    // Callback Function Prototype\n    function inputResult(uint32 answerId, string prompt) public {\n        address addr = address.makeAddrStd(DEBOT_WC, ID_RAWINPUT);\n        IRawInput(addr).input(answerId, prompt);\n    }\n}\n")),(0,r.kt)("h3",{id:"declaration-in-c"},"Declaration in C++"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"namespace tvm { namespace schema {\n\n__interface IRawInput {\n  [[internal, answer_id]]\n  string input(string prompt);\n};\n")),(0,r.kt)("h3",{id:"code-example"},"Code Example"),(0,r.kt)("h4",{id:"solidity"},"Solidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity >=0.6.0;\nimport "Debot.sol";\nimport "RawInput.sol";\n\ncontract ExampleDebot is Debot, RawInput {\n    function start() public {\n        RawInput.input(tvm.functionId(inputResult), "enter your name:");\n        RawInput.input(tvm.functionId(inputResult), "enter your wallet address:");\n    }\n\n    function inputResult(string text) public override {\n            require(text == "Debot");\n    }\n\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"C++")," DeBot are currently in the state of early development, and not all features all completely defined for them yet.")),(0,r.kt)("h2",{id:"debot-special-features"},"DeBot Special Features"),(0,r.kt)("p",null,"DeBot have 3 special features:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"calling")," \u2014 get-methods of target smart contracts;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"calling")," \u2014 external functions of target smart contracts onchain;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"invoking")," \u2014 other DeBot in a local environment.")),(0,r.kt)("p",null,"Ordinary Everscale smart contracts cannot use 1st and 2nd features because they cannot produce external inbound messages. But DeBot can, due to the fact that they are executed in DEngine, that allows DeBot to generate these kinds of messages, send them to blockchain and return results to DeBot."),(0,r.kt)("p",null,"In terms of DeBot, all these features are implemented without ",(0,r.kt)("a",{parentName:"p",href:"/learn/decentralization/debot-specifications#debot-interfaces"},"DInterfaces")," but in a native way, like two smart contracts communicating with each other \u2014 by sending messages directly to target address."),(0,r.kt)("p",null,"But with only one difference \u2014 to call a get-method or call a function onchain DeBot must generate external inbound message, while to invoke another DeBot, it should generate an internal message to the invoked DeBot address."),(0,r.kt)("p",null,"DEngine distinguishes between get-methods and onchain calls by examining the sign header of the message.  Signed messages (",(0,r.kt)("inlineCode",{parentName:"p"},"sign: true"),") are considered onchain calls, while unsigned messages (",(0,r.kt)("inlineCode",{parentName:"p"},"sign: false"),") are considered to be get-method calls."),(0,r.kt)("h3",{id:"get-methods"},"Get-methods"),(0,r.kt)("h4",{id:"developer-example"},"Developer Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solidity")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function showTasks(uint32 index) public view {\n    index = index;\n    optional(uint256) none;\n    ITodo(m_address).getTasks{\n        abiVer: 2,\n        extMsg: true,\n        sign: false,\n        pubkey: none,\n        time: uint64(now),\n        expire: 0,\n        callbackId: tvm.functionId(showTasks_),\n        onErrorId: tvm.functionId(onError)\n    }();\n}\n")),(0,r.kt)("h4",{id:"support-in-dengine"},"Support in DEngine"),(0,r.kt)("p",null,"DEngine executes DeBot and checks if it produces external inbound messages. If yes, then DEngine analyzes each message by scanning signature and public key bits in message body to understand if message is for get-method call. If bits are zero DEngine downloads target contract and runs its get-method, then returns results to DeBot by calling its function set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"callbackId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"onErrorId")," (in case of errors) headers of message body."),(0,r.kt)("h3",{id:"onchain-function-call"},"Onchain function call"),(0,r.kt)("h4",{id:"developer-example-1"},"Developer example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solidity")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"IMsig(m_msigAddress).sendTransaction{\n    abiVer: 2,\n    extMsg: true,\n    sign: true,\n    pubkey: pubkey,\n    time: uint64(now),\n    expire: 0,\n    callbackId: tvm.functionId(waitBeforeDeploy),\n    onErrorId: tvm.functionId(onErrorRepeatCredit)\n}(m_address, INITIAL_BALANCE, false, 3, empty);\n}\n")),(0,r.kt)("h4",{id:"support-in-dengine-1"},"Support in DEngine"),(0,r.kt)("p",null,"DEngine executes DeBot and checks if it produces external inbound messages. If there is one, DEngine analyzes if it is onchain call by scanning signature and public key bits in message body. If signature bit is 1 then DEngine does the following things."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Downloads target smart contract, signs the message and emulates its transaction locally;"),(0,r.kt)("li",{parentName:"ol"},"Checks if transaction produces outbound internal messages with funds;"),(0,r.kt)("li",{parentName:"ol"},"Requests permission from DeBot Browser to send this message onchain. Request contains information about funds that will be spent if message will be executed onchain and message itself;"),(0,r.kt)("li",{parentName:"ol"},"If DeBot Browser allows to send message, DEngine sends message to blockchain.")),(0,r.kt)("h2",{id:"invoking-debot"},"Invoking DeBot"),(0,r.kt)("p",null,"DeBot can call another DeBot by simply sending internal message to it."),(0,r.kt)("p",null,"After DeBot execution DEngine filters all internal messages produced by DeBot with destination addresses with workchain 0. This filter allows to separate DInterface calls (which have 0xDB workchain id) from DeBot invokes. If there are invoke messages, DEngine sends them to Browser through BrowserCallbacks interface. Browser (or user) has to approve the invoke of a new DeBot, at which point Browser creates a new DEngine instance, downloads target DeBot and transfers the message to it."),(0,r.kt)("p",null,"Browsers should generally support a common queue for messages from several DeBot."),(0,r.kt)("h2",{id:"security-notes"},"Security notes"),(0,r.kt)("p",null,"At start browser creates a DEngine instance, and receives DeBot metadata and list of required DInterfaces through DEngine, and checks them for compatibility and security."),(0,r.kt)("p",null,"When DeBot is running, DEngine proxies all DInterface calls (except calls to builtin interfaces supported by engine itself like SDK calls) directly to Browser which must decide to execute or reject them."),(0,r.kt)("p",null,"Get-method calls are always allowed. Executed by DEngine."),(0,r.kt)("p",null,"External function calls must be approved by Browser. Executed by DEngine."),(0,r.kt)("p",null,"Other DeBot calls are always allowed. But executed by Browser which can block invoke if needed."))}f.isMDXComponent=!0},8874:function(e,t,n){t.Z=n.p+"assets/images/debot-architecture-00633cb203e86293e1c3fbbcef180f29.svg"},2476:function(e,t,n){t.Z=n.p+"assets/images/debot-sequence-caa28f63d66159ccdd2d6cb4117db283.svg"}}]);