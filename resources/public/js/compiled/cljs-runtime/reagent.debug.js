goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__48704__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48705__i = 0, G__48705__a = new Array(arguments.length -  0);
while (G__48705__i < G__48705__a.length) {G__48705__a[G__48705__i] = arguments[G__48705__i + 0]; ++G__48705__i;}
  args = new cljs.core.IndexedSeq(G__48705__a,0,null);
} 
return G__48704__delegate.call(this,args);};
G__48704.cljs$lang$maxFixedArity = 0;
G__48704.cljs$lang$applyTo = (function (arglist__48706){
var args = cljs.core.seq(arglist__48706);
return G__48704__delegate(args);
});
G__48704.cljs$core$IFn$_invoke$arity$variadic = G__48704__delegate;
return G__48704;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__48707__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48709__i = 0, G__48709__a = new Array(arguments.length -  0);
while (G__48709__i < G__48709__a.length) {G__48709__a[G__48709__i] = arguments[G__48709__i + 0]; ++G__48709__i;}
  args = new cljs.core.IndexedSeq(G__48709__a,0,null);
} 
return G__48707__delegate.call(this,args);};
G__48707.cljs$lang$maxFixedArity = 0;
G__48707.cljs$lang$applyTo = (function (arglist__48710){
var args = cljs.core.seq(arglist__48710);
return G__48707__delegate(args);
});
G__48707.cljs$core$IFn$_invoke$arity$variadic = G__48707__delegate;
return G__48707;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
