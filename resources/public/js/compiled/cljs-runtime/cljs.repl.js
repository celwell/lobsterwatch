goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44825){
var map__44826 = p__44825;
var map__44826__$1 = (((((!((map__44826 == null))))?(((((map__44826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44826):map__44826);
var m = map__44826__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44826__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44826__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44831_45037 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44832_45038 = null;
var count__44833_45039 = (0);
var i__44834_45040 = (0);
while(true){
if((i__44834_45040 < count__44833_45039)){
var f_45044 = chunk__44832_45038.cljs$core$IIndexed$_nth$arity$2(null,i__44834_45040);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45044], 0));


var G__45046 = seq__44831_45037;
var G__45047 = chunk__44832_45038;
var G__45048 = count__44833_45039;
var G__45049 = (i__44834_45040 + (1));
seq__44831_45037 = G__45046;
chunk__44832_45038 = G__45047;
count__44833_45039 = G__45048;
i__44834_45040 = G__45049;
continue;
} else {
var temp__5735__auto___45051 = cljs.core.seq(seq__44831_45037);
if(temp__5735__auto___45051){
var seq__44831_45054__$1 = temp__5735__auto___45051;
if(cljs.core.chunked_seq_QMARK_(seq__44831_45054__$1)){
var c__4550__auto___45056 = cljs.core.chunk_first(seq__44831_45054__$1);
var G__45057 = cljs.core.chunk_rest(seq__44831_45054__$1);
var G__45058 = c__4550__auto___45056;
var G__45059 = cljs.core.count(c__4550__auto___45056);
var G__45060 = (0);
seq__44831_45037 = G__45057;
chunk__44832_45038 = G__45058;
count__44833_45039 = G__45059;
i__44834_45040 = G__45060;
continue;
} else {
var f_45061 = cljs.core.first(seq__44831_45054__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45061], 0));


var G__45064 = cljs.core.next(seq__44831_45054__$1);
var G__45065 = null;
var G__45066 = (0);
var G__45067 = (0);
seq__44831_45037 = G__45064;
chunk__44832_45038 = G__45065;
count__44833_45039 = G__45066;
i__44834_45040 = G__45067;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45069 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45069], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45069)))?cljs.core.second(arglists_45069):arglists_45069)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44841_45080 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44842_45081 = null;
var count__44843_45082 = (0);
var i__44844_45083 = (0);
while(true){
if((i__44844_45083 < count__44843_45082)){
var vec__44857_45084 = chunk__44842_45081.cljs$core$IIndexed$_nth$arity$2(null,i__44844_45083);
var name_45085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44857_45084,(0),null);
var map__44860_45086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44857_45084,(1),null);
var map__44860_45087__$1 = (((((!((map__44860_45086 == null))))?(((((map__44860_45086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44860_45086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44860_45086):map__44860_45086);
var doc_45088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44860_45087__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44860_45087__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45085], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45089], 0));

if(cljs.core.truth_(doc_45088)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45088], 0));
} else {
}


var G__45113 = seq__44841_45080;
var G__45114 = chunk__44842_45081;
var G__45115 = count__44843_45082;
var G__45116 = (i__44844_45083 + (1));
seq__44841_45080 = G__45113;
chunk__44842_45081 = G__45114;
count__44843_45082 = G__45115;
i__44844_45083 = G__45116;
continue;
} else {
var temp__5735__auto___45117 = cljs.core.seq(seq__44841_45080);
if(temp__5735__auto___45117){
var seq__44841_45119__$1 = temp__5735__auto___45117;
if(cljs.core.chunked_seq_QMARK_(seq__44841_45119__$1)){
var c__4550__auto___45120 = cljs.core.chunk_first(seq__44841_45119__$1);
var G__45121 = cljs.core.chunk_rest(seq__44841_45119__$1);
var G__45122 = c__4550__auto___45120;
var G__45123 = cljs.core.count(c__4550__auto___45120);
var G__45124 = (0);
seq__44841_45080 = G__45121;
chunk__44842_45081 = G__45122;
count__44843_45082 = G__45123;
i__44844_45083 = G__45124;
continue;
} else {
var vec__44862_45125 = cljs.core.first(seq__44841_45119__$1);
var name_45126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44862_45125,(0),null);
var map__44865_45127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44862_45125,(1),null);
var map__44865_45128__$1 = (((((!((map__44865_45127 == null))))?(((((map__44865_45127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44865_45127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44865_45127):map__44865_45127);
var doc_45129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44865_45128__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44865_45128__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45126], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45130], 0));

if(cljs.core.truth_(doc_45129)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45129], 0));
} else {
}


var G__45158 = cljs.core.next(seq__44841_45119__$1);
var G__45159 = null;
var G__45160 = (0);
var G__45161 = (0);
seq__44841_45080 = G__45158;
chunk__44842_45081 = G__45159;
count__44843_45082 = G__45160;
i__44844_45083 = G__45161;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44867 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44868 = null;
var count__44869 = (0);
var i__44870 = (0);
while(true){
if((i__44870 < count__44869)){
var role = chunk__44868.cljs$core$IIndexed$_nth$arity$2(null,i__44870);
var temp__5735__auto___45166__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45166__$1)){
var spec_45172 = temp__5735__auto___45166__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45172)], 0));
} else {
}


var G__45177 = seq__44867;
var G__45178 = chunk__44868;
var G__45179 = count__44869;
var G__45180 = (i__44870 + (1));
seq__44867 = G__45177;
chunk__44868 = G__45178;
count__44869 = G__45179;
i__44870 = G__45180;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__44867);
if(temp__5735__auto____$1){
var seq__44867__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44867__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44867__$1);
var G__45193 = cljs.core.chunk_rest(seq__44867__$1);
var G__45194 = c__4550__auto__;
var G__45195 = cljs.core.count(c__4550__auto__);
var G__45196 = (0);
seq__44867 = G__45193;
chunk__44868 = G__45194;
count__44869 = G__45195;
i__44870 = G__45196;
continue;
} else {
var role = cljs.core.first(seq__44867__$1);
var temp__5735__auto___45204__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45204__$2)){
var spec_45212 = temp__5735__auto___45204__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45212)], 0));
} else {
}


var G__45232 = cljs.core.next(seq__44867__$1);
var G__45233 = null;
var G__45234 = (0);
var G__45235 = (0);
seq__44867 = G__45232;
chunk__44868 = G__45233;
count__44869 = G__45234;
i__44870 = G__45235;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45297 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45298 = cljs.core.ex_cause(t);
via = G__45297;
t = G__45298;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44880 = datafied_throwable;
var map__44880__$1 = (((((!((map__44880 == null))))?(((((map__44880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44880):map__44880);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44880__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44880__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44880__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44881 = cljs.core.last(via);
var map__44881__$1 = (((((!((map__44881 == null))))?(((((map__44881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44881):map__44881);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44881__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44881__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44881__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44882 = data;
var map__44882__$1 = (((((!((map__44882 == null))))?(((((map__44882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44882):map__44882);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44882__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44882__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44882__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44883 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44883__$1 = (((((!((map__44883 == null))))?(((((map__44883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44883):map__44883);
var top_data = map__44883__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44883__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44888 = phase;
var G__44888__$1 = (((G__44888 instanceof cljs.core.Keyword))?G__44888.fqn:null);
switch (G__44888__$1) {
case "read-source":
var map__44889 = data;
var map__44889__$1 = (((((!((map__44889 == null))))?(((((map__44889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44889):map__44889);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44889__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44889__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44891 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44891__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44891,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44891);
var G__44891__$2 = (cljs.core.truth_((function (){var fexpr__44892 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44892.cljs$core$IFn$_invoke$arity$1 ? fexpr__44892.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44892.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44891__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44891__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44891__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44893 = top_data;
var G__44893__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44893,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44893);
var G__44893__$2 = (cljs.core.truth_((function (){var fexpr__44894 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44894.cljs$core$IFn$_invoke$arity$1 ? fexpr__44894.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44894.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44893__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44893__$1);
var G__44893__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44893__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44893__$2);
var G__44893__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44893__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44893__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44893__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44893__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44896 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44896,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44896,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44896,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44896,(3),null);
var G__44899 = top_data;
var G__44899__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44899,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44899);
var G__44899__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44899__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44899__$1);
var G__44899__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44899__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44899__$2);
var G__44899__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44899__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44899__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44899__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44899__$4;
}

break;
case "execution":
var vec__44900 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44900,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44900,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44900,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44900,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__44900,source__$1,method,file,line,G__44888,G__44888__$1,map__44880,map__44880__$1,via,trace,phase,map__44881,map__44881__$1,type,message,data,map__44882,map__44882__$1,problems,fn,caller,map__44883,map__44883__$1,top_data,source){
return (function (p1__44879_SHARP_){
var or__4131__auto__ = (p1__44879_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__44904 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44904.cljs$core$IFn$_invoke$arity$1 ? fexpr__44904.cljs$core$IFn$_invoke$arity$1(p1__44879_SHARP_) : fexpr__44904.call(null,p1__44879_SHARP_));
}
});})(vec__44900,source__$1,method,file,line,G__44888,G__44888__$1,map__44880,map__44880__$1,via,trace,phase,map__44881,map__44881__$1,type,message,data,map__44882,map__44882__$1,problems,fn,caller,map__44883,map__44883__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__44907 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44907__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44907,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44907);
var G__44907__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44907__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44907__$1);
var G__44907__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44907__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44907__$2);
var G__44907__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44907__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44907__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44907__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44907__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44888__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44916){
var map__44917 = p__44916;
var map__44917__$1 = (((((!((map__44917 == null))))?(((((map__44917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44917):map__44917);
var triage_data = map__44917__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44946 = phase;
var G__44946__$1 = (((G__44946 instanceof cljs.core.Keyword))?G__44946.fqn:null);
switch (G__44946__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44947 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44948 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44949 = loc;
var G__44950 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44951_45369 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44952_45370 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44953_45371 = true;
var _STAR_print_fn_STAR__temp_val__44954_45372 = ((function (_STAR_print_newline_STAR__orig_val__44951_45369,_STAR_print_fn_STAR__orig_val__44952_45370,_STAR_print_newline_STAR__temp_val__44953_45371,sb__4661__auto__,G__44947,G__44948,G__44949,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44951_45369,_STAR_print_fn_STAR__orig_val__44952_45370,_STAR_print_newline_STAR__temp_val__44953_45371,sb__4661__auto__,G__44947,G__44948,G__44949,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44953_45371;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44954_45372;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44951_45369,_STAR_print_fn_STAR__orig_val__44952_45370,_STAR_print_newline_STAR__temp_val__44953_45371,_STAR_print_fn_STAR__temp_val__44954_45372,sb__4661__auto__,G__44947,G__44948,G__44949,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44951_45369,_STAR_print_fn_STAR__orig_val__44952_45370,_STAR_print_newline_STAR__temp_val__44953_45371,_STAR_print_fn_STAR__temp_val__44954_45372,sb__4661__auto__,G__44947,G__44948,G__44949,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44914_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44914_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44951_45369,_STAR_print_fn_STAR__orig_val__44952_45370,_STAR_print_newline_STAR__temp_val__44953_45371,_STAR_print_fn_STAR__temp_val__44954_45372,sb__4661__auto__,G__44947,G__44948,G__44949,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44951_45369,_STAR_print_fn_STAR__orig_val__44952_45370,_STAR_print_newline_STAR__temp_val__44953_45371,_STAR_print_fn_STAR__temp_val__44954_45372,sb__4661__auto__,G__44947,G__44948,G__44949,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44952_45370;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44951_45369;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44947,G__44948,G__44949,G__44950) : format.call(null,G__44947,G__44948,G__44949,G__44950));

break;
case "macroexpansion":
var G__44963 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44964 = cause_type;
var G__44965 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44966 = loc;
var G__44967 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44963,G__44964,G__44965,G__44966,G__44967) : format.call(null,G__44963,G__44964,G__44965,G__44966,G__44967));

break;
case "compile-syntax-check":
var G__44968 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44969 = cause_type;
var G__44970 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44971 = loc;
var G__44972 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44968,G__44969,G__44970,G__44971,G__44972) : format.call(null,G__44968,G__44969,G__44970,G__44971,G__44972));

break;
case "compilation":
var G__44973 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44974 = cause_type;
var G__44975 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44976 = loc;
var G__44977 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44973,G__44974,G__44975,G__44976,G__44977) : format.call(null,G__44973,G__44974,G__44975,G__44976,G__44977));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44978 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44979 = symbol;
var G__44980 = loc;
var G__44981 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45003_45396 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45004_45397 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45005_45398 = true;
var _STAR_print_fn_STAR__temp_val__45006_45399 = ((function (_STAR_print_newline_STAR__orig_val__45003_45396,_STAR_print_fn_STAR__orig_val__45004_45397,_STAR_print_newline_STAR__temp_val__45005_45398,sb__4661__auto__,G__44978,G__44979,G__44980,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__45003_45396,_STAR_print_fn_STAR__orig_val__45004_45397,_STAR_print_newline_STAR__temp_val__45005_45398,sb__4661__auto__,G__44978,G__44979,G__44980,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45005_45398;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45006_45399;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__45003_45396,_STAR_print_fn_STAR__orig_val__45004_45397,_STAR_print_newline_STAR__temp_val__45005_45398,_STAR_print_fn_STAR__temp_val__45006_45399,sb__4661__auto__,G__44978,G__44979,G__44980,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__45003_45396,_STAR_print_fn_STAR__orig_val__45004_45397,_STAR_print_newline_STAR__temp_val__45005_45398,_STAR_print_fn_STAR__temp_val__45006_45399,sb__4661__auto__,G__44978,G__44979,G__44980,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44915_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44915_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__45003_45396,_STAR_print_fn_STAR__orig_val__45004_45397,_STAR_print_newline_STAR__temp_val__45005_45398,_STAR_print_fn_STAR__temp_val__45006_45399,sb__4661__auto__,G__44978,G__44979,G__44980,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__45003_45396,_STAR_print_fn_STAR__orig_val__45004_45397,_STAR_print_newline_STAR__temp_val__45005_45398,_STAR_print_fn_STAR__temp_val__45006_45399,sb__4661__auto__,G__44978,G__44979,G__44980,G__44946,G__44946__$1,loc,class_name,simple_class,cause_type,format,map__44917,map__44917__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45004_45397;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45003_45396;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44978,G__44979,G__44980,G__44981) : format.call(null,G__44978,G__44979,G__44980,G__44981));
} else {
var G__45010 = "Execution error%s at %s(%s).\n%s\n";
var G__45011 = cause_type;
var G__45012 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45013 = loc;
var G__45014 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45010,G__45011,G__45012,G__45013,G__45014) : format.call(null,G__45010,G__45011,G__45012,G__45013,G__45014));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44946__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
