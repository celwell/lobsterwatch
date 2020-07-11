goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48062 = coll;
var G__48063 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48062,G__48063) : shadow.dom.lazy_native_coll_seq.call(null,G__48062,G__48063));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48089 = arguments.length;
switch (G__48089) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48098 = arguments.length;
switch (G__48098) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48101 = arguments.length;
switch (G__48101) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48104 = arguments.length;
switch (G__48104) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48106 = arguments.length;
switch (G__48106) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__48109 = document;
var G__48110 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48109,G__48110);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__48111 = shadow.dom.dom_node(parent);
var G__48112 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48111,G__48112);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__48113 = shadow.dom.dom_node(el);
var G__48114 = cls;
return goog.dom.classlist.add(G__48113,G__48114);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__48117 = shadow.dom.dom_node(el);
var G__48118 = cls;
return goog.dom.classlist.remove(G__48117,G__48118);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48124 = arguments.length;
switch (G__48124) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__48130 = shadow.dom.dom_node(el);
var G__48131 = cls;
return goog.dom.classlist.toggle(G__48130,G__48131);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48135){if((e48135 instanceof Object)){
var e = e48135;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48135;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48138 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48139 = null;
var count__48140 = (0);
var i__48141 = (0);
while(true){
if((i__48141 < count__48140)){
var el = chunk__48139.cljs$core$IIndexed$_nth$arity$2(null,i__48141);
var handler_48815__$1 = ((function (seq__48138,chunk__48139,count__48140,i__48141,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48138,chunk__48139,count__48140,i__48141,el))
;
var G__48155_48817 = el;
var G__48156_48818 = cljs.core.name(ev);
var G__48157_48819 = handler_48815__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48155_48817,G__48156_48818,G__48157_48819) : shadow.dom.dom_listen.call(null,G__48155_48817,G__48156_48818,G__48157_48819));


var G__48821 = seq__48138;
var G__48822 = chunk__48139;
var G__48823 = count__48140;
var G__48824 = (i__48141 + (1));
seq__48138 = G__48821;
chunk__48139 = G__48822;
count__48140 = G__48823;
i__48141 = G__48824;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48138);
if(temp__5735__auto__){
var seq__48138__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48138__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48138__$1);
var G__48825 = cljs.core.chunk_rest(seq__48138__$1);
var G__48826 = c__4550__auto__;
var G__48827 = cljs.core.count(c__4550__auto__);
var G__48828 = (0);
seq__48138 = G__48825;
chunk__48139 = G__48826;
count__48140 = G__48827;
i__48141 = G__48828;
continue;
} else {
var el = cljs.core.first(seq__48138__$1);
var handler_48829__$1 = ((function (seq__48138,chunk__48139,count__48140,i__48141,el,seq__48138__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48138,chunk__48139,count__48140,i__48141,el,seq__48138__$1,temp__5735__auto__))
;
var G__48161_48831 = el;
var G__48162_48832 = cljs.core.name(ev);
var G__48163_48833 = handler_48829__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48161_48831,G__48162_48832,G__48163_48833) : shadow.dom.dom_listen.call(null,G__48161_48831,G__48162_48832,G__48163_48833));


var G__48836 = cljs.core.next(seq__48138__$1);
var G__48837 = null;
var G__48838 = (0);
var G__48839 = (0);
seq__48138 = G__48836;
chunk__48139 = G__48837;
count__48140 = G__48838;
i__48141 = G__48839;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48165 = arguments.length;
switch (G__48165) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__48169 = shadow.dom.dom_node(el);
var G__48170 = cljs.core.name(ev);
var G__48171 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48169,G__48170,G__48171) : shadow.dom.dom_listen.call(null,G__48169,G__48170,G__48171));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__48174 = shadow.dom.dom_node(el);
var G__48175 = cljs.core.name(ev);
var G__48176 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__48174,G__48175,G__48176) : shadow.dom.dom_listen_remove.call(null,G__48174,G__48175,G__48176));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48177 = cljs.core.seq(events);
var chunk__48178 = null;
var count__48179 = (0);
var i__48180 = (0);
while(true){
if((i__48180 < count__48179)){
var vec__48189 = chunk__48178.cljs$core$IIndexed$_nth$arity$2(null,i__48180);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48189,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48849 = seq__48177;
var G__48850 = chunk__48178;
var G__48851 = count__48179;
var G__48852 = (i__48180 + (1));
seq__48177 = G__48849;
chunk__48178 = G__48850;
count__48179 = G__48851;
i__48180 = G__48852;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48177);
if(temp__5735__auto__){
var seq__48177__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48177__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48177__$1);
var G__48854 = cljs.core.chunk_rest(seq__48177__$1);
var G__48855 = c__4550__auto__;
var G__48856 = cljs.core.count(c__4550__auto__);
var G__48857 = (0);
seq__48177 = G__48854;
chunk__48178 = G__48855;
count__48179 = G__48856;
i__48180 = G__48857;
continue;
} else {
var vec__48195 = cljs.core.first(seq__48177__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48195,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48195,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48858 = cljs.core.next(seq__48177__$1);
var G__48859 = null;
var G__48860 = (0);
var G__48861 = (0);
seq__48177 = G__48858;
chunk__48178 = G__48859;
count__48179 = G__48860;
i__48180 = G__48861;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48198 = cljs.core.seq(styles);
var chunk__48199 = null;
var count__48200 = (0);
var i__48201 = (0);
while(true){
if((i__48201 < count__48200)){
var vec__48219 = chunk__48199.cljs$core$IIndexed$_nth$arity$2(null,i__48201);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48219,(1),null);
var G__48223_48866 = dom;
var G__48224_48867 = cljs.core.name(k);
var G__48225_48868 = (((v == null))?"":v);
goog.style.setStyle(G__48223_48866,G__48224_48867,G__48225_48868);


var G__48869 = seq__48198;
var G__48870 = chunk__48199;
var G__48871 = count__48200;
var G__48872 = (i__48201 + (1));
seq__48198 = G__48869;
chunk__48199 = G__48870;
count__48200 = G__48871;
i__48201 = G__48872;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48198);
if(temp__5735__auto__){
var seq__48198__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48198__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48198__$1);
var G__48875 = cljs.core.chunk_rest(seq__48198__$1);
var G__48876 = c__4550__auto__;
var G__48877 = cljs.core.count(c__4550__auto__);
var G__48878 = (0);
seq__48198 = G__48875;
chunk__48199 = G__48876;
count__48200 = G__48877;
i__48201 = G__48878;
continue;
} else {
var vec__48227 = cljs.core.first(seq__48198__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48227,(1),null);
var G__48230_48879 = dom;
var G__48231_48880 = cljs.core.name(k);
var G__48232_48881 = (((v == null))?"":v);
goog.style.setStyle(G__48230_48879,G__48231_48880,G__48232_48881);


var G__48882 = cljs.core.next(seq__48198__$1);
var G__48883 = null;
var G__48884 = (0);
var G__48885 = (0);
seq__48198 = G__48882;
chunk__48199 = G__48883;
count__48200 = G__48884;
i__48201 = G__48885;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48233_48889 = key;
var G__48233_48890__$1 = (((G__48233_48889 instanceof cljs.core.Keyword))?G__48233_48889.fqn:null);
switch (G__48233_48890__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48897 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_48897,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_48897,"aria-");
}
})())){
el.setAttribute(ks_48897,value);
} else {
(el[ks_48897] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__48240 = shadow.dom.dom_node(el);
var G__48241 = cls;
return goog.dom.classlist.contains(G__48240,G__48241);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48248){
var map__48249 = p__48248;
var map__48249__$1 = (((((!((map__48249 == null))))?(((((map__48249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48249):map__48249);
var props = map__48249__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48249__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48252 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48252,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48252,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48252,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48255 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48255,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48255;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48258 = arguments.length;
switch (G__48258) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48275){
var vec__48276 = p__48275;
var seq__48277 = cljs.core.seq(vec__48276);
var first__48278 = cljs.core.first(seq__48277);
var seq__48277__$1 = cljs.core.next(seq__48277);
var nn = first__48278;
var first__48278__$1 = cljs.core.first(seq__48277__$1);
var seq__48277__$2 = cljs.core.next(seq__48277__$1);
var np = first__48278__$1;
var nc = seq__48277__$2;
var node = vec__48276;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48279 = nn;
var G__48280 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48279,G__48280) : create_fn.call(null,G__48279,G__48280));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48282 = nn;
var G__48283 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48282,G__48283) : create_fn.call(null,G__48282,G__48283));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48284 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48284,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48284,(1),null);
var seq__48287_48922 = cljs.core.seq(node_children);
var chunk__48288_48923 = null;
var count__48289_48924 = (0);
var i__48290_48925 = (0);
while(true){
if((i__48290_48925 < count__48289_48924)){
var child_struct_48926 = chunk__48288_48923.cljs$core$IIndexed$_nth$arity$2(null,i__48290_48925);
var children_48927 = shadow.dom.dom_node(child_struct_48926);
if(cljs.core.seq_QMARK_(children_48927)){
var seq__48313_48928 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48927));
var chunk__48315_48929 = null;
var count__48316_48930 = (0);
var i__48317_48931 = (0);
while(true){
if((i__48317_48931 < count__48316_48930)){
var child_48933 = chunk__48315_48929.cljs$core$IIndexed$_nth$arity$2(null,i__48317_48931);
if(cljs.core.truth_(child_48933)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48933);


var G__48935 = seq__48313_48928;
var G__48936 = chunk__48315_48929;
var G__48937 = count__48316_48930;
var G__48938 = (i__48317_48931 + (1));
seq__48313_48928 = G__48935;
chunk__48315_48929 = G__48936;
count__48316_48930 = G__48937;
i__48317_48931 = G__48938;
continue;
} else {
var G__48940 = seq__48313_48928;
var G__48941 = chunk__48315_48929;
var G__48942 = count__48316_48930;
var G__48943 = (i__48317_48931 + (1));
seq__48313_48928 = G__48940;
chunk__48315_48929 = G__48941;
count__48316_48930 = G__48942;
i__48317_48931 = G__48943;
continue;
}
} else {
var temp__5735__auto___48944 = cljs.core.seq(seq__48313_48928);
if(temp__5735__auto___48944){
var seq__48313_48946__$1 = temp__5735__auto___48944;
if(cljs.core.chunked_seq_QMARK_(seq__48313_48946__$1)){
var c__4550__auto___48947 = cljs.core.chunk_first(seq__48313_48946__$1);
var G__48948 = cljs.core.chunk_rest(seq__48313_48946__$1);
var G__48949 = c__4550__auto___48947;
var G__48950 = cljs.core.count(c__4550__auto___48947);
var G__48951 = (0);
seq__48313_48928 = G__48948;
chunk__48315_48929 = G__48949;
count__48316_48930 = G__48950;
i__48317_48931 = G__48951;
continue;
} else {
var child_48952 = cljs.core.first(seq__48313_48946__$1);
if(cljs.core.truth_(child_48952)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48952);


var G__48956 = cljs.core.next(seq__48313_48946__$1);
var G__48957 = null;
var G__48958 = (0);
var G__48959 = (0);
seq__48313_48928 = G__48956;
chunk__48315_48929 = G__48957;
count__48316_48930 = G__48958;
i__48317_48931 = G__48959;
continue;
} else {
var G__48961 = cljs.core.next(seq__48313_48946__$1);
var G__48962 = null;
var G__48963 = (0);
var G__48964 = (0);
seq__48313_48928 = G__48961;
chunk__48315_48929 = G__48962;
count__48316_48930 = G__48963;
i__48317_48931 = G__48964;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48927);
}


var G__48965 = seq__48287_48922;
var G__48966 = chunk__48288_48923;
var G__48967 = count__48289_48924;
var G__48968 = (i__48290_48925 + (1));
seq__48287_48922 = G__48965;
chunk__48288_48923 = G__48966;
count__48289_48924 = G__48967;
i__48290_48925 = G__48968;
continue;
} else {
var temp__5735__auto___48969 = cljs.core.seq(seq__48287_48922);
if(temp__5735__auto___48969){
var seq__48287_48970__$1 = temp__5735__auto___48969;
if(cljs.core.chunked_seq_QMARK_(seq__48287_48970__$1)){
var c__4550__auto___48971 = cljs.core.chunk_first(seq__48287_48970__$1);
var G__48974 = cljs.core.chunk_rest(seq__48287_48970__$1);
var G__48975 = c__4550__auto___48971;
var G__48976 = cljs.core.count(c__4550__auto___48971);
var G__48977 = (0);
seq__48287_48922 = G__48974;
chunk__48288_48923 = G__48975;
count__48289_48924 = G__48976;
i__48290_48925 = G__48977;
continue;
} else {
var child_struct_48978 = cljs.core.first(seq__48287_48970__$1);
var children_48979 = shadow.dom.dom_node(child_struct_48978);
if(cljs.core.seq_QMARK_(children_48979)){
var seq__48322_48980 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48979));
var chunk__48324_48981 = null;
var count__48325_48982 = (0);
var i__48326_48983 = (0);
while(true){
if((i__48326_48983 < count__48325_48982)){
var child_48987 = chunk__48324_48981.cljs$core$IIndexed$_nth$arity$2(null,i__48326_48983);
if(cljs.core.truth_(child_48987)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48987);


var G__48990 = seq__48322_48980;
var G__48991 = chunk__48324_48981;
var G__48992 = count__48325_48982;
var G__48993 = (i__48326_48983 + (1));
seq__48322_48980 = G__48990;
chunk__48324_48981 = G__48991;
count__48325_48982 = G__48992;
i__48326_48983 = G__48993;
continue;
} else {
var G__48994 = seq__48322_48980;
var G__48995 = chunk__48324_48981;
var G__48996 = count__48325_48982;
var G__48997 = (i__48326_48983 + (1));
seq__48322_48980 = G__48994;
chunk__48324_48981 = G__48995;
count__48325_48982 = G__48996;
i__48326_48983 = G__48997;
continue;
}
} else {
var temp__5735__auto___49003__$1 = cljs.core.seq(seq__48322_48980);
if(temp__5735__auto___49003__$1){
var seq__48322_49004__$1 = temp__5735__auto___49003__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48322_49004__$1)){
var c__4550__auto___49005 = cljs.core.chunk_first(seq__48322_49004__$1);
var G__49006 = cljs.core.chunk_rest(seq__48322_49004__$1);
var G__49007 = c__4550__auto___49005;
var G__49008 = cljs.core.count(c__4550__auto___49005);
var G__49009 = (0);
seq__48322_48980 = G__49006;
chunk__48324_48981 = G__49007;
count__48325_48982 = G__49008;
i__48326_48983 = G__49009;
continue;
} else {
var child_49010 = cljs.core.first(seq__48322_49004__$1);
if(cljs.core.truth_(child_49010)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49010);


var G__49011 = cljs.core.next(seq__48322_49004__$1);
var G__49012 = null;
var G__49013 = (0);
var G__49014 = (0);
seq__48322_48980 = G__49011;
chunk__48324_48981 = G__49012;
count__48325_48982 = G__49013;
i__48326_48983 = G__49014;
continue;
} else {
var G__49015 = cljs.core.next(seq__48322_49004__$1);
var G__49016 = null;
var G__49017 = (0);
var G__49018 = (0);
seq__48322_48980 = G__49015;
chunk__48324_48981 = G__49016;
count__48325_48982 = G__49017;
i__48326_48983 = G__49018;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48979);
}


var G__49020 = cljs.core.next(seq__48287_48970__$1);
var G__49021 = null;
var G__49022 = (0);
var G__49023 = (0);
seq__48287_48922 = G__49020;
chunk__48288_48923 = G__49021;
count__48289_48924 = G__49022;
i__48290_48925 = G__49023;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48345 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48345);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48347 = cljs.core.seq(node);
var chunk__48348 = null;
var count__48349 = (0);
var i__48350 = (0);
while(true){
if((i__48350 < count__48349)){
var n = chunk__48348.cljs$core$IIndexed$_nth$arity$2(null,i__48350);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49032 = seq__48347;
var G__49033 = chunk__48348;
var G__49034 = count__48349;
var G__49035 = (i__48350 + (1));
seq__48347 = G__49032;
chunk__48348 = G__49033;
count__48349 = G__49034;
i__48350 = G__49035;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48347);
if(temp__5735__auto__){
var seq__48347__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48347__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48347__$1);
var G__49050 = cljs.core.chunk_rest(seq__48347__$1);
var G__49051 = c__4550__auto__;
var G__49052 = cljs.core.count(c__4550__auto__);
var G__49053 = (0);
seq__48347 = G__49050;
chunk__48348 = G__49051;
count__48349 = G__49052;
i__48350 = G__49053;
continue;
} else {
var n = cljs.core.first(seq__48347__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49054 = cljs.core.next(seq__48347__$1);
var G__49055 = null;
var G__49056 = (0);
var G__49057 = (0);
seq__48347 = G__49054;
chunk__48348 = G__49055;
count__48349 = G__49056;
i__48350 = G__49057;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48353 = shadow.dom.dom_node(new$);
var G__48354 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48353,G__48354);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48356 = arguments.length;
switch (G__48356) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48358 = arguments.length;
switch (G__48358) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48360 = arguments.length;
switch (G__48360) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49079 = arguments.length;
var i__4731__auto___49080 = (0);
while(true){
if((i__4731__auto___49080 < len__4730__auto___49079)){
args__4736__auto__.push((arguments[i__4731__auto___49080]));

var G__49081 = (i__4731__auto___49080 + (1));
i__4731__auto___49080 = G__49081;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48362_49082 = cljs.core.seq(nodes);
var chunk__48363_49083 = null;
var count__48364_49084 = (0);
var i__48365_49085 = (0);
while(true){
if((i__48365_49085 < count__48364_49084)){
var node_49086 = chunk__48363_49083.cljs$core$IIndexed$_nth$arity$2(null,i__48365_49085);
fragment.appendChild(shadow.dom._to_dom(node_49086));


var G__49087 = seq__48362_49082;
var G__49088 = chunk__48363_49083;
var G__49089 = count__48364_49084;
var G__49090 = (i__48365_49085 + (1));
seq__48362_49082 = G__49087;
chunk__48363_49083 = G__49088;
count__48364_49084 = G__49089;
i__48365_49085 = G__49090;
continue;
} else {
var temp__5735__auto___49091 = cljs.core.seq(seq__48362_49082);
if(temp__5735__auto___49091){
var seq__48362_49094__$1 = temp__5735__auto___49091;
if(cljs.core.chunked_seq_QMARK_(seq__48362_49094__$1)){
var c__4550__auto___49095 = cljs.core.chunk_first(seq__48362_49094__$1);
var G__49096 = cljs.core.chunk_rest(seq__48362_49094__$1);
var G__49097 = c__4550__auto___49095;
var G__49098 = cljs.core.count(c__4550__auto___49095);
var G__49099 = (0);
seq__48362_49082 = G__49096;
chunk__48363_49083 = G__49097;
count__48364_49084 = G__49098;
i__48365_49085 = G__49099;
continue;
} else {
var node_49101 = cljs.core.first(seq__48362_49094__$1);
fragment.appendChild(shadow.dom._to_dom(node_49101));


var G__49102 = cljs.core.next(seq__48362_49094__$1);
var G__49103 = null;
var G__49104 = (0);
var G__49105 = (0);
seq__48362_49082 = G__49102;
chunk__48363_49083 = G__49103;
count__48364_49084 = G__49104;
i__48365_49085 = G__49105;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq48361){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48361));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48372_49106 = cljs.core.seq(scripts);
var chunk__48373_49107 = null;
var count__48374_49108 = (0);
var i__48375_49109 = (0);
while(true){
if((i__48375_49109 < count__48374_49108)){
var vec__48385_49110 = chunk__48373_49107.cljs$core$IIndexed$_nth$arity$2(null,i__48375_49109);
var script_tag_49111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48385_49110,(0),null);
var script_body_49112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48385_49110,(1),null);
eval(script_body_49112);


var G__49113 = seq__48372_49106;
var G__49114 = chunk__48373_49107;
var G__49115 = count__48374_49108;
var G__49116 = (i__48375_49109 + (1));
seq__48372_49106 = G__49113;
chunk__48373_49107 = G__49114;
count__48374_49108 = G__49115;
i__48375_49109 = G__49116;
continue;
} else {
var temp__5735__auto___49117 = cljs.core.seq(seq__48372_49106);
if(temp__5735__auto___49117){
var seq__48372_49118__$1 = temp__5735__auto___49117;
if(cljs.core.chunked_seq_QMARK_(seq__48372_49118__$1)){
var c__4550__auto___49120 = cljs.core.chunk_first(seq__48372_49118__$1);
var G__49122 = cljs.core.chunk_rest(seq__48372_49118__$1);
var G__49123 = c__4550__auto___49120;
var G__49124 = cljs.core.count(c__4550__auto___49120);
var G__49125 = (0);
seq__48372_49106 = G__49122;
chunk__48373_49107 = G__49123;
count__48374_49108 = G__49124;
i__48375_49109 = G__49125;
continue;
} else {
var vec__48390_49126 = cljs.core.first(seq__48372_49118__$1);
var script_tag_49127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48390_49126,(0),null);
var script_body_49128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48390_49126,(1),null);
eval(script_body_49128);


var G__49129 = cljs.core.next(seq__48372_49118__$1);
var G__49131 = null;
var G__49132 = (0);
var G__49133 = (0);
seq__48372_49106 = G__49129;
chunk__48373_49107 = G__49131;
count__48374_49108 = G__49132;
i__48375_49109 = G__49133;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__48393){
var vec__48394 = p__48393;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48400 = shadow.dom.dom_node(el);
var G__48401 = cls;
return goog.dom.getAncestorByClass(G__48400,G__48401);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48404 = arguments.length;
switch (G__48404) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48406 = shadow.dom.dom_node(el);
var G__48407 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48406,G__48407);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48408 = shadow.dom.dom_node(el);
var G__48409 = cljs.core.name(tag);
var G__48410 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48408,G__48409,G__48410);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48413 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48413);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48416 = shadow.dom.dom_node(dom);
var G__48417 = value;
return goog.dom.forms.setValue(G__48416,G__48417);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48419 = cljs.core.seq(style_keys);
var chunk__48420 = null;
var count__48421 = (0);
var i__48422 = (0);
while(true){
if((i__48422 < count__48421)){
var it = chunk__48420.cljs$core$IIndexed$_nth$arity$2(null,i__48422);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49154 = seq__48419;
var G__49155 = chunk__48420;
var G__49156 = count__48421;
var G__49157 = (i__48422 + (1));
seq__48419 = G__49154;
chunk__48420 = G__49155;
count__48421 = G__49156;
i__48422 = G__49157;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48419);
if(temp__5735__auto__){
var seq__48419__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48419__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48419__$1);
var G__49158 = cljs.core.chunk_rest(seq__48419__$1);
var G__49159 = c__4550__auto__;
var G__49160 = cljs.core.count(c__4550__auto__);
var G__49161 = (0);
seq__48419 = G__49158;
chunk__48420 = G__49159;
count__48421 = G__49160;
i__48422 = G__49161;
continue;
} else {
var it = cljs.core.first(seq__48419__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49163 = cljs.core.next(seq__48419__$1);
var G__49164 = null;
var G__49165 = (0);
var G__49166 = (0);
seq__48419 = G__49163;
chunk__48420 = G__49164;
count__48421 = G__49165;
i__48422 = G__49166;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48428,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48438 = k48428;
var G__48438__$1 = (((G__48438 instanceof cljs.core.Keyword))?G__48438.fqn:null);
switch (G__48438__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48428,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48440){
var vec__48442 = p__48440;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48442,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48442,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48427){
var self__ = this;
var G__48427__$1 = this;
return (new cljs.core.RecordIter((0),G__48427__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__48448 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48448(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48429,other48430){
var self__ = this;
var this48429__$1 = this;
return (((!((other48430 == null)))) && ((this48429__$1.constructor === other48430.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48429__$1.x,other48430.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48429__$1.y,other48430.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48429__$1.__extmap,other48430.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48427){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48453 = cljs.core.keyword_identical_QMARK_;
var expr__48454 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48457 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48458 = expr__48454;
return (pred__48453.cljs$core$IFn$_invoke$arity$2 ? pred__48453.cljs$core$IFn$_invoke$arity$2(G__48457,G__48458) : pred__48453.call(null,G__48457,G__48458));
})())){
return (new shadow.dom.Coordinate(G__48427,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48460 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48461 = expr__48454;
return (pred__48453.cljs$core$IFn$_invoke$arity$2 ? pred__48453.cljs$core$IFn$_invoke$arity$2(G__48460,G__48461) : pred__48453.call(null,G__48460,G__48461));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48427,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48427),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48427){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48427,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48431){
var extmap__4424__auto__ = (function (){var G__48473 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48431,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48431)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48473);
} else {
return G__48473;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48431),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48431),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48476 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48476);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48477 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48477);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48479 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48479);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48482,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48487 = k48482;
var G__48487__$1 = (((G__48487 instanceof cljs.core.Keyword))?G__48487.fqn:null);
switch (G__48487__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48482,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48488){
var vec__48489 = p__48488;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48489,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48489,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48481){
var self__ = this;
var G__48481__$1 = this;
return (new cljs.core.RecordIter((0),G__48481__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__48492 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48492(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48483,other48484){
var self__ = this;
var this48483__$1 = this;
return (((!((other48484 == null)))) && ((this48483__$1.constructor === other48484.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48483__$1.w,other48484.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48483__$1.h,other48484.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48483__$1.__extmap,other48484.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48481){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48502 = cljs.core.keyword_identical_QMARK_;
var expr__48503 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48506 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48507 = expr__48503;
return (pred__48502.cljs$core$IFn$_invoke$arity$2 ? pred__48502.cljs$core$IFn$_invoke$arity$2(G__48506,G__48507) : pred__48502.call(null,G__48506,G__48507));
})())){
return (new shadow.dom.Size(G__48481,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48511 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48512 = expr__48503;
return (pred__48502.cljs$core$IFn$_invoke$arity$2 ? pred__48502.cljs$core$IFn$_invoke$arity$2(G__48511,G__48512) : pred__48502.call(null,G__48511,G__48512));
})())){
return (new shadow.dom.Size(self__.w,G__48481,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48481),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48481){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48481,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48485){
var extmap__4424__auto__ = (function (){var G__48517 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48485,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48485)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48517);
} else {
return G__48517;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48485),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48485),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48522 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48522);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__49233 = (i + (1));
var G__49234 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49233;
ret = G__49234;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48537){
var vec__48538 = p__48537;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48538,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48538,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48546 = arguments.length;
switch (G__48546) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48561_49252 = new_node;
var G__48562_49253 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48561_49252,G__48562_49253);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48567_49258 = new_node;
var G__48568_49259 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48567_49258,G__48568_49259);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49263 = ps;
var G__49264 = (i + (1));
el__$1 = G__49263;
i = G__49264;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48592 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48592);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48599 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48599);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48603 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48603);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48610 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48610,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48610,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48610,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48613_49271 = cljs.core.seq(props);
var chunk__48614_49272 = null;
var count__48615_49273 = (0);
var i__48616_49274 = (0);
while(true){
if((i__48616_49274 < count__48615_49273)){
var vec__48640_49275 = chunk__48614_49272.cljs$core$IIndexed$_nth$arity$2(null,i__48616_49274);
var k_49276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48640_49275,(0),null);
var v_49277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48640_49275,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49276);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49276),v_49277);


var G__49280 = seq__48613_49271;
var G__49281 = chunk__48614_49272;
var G__49282 = count__48615_49273;
var G__49283 = (i__48616_49274 + (1));
seq__48613_49271 = G__49280;
chunk__48614_49272 = G__49281;
count__48615_49273 = G__49282;
i__48616_49274 = G__49283;
continue;
} else {
var temp__5735__auto___49284 = cljs.core.seq(seq__48613_49271);
if(temp__5735__auto___49284){
var seq__48613_49285__$1 = temp__5735__auto___49284;
if(cljs.core.chunked_seq_QMARK_(seq__48613_49285__$1)){
var c__4550__auto___49286 = cljs.core.chunk_first(seq__48613_49285__$1);
var G__49287 = cljs.core.chunk_rest(seq__48613_49285__$1);
var G__49288 = c__4550__auto___49286;
var G__49289 = cljs.core.count(c__4550__auto___49286);
var G__49290 = (0);
seq__48613_49271 = G__49287;
chunk__48614_49272 = G__49288;
count__48615_49273 = G__49289;
i__48616_49274 = G__49290;
continue;
} else {
var vec__48648_49293 = cljs.core.first(seq__48613_49285__$1);
var k_49294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48648_49293,(0),null);
var v_49295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48648_49293,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49294);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49294),v_49295);


var G__49306 = cljs.core.next(seq__48613_49285__$1);
var G__49307 = null;
var G__49308 = (0);
var G__49309 = (0);
seq__48613_49271 = G__49306;
chunk__48614_49272 = G__49307;
count__48615_49273 = G__49308;
i__48616_49274 = G__49309;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48662 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48662,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48662,(1),null);
var seq__48665_49310 = cljs.core.seq(node_children);
var chunk__48667_49311 = null;
var count__48668_49312 = (0);
var i__48669_49313 = (0);
while(true){
if((i__48669_49313 < count__48668_49312)){
var child_struct_49315 = chunk__48667_49311.cljs$core$IIndexed$_nth$arity$2(null,i__48669_49313);
if((!((child_struct_49315 == null)))){
if(typeof child_struct_49315 === 'string'){
var text_49316 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49316),child_struct_49315].join(''));
} else {
var children_49317 = shadow.dom.svg_node(child_struct_49315);
if(cljs.core.seq_QMARK_(children_49317)){
var seq__48698_49319 = cljs.core.seq(children_49317);
var chunk__48700_49320 = null;
var count__48701_49321 = (0);
var i__48702_49322 = (0);
while(true){
if((i__48702_49322 < count__48701_49321)){
var child_49323 = chunk__48700_49320.cljs$core$IIndexed$_nth$arity$2(null,i__48702_49322);
if(cljs.core.truth_(child_49323)){
node.appendChild(child_49323);


var G__49324 = seq__48698_49319;
var G__49325 = chunk__48700_49320;
var G__49326 = count__48701_49321;
var G__49327 = (i__48702_49322 + (1));
seq__48698_49319 = G__49324;
chunk__48700_49320 = G__49325;
count__48701_49321 = G__49326;
i__48702_49322 = G__49327;
continue;
} else {
var G__49328 = seq__48698_49319;
var G__49329 = chunk__48700_49320;
var G__49330 = count__48701_49321;
var G__49331 = (i__48702_49322 + (1));
seq__48698_49319 = G__49328;
chunk__48700_49320 = G__49329;
count__48701_49321 = G__49330;
i__48702_49322 = G__49331;
continue;
}
} else {
var temp__5735__auto___49332 = cljs.core.seq(seq__48698_49319);
if(temp__5735__auto___49332){
var seq__48698_49334__$1 = temp__5735__auto___49332;
if(cljs.core.chunked_seq_QMARK_(seq__48698_49334__$1)){
var c__4550__auto___49335 = cljs.core.chunk_first(seq__48698_49334__$1);
var G__49336 = cljs.core.chunk_rest(seq__48698_49334__$1);
var G__49337 = c__4550__auto___49335;
var G__49338 = cljs.core.count(c__4550__auto___49335);
var G__49339 = (0);
seq__48698_49319 = G__49336;
chunk__48700_49320 = G__49337;
count__48701_49321 = G__49338;
i__48702_49322 = G__49339;
continue;
} else {
var child_49341 = cljs.core.first(seq__48698_49334__$1);
if(cljs.core.truth_(child_49341)){
node.appendChild(child_49341);


var G__49342 = cljs.core.next(seq__48698_49334__$1);
var G__49343 = null;
var G__49344 = (0);
var G__49345 = (0);
seq__48698_49319 = G__49342;
chunk__48700_49320 = G__49343;
count__48701_49321 = G__49344;
i__48702_49322 = G__49345;
continue;
} else {
var G__49346 = cljs.core.next(seq__48698_49334__$1);
var G__49347 = null;
var G__49348 = (0);
var G__49349 = (0);
seq__48698_49319 = G__49346;
chunk__48700_49320 = G__49347;
count__48701_49321 = G__49348;
i__48702_49322 = G__49349;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49317);
}
}


var G__49351 = seq__48665_49310;
var G__49352 = chunk__48667_49311;
var G__49353 = count__48668_49312;
var G__49354 = (i__48669_49313 + (1));
seq__48665_49310 = G__49351;
chunk__48667_49311 = G__49352;
count__48668_49312 = G__49353;
i__48669_49313 = G__49354;
continue;
} else {
var G__49356 = seq__48665_49310;
var G__49357 = chunk__48667_49311;
var G__49358 = count__48668_49312;
var G__49359 = (i__48669_49313 + (1));
seq__48665_49310 = G__49356;
chunk__48667_49311 = G__49357;
count__48668_49312 = G__49358;
i__48669_49313 = G__49359;
continue;
}
} else {
var temp__5735__auto___49361 = cljs.core.seq(seq__48665_49310);
if(temp__5735__auto___49361){
var seq__48665_49362__$1 = temp__5735__auto___49361;
if(cljs.core.chunked_seq_QMARK_(seq__48665_49362__$1)){
var c__4550__auto___49363 = cljs.core.chunk_first(seq__48665_49362__$1);
var G__49365 = cljs.core.chunk_rest(seq__48665_49362__$1);
var G__49366 = c__4550__auto___49363;
var G__49367 = cljs.core.count(c__4550__auto___49363);
var G__49368 = (0);
seq__48665_49310 = G__49365;
chunk__48667_49311 = G__49366;
count__48668_49312 = G__49367;
i__48669_49313 = G__49368;
continue;
} else {
var child_struct_49369 = cljs.core.first(seq__48665_49362__$1);
if((!((child_struct_49369 == null)))){
if(typeof child_struct_49369 === 'string'){
var text_49370 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49370),child_struct_49369].join(''));
} else {
var children_49371 = shadow.dom.svg_node(child_struct_49369);
if(cljs.core.seq_QMARK_(children_49371)){
var seq__48711_49372 = cljs.core.seq(children_49371);
var chunk__48713_49373 = null;
var count__48714_49374 = (0);
var i__48715_49375 = (0);
while(true){
if((i__48715_49375 < count__48714_49374)){
var child_49376 = chunk__48713_49373.cljs$core$IIndexed$_nth$arity$2(null,i__48715_49375);
if(cljs.core.truth_(child_49376)){
node.appendChild(child_49376);


var G__49377 = seq__48711_49372;
var G__49378 = chunk__48713_49373;
var G__49379 = count__48714_49374;
var G__49380 = (i__48715_49375 + (1));
seq__48711_49372 = G__49377;
chunk__48713_49373 = G__49378;
count__48714_49374 = G__49379;
i__48715_49375 = G__49380;
continue;
} else {
var G__49381 = seq__48711_49372;
var G__49382 = chunk__48713_49373;
var G__49383 = count__48714_49374;
var G__49384 = (i__48715_49375 + (1));
seq__48711_49372 = G__49381;
chunk__48713_49373 = G__49382;
count__48714_49374 = G__49383;
i__48715_49375 = G__49384;
continue;
}
} else {
var temp__5735__auto___49391__$1 = cljs.core.seq(seq__48711_49372);
if(temp__5735__auto___49391__$1){
var seq__48711_49397__$1 = temp__5735__auto___49391__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48711_49397__$1)){
var c__4550__auto___49399 = cljs.core.chunk_first(seq__48711_49397__$1);
var G__49401 = cljs.core.chunk_rest(seq__48711_49397__$1);
var G__49402 = c__4550__auto___49399;
var G__49403 = cljs.core.count(c__4550__auto___49399);
var G__49404 = (0);
seq__48711_49372 = G__49401;
chunk__48713_49373 = G__49402;
count__48714_49374 = G__49403;
i__48715_49375 = G__49404;
continue;
} else {
var child_49405 = cljs.core.first(seq__48711_49397__$1);
if(cljs.core.truth_(child_49405)){
node.appendChild(child_49405);


var G__49406 = cljs.core.next(seq__48711_49397__$1);
var G__49407 = null;
var G__49408 = (0);
var G__49409 = (0);
seq__48711_49372 = G__49406;
chunk__48713_49373 = G__49407;
count__48714_49374 = G__49408;
i__48715_49375 = G__49409;
continue;
} else {
var G__49410 = cljs.core.next(seq__48711_49397__$1);
var G__49411 = null;
var G__49412 = (0);
var G__49413 = (0);
seq__48711_49372 = G__49410;
chunk__48713_49373 = G__49411;
count__48714_49374 = G__49412;
i__48715_49375 = G__49413;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49371);
}
}


var G__49416 = cljs.core.next(seq__48665_49362__$1);
var G__49417 = null;
var G__49418 = (0);
var G__49419 = (0);
seq__48665_49310 = G__49416;
chunk__48667_49311 = G__49417;
count__48668_49312 = G__49418;
i__48669_49313 = G__49419;
continue;
} else {
var G__49420 = cljs.core.next(seq__48665_49362__$1);
var G__49421 = null;
var G__49422 = (0);
var G__49423 = (0);
seq__48665_49310 = G__49420;
chunk__48667_49311 = G__49421;
count__48668_49312 = G__49422;
i__48669_49313 = G__49423;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48718_49425 = shadow.dom._to_svg;
var G__48719_49426 = "string";
var G__48720_49427 = ((function (G__48718_49425,G__48719_49426){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__48718_49425,G__48719_49426))
;
goog.object.set(G__48718_49425,G__48719_49426,G__48720_49427);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48721_49434 = shadow.dom._to_svg;
var G__48722_49435 = "null";
var G__48723_49436 = ((function (G__48721_49434,G__48722_49435){
return (function (_){
return null;
});})(G__48721_49434,G__48722_49435))
;
goog.object.set(G__48721_49434,G__48722_49435,G__48723_49436);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49441 = arguments.length;
var i__4731__auto___49442 = (0);
while(true){
if((i__4731__auto___49442 < len__4730__auto___49441)){
args__4736__auto__.push((arguments[i__4731__auto___49442]));

var G__49443 = (i__4731__auto___49442 + (1));
i__4731__auto___49442 = G__49443;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq48724){
var G__48725 = cljs.core.first(seq48724);
var seq48724__$1 = cljs.core.next(seq48724);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48725,seq48724__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48731 = arguments.length;
switch (G__48731) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__48735_49469 = shadow.dom.dom_node(el);
var G__48736_49470 = cljs.core.name(event);
var G__48737_49471 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48735_49469,G__48736_49470,G__48737_49471) : shadow.dom.dom_listen.call(null,G__48735_49469,G__48736_49470,G__48737_49471));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__46465__auto___49476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___49476,buf,chan,event_fn){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___49476,buf,chan,event_fn){
return (function (state_48743){
var state_val_48744 = (state_48743[(1)]);
if((state_val_48744 === (1))){
var state_48743__$1 = state_48743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48743__$1,(2),once_or_cleanup);
} else {
if((state_val_48744 === (2))){
var inst_48740 = (state_48743[(2)]);
var inst_48741 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48743__$1 = (function (){var statearr_48749 = state_48743;
(statearr_48749[(7)] = inst_48740);

return statearr_48749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48743__$1,inst_48741);
} else {
return null;
}
}
});})(c__46465__auto___49476,buf,chan,event_fn))
;
return ((function (switch__46366__auto__,c__46465__auto___49476,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__46367__auto__ = null;
var shadow$dom$state_machine__46367__auto____0 = (function (){
var statearr_48751 = [null,null,null,null,null,null,null,null];
(statearr_48751[(0)] = shadow$dom$state_machine__46367__auto__);

(statearr_48751[(1)] = (1));

return statearr_48751;
});
var shadow$dom$state_machine__46367__auto____1 = (function (state_48743){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_48743);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e48752){if((e48752 instanceof Object)){
var ex__46370__auto__ = e48752;
var statearr_48753_49492 = state_48743;
(statearr_48753_49492[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49494 = state_48743;
state_48743 = G__49494;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
shadow$dom$state_machine__46367__auto__ = function(state_48743){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46367__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46367__auto____1.call(this,state_48743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46367__auto____0;
shadow$dom$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46367__auto____1;
return shadow$dom$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___49476,buf,chan,event_fn))
})();
var state__46467__auto__ = (function (){var statearr_48754 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_48754[(6)] = c__46465__auto___49476);

return statearr_48754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___49476,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
