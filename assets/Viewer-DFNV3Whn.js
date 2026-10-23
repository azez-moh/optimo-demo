import{r as v,m as s,M as A}from"./index-DN6uaHpG.js";import{_ as N,C as W,O as L}from"./OrbitControls-C8hLWZff.js";import{M as X,m as $}from"./machines-_IhhJRvI.js";import{S as q}from"./Scene-pjK4JSdO.js";import{u as w,a as J}from"./events-776716bd.esm-C9HavFlx.js";import{Z as _,_ as K,M as Q,$ as Y,C as ee,d as E}from"./three.module-CPoxFd_6.js";const re={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},te={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},ae=v.forwardRef(({scale:e=10,frames:n=1/0,opacity:m=1,width:r=1,height:t=1,blur:a=1,near:i=0,far:l=10,resolution:u=512,smooth:U=!0,color:S="#000000",depthWrite:O=!1,renderOrder:F,...G},V)=>{const D=v.useRef(null),f=w(o=>o.scene),c=w(o=>o.gl),p=v.useRef(null);r=r*(Array.isArray(e)?e[0]:e||1),t=t*(Array.isArray(e)?e[1]:e||1);const[g,Z,z,x,M,y,b]=v.useMemo(()=>{const o=new _(u,u),R=new _(u,u);R.texture.generateMipmaps=o.texture.generateMipmaps=!1;const B=new K(r,t).rotateX(Math.PI/2),H=new Q(B),h=new Y;h.depthTest=h.depthWrite=!1,h.onBeforeCompile=d=>{d.uniforms={...d.uniforms,ucolor:{value:new ee(S)}},d.fragmentShader=d.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),d.fragmentShader=d.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const k=new E(re),I=new E(te);return I.depthTest=k.depthTest=!1,[o,B,h,H,k,I,R]},[u,r,t,e,S]),C=o=>{x.visible=!0,x.material=M,M.uniforms.tDiffuse.value=g.texture,M.uniforms.h.value=o*1/256,c.setRenderTarget(b),c.render(x,p.current),x.material=y,y.uniforms.tDiffuse.value=b.texture,y.uniforms.v.value=o*1/256,c.setRenderTarget(g),c.render(x,p.current),x.visible=!1};let T=0,j,P;return J(()=>{p.current&&(n===1/0||T<n)&&(T++,j=f.background,P=f.overrideMaterial,D.current.visible=!1,f.background=null,f.overrideMaterial=z,c.setRenderTarget(g),c.render(f,p.current),C(a),U&&C(a*.4),c.setRenderTarget(null),D.current.visible=!0,f.overrideMaterial=P,f.background=j)}),v.useImperativeHandle(V,()=>D.current,[]),v.createElement("group",N({"rotation-x":Math.PI/2},G,{ref:D}),v.createElement("mesh",{renderOrder:F,geometry:Z,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},v.createElement("meshBasicMaterial",{transparent:!0,map:g.texture,opacity:m,depthWrite:O})),v.createElement("orthographicCamera",{ref:p,args:[-r/2,r/2,t/2,-t/2,i,l]}))});function se({type:e,resetSignal:n,controls:m}){const{camera:r,invalidate:t}=w();return v.useEffect(()=>{const a=A[e],i=Math.max(a.l,a.w,a.h);r.position.set(-i*1.55,a.h*.55+i*.75,i*1.5);const l=m.current;l&&(l.target.set(0,a.h*.42,0),l.update()),r.lookAt(0,a.h*.42,0),t()},[e,n,r,m,t]),null}function fe({type:e,theme:n,accent:m,autoRotate:r,resetSignal:t,ariaLabel:a}){const i=$(n),l=v.useRef(null),u=A[e],U=n==="dark"?"#0b1513":"#f0f0ee";return s.jsx("div",{className:"ml-viewer__canvas",role:"img","aria-label":a,children:s.jsxs(W,{shadows:!0,dpr:[1,2],camera:{fov:32,near:.05,far:60,position:[-3,2,-3]},gl:{antialias:!0},children:[s.jsx("color",{attach:"background",args:[U]}),s.jsx(q,{theme:n,extent:2.4}),s.jsx(X,{type:e,accent:m,frame:i.frame,soft:i.soft,metal:i.metal,screen:i.screen,castShadow:!0}),s.jsxs("mesh",{rotation:[-Math.PI/2,0,0],receiveShadow:!0,position:[0,-.001,0],children:[s.jsx("circleGeometry",{args:[Math.max(u.l,u.w)*1.1,48]}),s.jsx("shadowMaterial",{opacity:n==="dark"?.45:.18})]}),s.jsx(ae,{position:[0,.002,0],opacity:n==="dark"?.6:.35,scale:Math.max(u.l,u.w)*2.4,blur:2.2,far:2,resolution:512}),s.jsx(L,{ref:l,makeDefault:!0,enableDamping:!0,enablePan:!1,minDistance:1,maxDistance:9,maxPolarAngle:Math.PI/2.05,autoRotate:r,autoRotateSpeed:.8}),s.jsx(se,{type:e,resetSignal:t,controls:l})]})})}export{fe as default};
