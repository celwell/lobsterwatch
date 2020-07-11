goog.provide('lobsterwatch.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('lobsterwatch.util');
goog.require('lobsterwatch.db');
goog.require('clojure.string');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lobsterwatch.events","initialize-db","lobsterwatch.events/initialize-db",1502228347),(function (_,___$1){
return lobsterwatch.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lobsterwatch.events","window-resized","lobsterwatch.events/window-resized",1635120240),(function (p__52174){
var map__52175 = p__52174;
var map__52175__$1 = (((((!((map__52175 == null))))?(((((map__52175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52175):map__52175);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52175__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"width","width",-384071477)], null),window.innerWidth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"height","height",1025178622)], null),window.innerHeight)], null);
}));
lobsterwatch.events.velocity = (function lobsterwatch$events$velocity(p__52177){
var map__52178 = p__52177;
var map__52178__$1 = (((((!((map__52178 == null))))?(((((map__52178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52178):map__52178);
var lobster = map__52178__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52178__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52178__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52178__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52178__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(lobster,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,vx),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,vy);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lobsterwatch.events","anim-step","lobsterwatch.events/anim-step",1279856593),(function (db){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lobsters","lobsters",113503454)], null),(function (p1__52180_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lobsterwatch.events.velocity,p1__52180_SHARP_);
}));
}));

//# sourceMappingURL=lobsterwatch.events.js.map
