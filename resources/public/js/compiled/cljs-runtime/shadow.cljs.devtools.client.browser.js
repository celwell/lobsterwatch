goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50423 = arguments.length;
var i__4731__auto___50424 = (0);
while(true){
if((i__4731__auto___50424 < len__4730__auto___50423)){
args__4736__auto__.push((arguments[i__4731__auto___50424]));

var G__50425 = (i__4731__auto___50424 + (1));
i__4731__auto___50424 = G__50425;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50185){
var G__50186 = cljs.core.first(seq50185);
var seq50185__$1 = cljs.core.next(seq50185);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50186,seq50185__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__50196){
var map__50197 = p__50196;
var map__50197__$1 = (((((!((map__50197 == null))))?(((((map__50197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50197):map__50197);
var src = map__50197__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50203 = cljs.core.seq(sources);
var chunk__50204 = null;
var count__50205 = (0);
var i__50206 = (0);
while(true){
if((i__50206 < count__50205)){
var map__50221 = chunk__50204.cljs$core$IIndexed$_nth$arity$2(null,i__50206);
var map__50221__$1 = (((((!((map__50221 == null))))?(((((map__50221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50221):map__50221);
var src = map__50221__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50229){var e_50434 = e50229;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50434);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50434.message)].join('')));
}

var G__50439 = seq__50203;
var G__50440 = chunk__50204;
var G__50441 = count__50205;
var G__50442 = (i__50206 + (1));
seq__50203 = G__50439;
chunk__50204 = G__50440;
count__50205 = G__50441;
i__50206 = G__50442;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50203);
if(temp__5735__auto__){
var seq__50203__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50203__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50203__$1);
var G__50443 = cljs.core.chunk_rest(seq__50203__$1);
var G__50444 = c__4550__auto__;
var G__50445 = cljs.core.count(c__4550__auto__);
var G__50446 = (0);
seq__50203 = G__50443;
chunk__50204 = G__50444;
count__50205 = G__50445;
i__50206 = G__50446;
continue;
} else {
var map__50231 = cljs.core.first(seq__50203__$1);
var map__50231__$1 = (((((!((map__50231 == null))))?(((((map__50231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50231):map__50231);
var src = map__50231__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50231__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50231__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50231__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50231__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50233){var e_50447 = e50233;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50447);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50447.message)].join('')));
}

var G__50448 = cljs.core.next(seq__50203__$1);
var G__50449 = null;
var G__50450 = (0);
var G__50451 = (0);
seq__50203 = G__50448;
chunk__50204 = G__50449;
count__50205 = G__50450;
i__50206 = G__50451;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50238 = cljs.core.seq(js_requires);
var chunk__50239 = null;
var count__50240 = (0);
var i__50241 = (0);
while(true){
if((i__50241 < count__50240)){
var js_ns = chunk__50239.cljs$core$IIndexed$_nth$arity$2(null,i__50241);
var require_str_50459 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50459);


var G__50460 = seq__50238;
var G__50461 = chunk__50239;
var G__50462 = count__50240;
var G__50463 = (i__50241 + (1));
seq__50238 = G__50460;
chunk__50239 = G__50461;
count__50240 = G__50462;
i__50241 = G__50463;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50238);
if(temp__5735__auto__){
var seq__50238__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50238__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50238__$1);
var G__50464 = cljs.core.chunk_rest(seq__50238__$1);
var G__50465 = c__4550__auto__;
var G__50466 = cljs.core.count(c__4550__auto__);
var G__50467 = (0);
seq__50238 = G__50464;
chunk__50239 = G__50465;
count__50240 = G__50466;
i__50241 = G__50467;
continue;
} else {
var js_ns = cljs.core.first(seq__50238__$1);
var require_str_50468 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50468);


var G__50469 = cljs.core.next(seq__50238__$1);
var G__50470 = null;
var G__50471 = (0);
var G__50472 = (0);
seq__50238 = G__50469;
chunk__50239 = G__50470;
count__50240 = G__50471;
i__50241 = G__50472;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__50246 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50246) : callback.call(null,G__50246));
} else {
var G__50247 = shadow.cljs.devtools.client.env.files_url();
var G__50248 = ((function (G__50247){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__50247))
;
var G__50249 = "POST";
var G__50250 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__50251 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50247,G__50248,G__50249,G__50250,G__50251);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50254){
var map__50255 = p__50254;
var map__50255__$1 = (((((!((map__50255 == null))))?(((((map__50255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50255):map__50255);
var msg = map__50255__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50255__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50255__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50257 = info;
var map__50257__$1 = (((((!((map__50257 == null))))?(((((map__50257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50257):map__50257);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50257__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50257__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__50257,map__50257__$1,sources,compiled,map__50255,map__50255__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50260(s__50261){
return (new cljs.core.LazySeq(null,((function (map__50257,map__50257__$1,sources,compiled,map__50255,map__50255__$1,msg,info,reload_info){
return (function (){
var s__50261__$1 = s__50261;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50261__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50266 = cljs.core.first(xs__6292__auto__);
var map__50266__$1 = (((((!((map__50266 == null))))?(((((map__50266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50266):map__50266);
var src = map__50266__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50266__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50266__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__50261__$1,map__50266,map__50266__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50257,map__50257__$1,sources,compiled,map__50255,map__50255__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50260_$_iter__50262(s__50263){
return (new cljs.core.LazySeq(null,((function (s__50261__$1,map__50266,map__50266__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50257,map__50257__$1,sources,compiled,map__50255,map__50255__$1,msg,info,reload_info){
return (function (){
var s__50263__$1 = s__50263;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50263__$1);
if(temp__5735__auto____$1){
var s__50263__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50263__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50263__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50265 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50264 = (0);
while(true){
if((i__50264 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50264);
cljs.core.chunk_append(b__50265,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50475 = (i__50264 + (1));
i__50264 = G__50475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50265),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50260_$_iter__50262(cljs.core.chunk_rest(s__50263__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50265),null);
}
} else {
var warning = cljs.core.first(s__50263__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50260_$_iter__50262(cljs.core.rest(s__50263__$2)));
}
} else {
return null;
}
break;
}
});})(s__50261__$1,map__50266,map__50266__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50257,map__50257__$1,sources,compiled,map__50255,map__50255__$1,msg,info,reload_info))
,null,null));
});})(s__50261__$1,map__50266,map__50266__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50257,map__50257__$1,sources,compiled,map__50255,map__50255__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50260(cljs.core.rest(s__50261__$1)));
} else {
var G__50479 = cljs.core.rest(s__50261__$1);
s__50261__$1 = G__50479;
continue;
}
} else {
var G__50480 = cljs.core.rest(s__50261__$1);
s__50261__$1 = G__50480;
continue;
}
} else {
return null;
}
break;
}
});})(map__50257,map__50257__$1,sources,compiled,map__50255,map__50255__$1,msg,info,reload_info))
,null,null));
});})(map__50257,map__50257__$1,sources,compiled,map__50255,map__50255__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__50268_50481 = cljs.core.seq(warnings);
var chunk__50269_50482 = null;
var count__50270_50483 = (0);
var i__50271_50484 = (0);
while(true){
if((i__50271_50484 < count__50270_50483)){
var map__50277_50485 = chunk__50269_50482.cljs$core$IIndexed$_nth$arity$2(null,i__50271_50484);
var map__50277_50486__$1 = (((((!((map__50277_50485 == null))))?(((((map__50277_50485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50277_50485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50277_50485):map__50277_50485);
var w_50487 = map__50277_50486__$1;
var msg_50488__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277_50486__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277_50486__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277_50486__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277_50486__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50491)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50489),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50490),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50488__$1)].join(''));


var G__50492 = seq__50268_50481;
var G__50493 = chunk__50269_50482;
var G__50494 = count__50270_50483;
var G__50495 = (i__50271_50484 + (1));
seq__50268_50481 = G__50492;
chunk__50269_50482 = G__50493;
count__50270_50483 = G__50494;
i__50271_50484 = G__50495;
continue;
} else {
var temp__5735__auto___50496 = cljs.core.seq(seq__50268_50481);
if(temp__5735__auto___50496){
var seq__50268_50497__$1 = temp__5735__auto___50496;
if(cljs.core.chunked_seq_QMARK_(seq__50268_50497__$1)){
var c__4550__auto___50498 = cljs.core.chunk_first(seq__50268_50497__$1);
var G__50499 = cljs.core.chunk_rest(seq__50268_50497__$1);
var G__50500 = c__4550__auto___50498;
var G__50501 = cljs.core.count(c__4550__auto___50498);
var G__50502 = (0);
seq__50268_50481 = G__50499;
chunk__50269_50482 = G__50500;
count__50270_50483 = G__50501;
i__50271_50484 = G__50502;
continue;
} else {
var map__50279_50505 = cljs.core.first(seq__50268_50497__$1);
var map__50279_50506__$1 = (((((!((map__50279_50505 == null))))?(((((map__50279_50505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50279_50505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50279_50505):map__50279_50505);
var w_50507 = map__50279_50506__$1;
var msg_50508__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50279_50506__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50279_50506__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50279_50506__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50279_50506__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50511)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50509),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50510),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50508__$1)].join(''));


var G__50512 = cljs.core.next(seq__50268_50497__$1);
var G__50513 = null;
var G__50514 = (0);
var G__50515 = (0);
seq__50268_50481 = G__50512;
chunk__50269_50482 = G__50513;
count__50270_50483 = G__50514;
i__50271_50484 = G__50515;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__50257,map__50257__$1,sources,compiled,warnings,map__50255,map__50255__$1,msg,info,reload_info){
return (function (p__50281){
var map__50282 = p__50281;
var map__50282__$1 = (((((!((map__50282 == null))))?(((((map__50282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50282):map__50282);
var src = map__50282__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50282__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50282__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__50257,map__50257__$1,sources,compiled,warnings,map__50255,map__50255__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__50257,map__50257__$1,sources,compiled,warnings,map__50255,map__50255__$1,msg,info,reload_info){
return (function (p__50284){
var map__50287 = p__50284;
var map__50287__$1 = (((((!((map__50287 == null))))?(((((map__50287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50287):map__50287);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50287__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__50257,map__50257__$1,sources,compiled,warnings,map__50255,map__50255__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__50257,map__50257__$1,sources,compiled,warnings,map__50255,map__50255__$1,msg,info,reload_info){
return (function (p__50290){
var map__50291 = p__50290;
var map__50291__$1 = (((((!((map__50291 == null))))?(((((map__50291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50291):map__50291);
var rc = map__50291__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50291__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__50257,map__50257__$1,sources,compiled,warnings,map__50255,map__50255__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__50257,map__50257__$1,sources,compiled,warnings,map__50255,map__50255__$1,msg,info,reload_info){
return (function (p1__50253_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50253_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__50257,map__50257__$1,sources,compiled,warnings,map__50255,map__50255__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50306){
var map__50307 = p__50306;
var map__50307__$1 = (((((!((map__50307 == null))))?(((((map__50307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50307):map__50307);
var msg = map__50307__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50307__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50309 = cljs.core.seq(updates);
var chunk__50311 = null;
var count__50312 = (0);
var i__50313 = (0);
while(true){
if((i__50313 < count__50312)){
var path = chunk__50311.cljs$core$IIndexed$_nth$arity$2(null,i__50313);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50346_50516 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50349_50517 = null;
var count__50350_50518 = (0);
var i__50351_50519 = (0);
while(true){
if((i__50351_50519 < count__50350_50518)){
var node_50520 = chunk__50349_50517.cljs$core$IIndexed$_nth$arity$2(null,i__50351_50519);
var path_match_50521 = shadow.cljs.devtools.client.browser.match_paths(node_50520.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50521)){
var new_link_50522 = (function (){var G__50358 = node_50520.cloneNode(true);
G__50358.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50521),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50358;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50521], 0));

goog.dom.insertSiblingAfter(new_link_50522,node_50520);

goog.dom.removeNode(node_50520);


var G__50523 = seq__50346_50516;
var G__50524 = chunk__50349_50517;
var G__50525 = count__50350_50518;
var G__50526 = (i__50351_50519 + (1));
seq__50346_50516 = G__50523;
chunk__50349_50517 = G__50524;
count__50350_50518 = G__50525;
i__50351_50519 = G__50526;
continue;
} else {
var G__50527 = seq__50346_50516;
var G__50528 = chunk__50349_50517;
var G__50529 = count__50350_50518;
var G__50530 = (i__50351_50519 + (1));
seq__50346_50516 = G__50527;
chunk__50349_50517 = G__50528;
count__50350_50518 = G__50529;
i__50351_50519 = G__50530;
continue;
}
} else {
var temp__5735__auto___50531 = cljs.core.seq(seq__50346_50516);
if(temp__5735__auto___50531){
var seq__50346_50532__$1 = temp__5735__auto___50531;
if(cljs.core.chunked_seq_QMARK_(seq__50346_50532__$1)){
var c__4550__auto___50534 = cljs.core.chunk_first(seq__50346_50532__$1);
var G__50535 = cljs.core.chunk_rest(seq__50346_50532__$1);
var G__50536 = c__4550__auto___50534;
var G__50537 = cljs.core.count(c__4550__auto___50534);
var G__50538 = (0);
seq__50346_50516 = G__50535;
chunk__50349_50517 = G__50536;
count__50350_50518 = G__50537;
i__50351_50519 = G__50538;
continue;
} else {
var node_50539 = cljs.core.first(seq__50346_50532__$1);
var path_match_50540 = shadow.cljs.devtools.client.browser.match_paths(node_50539.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50540)){
var new_link_50541 = (function (){var G__50362 = node_50539.cloneNode(true);
G__50362.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50540),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50362;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50540], 0));

goog.dom.insertSiblingAfter(new_link_50541,node_50539);

goog.dom.removeNode(node_50539);


var G__50542 = cljs.core.next(seq__50346_50532__$1);
var G__50543 = null;
var G__50544 = (0);
var G__50545 = (0);
seq__50346_50516 = G__50542;
chunk__50349_50517 = G__50543;
count__50350_50518 = G__50544;
i__50351_50519 = G__50545;
continue;
} else {
var G__50546 = cljs.core.next(seq__50346_50532__$1);
var G__50547 = null;
var G__50548 = (0);
var G__50549 = (0);
seq__50346_50516 = G__50546;
chunk__50349_50517 = G__50547;
count__50350_50518 = G__50548;
i__50351_50519 = G__50549;
continue;
}
}
} else {
}
}
break;
}


var G__50550 = seq__50309;
var G__50551 = chunk__50311;
var G__50552 = count__50312;
var G__50553 = (i__50313 + (1));
seq__50309 = G__50550;
chunk__50311 = G__50551;
count__50312 = G__50552;
i__50313 = G__50553;
continue;
} else {
var G__50554 = seq__50309;
var G__50555 = chunk__50311;
var G__50556 = count__50312;
var G__50557 = (i__50313 + (1));
seq__50309 = G__50554;
chunk__50311 = G__50555;
count__50312 = G__50556;
i__50313 = G__50557;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50309);
if(temp__5735__auto__){
var seq__50309__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50309__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50309__$1);
var G__50558 = cljs.core.chunk_rest(seq__50309__$1);
var G__50559 = c__4550__auto__;
var G__50560 = cljs.core.count(c__4550__auto__);
var G__50561 = (0);
seq__50309 = G__50558;
chunk__50311 = G__50559;
count__50312 = G__50560;
i__50313 = G__50561;
continue;
} else {
var path = cljs.core.first(seq__50309__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50363_50562 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50366_50563 = null;
var count__50367_50564 = (0);
var i__50368_50565 = (0);
while(true){
if((i__50368_50565 < count__50367_50564)){
var node_50568 = chunk__50366_50563.cljs$core$IIndexed$_nth$arity$2(null,i__50368_50565);
var path_match_50569 = shadow.cljs.devtools.client.browser.match_paths(node_50568.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50569)){
var new_link_50571 = (function (){var G__50377 = node_50568.cloneNode(true);
G__50377.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50569),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50377;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50569], 0));

goog.dom.insertSiblingAfter(new_link_50571,node_50568);

goog.dom.removeNode(node_50568);


var G__50572 = seq__50363_50562;
var G__50573 = chunk__50366_50563;
var G__50574 = count__50367_50564;
var G__50575 = (i__50368_50565 + (1));
seq__50363_50562 = G__50572;
chunk__50366_50563 = G__50573;
count__50367_50564 = G__50574;
i__50368_50565 = G__50575;
continue;
} else {
var G__50576 = seq__50363_50562;
var G__50577 = chunk__50366_50563;
var G__50578 = count__50367_50564;
var G__50579 = (i__50368_50565 + (1));
seq__50363_50562 = G__50576;
chunk__50366_50563 = G__50577;
count__50367_50564 = G__50578;
i__50368_50565 = G__50579;
continue;
}
} else {
var temp__5735__auto___50580__$1 = cljs.core.seq(seq__50363_50562);
if(temp__5735__auto___50580__$1){
var seq__50363_50581__$1 = temp__5735__auto___50580__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50363_50581__$1)){
var c__4550__auto___50582 = cljs.core.chunk_first(seq__50363_50581__$1);
var G__50583 = cljs.core.chunk_rest(seq__50363_50581__$1);
var G__50584 = c__4550__auto___50582;
var G__50585 = cljs.core.count(c__4550__auto___50582);
var G__50586 = (0);
seq__50363_50562 = G__50583;
chunk__50366_50563 = G__50584;
count__50367_50564 = G__50585;
i__50368_50565 = G__50586;
continue;
} else {
var node_50589 = cljs.core.first(seq__50363_50581__$1);
var path_match_50591 = shadow.cljs.devtools.client.browser.match_paths(node_50589.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50591)){
var new_link_50592 = (function (){var G__50378 = node_50589.cloneNode(true);
G__50378.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50591),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50378;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50591], 0));

goog.dom.insertSiblingAfter(new_link_50592,node_50589);

goog.dom.removeNode(node_50589);


var G__50593 = cljs.core.next(seq__50363_50581__$1);
var G__50594 = null;
var G__50595 = (0);
var G__50596 = (0);
seq__50363_50562 = G__50593;
chunk__50366_50563 = G__50594;
count__50367_50564 = G__50595;
i__50368_50565 = G__50596;
continue;
} else {
var G__50597 = cljs.core.next(seq__50363_50581__$1);
var G__50598 = null;
var G__50599 = (0);
var G__50600 = (0);
seq__50363_50562 = G__50597;
chunk__50366_50563 = G__50598;
count__50367_50564 = G__50599;
i__50368_50565 = G__50600;
continue;
}
}
} else {
}
}
break;
}


var G__50601 = cljs.core.next(seq__50309__$1);
var G__50602 = null;
var G__50603 = (0);
var G__50604 = (0);
seq__50309 = G__50601;
chunk__50311 = G__50602;
count__50312 = G__50603;
i__50313 = G__50604;
continue;
} else {
var G__50606 = cljs.core.next(seq__50309__$1);
var G__50607 = null;
var G__50608 = (0);
var G__50609 = (0);
seq__50309 = G__50606;
chunk__50311 = G__50607;
count__50312 = G__50608;
i__50313 = G__50609;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50379){
var map__50382 = p__50379;
var map__50382__$1 = (((((!((map__50382 == null))))?(((((map__50382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50382):map__50382);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50382__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50382__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__50382,map__50382__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__50382,map__50382__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50385,done){
var map__50386 = p__50385;
var map__50386__$1 = (((((!((map__50386 == null))))?(((((map__50386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50386):map__50386);
var msg = map__50386__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50386__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50386__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50386__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50386__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__50386,map__50386__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__50395){
var map__50396 = p__50395;
var map__50396__$1 = (((((!((map__50396 == null))))?(((((map__50396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50396):map__50396);
var src = map__50396__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50396__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__50386,map__50386__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__50386,map__50386__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e50398){var e = e50398;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__50386,map__50386__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50399,done){
var map__50400 = p__50399;
var map__50400__$1 = (((((!((map__50400 == null))))?(((((map__50400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50400):map__50400);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50400__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50400__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__50400,map__50400__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__50400,map__50400__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50402){
var map__50403 = p__50402;
var map__50403__$1 = (((((!((map__50403 == null))))?(((((map__50403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50403):map__50403);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50403__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50403__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__50407,done){
var map__50408 = p__50407;
var map__50408__$1 = (((((!((map__50408 == null))))?(((((map__50408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50408):map__50408);
var msg = map__50408__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50408__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__50410_50624 = type;
var G__50410_50625__$1 = (((G__50410_50624 instanceof cljs.core.Keyword))?G__50410_50624.fqn:null);
switch (G__50410_50625__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__50411 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__50412 = ((function (G__50411){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__50411))
;
var G__50413 = "POST";
var G__50414 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__50415 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50411,G__50412,G__50413,G__50414,G__50415);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e50416){var e = e50416;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50637 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50637)){
var s_50638 = temp__5735__auto___50637;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_50638.onclose = ((function (s_50638,temp__5735__auto___50637){
return (function (e){
return null;
});})(s_50638,temp__5735__auto___50637))
;

s_50638.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
