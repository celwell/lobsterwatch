goog.provide('lobsterwatch.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('lobsterwatch.util');
goog.require('lobsterwatch.subs');
goog.require('lobsterwatch.events');
var module$node_modules$react_konva$lib$ReactKonva=shadow.js.require("module$node_modules$react_konva$lib$ReactKonva", {});
lobsterwatch.views.canvas_STAR_ = (function lobsterwatch$views$canvas_STAR_(){
var lobsters = (function (){var G__52199 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lobsterwatch.subs","lobsters","lobsterwatch.subs/lobsters",-1556817123)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__52199) : re_frame.core.subscribe.call(null,G__52199));
})();
var window = (function (){var G__52200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lobsterwatch.subs","window","lobsterwatch.subs/window",784218927)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__52200) : re_frame.core.subscribe.call(null,G__52200));
})();
return ((function (lobsters,window){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_konva$lib$ReactKonva.Stage,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"stage",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(window)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(window))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_konva$lib$ReactKonva.Layer,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (lobsters,window){
return (function lobsterwatch$views$canvas_STAR__$_iter__52201(s__52202){
return (new cljs.core.LazySeq(null,((function (lobsters,window){
return (function (){
var s__52202__$1 = s__52202;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52202__$1);
if(temp__5735__auto__){
var s__52202__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52202__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52202__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52204 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52203 = (0);
while(true){
if((i__52203 < size__4522__auto__)){
var map__52205 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52203);
var map__52205__$1 = (((((!((map__52205 == null))))?(((((map__52205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52205):map__52205);
var lobster = map__52205__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52205__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52205__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52205__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__52204,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_konva$lib$ReactKonva.Circle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((x - (10)) | (0)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (10)) | (0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(200,0,0,1)"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)));

var G__52213 = (i__52203 + (1));
i__52203 = G__52213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52204),lobsterwatch$views$canvas_STAR__$_iter__52201(cljs.core.chunk_rest(s__52202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52204),null);
}
} else {
var map__52207 = cljs.core.first(s__52202__$2);
var map__52207__$1 = (((((!((map__52207 == null))))?(((((map__52207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52207):map__52207);
var lobster = map__52207__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52207__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52207__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52207__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_konva$lib$ReactKonva.Circle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((x - (10)) | (0)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (10)) | (0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(200,0,0,1)"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)),lobsterwatch$views$canvas_STAR__$_iter__52201(cljs.core.rest(s__52202__$2)));
}
} else {
return null;
}
break;
}
});})(lobsters,window))
,null,null));
});})(lobsters,window))
;
return iter__4523__auto__(cljs.core.deref(lobsters));
})())], null)], null);
});
;})(lobsters,window))
});
lobsterwatch.views.anim_loop = (function lobsterwatch$views$anim_loop(){
var G__52209_52216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lobsterwatch.events","anim-step","lobsterwatch.events/anim-step",1279856593)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__52209_52216) : re_frame.core.dispatch.call(null,G__52209_52216));

return requestAnimationFrame(lobsterwatch.views.anim_loop);
});
lobsterwatch.views.canvas = cljs.core.with_meta(lobsterwatch.views.canvas_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_this){
return requestAnimationFrame(lobsterwatch.views.anim_loop);
})], null));
lobsterwatch.views.main_panel = (function lobsterwatch$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lobsterwatch.views.canvas], null)], null);
});
});

//# sourceMappingURL=lobsterwatch.views.js.map
