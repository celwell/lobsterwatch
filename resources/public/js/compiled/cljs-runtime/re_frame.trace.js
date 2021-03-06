goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51403){
var map__51404 = p__51403;
var map__51404__$1 = (((((!((map__51404 == null))))?(((((map__51404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51404):map__51404);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__51406_51450 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51407_51451 = null;
var count__51408_51452 = (0);
var i__51409_51453 = (0);
while(true){
if((i__51409_51453 < count__51408_51452)){
var vec__51420_51455 = chunk__51407_51451.cljs$core$IIndexed$_nth$arity$2(null,i__51409_51453);
var k_51456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51420_51455,(0),null);
var cb_51457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51420_51455,(1),null);
try{var G__51424_51458 = cljs.core.deref(re_frame.trace.traces);
(cb_51457.cljs$core$IFn$_invoke$arity$1 ? cb_51457.cljs$core$IFn$_invoke$arity$1(G__51424_51458) : cb_51457.call(null,G__51424_51458));
}catch (e51423){var e_51460 = e51423;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51456,"while storing",cljs.core.deref(re_frame.trace.traces),e_51460], 0));
}

var G__51461 = seq__51406_51450;
var G__51462 = chunk__51407_51451;
var G__51463 = count__51408_51452;
var G__51464 = (i__51409_51453 + (1));
seq__51406_51450 = G__51461;
chunk__51407_51451 = G__51462;
count__51408_51452 = G__51463;
i__51409_51453 = G__51464;
continue;
} else {
var temp__5735__auto___51465 = cljs.core.seq(seq__51406_51450);
if(temp__5735__auto___51465){
var seq__51406_51466__$1 = temp__5735__auto___51465;
if(cljs.core.chunked_seq_QMARK_(seq__51406_51466__$1)){
var c__4550__auto___51467 = cljs.core.chunk_first(seq__51406_51466__$1);
var G__51468 = cljs.core.chunk_rest(seq__51406_51466__$1);
var G__51469 = c__4550__auto___51467;
var G__51470 = cljs.core.count(c__4550__auto___51467);
var G__51471 = (0);
seq__51406_51450 = G__51468;
chunk__51407_51451 = G__51469;
count__51408_51452 = G__51470;
i__51409_51453 = G__51471;
continue;
} else {
var vec__51425_51475 = cljs.core.first(seq__51406_51466__$1);
var k_51476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51425_51475,(0),null);
var cb_51477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51425_51475,(1),null);
try{var G__51429_51478 = cljs.core.deref(re_frame.trace.traces);
(cb_51477.cljs$core$IFn$_invoke$arity$1 ? cb_51477.cljs$core$IFn$_invoke$arity$1(G__51429_51478) : cb_51477.call(null,G__51429_51478));
}catch (e51428){var e_51479 = e51428;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51476,"while storing",cljs.core.deref(re_frame.trace.traces),e_51479], 0));
}

var G__51480 = cljs.core.next(seq__51406_51466__$1);
var G__51481 = null;
var G__51482 = (0);
var G__51483 = (0);
seq__51406_51450 = G__51480;
chunk__51407_51451 = G__51481;
count__51408_51452 = G__51482;
i__51409_51453 = G__51483;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
