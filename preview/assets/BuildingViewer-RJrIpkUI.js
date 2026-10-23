import{r as a,F as at,G as ct,u as Fe,q as c}from"./index-C1Jn3swe.js";import{_ as me,C as lt,O as dt}from"./OrbitControls-BHnMzKAz.js";import{a as ut,b as ft,c as Be,B as D,d as mt,e as ht}from"./bms-BjhPeOmJ.js";import{P as pt}from"./plus-5pb8ckW9.js";import{M as vt}from"./minus-DvAuOkpM.js";import{R as xt}from"./rotate-ccw-DqhrKCec.js";import{D as gt,V as P,a as Me,P as $e,O as ke,R as bt,I as yt,F as Re,b as we,c as Q,W as wt,B as _e,S as qe,d as St,U as De,e as Te,M as Et,f as ee,L as Mt,g as _t,h as jt,C as Lt,E as Pt}from"./three.module-CPoxFd_6.js";import{u as je,a as At}from"./events-776716bd.esm-B2lsbuXo.js";const se=new P,Le=new P,Ot=new P,Ie=new Me;function Ct(i,e,t){const o=se.setFromMatrixPosition(i.matrixWorld);o.project(e);const n=t.width/2,s=t.height/2;return[o.x*n+n,-(o.y*s)+s]}function Ut(i,e){const t=se.setFromMatrixPosition(i.matrixWorld),o=Le.setFromMatrixPosition(e.matrixWorld),n=t.sub(o),s=e.getWorldDirection(Ot);return n.angleTo(s)>Math.PI/2}function zt(i,e,t,o){const n=se.setFromMatrixPosition(i.matrixWorld),s=n.clone();s.project(e),Ie.set(s.x,s.y),t.setFromCamera(Ie,e);const l=t.intersectObjects(o,!0);if(l.length){const r=l[0].distance;return n.distanceTo(t.ray.origin)<r}return!0}function Bt(i,e){if(e instanceof ke)return e.zoom;if(e instanceof $e){const t=se.setFromMatrixPosition(i.matrixWorld),o=Le.setFromMatrixPosition(e.matrixWorld),n=e.fov*Math.PI/180,s=t.distanceTo(o);return 1/(2*Math.tan(n/2)*s)}else return 1}function Rt(i,e,t){if(e instanceof $e||e instanceof ke){const o=se.setFromMatrixPosition(i.matrixWorld),n=Le.setFromMatrixPosition(e.matrixWorld),s=o.distanceTo(n),l=(t[1]-t[0])/(e.far-e.near),r=t[1]-l*e.far;return Math.round(l*s+r)}}const Se=i=>Math.abs(i)<1e-10?0:i;function Ze(i,e,t=""){let o="matrix3d(";for(let n=0;n!==16;n++)o+=Se(e[n]*i.elements[n])+(n!==15?",":")");return t+o}const Dt=(i=>e=>Ze(e,i))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Tt=(i=>(e,t)=>Ze(e,i(t),"translate(-50%,-50%)"))(i=>[1/i,1/i,1/i,1,-1/i,-1/i,-1/i,-1,1/i,1/i,1/i,1,1,1,1,1]);function It(i){return i&&typeof i=="object"&&"current"in i}const Wt=a.forwardRef(({children:i,eps:e=.001,style:t,className:o,prepend:n,center:s,fullscreen:l,portal:r,distanceFactor:m,sprite:p=!1,transform:d=!1,occlude:u,onOcclude:w,castShadow:N,receiveShadow:U,material:z,geometry:B,zIndexRange:v=[16777271,0],calculatePosition:T=Ct,as:h="div",wrapperClass:f,pointerEvents:R="auto",...y},C)=>{const{gl:A,camera:b,scene:F,size:S,raycaster:oe,events:he,viewport:L}=je(),[g]=a.useState(()=>document.createElement(h)),G=a.useRef(),E=a.useRef(null),te=a.useRef(0),re=a.useRef([0,0]),ne=a.useRef(null),pe=a.useRef(null),J=(r==null?void 0:r.current)||he.connected||A.domElement.parentNode,$=a.useRef(null),ae=a.useRef(!1),ce=a.useMemo(()=>u&&u!=="blending"||Array.isArray(u)&&u.length&&It(u[0]),[u]);a.useLayoutEffect(()=>{const O=A.domElement;u&&u==="blending"?(O.style.zIndex=`${Math.floor(v[0]/2)}`,O.style.position="absolute",O.style.pointerEvents="none"):(O.style.zIndex=null,O.style.position=null,O.style.pointerEvents=null)},[u]),a.useLayoutEffect(()=>{if(E.current){const O=G.current=at(g);if(F.updateMatrixWorld(),d)g.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const x=T(E.current,b,S);g.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${x[0]}px,${x[1]}px,0);transform-origin:0 0;`}return J&&(n?J.prepend(g):J.appendChild(g)),()=>{J&&J.removeChild(g),O.unmount()}}},[J,d]),a.useLayoutEffect(()=>{f&&(g.className=f)},[f]);const Oe=a.useMemo(()=>d?{position:"absolute",top:0,left:0,width:S.width,height:S.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...l&&{top:-S.height/2,left:-S.width/2,width:S.width,height:S.height},...t},[t,s,l,S,d]),Qe=a.useMemo(()=>({position:"absolute",pointerEvents:R}),[R]);a.useLayoutEffect(()=>{if(ae.current=!1,d){var O;(O=G.current)==null||O.render(a.createElement("div",{ref:ne,style:Oe},a.createElement("div",{ref:pe,style:Qe},a.createElement("div",{ref:C,className:o,style:t,children:i}))))}else{var x;(x=G.current)==null||x.render(a.createElement("div",{ref:C,style:Oe,className:o,children:i}))}});const X=a.useRef(!0);At(O=>{if(E.current){b.updateMatrixWorld(),E.current.updateWorldMatrix(!0,!1);const x=d?re.current:T(E.current,b,S);if(d||Math.abs(te.current-b.zoom)>e||Math.abs(re.current[0]-x[0])>e||Math.abs(re.current[1]-x[1])>e){const k=Ut(E.current,b);let V=!1;ce&&(Array.isArray(u)?V=u.map(q=>q.current):u!=="blending"&&(V=[F]));const ie=X.current;if(V){const q=zt(E.current,b,oe,V);X.current=q&&!k}else X.current=!k;ie!==X.current&&(w?w(!X.current):g.style.display=X.current?"block":"none");const le=Math.floor(v[0]/2),et=u?ce?[v[0],le]:[le-1,0]:v;if(g.style.zIndex=`${Rt(E.current,b,et)}`,d){const[q,Ue]=[S.width/2,S.height/2],ve=b.projectionMatrix.elements[5]*Ue,{isOrthographicCamera:ze,top:tt,left:nt,bottom:it,right:st}=b,ot=Dt(b.matrixWorldInverse),rt=ze?`scale(${ve})translate(${Se(-(st+nt)/2)}px,${Se((tt+it)/2)}px)`:`translateZ(${ve}px)`;let Z=E.current.matrixWorld;p&&(Z=b.matrixWorldInverse.clone().transpose().copyPosition(Z).scale(E.current.scale),Z.elements[3]=Z.elements[7]=Z.elements[11]=0,Z.elements[15]=1),g.style.width=S.width+"px",g.style.height=S.height+"px",g.style.perspective=ze?"":`${ve}px`,ne.current&&pe.current&&(ne.current.style.transform=`${rt}${ot}translate(${q}px,${Ue}px)`,pe.current.style.transform=Tt(Z,1/((m||10)/400)))}else{const q=m===void 0?1:Bt(E.current,b)*m;g.style.transform=`translate3d(${x[0]}px,${x[1]}px,0) scale(${q})`}re.current=x,te.current=b.zoom}}if(!ce&&$.current&&!ae.current)if(d){if(ne.current){const x=ne.current.children[0];if(x!=null&&x.clientWidth&&x!=null&&x.clientHeight){const{isOrthographicCamera:k}=b;if(k||B)y.scale&&(Array.isArray(y.scale)?y.scale instanceof P?$.current.scale.copy(y.scale.clone().divideScalar(1)):$.current.scale.set(1/y.scale[0],1/y.scale[1],1/y.scale[2]):$.current.scale.setScalar(1/y.scale));else{const V=(m||10)/400,ie=x.clientWidth*V,le=x.clientHeight*V;$.current.scale.set(ie,le,1)}ae.current=!0}}}else{const x=g.children[0];if(x!=null&&x.clientWidth&&x!=null&&x.clientHeight){const k=1/L.factor,V=x.clientWidth*k,ie=x.clientHeight*k;$.current.scale.set(V,ie,1),ae.current=!0}$.current.lookAt(O.camera.position)}});const Ce=a.useMemo(()=>({vertexShader:d?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[d]);return a.createElement("group",me({},y,{ref:E}),u&&!ce&&a.createElement("mesh",{castShadow:N,receiveShadow:U,ref:$},B||a.createElement("planeGeometry",null),z||a.createElement("shaderMaterial",{side:gt,vertexShader:Ce.vertexShader,fragmentShader:Ce.fragmentShader})))}),Ye=parseInt(bt.replace(/\D+/g,"")),Je=Ye>=125?"uv1":"uv2",We=new _e,de=new P;class Pe extends yt{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],o=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(o),this.setAttribute("position",new Re(e,3)),this.setAttribute("uv",new Re(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,o=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),o.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const o=new we(t,6,1);return this.setAttribute("instanceStart",new Q(o,3,0)),this.setAttribute("instanceEnd",new Q(o,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let o;e instanceof Float32Array?o=e:Array.isArray(e)&&(o=new Float32Array(e));const n=new we(o,t*2,1);return this.setAttribute("instanceColorStart",new Q(n,t,0)),this.setAttribute("instanceColorEnd",new Q(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new wt(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _e);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),We.setFromBufferAttribute(t),this.boundingBox.union(We))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qe),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const o=this.boundingSphere.center;this.boundingBox.getCenter(o);let n=0;for(let s=0,l=e.count;s<l;s++)de.fromBufferAttribute(e,s),n=Math.max(n,o.distanceToSquared(de)),de.fromBufferAttribute(t,s),n=Math.max(n,o.distanceToSquared(de));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Xe extends Pe{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,o=new Float32Array(2*t);for(let n=0;n<t;n+=3)o[2*n]=e[n],o[2*n+1]=e[n+1],o[2*n+2]=e[n+2],o[2*n+3]=e[n+3],o[2*n+4]=e[n+4],o[2*n+5]=e[n+5];return super.setPositions(o),this}setColors(e,t=3){const o=e.length-t,n=new Float32Array(2*o);if(t===3)for(let s=0;s<o;s+=t)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];else for(let s=0;s<o;s+=t)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5],n[2*s+6]=e[s+6],n[2*s+7]=e[s+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Ae extends St{constructor(e){super({type:"LineMaterial",uniforms:De.clone(De.merge([Te.common,Te.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Ye>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const xe=new ee,He=new P,Ne=new P,M=new ee,_=new ee,I=new ee,ge=new P,be=new _t,j=new Mt,Ge=new P,ue=new _e,fe=new qe,W=new ee;let H,Y;function Ve(i,e,t){return W.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),W.multiplyScalar(1/W.w),W.x=Y/t.width,W.y=Y/t.height,W.applyMatrix4(i.projectionMatrixInverse),W.multiplyScalar(1/W.w),Math.abs(Math.max(W.x,W.y))}function Ht(i,e){const t=i.matrixWorld,o=i.geometry,n=o.attributes.instanceStart,s=o.attributes.instanceEnd,l=Math.min(o.instanceCount,n.count);for(let r=0,m=l;r<m;r++){j.start.fromBufferAttribute(n,r),j.end.fromBufferAttribute(s,r),j.applyMatrix4(t);const p=new P,d=new P;H.distanceSqToSegment(j.start,j.end,d,p),d.distanceTo(p)<Y*.5&&e.push({point:d,pointOnLine:p,distance:H.origin.distanceTo(d),object:i,face:null,faceIndex:r,uv:null,[Je]:null})}}function Nt(i,e,t){const o=e.projectionMatrix,s=i.material.resolution,l=i.matrixWorld,r=i.geometry,m=r.attributes.instanceStart,p=r.attributes.instanceEnd,d=Math.min(r.instanceCount,m.count),u=-e.near;H.at(1,I),I.w=1,I.applyMatrix4(e.matrixWorldInverse),I.applyMatrix4(o),I.multiplyScalar(1/I.w),I.x*=s.x/2,I.y*=s.y/2,I.z=0,ge.copy(I),be.multiplyMatrices(e.matrixWorldInverse,l);for(let w=0,N=d;w<N;w++){if(M.fromBufferAttribute(m,w),_.fromBufferAttribute(p,w),M.w=1,_.w=1,M.applyMatrix4(be),_.applyMatrix4(be),M.z>u&&_.z>u)continue;if(M.z>u){const h=M.z-_.z,f=(M.z-u)/h;M.lerp(_,f)}else if(_.z>u){const h=_.z-M.z,f=(_.z-u)/h;_.lerp(M,f)}M.applyMatrix4(o),_.applyMatrix4(o),M.multiplyScalar(1/M.w),_.multiplyScalar(1/_.w),M.x*=s.x/2,M.y*=s.y/2,_.x*=s.x/2,_.y*=s.y/2,j.start.copy(M),j.start.z=0,j.end.copy(_),j.end.z=0;const z=j.closestPointToPointParameter(ge,!0);j.at(z,Ge);const B=jt.lerp(M.z,_.z,z),v=B>=-1&&B<=1,T=ge.distanceTo(Ge)<Y*.5;if(v&&T){j.start.fromBufferAttribute(m,w),j.end.fromBufferAttribute(p,w),j.start.applyMatrix4(l),j.end.applyMatrix4(l);const h=new P,f=new P;H.distanceSqToSegment(j.start,j.end,f,h),t.push({point:f,pointOnLine:h,distance:H.origin.distanceTo(f),object:i,face:null,faceIndex:w,uv:null,[Je]:null})}}}class Ke extends Et{constructor(e=new Pe,t=new Ae({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,o=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let l=0,r=0,m=t.count;l<m;l++,r+=2)He.fromBufferAttribute(t,l),Ne.fromBufferAttribute(o,l),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+He.distanceTo(Ne);const s=new we(n,2,1);return e.setAttribute("instanceDistanceStart",new Q(s,1,0)),e.setAttribute("instanceDistanceEnd",new Q(s,1,1)),this}raycast(e,t){const o=this.material.worldUnits,n=e.camera;n===null&&!o&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;H=e.ray;const l=this.matrixWorld,r=this.geometry,m=this.material;Y=m.linewidth+s,r.boundingSphere===null&&r.computeBoundingSphere(),fe.copy(r.boundingSphere).applyMatrix4(l);let p;if(o)p=Y*.5;else{const u=Math.max(n.near,fe.distanceToPoint(H.origin));p=Ve(n,u,m.resolution)}if(fe.radius+=p,H.intersectsSphere(fe)===!1)return;r.boundingBox===null&&r.computeBoundingBox(),ue.copy(r.boundingBox).applyMatrix4(l);let d;if(o)d=Y*.5;else{const u=Math.max(n.near,ue.distanceToPoint(H.origin));d=Ve(n,u,m.resolution)}ue.expandByScalar(d),H.intersectsBox(ue)!==!1&&(o?Ht(this,t):Nt(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(xe),this.material.uniforms.resolution.value.set(xe.z,xe.w))}}class Gt extends Ke{constructor(e=new Xe,t=new Ae({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Vt=a.forwardRef(function({points:e,color:t=16777215,vertexColors:o,linewidth:n,lineWidth:s,segments:l,dashed:r,...m},p){var d,u;const w=je(v=>v.size),N=a.useMemo(()=>l?new Ke:new Gt,[l]),[U]=a.useState(()=>new Ae),z=(o==null||(d=o[0])==null?void 0:d.length)===4?4:3,B=a.useMemo(()=>{const v=l?new Pe:new Xe,T=e.map(h=>{const f=Array.isArray(h);return h instanceof P||h instanceof ee?[h.x,h.y,h.z]:h instanceof Me?[h.x,h.y,0]:f&&h.length===3?[h[0],h[1],h[2]]:f&&h.length===2?[h[0],h[1],0]:h});if(v.setPositions(T.flat()),o){t=16777215;const h=o.map(f=>f instanceof Lt?f.toArray():f);v.setColors(h.flat(),z)}return v},[e,l,o,z]);return a.useLayoutEffect(()=>{N.computeLineDistances()},[e,N]),a.useLayoutEffect(()=>{r?U.defines.USE_DASH="":delete U.defines.USE_DASH,U.needsUpdate=!0},[r,U]),a.useEffect(()=>()=>{B.dispose(),U.dispose()},[B]),a.createElement("primitive",me({object:N,ref:p},m),a.createElement("primitive",{object:B,attach:"geometry"}),a.createElement("primitive",me({object:U,attach:"material",color:t,vertexColors:!!o,resolution:[w.width,w.height],linewidth:(u=n??s)!==null&&u!==void 0?u:1,dashed:r,transparent:z===4},m)))}),ye=a.forwardRef(({threshold:i=15,geometry:e,...t},o)=>{const n=a.useRef(null);a.useImperativeHandle(o,()=>n.current,[]);const s=a.useMemo(()=>[0,0,0,1,0,0],[]),l=a.useRef(),r=a.useRef();return a.useLayoutEffect(()=>{const m=n.current.parent,p=e??(m==null?void 0:m.geometry);if(!p||l.current===p&&r.current===i)return;l.current=p,r.current=i;const u=new Pt(p,i).attributes.position.array;n.current.geometry.setPositions(u),n.current.geometry.attributes.instanceStart.needsUpdate=!0,n.current.geometry.attributes.instanceEnd.needsUpdate=!0,n.current.computeLineDistances()}),a.createElement(Vt,me({segments:!0,points:s,ref:n,raycast:()=>null},t))}),nn=["slab","walls","columns","zones","labels","ac","lights","presence"];function Ft(i){return i==="dark"?{bg:"#050f0d",slab:"#16211f",slabEdge:"#3a4644",wall:"#24302e",column:"#3a4644",label:"#ffffff",on:"#3d9a6a",off:"#4a5553",watch:"#d9962b",alarm:"#c2453d",select:"#fcea10",seq:["#1a2624","#3d4520","#7d7d18","#d2c711","#fcea10"],cool:"#4f8f8a",unit:"#d6dcda",light:"#fcea10",person:"#ffffff"}:{bg:"#f0f0ee",slab:"#ffffff",slabEdge:"#9ea4a2",wall:"#d9dbd9",column:"#b7bcba",label:"#020c0a",on:"#4f9b74",off:"#b9bebc",watch:"#d99a3a",alarm:"#c4544c",select:"#020c0a",seq:["#eceee9","#efe7a0","#f2df58","#f6e324","#fcea10"],cool:"#7fb2ad",unit:"#3b4442",light:"#c7b400",person:"#020c0a"}}function $t(i,e,t,o){if(e==="state")return t[i.status];if(e==="occupancy"){if(!i.people)return t.seq[0];const s=Math.min(t.seq.length-1,1+Math.floor(i.people/Math.max(1,o)*(t.seq.length-1.01)));return t.seq[s]}if(i.temp==null||i.setpoint==null)return t.off;const n=i.temp-i.setpoint;return n>=3?t.alarm:n>=1.5?t.watch:n<=-1?t.cool:t.on}const K={x:D.w/2,z:D.d/2},Ee={iso:[34,34,34],top:[.001,60,.01],front:[0,8,60]};function kt({view:i,zoomSignal:e,baseZoom:t}){const{camera:o,controls:n}=je();return a.useEffect(()=>{const[s,l,r]=Ee[i];o.position.set(s,l,r),o.zoom=t,o.updateProjectionMatrix();const m=n;m&&(m.target.set(0,2,0),m.update())},[i,o,n,t]),a.useEffect(()=>{if(e.n){if(e.dir===0){const[s,l,r]=Ee[i];o.position.set(s,l,r),o.zoom=t;const m=n;m&&(m.target.set(0,2,0),m.update())}else o.zoom=Math.max(t*.5,Math.min(t*3,o.zoom*(e.dir>0?1.2:1/1.2)));o.updateProjectionMatrix()}},[e]),null}function qt({zones:i,floors:e,layers:t,spread:o,colorBy:n,selected:s,onSelect:l,pal:r,compact:m}){const{pick:p,fmtNumber:d}=Fe(),u=Math.max(1,...i.map(v=>v.people)),w=[...new Set(i.map(v=>Be(v.area)))].sort((v,T)=>v-T),N=D.floorH+o*7,[U,z]=a.useState(),B=v=>(w.indexOf(v)-(w.length-1)/2)*N;return c.jsx("group",{position:[-15,0,-8],children:w.filter(v=>e.includes(v)).map(v=>{const T=B(v),h=i.filter(f=>Be(f.area)===v);return c.jsxs("group",{position:[0,T,0],children:[t.has("slab")&&c.jsxs("mesh",{position:[K.x,-.15,K.z],receiveShadow:!0,children:[c.jsx("boxGeometry",{args:[D.w+.6,.3,D.d+.6]}),c.jsx("meshStandardMaterial",{color:r.slab}),c.jsx(ye,{color:r.slabEdge})]}),t.has("walls")&&c.jsxs("group",{children:[[[K.x,D.d,D.w,.2],[0,K.z,.2,D.d]].map(([f,R,y,C],A)=>c.jsxs("mesh",{position:[f,1.1,R],children:[c.jsx("boxGeometry",{args:[y,2.2,C]}),c.jsx("meshStandardMaterial",{color:r.wall,transparent:!0,opacity:.55})]},A)),[[K.x,0,D.w,.12],[D.w,K.z,.12,D.d]].map(([f,R,y,C],A)=>c.jsxs("mesh",{position:[f,.3,R],children:[c.jsx("boxGeometry",{args:[y,.6,C]}),c.jsx("meshStandardMaterial",{color:r.wall,transparent:!0,opacity:.5})]},`l${A}`))]}),t.has("columns")&&[0,7.5,15,22.5,30].flatMap(f=>[0,8,16].map(R=>c.jsxs("mesh",{position:[f,1.2,R],children:[c.jsx("boxGeometry",{args:[.35,2.4,.35]}),c.jsx("meshStandardMaterial",{color:r.column})]},`${f}:${R}`))),h.map((f,R)=>{const[y,C,A,b]=mt(f.area,R),F=f.area.id,S=s===F,oe=U===F,he=$t(f,n,r,u);return c.jsxs("group",{children:[t.has("zones")&&c.jsxs("mesh",{position:[y+A/2,.06,C+b/2],onClick:L=>{L.stopPropagation(),l==null||l(S?void 0:F)},onPointerOver:L=>{L.stopPropagation(),z(F),document.body.style.cursor="pointer"},onPointerOut:()=>{z(void 0),document.body.style.cursor=""},children:[c.jsx("boxGeometry",{args:[A-.25,.12,b-.25]}),c.jsx("meshStandardMaterial",{color:he,transparent:!0,opacity:S||oe?.95:.78}),(S||oe)&&c.jsx(ye,{color:r.select,lineWidth:2})]}),t.has("ac")&&f.units.map((L,g)=>{const G=ht(L.live),E=y+(g+1)/(f.units.length+1)*A;return c.jsxs("mesh",{position:[E,.55,C+b*.3],castShadow:!0,children:[c.jsx("boxGeometry",{args:[.9,.9,.9]}),c.jsx("meshStandardMaterial",{color:G==="off"?r.off:r[G]}),c.jsx(ye,{color:r.slabEdge})]},L.id)}),t.has("lights")&&f.lights.map((L,g)=>{var G,E,te;return c.jsxs("mesh",{position:[y+(g+1)/(f.lights.length+1)*A,.2,C+b*.72],children:[c.jsx("cylinderGeometry",{args:[.45,.45,.12,20]}),c.jsx("meshStandardMaterial",{color:(G=L.live)!=null&&G.on?r.light:r.off,emissive:(E=L.live)!=null&&E.on?r.light:"#000000",emissiveIntensity:(te=L.live)!=null&&te.on?.35:0})]},L.id)}),t.has("presence")&&Array.from({length:Math.min(12,Math.ceil(f.people/3))},(L,g)=>c.jsxs("mesh",{position:[y+1+g*2.3%Math.max(1,A-2),.45,C+b*.5+(g%3-1)*.9],children:[c.jsx("cylinderGeometry",{args:[.18,.18,.7,10]}),c.jsx("meshStandardMaterial",{color:r.person})]},g)),t.has("labels")&&!m&&c.jsx(Wt,{position:[y+A/2,.3,C+b/2],center:!0,zIndexRange:[5,0],style:{pointerEvents:"none"},children:c.jsxs("div",{className:"bv-tag",children:[c.jsx("span",{children:p(f.area.nameEn,f.area.nameAr)}),n==="occupancy"?c.jsx("b",{className:"num",children:d(f.people)}):f.temp!=null?c.jsxs("b",{className:"num ltr",children:[d(f.temp,1),"°C"]}):null]})})]},F)})]},v)})})}function sn(i){const{theme:e}=ct(),{t}=Fe(),o=Ft(e),[n,s]=a.useState({n:0,dir:0}),l=a.useRef(null),[r,m]=a.useState(700);a.useEffect(()=>{const d=l.current;if(!d)return;const u=new ResizeObserver(()=>m(d.clientWidth));return u.observe(d),()=>u.disconnect()},[]);const p=a.useMemo(()=>Math.max(6,Math.min(22,r/(i.compact?40:38))),[r,i.compact]);return c.jsxs("div",{ref:l,className:`bv ${i.compact?"bv--compact":""}`,style:{height:i.height,background:o.bg},role:"img","aria-label":i.ariaLabel,children:[c.jsxs(lt,{orthographic:!0,shadows:!0,dpr:[1,2],camera:{position:Ee.iso,zoom:p,near:-200,far:400},onPointerMissed:()=>{var d;return(d=i.onSelect)==null?void 0:d.call(i,void 0)},children:[c.jsx("color",{attach:"background",args:[o.bg]}),c.jsx("hemisphereLight",{args:[e==="dark"?"#cfd8d6":"#ffffff",e==="dark"?"#0b1513":"#d9d9d6",e==="dark"?.7:1]}),c.jsx("directionalLight",{position:[20,40,25],intensity:e==="dark"?1.1:1.3,castShadow:!0}),c.jsx(a.Suspense,{fallback:null,children:c.jsx(qt,{...i,compact:i.compact||r<560,pal:o})}),c.jsx(dt,{makeDefault:!0,enableZoom:!1,enablePan:!i.compact,enableRotate:i.view!=="top",maxPolarAngle:Math.PI/2.1}),c.jsx(kt,{view:i.view,zoomSignal:n,baseZoom:p})]}),!i.compact&&c.jsxs("div",{className:"bv-zoom",children:[c.jsx("button",{type:"button",className:"btn btn--sm btn--icon","aria-label":t("bmsOverview.zoomIn"),title:t("bmsOverview.zoomIn"),onClick:()=>s(d=>({n:d.n+1,dir:1})),children:c.jsx(pt,{"aria-hidden":!0})}),c.jsx("button",{type:"button",className:"btn btn--sm btn--icon","aria-label":t("bmsOverview.zoomOut"),title:t("bmsOverview.zoomOut"),onClick:()=>s(d=>({n:d.n+1,dir:-1})),children:c.jsx(vt,{"aria-hidden":!0})}),c.jsx("button",{type:"button",className:"btn btn--sm btn--icon","aria-label":t("bmsOverview.resetView"),title:t("bmsOverview.resetView"),onClick:()=>s(d=>({n:d.n+1,dir:0})),children:c.jsx(xt,{"aria-hidden":!0})})]})]})}function on(i,e,t,o){return i.map(n=>{var p,d;const s=e.filter(u=>u.areaId===n.id),l=t.filter(u=>u.areaId===n.id),r=((p=o.find(u=>u.area.id===n.id))==null?void 0:p.people)??0,m=s.length?(d=s[0].live)==null?void 0:d.setpoint:void 0;return{area:n,units:s,lights:l,people:r,status:ft(s,l),temp:ut(s),setpoint:m}})}export{sn as B,nn as L,on as b};
