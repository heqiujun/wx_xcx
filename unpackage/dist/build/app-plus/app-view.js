var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'val']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入商品ID'])
Z([3,'text'])
Z([[7],[3,'val']])
Z([[7],[3,'img']])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'creats']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'val']]]]]]]]]]])
Z([3,'primary'])
Z([3,'生成二维码'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'logo'])
Z([[7],[3,'imgs']])
Z([3,'title'])
Z([a,[[7],[3,'title']]])
Z([3,'content_zi'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'play']]]]]]]]])
Z([3,'../../static/logo.png'])
Z([3,'使用操作视频'])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'instruction']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/n2.jpg'])
Z([3,'说明书'])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'crea']]]]]]]]])
Z(z[12])
Z([3,'二维码生成器'])
Z([3,'video'])
Z([[2,'!'],[[7],[3,'show']]])
Z([3,'myVideo'])
Z([[7],[3,'videoFrequency']])
Z([3,'twoCode'])
Z([3,'../../static/logo.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'describe'])
Z([3,'../../static/xyj.jpg'])
Z([3,'describe_zi'])
Z([3,'TB82VT818DCL'])
Z([3,'波轮洗衣机'])
Z([3,'nav'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'array']])
Z(z[6])
Z([3,'navget'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'../../static/jinru.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'logo'])
Z([3,'https://js.zhiwi.cn/tu/shouquan.jpg'])
Z([3,'z2'])
Z([3,'该小程序授权，向其提供以下权限即可继续操作'])
Z([3,'z1'])
Z([3,'获得你的公开信息（昵称、头像）'])
Z([3,'hezi'])
Z([3,'__e'])
Z([3,'denglu'])
Z([[4],[[5],[[4],[[5],[[5],[1,'getuserinfo']],[[4],[[5],[[4],[[5],[[5],[1,'bindGetUserInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'zh_CN'])
Z([3,'getUserInfo'])
Z([3,'授权登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/index/ceshi.wxml','./pages/index/index.wxml','./pages/index/instruction.wxml','./pages/landing/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_mz(z,'input',['bindinput',1,'data-event-opts',1,'placeholder',2,'type',3,'value',4],[],e,s,gg)
_(oB,xC)
var oD=_mz(z,'image',['mode',-1,'src',6],[],e,s,gg)
_(oB,oD)
var fE=_mz(z,'button',['bindtap',7,'data-event-opts',1,'type',2],[],e,s,gg)
var cF=_oz(z,10,e,s,gg)
_(fE,cF)
_(oB,fE)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oH=_n('view')
_rz(z,oH,'class',0,e,s,gg)
var cI=_mz(z,'image',['class',1,'src',1],[],e,s,gg)
_(oH,cI)
var oJ=_n('view')
_rz(z,oJ,'class',3,e,s,gg)
var lK=_oz(z,4,e,s,gg)
_(oJ,lK)
_(oH,oJ)
var aL=_n('view')
_rz(z,aL,'class',5,e,s,gg)
var tM=_mz(z,'view',['bindtap',6,'data-event-opts',1],[],e,s,gg)
var eN=_n('image')
_rz(z,eN,'src',8,e,s,gg)
_(tM,eN)
var bO=_n('view')
var oP=_oz(z,9,e,s,gg)
_(bO,oP)
_(tM,bO)
_(aL,tM)
var xQ=_mz(z,'view',['bindtap',10,'data-event-opts',1],[],e,s,gg)
var oR=_n('image')
_rz(z,oR,'src',12,e,s,gg)
_(xQ,oR)
var fS=_n('view')
var cT=_oz(z,13,e,s,gg)
_(fS,cT)
_(xQ,fS)
_(aL,xQ)
var hU=_mz(z,'view',['bindtap',14,'data-event-opts',1],[],e,s,gg)
var oV=_n('image')
_rz(z,oV,'src',16,e,s,gg)
_(hU,oV)
var cW=_n('view')
var oX=_oz(z,17,e,s,gg)
_(cW,oX)
_(hU,cW)
_(aL,hU)
_(oH,aL)
var lY=_mz(z,'view',['class',18,'hidden',1],[],e,s,gg)
var aZ=_mz(z,'video',['id',20,'src',1],[],e,s,gg)
_(lY,aZ)
_(oH,lY)
var t1=_mz(z,'image',['class',22,'src',1],[],e,s,gg)
_(oH,t1)
_(r,oH)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var b3=_n('view')
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
var x5=_n('view')
var o6=_n('image')
_rz(z,o6,'src',1,e,s,gg)
_(x5,o6)
_(o4,x5)
var f7=_n('view')
_rz(z,f7,'class',2,e,s,gg)
var c8=_n('view')
var h9=_oz(z,3,e,s,gg)
_(c8,h9)
_(f7,c8)
var o0=_n('view')
var cAB=_oz(z,4,e,s,gg)
_(o0,cAB)
_(f7,o0)
_(o4,f7)
_(b3,o4)
var oBB=_n('view')
_rz(z,oBB,'class',5,e,s,gg)
var lCB=_v()
_(oBB,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_n('view')
_rz(z,xIB,'class',10,eFB,tEB,gg)
var oJB=_n('text')
var fKB=_oz(z,11,eFB,tEB,gg)
_(oJB,fKB)
_(xIB,oJB)
var cLB=_n('image')
_rz(z,cLB,'src',12,eFB,tEB,gg)
_(xIB,cLB)
_(bGB,xIB)
return bGB
}
lCB.wxXCkey=2
_2z(z,8,aDB,e,s,gg,lCB,'item','index','index')
_(b3,oBB)
_(r,b3)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oNB=_n('view')
_rz(z,oNB,'class',0,e,s,gg)
var cOB=_n('view')
_rz(z,cOB,'class',1,e,s,gg)
var oPB=_n('image')
_rz(z,oPB,'src',2,e,s,gg)
_(cOB,oPB)
var lQB=_n('view')
_rz(z,lQB,'class',3,e,s,gg)
var aRB=_oz(z,4,e,s,gg)
_(lQB,aRB)
_(cOB,lQB)
_(oNB,cOB)
var tSB=_n('view')
_rz(z,tSB,'class',5,e,s,gg)
var eTB=_oz(z,6,e,s,gg)
_(tSB,eTB)
_(oNB,tSB)
var bUB=_n('view')
_rz(z,bUB,'class',7,e,s,gg)
var oVB=_mz(z,'button',['bindgetuserinfo',8,'class',1,'data-event-opts',2,'lang',3,'openType',4],[],e,s,gg)
var xWB=_oz(z,13,e,s,gg)
_(oVB,xWB)
_(bUB,oVB)
_(oNB,bUB)
_(r,oNB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face {font-family: \x22iconfont\x22; src: url(\x27//at.alicdn.com/t/font_905984_7edccyflzz3.eot?t\x3d1570698388412\x27); src: url(\x27//at.alicdn.com/t/font_905984_7edccyflzz3.eot?t\x3d1570698388412#iefix\x27) format(\x27embedded-opentype\x27), /* IE6-IE8 */\n  url(\x27data:application/x-font-woff2;charset\x3dutf-8;base64,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\x3d\x27) format(\x27woff2\x27),\n  url(\x27//at.alicdn.com/t/font_905984_7edccyflzz3.woff?t\x3d1570698388412\x27) format(\x27woff\x27),\n  url(\x27//at.alicdn.com/t/font_905984_7edccyflzz3.ttf?t\x3d1570698388412\x27) format(\x27truetype\x27), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url(\x27//at.alicdn.com/t/font_905984_7edccyflzz3.svg?t\x3d1570698388412#iconfont\x27) format(\x27svg\x27); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-shangcheng:before { content: \x22\\E72B\x22; }\n.",[1],"icon-my:before { content: \x22\\E608\x22; }\n.",[1],"icon-gougou:before { content: \x22\\E63F\x22; }\n.",[1],"icon-zfb2f:before { content: \x22\\E6EA\x22; }\n.",[1],"icon-dianzan:before { content: \x22\\E60C\x22; }\n.",[1],"icon-fanhui:before { content: \x22\\E611\x22; }\n.",[1],"icon-kulian:before { content: \x22\\E636\x22; }\n.",[1],"icon-weixin:before { content: \x22\\E615\x22; }\n.",[1],"icon-wo:before { content: \x22\\E60F\x22; }\n.",[1],"icon-fenxiang:before { content: \x22\\E603\x22; }\n.",[1],"icon-kefu:before { content: \x22\\E7C2\x22; }\n.",[1],"icon-add:before { content: \x22\\E6DF\x22; }\n.",[1],"icon-close:before { content: \x22\\E6E9\x22; }\n.",[1],"icon-delete_fill:before { content: \x22\\E6F2\x22; }\n.",[1],"icon-enter:before { content: \x22\\E6F8\x22; }\n.",[1],"icon-return:before { content: \x22\\E720\x22; }\n.",[1],"icon-right:before { content: \x22\\E721\x22; }\n.",[1],"icon-gou:before { content: \x22\\E612\x22; }\n.",[1],"icon-guzhang:before { content: \x22\\E61C\x22; }\n.",[1],"icon-jiantouyou:before { content: \x22\\E62D\x22; }\n.",[1],"icon-huojian:before { content: \x22\\E60D\x22; }\n.",[1],"icon-sousuo:before { content: \x22\\E604\x22; }\n.",[1],"icon-sousuo1:before { content: \x22\\E66B\x22; }\n.",[1],"icon-liwu:before { content: \x22\\E742\x22; }\n.",[1],"icon-fenxiang1:before { content: \x22\\E605\x22; }\n.",[1],"icon-pinglun:before { content: \x22\\E62F\x22; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/ceshi.wxss']=setCssToHead(["wx-button{ width: 80%; }\nwx-input{ height: ",[0,80],"; line-height: ",[0,80],"; width: 80%; margin: ",[0,20]," auto; background: #eee; color: #000; border-radius: ",[0,20],"; text-align: center; }\nwx-image{ display: block; margin: ",[0,50]," auto; width: ",[0,200],"; height: ",[0,200],"; }\n",],undefined,{path:"./pages/index/ceshi.wxss"});    
__wxAppCode__['pages/index/ceshi.wxml']=$gwx('./pages/index/ceshi.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"twoCode{ display: block; margin: ",[0,50]," auto; width: ",[0,400],"; height: ",[0,400],"; }\n.",[1],"video{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; }\n.",[1],"content{ background:#eee; width: 100%; min-height: 100vh; border: ",[0,1]," solid #eee; }\n.",[1],"content_zi\x3ewx-view{ width: 50%; text-align: center; }\n.",[1],"content_zi\x3ewx-view wx-image{ width:",[0,150],"; height: ",[0,150],"; }\n.",[1],"content_zi{ margin-top: ",[0,50],"; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"logo{ width: ",[0,400],"; height: ",[0,300],"; display: block; margin: ",[0,30]," auto; }\n.",[1],"title{ width: 100%; height: ",[0,80],"; line-height: ",[0,80],"; text-align: center; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index/instruction.wxss']=setCssToHead([".",[1],"navget wx-image{ margin: ",[0,0]," ",[0,20],"; width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"navget wx-text{ margin: ",[0,0]," ",[0,20],"; font-size: ",[0,32],"; }\n.",[1],"nav{ width: 100%; min-height:",[0,1200],"; background: #EEEEEE; border: ",[0,1]," solid #EEEEEE; }\n.",[1],"navget{ width: 96%; height: ",[0,120],"; line-height: ",[0,120],"; border-radius: ",[0,10],"; background: #FFFFFF; margin: ",[0,20]," auto; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"describe wx-image{ width: ",[0,150],"; height: ",[0,180],"; }\n.",[1],"describe wx-view:first-child{ width: 40%; text-align: center; }\n.",[1],"describe_zi{ width: 60%; }\n.",[1],"describe_zi wx-view:first-child{ font-weight: 600; font-size: ",[0,40],"; line-height: ",[0,50],"; }\n.",[1],"describe_zi wx-view:last-child{ font-size: ",[0,24],"; line-height: ",[0,50],"; color: #999999; }\n.",[1],"describe{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; height: ",[0,300],"; }\n",],undefined,{path:"./pages/index/instruction.wxss"});    
__wxAppCode__['pages/index/instruction.wxml']=$gwx('./pages/index/instruction.wxml');

__wxAppCode__['pages/landing/index.wxss']=setCssToHead([".",[1],"logo { width: 100%; position: relative; }\n.",[1],"logo wx-image { width: 100%; margin: 0px auto; display: block; height: ",[0,400]," }\n.",[1],"z2 { position: absolute; bottom: ",[0,60],"; color: #FFF; text-align: center; width: 100%; font-weight: bold }\n.",[1],"z1 { padding: ",[0,40],"; color: #222; display: block; width: 100%; }\n.",[1],"hezi { width: 100%; display: block; }\n.",[1],"hezi wx-button { width: 90%; margin: 0px auto; background: #04be01; color: #FFF }\n",],undefined,{path:"./pages/landing/index.wxss"});    
__wxAppCode__['pages/landing/index.wxml']=$gwx('./pages/landing/index.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();