(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9crG":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("9eSz"),c=a.n(l),m=a("p3AD");t.a=function(e){var t=Object(i.useStaticQuery)("3142611149").avatar.edges.find((function(t){return t.node.name===e.identifier}));return t?r.a.createElement(c.a,{fixed:t.node.childImageSharp.fixed,alt:e.name,style:{marginRight:Object(m.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}):null}},Nb6o:function(e,t,a){"use strict";a.r(t),a.d(t,"authorPageQuery",(function(){return E}));var n=a("q1tI"),r=a.n(n),i=a("IP2g"),l=a("9crG"),c=a("p3AD"),m=function(e){return e.name?r.a.createElement("a",{className:"no-underline",href:"https://github.com/"+e.name},r.a.createElement(i.a,{icon:["fab","github"]})):null},o=function(e){return e.name?r.a.createElement("a",{className:"no-underline",href:"https://twitter.com/"+e.name},r.a.createElement(i.a,{icon:["fab","twitter"]})):null},u=function(e){return e.name?r.a.createElement("a",{className:"no-underline",href:"https://www.linkedin.com/in/"+e.name},r.a.createElement(i.a,{icon:["fab","linkedin"]})):null},d=function(e){var t=e.author,a=e.identifier;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(1)}},r.a.createElement(l.a,{identifier:a,name:t.name}),r.a.createElement("p",null,t.summary&&r.a.createElement(r.a.Fragment,null,t.summary)," ",r.a.createElement(m,{name:t.github})," ",r.a.createElement(o,{name:t.twitter})," ",r.a.createElement(u,{name:t.linkedin})))},s=a("Bl7J"),f=a("vrFN"),h=a("9rpV"),p=a("kStc"),E=(t.default=function(e){var t=e.data,a=e.pageContext,n=e.location,i=t.site.siteMetadata.title,l=h[a.author],m=t.allMdx.edges;return r.a.createElement(s.a,{location:n,title:i},r.a.createElement(f.a,{title:l.name,description:l.summary}),r.a.createElement("h1",null,l.name),r.a.createElement(d,{identifier:a.author,author:l}),r.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),m.map((function(e){var t=e.node,n=t.frontmatter.title;return r.a.createElement(p.a,{key:t.fields.slug,author:l.name,date:t.frontmatter.date,postPath:t.fields.postPath,title:n,description:t.frontmatter.description,identifier:a.author,excerpt:t.excerpt,tags:t.frontmatter.tags})})))},"1019614518")},kStc:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("KGfB"),c=a("p3AD");t.a=function(e){var t=e.author,a=e.date,n=e.postPath,m=e.title,o=e.description,u=e.excerpt,d=e.identifier;return r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h3",{style:{marginBottom:Object(c.a)(1/4)}},r.a.createElement(i.Link,{style:{boxShadow:"none"},to:n},m)),r.a.createElement(l.a,{author:t,date:a,identifier:d})),r.a.createElement("section",null,r.a.createElement("p",null,o||u," ",r.a.createElement(i.Link,{to:n},"Read more"))))}}}]);
//# sourceMappingURL=component---src-templates-author-page-js-d793c7d6a203df61cbe7.js.map