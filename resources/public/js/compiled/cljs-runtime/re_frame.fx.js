goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__51653 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__51654 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__51654;

try{try{var seq__51663 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51664 = null;
var count__51665 = (0);
var i__51666 = (0);
while(true){
if((i__51666 < count__51665)){
var vec__51679 = chunk__51664.cljs$core$IIndexed$_nth$arity$2(null,i__51666);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51679,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51679,(1),null);
var temp__5733__auto___51761 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51761)){
var effect_fn_51762 = temp__5733__auto___51761;
(effect_fn_51762.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51762.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51762.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51763 = seq__51663;
var G__51764 = chunk__51664;
var G__51765 = count__51665;
var G__51766 = (i__51666 + (1));
seq__51663 = G__51763;
chunk__51664 = G__51764;
count__51665 = G__51765;
i__51666 = G__51766;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51663);
if(temp__5735__auto__){
var seq__51663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51663__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51663__$1);
var G__51767 = cljs.core.chunk_rest(seq__51663__$1);
var G__51768 = c__4550__auto__;
var G__51769 = cljs.core.count(c__4550__auto__);
var G__51770 = (0);
seq__51663 = G__51767;
chunk__51664 = G__51768;
count__51665 = G__51769;
i__51666 = G__51770;
continue;
} else {
var vec__51694 = cljs.core.first(seq__51663__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51694,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51694,(1),null);
var temp__5733__auto___51771 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51771)){
var effect_fn_51772 = temp__5733__auto___51771;
(effect_fn_51772.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51772.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51772.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51773 = cljs.core.next(seq__51663__$1);
var G__51774 = null;
var G__51775 = (0);
var G__51776 = (0);
seq__51663 = G__51773;
chunk__51664 = G__51774;
count__51665 = G__51775;
i__51666 = G__51776;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51383__auto___51777 = re_frame.interop.now();
var duration__51384__auto___51778 = (end__51383__auto___51777 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51384__auto___51778,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51383__auto___51777);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__51653;
}} else {
var seq__51697 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51698 = null;
var count__51699 = (0);
var i__51700 = (0);
while(true){
if((i__51700 < count__51699)){
var vec__51707 = chunk__51698.cljs$core$IIndexed$_nth$arity$2(null,i__51700);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51707,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51707,(1),null);
var temp__5733__auto___51780 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51780)){
var effect_fn_51781 = temp__5733__auto___51780;
(effect_fn_51781.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51781.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51781.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51782 = seq__51697;
var G__51783 = chunk__51698;
var G__51784 = count__51699;
var G__51785 = (i__51700 + (1));
seq__51697 = G__51782;
chunk__51698 = G__51783;
count__51699 = G__51784;
i__51700 = G__51785;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51697);
if(temp__5735__auto__){
var seq__51697__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51697__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51697__$1);
var G__51786 = cljs.core.chunk_rest(seq__51697__$1);
var G__51787 = c__4550__auto__;
var G__51788 = cljs.core.count(c__4550__auto__);
var G__51789 = (0);
seq__51697 = G__51786;
chunk__51698 = G__51787;
count__51699 = G__51788;
i__51700 = G__51789;
continue;
} else {
var vec__51711 = cljs.core.first(seq__51697__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51711,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51711,(1),null);
var temp__5733__auto___51791 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51791)){
var effect_fn_51792 = temp__5733__auto___51791;
(effect_fn_51792.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51792.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51792.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51793 = cljs.core.next(seq__51697__$1);
var G__51794 = null;
var G__51795 = (0);
var G__51796 = (0);
seq__51697 = G__51793;
chunk__51698 = G__51794;
count__51699 = G__51795;
i__51700 = G__51796;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__51714 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51715 = null;
var count__51716 = (0);
var i__51717 = (0);
while(true){
if((i__51717 < count__51716)){
var map__51724 = chunk__51715.cljs$core$IIndexed$_nth$arity$2(null,i__51717);
var map__51724__$1 = (((((!((map__51724 == null))))?(((((map__51724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51724):map__51724);
var effect = map__51724__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51724__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51724__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51714,chunk__51715,count__51716,i__51717,map__51724,map__51724__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51714,chunk__51715,count__51716,i__51717,map__51724,map__51724__$1,effect,ms,dispatch))
,ms);
}


var G__51797 = seq__51714;
var G__51798 = chunk__51715;
var G__51799 = count__51716;
var G__51800 = (i__51717 + (1));
seq__51714 = G__51797;
chunk__51715 = G__51798;
count__51716 = G__51799;
i__51717 = G__51800;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51714);
if(temp__5735__auto__){
var seq__51714__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51714__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51714__$1);
var G__51802 = cljs.core.chunk_rest(seq__51714__$1);
var G__51803 = c__4550__auto__;
var G__51804 = cljs.core.count(c__4550__auto__);
var G__51805 = (0);
seq__51714 = G__51802;
chunk__51715 = G__51803;
count__51716 = G__51804;
i__51717 = G__51805;
continue;
} else {
var map__51730 = cljs.core.first(seq__51714__$1);
var map__51730__$1 = (((((!((map__51730 == null))))?(((((map__51730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51730):map__51730);
var effect = map__51730__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51730__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51730__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51714,chunk__51715,count__51716,i__51717,map__51730,map__51730__$1,effect,ms,dispatch,seq__51714__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51714,chunk__51715,count__51716,i__51717,map__51730,map__51730__$1,effect,ms,dispatch,seq__51714__$1,temp__5735__auto__))
,ms);
}


var G__51807 = cljs.core.next(seq__51714__$1);
var G__51808 = null;
var G__51809 = (0);
var G__51810 = (0);
seq__51714 = G__51807;
chunk__51715 = G__51808;
count__51716 = G__51809;
i__51717 = G__51810;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__51734 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51735 = null;
var count__51736 = (0);
var i__51737 = (0);
while(true){
if((i__51737 < count__51736)){
var event = chunk__51735.cljs$core$IIndexed$_nth$arity$2(null,i__51737);
re_frame.router.dispatch(event);


var G__51813 = seq__51734;
var G__51814 = chunk__51735;
var G__51815 = count__51736;
var G__51816 = (i__51737 + (1));
seq__51734 = G__51813;
chunk__51735 = G__51814;
count__51736 = G__51815;
i__51737 = G__51816;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51734);
if(temp__5735__auto__){
var seq__51734__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51734__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51734__$1);
var G__51817 = cljs.core.chunk_rest(seq__51734__$1);
var G__51818 = c__4550__auto__;
var G__51819 = cljs.core.count(c__4550__auto__);
var G__51820 = (0);
seq__51734 = G__51817;
chunk__51735 = G__51818;
count__51736 = G__51819;
i__51737 = G__51820;
continue;
} else {
var event = cljs.core.first(seq__51734__$1);
re_frame.router.dispatch(event);


var G__51821 = cljs.core.next(seq__51734__$1);
var G__51822 = null;
var G__51823 = (0);
var G__51824 = (0);
seq__51734 = G__51821;
chunk__51735 = G__51822;
count__51736 = G__51823;
i__51737 = G__51824;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__51746 = cljs.core.seq(value);
var chunk__51747 = null;
var count__51748 = (0);
var i__51749 = (0);
while(true){
if((i__51749 < count__51748)){
var event = chunk__51747.cljs$core$IIndexed$_nth$arity$2(null,i__51749);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__51825 = seq__51746;
var G__51826 = chunk__51747;
var G__51827 = count__51748;
var G__51828 = (i__51749 + (1));
seq__51746 = G__51825;
chunk__51747 = G__51826;
count__51748 = G__51827;
i__51749 = G__51828;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51746);
if(temp__5735__auto__){
var seq__51746__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51746__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51746__$1);
var G__51829 = cljs.core.chunk_rest(seq__51746__$1);
var G__51830 = c__4550__auto__;
var G__51831 = cljs.core.count(c__4550__auto__);
var G__51832 = (0);
seq__51746 = G__51829;
chunk__51747 = G__51830;
count__51748 = G__51831;
i__51749 = G__51832;
continue;
} else {
var event = cljs.core.first(seq__51746__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__51837 = cljs.core.next(seq__51746__$1);
var G__51838 = null;
var G__51839 = (0);
var G__51840 = (0);
seq__51746 = G__51837;
chunk__51747 = G__51838;
count__51748 = G__51839;
i__51749 = G__51840;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
