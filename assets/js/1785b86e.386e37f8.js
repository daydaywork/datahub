(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3920],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?s.createElement(g,r(r({ref:t},c),{},{components:n})):s.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1220:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var s=n(2122),a=n(9756),i=(n(7294),n(4137)),r=["components"],o={title:"Business Glossary",sidebar_label:"Business Glossary",slug:"/metadata-ingestion/source_docs/business_glossary",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/business_glossary.md"},l="Business Glossary",u={unversionedId:"metadata-ingestion/source_docs/business_glossary",id:"metadata-ingestion/source_docs/business_glossary",isDocsHomePage:!1,title:"Business Glossary",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/business_glossary.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/business_glossary",permalink:"/docs/metadata-ingestion/source_docs/business_glossary",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/business_glossary.md",version:"current",frontMatter:{title:"Business Glossary",sidebar_label:"Business Glossary",slug:"/metadata-ingestion/source_docs/business_glossary",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/business_glossary.md"},sidebar:"overviewSidebar",previous:{title:"BigQuery",permalink:"/docs/metadata-ingestion/source_docs/bigquery"},next:{title:"dbt",permalink:"/docs/metadata-ingestion/source_docs/dbt"}},c=[{value:"Setup",id:"setup",children:[]},{value:"Capabilities",id:"capabilities",children:[]},{value:"Quickstart recipe",id:"quickstart-recipe",children:[]},{value:"Config details",id:"config-details",children:[{value:"Business Glossary File Format",id:"business-glossary-file-format",children:[]}]},{value:"Compatibility",id:"compatibility",children:[]},{value:"Questions",id:"questions",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"business-glossary"},"Business Glossary"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Works with ",(0,i.kt)("inlineCode",{parentName:"p"},"acryl-datahub")," out of the box."),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"This plugin pulls business glossary metadata from a yaml-formatted file. An example of one such file is located in the examples directory ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/bootstrap_data/business_glossary.yml"},"here"),"."),(0,i.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: datahub-business-glossary\n  config:\n    # Coordinates\n    file: /path/to/business_glossary_yaml\n\nsink:\n  # sink configs\n")),(0,i.kt)("h2",{id:"config-details"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"file")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Path to business glossary file to ingest.")))),(0,i.kt)("h3",{id:"business-glossary-file-format"},"Business Glossary File Format"),(0,i.kt)("p",null,"The business glossary file format should be pretty easy to understand using the sample business glossary checked in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/bootstrap_data/business_glossary.yml"},"here")),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Compatible with version 1 of business glossary format.\nThe source will be evolved as we publish newer versions of this format."),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}p.isMDXComponent=!0}}]);