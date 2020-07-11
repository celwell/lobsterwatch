goog.provide('lobsterwatch.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('lobsterwatch.events');
goog.require('lobsterwatch.views');
goog.require('lobsterwatch.config');
lobsterwatch.core.dev_setup = (function lobsterwatch$core$dev_setup(){
if(lobsterwatch.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
lobsterwatch.core.mount_root = (function lobsterwatch$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lobsterwatch.views.main_panel], null),document.getElementById("app"));
});
lobsterwatch.core.init = (function lobsterwatch$core$init(){
var G__52210_52214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lobsterwatch.events","initialize-db","lobsterwatch.events/initialize-db",1502228347)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__52210_52214) : re_frame.core.dispatch_sync.call(null,G__52210_52214));

var G__52211_52215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lobsterwatch.events","window-resized","lobsterwatch.events/window-resized",1635120240)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__52211_52215) : re_frame.core.dispatch_sync.call(null,G__52211_52215));

window.addEventListener("resize",(function (){
var G__52212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lobsterwatch.events","window-resized","lobsterwatch.events/window-resized",1635120240)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__52212) : re_frame.core.dispatch.call(null,G__52212));
}));

lobsterwatch.core.dev_setup();

return lobsterwatch.core.mount_root();
});

//# sourceMappingURL=lobsterwatch.core.js.map
