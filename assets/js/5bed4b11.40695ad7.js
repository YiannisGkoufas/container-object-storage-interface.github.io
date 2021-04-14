(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{114:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(114)),c={title:"Deploying COSI"},i={unversionedId:"deployment-guide",id:"deployment-guide",isDocsHomePage:!1,title:"Deploying COSI",description:"This document describes steps for Kubernetes administrators to setup Container Object Storage Interface (COSI) onto a Kubernetes cluster.",source:"@site/docs/deployment-guide.md",slug:"/deployment-guide",permalink:"/docs/deployment-guide",editUrl:"https://github.com/container-object-storage-interface/container-object-storage-interface.github.io/docs/deployment-guide.md",version:"current",sidebar:"docs",previous:{title:"Internals",permalink:"/docs/cosi/internals"},next:{title:"Using COSI",permalink:"/docs/user-guide"}},s=[{value:"Overview",id:"overview",children:[{value:"Quick Start",id:"quick-start",children:[]},{value:"CustomResourceDefinitions",id:"customresourcedefinitions",children:[]},{value:"Controller",id:"controller",children:[]},{value:"Sample Driver &amp; Sidecar",id:"sample-driver--sidecar",children:[]},{value:"Node Adapter",id:"node-adapter",children:[]}]}],l={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes steps for Kubernetes administrators to setup Container Object Storage Interface (COSI) onto a Kubernetes cluster."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Following components that need to be deployed in Kubernetes to setup COSI."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CustomResourceDefinitions (CRDs)"),Object(o.b)("li",{parentName:"ul"},"Controller"),Object(o.b)("li",{parentName:"ul"},"Driver"),Object(o.b)("li",{parentName:"ul"},"Sidecar for the driver"),Object(o.b)("li",{parentName:"ul"},"Node Adapter")),Object(o.b)("h3",{id:"quick-start"},"Quick Start"),Object(o.b)("p",null,"Execute following commands to setup COSI:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"# Install CRDs\nkubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-api\n\n# Install controller\nkubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-controller\n\n# Sample Provisioner and Sidecar\nkubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-provisioner-sidecar\n\n# Node Adapter\nkubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-csi-adapter\n")),Object(o.b)("h3",{id:"customresourcedefinitions"},"CustomResourceDefinitions"),Object(o.b)("p",null,"COSI acts on following custom resource definitions (CRDs):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BucketRequest")," - Represents a request to provision a Bucket"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BucketClass")," - Represents a class of Buckets with similar characteristics"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Bucket")," - Represents a Bucket or its equivalent in the storage backend"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BucketAccessRequest")," - Represents a request to access a Bucket"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BucketAccessClass")," - Represents a class of accessors with similar access requirements"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BucketAccess")," - Represents a access token or service account in the storage backend")),Object(o.b)("p",null,"All ",Object(o.b)("a",{parentName:"p",href:"../crds"},"COSI custom resource definitions")," can be installed using ",Object(o.b)("a",{parentName:"p",href:"../kustomization.yaml"},"kustomization file")," and ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," with following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"kubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-api\n")),Object(o.b)("h3",{id:"controller"},"Controller"),Object(o.b)("p",null,"COSI controller can be setup using the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/container-object-storage-interface-controller/blob/master/kustomization.yaml"},"kustomization file")," from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/container-object-storage-interface-controller"},"container-object-storage-interface-controller")," repository with following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"kubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-controller\n")),Object(o.b)("p",null,"The controller will be deployed in the ",Object(o.b)("inlineCode",{parentName:"p"},"default")," namespace."),Object(o.b)("h3",{id:"sample-driver--sidecar"},"Sample Driver & Sidecar"),Object(o.b)("p",null,"Sample Driver & Sidecar can be setup using the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/container-object-storage-interface-provisioner-sidecar/blob/master/kustomization.yaml"},"kustomization file")," from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/container-object-storage-interface-provisioner-sidecar"},"container-object-storage-interface-provisioner-sidecar")," repository with following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"kubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-provisioner-sidecar\n")),Object(o.b)("h3",{id:"node-adapter"},"Node Adapter"),Object(o.b)("p",null,"Node adapter can be setup using the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/container-object-storage-interface-csi-adapter/blob/master/kustomization.yaml"},"kustomization file")," from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/container-object-storage-interface-csi-adapter"},"container-object-storage-interface-csi-adapter")," repository with following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"kubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-csi-adapter\n")))}b.isMDXComponent=!0}}]);