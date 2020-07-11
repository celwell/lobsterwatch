goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46525 = arguments.length;
switch (G__46525) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46526 = (function (f,blockable,meta46527){
this.f = f;
this.blockable = blockable;
this.meta46527 = meta46527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46528,meta46527__$1){
var self__ = this;
var _46528__$1 = this;
return (new cljs.core.async.t_cljs$core$async46526(self__.f,self__.blockable,meta46527__$1));
});

cljs.core.async.t_cljs$core$async46526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46528){
var self__ = this;
var _46528__$1 = this;
return self__.meta46527;
});

cljs.core.async.t_cljs$core$async46526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46527","meta46527",903617782,null)], null);
});

cljs.core.async.t_cljs$core$async46526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46526";

cljs.core.async.t_cljs$core$async46526.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46526");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46526.
 */
cljs.core.async.__GT_t_cljs$core$async46526 = (function cljs$core$async$__GT_t_cljs$core$async46526(f__$1,blockable__$1,meta46527){
return (new cljs.core.async.t_cljs$core$async46526(f__$1,blockable__$1,meta46527));
});

}

return (new cljs.core.async.t_cljs$core$async46526(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46533 = arguments.length;
switch (G__46533) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46535 = arguments.length;
switch (G__46535) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46537 = arguments.length;
switch (G__46537) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47999 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47999) : fn1.call(null,val_47999));
} else {
cljs.core.async.impl.dispatch.run(((function (val_47999,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47999) : fn1.call(null,val_47999));
});})(val_47999,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46539 = arguments.length;
switch (G__46539) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___48020 = n;
var x_48021 = (0);
while(true){
if((x_48021 < n__4607__auto___48020)){
(a[x_48021] = x_48021);

var G__48022 = (x_48021 + (1));
x_48021 = G__48022;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46540 = (function (flag,meta46541){
this.flag = flag;
this.meta46541 = meta46541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46542,meta46541__$1){
var self__ = this;
var _46542__$1 = this;
return (new cljs.core.async.t_cljs$core$async46540(self__.flag,meta46541__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46542){
var self__ = this;
var _46542__$1 = this;
return self__.meta46541;
});})(flag))
;

cljs.core.async.t_cljs$core$async46540.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46540.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46541","meta46541",326759745,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46540";

cljs.core.async.t_cljs$core$async46540.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46540");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46540.
 */
cljs.core.async.__GT_t_cljs$core$async46540 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46540(flag__$1,meta46541){
return (new cljs.core.async.t_cljs$core$async46540(flag__$1,meta46541));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46540(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46543 = (function (flag,cb,meta46544){
this.flag = flag;
this.cb = cb;
this.meta46544 = meta46544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46545,meta46544__$1){
var self__ = this;
var _46545__$1 = this;
return (new cljs.core.async.t_cljs$core$async46543(self__.flag,self__.cb,meta46544__$1));
});

cljs.core.async.t_cljs$core$async46543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46545){
var self__ = this;
var _46545__$1 = this;
return self__.meta46544;
});

cljs.core.async.t_cljs$core$async46543.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async46543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46544","meta46544",1503454403,null)], null);
});

cljs.core.async.t_cljs$core$async46543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46543";

cljs.core.async.t_cljs$core$async46543.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46543");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46543.
 */
cljs.core.async.__GT_t_cljs$core$async46543 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46543(flag__$1,cb__$1,meta46544){
return (new cljs.core.async.t_cljs$core$async46543(flag__$1,cb__$1,meta46544));
});

}

return (new cljs.core.async.t_cljs$core$async46543(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46546_SHARP_){
var G__46548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46546_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46548) : fret.call(null,G__46548));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46547_SHARP_){
var G__46549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46547_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46549) : fret.call(null,G__46549));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48055 = (i + (1));
i = G__48055;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48058 = arguments.length;
var i__4731__auto___48059 = (0);
while(true){
if((i__4731__auto___48059 < len__4730__auto___48058)){
args__4736__auto__.push((arguments[i__4731__auto___48059]));

var G__48060 = (i__4731__auto___48059 + (1));
i__4731__auto___48059 = G__48060;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46552){
var map__46553 = p__46552;
var map__46553__$1 = (((((!((map__46553 == null))))?(((((map__46553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46553):map__46553);
var opts = map__46553__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46550){
var G__46551 = cljs.core.first(seq46550);
var seq46550__$1 = cljs.core.next(seq46550);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46551,seq46550__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46556 = arguments.length;
switch (G__46556) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46465__auto___48064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___48064){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___48064){
return (function (state_46580){
var state_val_46581 = (state_46580[(1)]);
if((state_val_46581 === (7))){
var inst_46576 = (state_46580[(2)]);
var state_46580__$1 = state_46580;
var statearr_46582_48069 = state_46580__$1;
(statearr_46582_48069[(2)] = inst_46576);

(statearr_46582_48069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (1))){
var state_46580__$1 = state_46580;
var statearr_46583_48070 = state_46580__$1;
(statearr_46583_48070[(2)] = null);

(statearr_46583_48070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (4))){
var inst_46559 = (state_46580[(7)]);
var inst_46559__$1 = (state_46580[(2)]);
var inst_46560 = (inst_46559__$1 == null);
var state_46580__$1 = (function (){var statearr_46584 = state_46580;
(statearr_46584[(7)] = inst_46559__$1);

return statearr_46584;
})();
if(cljs.core.truth_(inst_46560)){
var statearr_46585_48072 = state_46580__$1;
(statearr_46585_48072[(1)] = (5));

} else {
var statearr_46586_48073 = state_46580__$1;
(statearr_46586_48073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (13))){
var state_46580__$1 = state_46580;
var statearr_46587_48075 = state_46580__$1;
(statearr_46587_48075[(2)] = null);

(statearr_46587_48075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (6))){
var inst_46559 = (state_46580[(7)]);
var state_46580__$1 = state_46580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46580__$1,(11),to,inst_46559);
} else {
if((state_val_46581 === (3))){
var inst_46578 = (state_46580[(2)]);
var state_46580__$1 = state_46580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46580__$1,inst_46578);
} else {
if((state_val_46581 === (12))){
var state_46580__$1 = state_46580;
var statearr_46588_48077 = state_46580__$1;
(statearr_46588_48077[(2)] = null);

(statearr_46588_48077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (2))){
var state_46580__$1 = state_46580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46580__$1,(4),from);
} else {
if((state_val_46581 === (11))){
var inst_46569 = (state_46580[(2)]);
var state_46580__$1 = state_46580;
if(cljs.core.truth_(inst_46569)){
var statearr_46589_48078 = state_46580__$1;
(statearr_46589_48078[(1)] = (12));

} else {
var statearr_46590_48079 = state_46580__$1;
(statearr_46590_48079[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (9))){
var state_46580__$1 = state_46580;
var statearr_46591_48080 = state_46580__$1;
(statearr_46591_48080[(2)] = null);

(statearr_46591_48080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (5))){
var state_46580__$1 = state_46580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46592_48081 = state_46580__$1;
(statearr_46592_48081[(1)] = (8));

} else {
var statearr_46593_48083 = state_46580__$1;
(statearr_46593_48083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (14))){
var inst_46574 = (state_46580[(2)]);
var state_46580__$1 = state_46580;
var statearr_46594_48084 = state_46580__$1;
(statearr_46594_48084[(2)] = inst_46574);

(statearr_46594_48084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (10))){
var inst_46566 = (state_46580[(2)]);
var state_46580__$1 = state_46580;
var statearr_46595_48085 = state_46580__$1;
(statearr_46595_48085[(2)] = inst_46566);

(statearr_46595_48085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (8))){
var inst_46563 = cljs.core.async.close_BANG_(to);
var state_46580__$1 = state_46580;
var statearr_46596_48087 = state_46580__$1;
(statearr_46596_48087[(2)] = inst_46563);

(statearr_46596_48087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___48064))
;
return ((function (switch__46366__auto__,c__46465__auto___48064){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_46597 = [null,null,null,null,null,null,null,null];
(statearr_46597[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_46597[(1)] = (1));

return statearr_46597;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_46580){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_46580);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e46598){if((e46598 instanceof Object)){
var ex__46370__auto__ = e46598;
var statearr_46599_48092 = state_46580;
(statearr_46599_48092[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48093 = state_46580;
state_46580 = G__48093;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_46580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_46580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___48064))
})();
var state__46467__auto__ = (function (){var statearr_46600 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_46600[(6)] = c__46465__auto___48064);

return statearr_46600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___48064))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__46601){
var vec__46602 = p__46601;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46602,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46602,(1),null);
var job = vec__46602;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46465__auto___48103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___48103,res,vec__46602,v,p,job,jobs,results){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___48103,res,vec__46602,v,p,job,jobs,results){
return (function (state_46609){
var state_val_46610 = (state_46609[(1)]);
if((state_val_46610 === (1))){
var state_46609__$1 = state_46609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46609__$1,(2),res,v);
} else {
if((state_val_46610 === (2))){
var inst_46606 = (state_46609[(2)]);
var inst_46607 = cljs.core.async.close_BANG_(res);
var state_46609__$1 = (function (){var statearr_46611 = state_46609;
(statearr_46611[(7)] = inst_46606);

return statearr_46611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46609__$1,inst_46607);
} else {
return null;
}
}
});})(c__46465__auto___48103,res,vec__46602,v,p,job,jobs,results))
;
return ((function (switch__46366__auto__,c__46465__auto___48103,res,vec__46602,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0 = (function (){
var statearr_46612 = [null,null,null,null,null,null,null,null];
(statearr_46612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__);

(statearr_46612[(1)] = (1));

return statearr_46612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1 = (function (state_46609){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_46609);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e46613){if((e46613 instanceof Object)){
var ex__46370__auto__ = e46613;
var statearr_46614_48107 = state_46609;
(statearr_46614_48107[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48108 = state_46609;
state_46609 = G__48108;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__ = function(state_46609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1.call(this,state_46609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___48103,res,vec__46602,v,p,job,jobs,results))
})();
var state__46467__auto__ = (function (){var statearr_46615 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_46615[(6)] = c__46465__auto___48103);

return statearr_46615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___48103,res,vec__46602,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46616){
var vec__46617 = p__46616;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46617,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46617,(1),null);
var job = vec__46617;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___48115 = n;
var __48116 = (0);
while(true){
if((__48116 < n__4607__auto___48115)){
var G__46620_48119 = type;
var G__46620_48120__$1 = (((G__46620_48119 instanceof cljs.core.Keyword))?G__46620_48119.fqn:null);
switch (G__46620_48120__$1) {
case "compute":
var c__46465__auto___48122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48116,c__46465__auto___48122,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (__48116,c__46465__auto___48122,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async){
return (function (state_46633){
var state_val_46634 = (state_46633[(1)]);
if((state_val_46634 === (1))){
var state_46633__$1 = state_46633;
var statearr_46635_48125 = state_46633__$1;
(statearr_46635_48125[(2)] = null);

(statearr_46635_48125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (2))){
var state_46633__$1 = state_46633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46633__$1,(4),jobs);
} else {
if((state_val_46634 === (3))){
var inst_46631 = (state_46633[(2)]);
var state_46633__$1 = state_46633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46633__$1,inst_46631);
} else {
if((state_val_46634 === (4))){
var inst_46623 = (state_46633[(2)]);
var inst_46624 = process(inst_46623);
var state_46633__$1 = state_46633;
if(cljs.core.truth_(inst_46624)){
var statearr_46636_48126 = state_46633__$1;
(statearr_46636_48126[(1)] = (5));

} else {
var statearr_46637_48127 = state_46633__$1;
(statearr_46637_48127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (5))){
var state_46633__$1 = state_46633;
var statearr_46638_48128 = state_46633__$1;
(statearr_46638_48128[(2)] = null);

(statearr_46638_48128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (6))){
var state_46633__$1 = state_46633;
var statearr_46639_48129 = state_46633__$1;
(statearr_46639_48129[(2)] = null);

(statearr_46639_48129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (7))){
var inst_46629 = (state_46633[(2)]);
var state_46633__$1 = state_46633;
var statearr_46640_48132 = state_46633__$1;
(statearr_46640_48132[(2)] = inst_46629);

(statearr_46640_48132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48116,c__46465__auto___48122,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async))
;
return ((function (__48116,switch__46366__auto__,c__46465__auto___48122,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0 = (function (){
var statearr_46641 = [null,null,null,null,null,null,null];
(statearr_46641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__);

(statearr_46641[(1)] = (1));

return statearr_46641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1 = (function (state_46633){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_46633);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e46642){if((e46642 instanceof Object)){
var ex__46370__auto__ = e46642;
var statearr_46643_48133 = state_46633;
(statearr_46643_48133[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48134 = state_46633;
state_46633 = G__48134;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__ = function(state_46633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1.call(this,state_46633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__;
})()
;})(__48116,switch__46366__auto__,c__46465__auto___48122,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async))
})();
var state__46467__auto__ = (function (){var statearr_46644 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_46644[(6)] = c__46465__auto___48122);

return statearr_46644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(__48116,c__46465__auto___48122,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async))
);


break;
case "async":
var c__46465__auto___48136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48116,c__46465__auto___48136,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (__48116,c__46465__auto___48136,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async){
return (function (state_46657){
var state_val_46658 = (state_46657[(1)]);
if((state_val_46658 === (1))){
var state_46657__$1 = state_46657;
var statearr_46659_48137 = state_46657__$1;
(statearr_46659_48137[(2)] = null);

(statearr_46659_48137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46658 === (2))){
var state_46657__$1 = state_46657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46657__$1,(4),jobs);
} else {
if((state_val_46658 === (3))){
var inst_46655 = (state_46657[(2)]);
var state_46657__$1 = state_46657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46657__$1,inst_46655);
} else {
if((state_val_46658 === (4))){
var inst_46647 = (state_46657[(2)]);
var inst_46648 = async(inst_46647);
var state_46657__$1 = state_46657;
if(cljs.core.truth_(inst_46648)){
var statearr_46660_48142 = state_46657__$1;
(statearr_46660_48142[(1)] = (5));

} else {
var statearr_46661_48143 = state_46657__$1;
(statearr_46661_48143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46658 === (5))){
var state_46657__$1 = state_46657;
var statearr_46662_48144 = state_46657__$1;
(statearr_46662_48144[(2)] = null);

(statearr_46662_48144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46658 === (6))){
var state_46657__$1 = state_46657;
var statearr_46663_48148 = state_46657__$1;
(statearr_46663_48148[(2)] = null);

(statearr_46663_48148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46658 === (7))){
var inst_46653 = (state_46657[(2)]);
var state_46657__$1 = state_46657;
var statearr_46664_48149 = state_46657__$1;
(statearr_46664_48149[(2)] = inst_46653);

(statearr_46664_48149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48116,c__46465__auto___48136,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async))
;
return ((function (__48116,switch__46366__auto__,c__46465__auto___48136,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0 = (function (){
var statearr_46665 = [null,null,null,null,null,null,null];
(statearr_46665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__);

(statearr_46665[(1)] = (1));

return statearr_46665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1 = (function (state_46657){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_46657);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e46666){if((e46666 instanceof Object)){
var ex__46370__auto__ = e46666;
var statearr_46667_48150 = state_46657;
(statearr_46667_48150[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46666;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48151 = state_46657;
state_46657 = G__48151;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__ = function(state_46657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1.call(this,state_46657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__;
})()
;})(__48116,switch__46366__auto__,c__46465__auto___48136,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async))
})();
var state__46467__auto__ = (function (){var statearr_46668 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_46668[(6)] = c__46465__auto___48136);

return statearr_46668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(__48116,c__46465__auto___48136,G__46620_48119,G__46620_48120__$1,n__4607__auto___48115,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46620_48120__$1)].join('')));

}

var G__48158 = (__48116 + (1));
__48116 = G__48158;
continue;
} else {
}
break;
}

var c__46465__auto___48159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___48159,jobs,results,process,async){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___48159,jobs,results,process,async){
return (function (state_46690){
var state_val_46691 = (state_46690[(1)]);
if((state_val_46691 === (7))){
var inst_46686 = (state_46690[(2)]);
var state_46690__$1 = state_46690;
var statearr_46692_48160 = state_46690__$1;
(statearr_46692_48160[(2)] = inst_46686);

(statearr_46692_48160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (1))){
var state_46690__$1 = state_46690;
var statearr_46693_48166 = state_46690__$1;
(statearr_46693_48166[(2)] = null);

(statearr_46693_48166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (4))){
var inst_46671 = (state_46690[(7)]);
var inst_46671__$1 = (state_46690[(2)]);
var inst_46672 = (inst_46671__$1 == null);
var state_46690__$1 = (function (){var statearr_46694 = state_46690;
(statearr_46694[(7)] = inst_46671__$1);

return statearr_46694;
})();
if(cljs.core.truth_(inst_46672)){
var statearr_46695_48167 = state_46690__$1;
(statearr_46695_48167[(1)] = (5));

} else {
var statearr_46696_48168 = state_46690__$1;
(statearr_46696_48168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (6))){
var inst_46676 = (state_46690[(8)]);
var inst_46671 = (state_46690[(7)]);
var inst_46676__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46678 = [inst_46671,inst_46676__$1];
var inst_46679 = (new cljs.core.PersistentVector(null,2,(5),inst_46677,inst_46678,null));
var state_46690__$1 = (function (){var statearr_46697 = state_46690;
(statearr_46697[(8)] = inst_46676__$1);

return statearr_46697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46690__$1,(8),jobs,inst_46679);
} else {
if((state_val_46691 === (3))){
var inst_46688 = (state_46690[(2)]);
var state_46690__$1 = state_46690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46690__$1,inst_46688);
} else {
if((state_val_46691 === (2))){
var state_46690__$1 = state_46690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46690__$1,(4),from);
} else {
if((state_val_46691 === (9))){
var inst_46683 = (state_46690[(2)]);
var state_46690__$1 = (function (){var statearr_46698 = state_46690;
(statearr_46698[(9)] = inst_46683);

return statearr_46698;
})();
var statearr_46699_48172 = state_46690__$1;
(statearr_46699_48172[(2)] = null);

(statearr_46699_48172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (5))){
var inst_46674 = cljs.core.async.close_BANG_(jobs);
var state_46690__$1 = state_46690;
var statearr_46700_48173 = state_46690__$1;
(statearr_46700_48173[(2)] = inst_46674);

(statearr_46700_48173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (8))){
var inst_46676 = (state_46690[(8)]);
var inst_46681 = (state_46690[(2)]);
var state_46690__$1 = (function (){var statearr_46701 = state_46690;
(statearr_46701[(10)] = inst_46681);

return statearr_46701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46690__$1,(9),results,inst_46676);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___48159,jobs,results,process,async))
;
return ((function (switch__46366__auto__,c__46465__auto___48159,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0 = (function (){
var statearr_46702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__);

(statearr_46702[(1)] = (1));

return statearr_46702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1 = (function (state_46690){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_46690);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e46703){if((e46703 instanceof Object)){
var ex__46370__auto__ = e46703;
var statearr_46704_48184 = state_46690;
(statearr_46704_48184[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48188 = state_46690;
state_46690 = G__48188;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__ = function(state_46690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1.call(this,state_46690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___48159,jobs,results,process,async))
})();
var state__46467__auto__ = (function (){var statearr_46705 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_46705[(6)] = c__46465__auto___48159);

return statearr_46705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___48159,jobs,results,process,async))
);


var c__46465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto__,jobs,results,process,async){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto__,jobs,results,process,async){
return (function (state_46743){
var state_val_46744 = (state_46743[(1)]);
if((state_val_46744 === (7))){
var inst_46739 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46745_48192 = state_46743__$1;
(statearr_46745_48192[(2)] = inst_46739);

(statearr_46745_48192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (20))){
var state_46743__$1 = state_46743;
var statearr_46746_48193 = state_46743__$1;
(statearr_46746_48193[(2)] = null);

(statearr_46746_48193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (1))){
var state_46743__$1 = state_46743;
var statearr_46747_48194 = state_46743__$1;
(statearr_46747_48194[(2)] = null);

(statearr_46747_48194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (4))){
var inst_46708 = (state_46743[(7)]);
var inst_46708__$1 = (state_46743[(2)]);
var inst_46709 = (inst_46708__$1 == null);
var state_46743__$1 = (function (){var statearr_46748 = state_46743;
(statearr_46748[(7)] = inst_46708__$1);

return statearr_46748;
})();
if(cljs.core.truth_(inst_46709)){
var statearr_46749_48202 = state_46743__$1;
(statearr_46749_48202[(1)] = (5));

} else {
var statearr_46750_48206 = state_46743__$1;
(statearr_46750_48206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (15))){
var inst_46721 = (state_46743[(8)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46743__$1,(18),to,inst_46721);
} else {
if((state_val_46744 === (21))){
var inst_46734 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46751_48210 = state_46743__$1;
(statearr_46751_48210[(2)] = inst_46734);

(statearr_46751_48210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (13))){
var inst_46736 = (state_46743[(2)]);
var state_46743__$1 = (function (){var statearr_46752 = state_46743;
(statearr_46752[(9)] = inst_46736);

return statearr_46752;
})();
var statearr_46753_48217 = state_46743__$1;
(statearr_46753_48217[(2)] = null);

(statearr_46753_48217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (6))){
var inst_46708 = (state_46743[(7)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46743__$1,(11),inst_46708);
} else {
if((state_val_46744 === (17))){
var inst_46729 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
if(cljs.core.truth_(inst_46729)){
var statearr_46754_48218 = state_46743__$1;
(statearr_46754_48218[(1)] = (19));

} else {
var statearr_46755_48222 = state_46743__$1;
(statearr_46755_48222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (3))){
var inst_46741 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46743__$1,inst_46741);
} else {
if((state_val_46744 === (12))){
var inst_46718 = (state_46743[(10)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46743__$1,(14),inst_46718);
} else {
if((state_val_46744 === (2))){
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46743__$1,(4),results);
} else {
if((state_val_46744 === (19))){
var state_46743__$1 = state_46743;
var statearr_46756_48226 = state_46743__$1;
(statearr_46756_48226[(2)] = null);

(statearr_46756_48226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (11))){
var inst_46718 = (state_46743[(2)]);
var state_46743__$1 = (function (){var statearr_46757 = state_46743;
(statearr_46757[(10)] = inst_46718);

return statearr_46757;
})();
var statearr_46758_48234 = state_46743__$1;
(statearr_46758_48234[(2)] = null);

(statearr_46758_48234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (9))){
var state_46743__$1 = state_46743;
var statearr_46759_48235 = state_46743__$1;
(statearr_46759_48235[(2)] = null);

(statearr_46759_48235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (5))){
var state_46743__$1 = state_46743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46760_48236 = state_46743__$1;
(statearr_46760_48236[(1)] = (8));

} else {
var statearr_46761_48237 = state_46743__$1;
(statearr_46761_48237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (14))){
var inst_46721 = (state_46743[(8)]);
var inst_46723 = (state_46743[(11)]);
var inst_46721__$1 = (state_46743[(2)]);
var inst_46722 = (inst_46721__$1 == null);
var inst_46723__$1 = cljs.core.not(inst_46722);
var state_46743__$1 = (function (){var statearr_46762 = state_46743;
(statearr_46762[(8)] = inst_46721__$1);

(statearr_46762[(11)] = inst_46723__$1);

return statearr_46762;
})();
if(inst_46723__$1){
var statearr_46763_48238 = state_46743__$1;
(statearr_46763_48238[(1)] = (15));

} else {
var statearr_46764_48239 = state_46743__$1;
(statearr_46764_48239[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (16))){
var inst_46723 = (state_46743[(11)]);
var state_46743__$1 = state_46743;
var statearr_46765_48242 = state_46743__$1;
(statearr_46765_48242[(2)] = inst_46723);

(statearr_46765_48242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (10))){
var inst_46715 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46766_48243 = state_46743__$1;
(statearr_46766_48243[(2)] = inst_46715);

(statearr_46766_48243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (18))){
var inst_46726 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46767_48244 = state_46743__$1;
(statearr_46767_48244[(2)] = inst_46726);

(statearr_46767_48244[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (8))){
var inst_46712 = cljs.core.async.close_BANG_(to);
var state_46743__$1 = state_46743;
var statearr_46768_48245 = state_46743__$1;
(statearr_46768_48245[(2)] = inst_46712);

(statearr_46768_48245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto__,jobs,results,process,async))
;
return ((function (switch__46366__auto__,c__46465__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0 = (function (){
var statearr_46769 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__);

(statearr_46769[(1)] = (1));

return statearr_46769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1 = (function (state_46743){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_46743);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e46770){if((e46770 instanceof Object)){
var ex__46370__auto__ = e46770;
var statearr_46771_48246 = state_46743;
(statearr_46771_48246[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48247 = state_46743;
state_46743 = G__48247;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__ = function(state_46743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1.call(this,state_46743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto__,jobs,results,process,async))
})();
var state__46467__auto__ = (function (){var statearr_46772 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_46772[(6)] = c__46465__auto__);

return statearr_46772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto__,jobs,results,process,async))
);

return c__46465__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46774 = arguments.length;
switch (G__46774) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46776 = arguments.length;
switch (G__46776) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46778 = arguments.length;
switch (G__46778) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46465__auto___48260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___48260,tc,fc){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___48260,tc,fc){
return (function (state_46804){
var state_val_46805 = (state_46804[(1)]);
if((state_val_46805 === (7))){
var inst_46800 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46806_48261 = state_46804__$1;
(statearr_46806_48261[(2)] = inst_46800);

(statearr_46806_48261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (1))){
var state_46804__$1 = state_46804;
var statearr_46807_48262 = state_46804__$1;
(statearr_46807_48262[(2)] = null);

(statearr_46807_48262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (4))){
var inst_46781 = (state_46804[(7)]);
var inst_46781__$1 = (state_46804[(2)]);
var inst_46782 = (inst_46781__$1 == null);
var state_46804__$1 = (function (){var statearr_46808 = state_46804;
(statearr_46808[(7)] = inst_46781__$1);

return statearr_46808;
})();
if(cljs.core.truth_(inst_46782)){
var statearr_46809_48263 = state_46804__$1;
(statearr_46809_48263[(1)] = (5));

} else {
var statearr_46810_48264 = state_46804__$1;
(statearr_46810_48264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (13))){
var state_46804__$1 = state_46804;
var statearr_46811_48265 = state_46804__$1;
(statearr_46811_48265[(2)] = null);

(statearr_46811_48265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (6))){
var inst_46781 = (state_46804[(7)]);
var inst_46787 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46781) : p.call(null,inst_46781));
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46787)){
var statearr_46812_48266 = state_46804__$1;
(statearr_46812_48266[(1)] = (9));

} else {
var statearr_46813_48267 = state_46804__$1;
(statearr_46813_48267[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (3))){
var inst_46802 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46804__$1,inst_46802);
} else {
if((state_val_46805 === (12))){
var state_46804__$1 = state_46804;
var statearr_46814_48268 = state_46804__$1;
(statearr_46814_48268[(2)] = null);

(statearr_46814_48268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (2))){
var state_46804__$1 = state_46804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46804__$1,(4),ch);
} else {
if((state_val_46805 === (11))){
var inst_46781 = (state_46804[(7)]);
var inst_46791 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46804__$1,(8),inst_46791,inst_46781);
} else {
if((state_val_46805 === (9))){
var state_46804__$1 = state_46804;
var statearr_46815_48269 = state_46804__$1;
(statearr_46815_48269[(2)] = tc);

(statearr_46815_48269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (5))){
var inst_46784 = cljs.core.async.close_BANG_(tc);
var inst_46785 = cljs.core.async.close_BANG_(fc);
var state_46804__$1 = (function (){var statearr_46816 = state_46804;
(statearr_46816[(8)] = inst_46784);

return statearr_46816;
})();
var statearr_46817_48270 = state_46804__$1;
(statearr_46817_48270[(2)] = inst_46785);

(statearr_46817_48270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (14))){
var inst_46798 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46818_48271 = state_46804__$1;
(statearr_46818_48271[(2)] = inst_46798);

(statearr_46818_48271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (10))){
var state_46804__$1 = state_46804;
var statearr_46819_48272 = state_46804__$1;
(statearr_46819_48272[(2)] = fc);

(statearr_46819_48272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (8))){
var inst_46793 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46793)){
var statearr_46820_48273 = state_46804__$1;
(statearr_46820_48273[(1)] = (12));

} else {
var statearr_46821_48274 = state_46804__$1;
(statearr_46821_48274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___48260,tc,fc))
;
return ((function (switch__46366__auto__,c__46465__auto___48260,tc,fc){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_46822 = [null,null,null,null,null,null,null,null,null];
(statearr_46822[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_46822[(1)] = (1));

return statearr_46822;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_46804){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_46804);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e46823){if((e46823 instanceof Object)){
var ex__46370__auto__ = e46823;
var statearr_46824_48281 = state_46804;
(statearr_46824_48281[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48297 = state_46804;
state_46804 = G__48297;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_46804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_46804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___48260,tc,fc))
})();
var state__46467__auto__ = (function (){var statearr_46825 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_46825[(6)] = c__46465__auto___48260);

return statearr_46825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___48260,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto__){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto__){
return (function (state_46846){
var state_val_46847 = (state_46846[(1)]);
if((state_val_46847 === (7))){
var inst_46842 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
var statearr_46848_48298 = state_46846__$1;
(statearr_46848_48298[(2)] = inst_46842);

(statearr_46848_48298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (1))){
var inst_46826 = init;
var state_46846__$1 = (function (){var statearr_46849 = state_46846;
(statearr_46849[(7)] = inst_46826);

return statearr_46849;
})();
var statearr_46850_48299 = state_46846__$1;
(statearr_46850_48299[(2)] = null);

(statearr_46850_48299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (4))){
var inst_46829 = (state_46846[(8)]);
var inst_46829__$1 = (state_46846[(2)]);
var inst_46830 = (inst_46829__$1 == null);
var state_46846__$1 = (function (){var statearr_46851 = state_46846;
(statearr_46851[(8)] = inst_46829__$1);

return statearr_46851;
})();
if(cljs.core.truth_(inst_46830)){
var statearr_46852_48300 = state_46846__$1;
(statearr_46852_48300[(1)] = (5));

} else {
var statearr_46853_48301 = state_46846__$1;
(statearr_46853_48301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (6))){
var inst_46826 = (state_46846[(7)]);
var inst_46829 = (state_46846[(8)]);
var inst_46833 = (state_46846[(9)]);
var inst_46833__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46826,inst_46829) : f.call(null,inst_46826,inst_46829));
var inst_46834 = cljs.core.reduced_QMARK_(inst_46833__$1);
var state_46846__$1 = (function (){var statearr_46854 = state_46846;
(statearr_46854[(9)] = inst_46833__$1);

return statearr_46854;
})();
if(inst_46834){
var statearr_46855_48302 = state_46846__$1;
(statearr_46855_48302[(1)] = (8));

} else {
var statearr_46856_48309 = state_46846__$1;
(statearr_46856_48309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (3))){
var inst_46844 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46846__$1,inst_46844);
} else {
if((state_val_46847 === (2))){
var state_46846__$1 = state_46846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46846__$1,(4),ch);
} else {
if((state_val_46847 === (9))){
var inst_46833 = (state_46846[(9)]);
var inst_46826 = inst_46833;
var state_46846__$1 = (function (){var statearr_46857 = state_46846;
(statearr_46857[(7)] = inst_46826);

return statearr_46857;
})();
var statearr_46858_48310 = state_46846__$1;
(statearr_46858_48310[(2)] = null);

(statearr_46858_48310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (5))){
var inst_46826 = (state_46846[(7)]);
var state_46846__$1 = state_46846;
var statearr_46859_48311 = state_46846__$1;
(statearr_46859_48311[(2)] = inst_46826);

(statearr_46859_48311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (10))){
var inst_46840 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
var statearr_46860_48312 = state_46846__$1;
(statearr_46860_48312[(2)] = inst_46840);

(statearr_46860_48312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (8))){
var inst_46833 = (state_46846[(9)]);
var inst_46836 = cljs.core.deref(inst_46833);
var state_46846__$1 = state_46846;
var statearr_46861_48319 = state_46846__$1;
(statearr_46861_48319[(2)] = inst_46836);

(statearr_46861_48319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto__))
;
return ((function (switch__46366__auto__,c__46465__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46367__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46367__auto____0 = (function (){
var statearr_46862 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46862[(0)] = cljs$core$async$reduce_$_state_machine__46367__auto__);

(statearr_46862[(1)] = (1));

return statearr_46862;
});
var cljs$core$async$reduce_$_state_machine__46367__auto____1 = (function (state_46846){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_46846);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e46863){if((e46863 instanceof Object)){
var ex__46370__auto__ = e46863;
var statearr_46864_48320 = state_46846;
(statearr_46864_48320[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48321 = state_46846;
state_46846 = G__48321;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46367__auto__ = function(state_46846){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46367__auto____1.call(this,state_46846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46367__auto____0;
cljs$core$async$reduce_$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46367__auto____1;
return cljs$core$async$reduce_$_state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto__))
})();
var state__46467__auto__ = (function (){var statearr_46865 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_46865[(6)] = c__46465__auto__);

return statearr_46865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto__))
);

return c__46465__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto__,f__$1){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto__,f__$1){
return (function (state_46871){
var state_val_46872 = (state_46871[(1)]);
if((state_val_46872 === (1))){
var inst_46866 = cljs.core.async.reduce(f__$1,init,ch);
var state_46871__$1 = state_46871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46871__$1,(2),inst_46866);
} else {
if((state_val_46872 === (2))){
var inst_46868 = (state_46871[(2)]);
var inst_46869 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46868) : f__$1.call(null,inst_46868));
var state_46871__$1 = state_46871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46871__$1,inst_46869);
} else {
return null;
}
}
});})(c__46465__auto__,f__$1))
;
return ((function (switch__46366__auto__,c__46465__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46367__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46367__auto____0 = (function (){
var statearr_46873 = [null,null,null,null,null,null,null];
(statearr_46873[(0)] = cljs$core$async$transduce_$_state_machine__46367__auto__);

(statearr_46873[(1)] = (1));

return statearr_46873;
});
var cljs$core$async$transduce_$_state_machine__46367__auto____1 = (function (state_46871){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_46871);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e46874){if((e46874 instanceof Object)){
var ex__46370__auto__ = e46874;
var statearr_46875_48328 = state_46871;
(statearr_46875_48328[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48329 = state_46871;
state_46871 = G__48329;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46367__auto__ = function(state_46871){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46367__auto____1.call(this,state_46871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46367__auto____0;
cljs$core$async$transduce_$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46367__auto____1;
return cljs$core$async$transduce_$_state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto__,f__$1))
})();
var state__46467__auto__ = (function (){var statearr_46876 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_46876[(6)] = c__46465__auto__);

return statearr_46876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto__,f__$1))
);

return c__46465__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46878 = arguments.length;
switch (G__46878) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto__){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto__){
return (function (state_46903){
var state_val_46904 = (state_46903[(1)]);
if((state_val_46904 === (7))){
var inst_46885 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
var statearr_46905_48331 = state_46903__$1;
(statearr_46905_48331[(2)] = inst_46885);

(statearr_46905_48331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (1))){
var inst_46879 = cljs.core.seq(coll);
var inst_46880 = inst_46879;
var state_46903__$1 = (function (){var statearr_46906 = state_46903;
(statearr_46906[(7)] = inst_46880);

return statearr_46906;
})();
var statearr_46907_48332 = state_46903__$1;
(statearr_46907_48332[(2)] = null);

(statearr_46907_48332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (4))){
var inst_46880 = (state_46903[(7)]);
var inst_46883 = cljs.core.first(inst_46880);
var state_46903__$1 = state_46903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46903__$1,(7),ch,inst_46883);
} else {
if((state_val_46904 === (13))){
var inst_46897 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
var statearr_46908_48333 = state_46903__$1;
(statearr_46908_48333[(2)] = inst_46897);

(statearr_46908_48333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (6))){
var inst_46888 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
if(cljs.core.truth_(inst_46888)){
var statearr_46909_48334 = state_46903__$1;
(statearr_46909_48334[(1)] = (8));

} else {
var statearr_46910_48335 = state_46903__$1;
(statearr_46910_48335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (3))){
var inst_46901 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46903__$1,inst_46901);
} else {
if((state_val_46904 === (12))){
var state_46903__$1 = state_46903;
var statearr_46911_48336 = state_46903__$1;
(statearr_46911_48336[(2)] = null);

(statearr_46911_48336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (2))){
var inst_46880 = (state_46903[(7)]);
var state_46903__$1 = state_46903;
if(cljs.core.truth_(inst_46880)){
var statearr_46912_48337 = state_46903__$1;
(statearr_46912_48337[(1)] = (4));

} else {
var statearr_46913_48338 = state_46903__$1;
(statearr_46913_48338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (11))){
var inst_46894 = cljs.core.async.close_BANG_(ch);
var state_46903__$1 = state_46903;
var statearr_46914_48339 = state_46903__$1;
(statearr_46914_48339[(2)] = inst_46894);

(statearr_46914_48339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (9))){
var state_46903__$1 = state_46903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46915_48340 = state_46903__$1;
(statearr_46915_48340[(1)] = (11));

} else {
var statearr_46916_48341 = state_46903__$1;
(statearr_46916_48341[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (5))){
var inst_46880 = (state_46903[(7)]);
var state_46903__$1 = state_46903;
var statearr_46917_48342 = state_46903__$1;
(statearr_46917_48342[(2)] = inst_46880);

(statearr_46917_48342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (10))){
var inst_46899 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
var statearr_46918_48343 = state_46903__$1;
(statearr_46918_48343[(2)] = inst_46899);

(statearr_46918_48343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (8))){
var inst_46880 = (state_46903[(7)]);
var inst_46890 = cljs.core.next(inst_46880);
var inst_46880__$1 = inst_46890;
var state_46903__$1 = (function (){var statearr_46919 = state_46903;
(statearr_46919[(7)] = inst_46880__$1);

return statearr_46919;
})();
var statearr_46920_48344 = state_46903__$1;
(statearr_46920_48344[(2)] = null);

(statearr_46920_48344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto__))
;
return ((function (switch__46366__auto__,c__46465__auto__){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_46921 = [null,null,null,null,null,null,null,null];
(statearr_46921[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_46921[(1)] = (1));

return statearr_46921;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_46903){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_46903);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e46922){if((e46922 instanceof Object)){
var ex__46370__auto__ = e46922;
var statearr_46923_48351 = state_46903;
(statearr_46923_48351[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48352 = state_46903;
state_46903 = G__48352;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_46903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_46903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto__))
})();
var state__46467__auto__ = (function (){var statearr_46924 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_46924[(6)] = c__46465__auto__);

return statearr_46924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto__))
);

return c__46465__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46925 = (function (ch,cs,meta46926){
this.ch = ch;
this.cs = cs;
this.meta46926 = meta46926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46927,meta46926__$1){
var self__ = this;
var _46927__$1 = this;
return (new cljs.core.async.t_cljs$core$async46925(self__.ch,self__.cs,meta46926__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46927){
var self__ = this;
var _46927__$1 = this;
return self__.meta46926;
});})(cs))
;

cljs.core.async.t_cljs$core$async46925.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46925.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46925.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46925.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46925.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46925.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46926","meta46926",-1187624788,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46925";

cljs.core.async.t_cljs$core$async46925.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46925");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46925.
 */
cljs.core.async.__GT_t_cljs$core$async46925 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46925(ch__$1,cs__$1,meta46926){
return (new cljs.core.async.t_cljs$core$async46925(ch__$1,cs__$1,meta46926));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46925(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__46465__auto___48366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___48366,cs,m,dchan,dctr,done){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___48366,cs,m,dchan,dctr,done){
return (function (state_47062){
var state_val_47063 = (state_47062[(1)]);
if((state_val_47063 === (7))){
var inst_47058 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47064_48367 = state_47062__$1;
(statearr_47064_48367[(2)] = inst_47058);

(statearr_47064_48367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (20))){
var inst_46961 = (state_47062[(7)]);
var inst_46973 = cljs.core.first(inst_46961);
var inst_46974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46973,(0),null);
var inst_46975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46973,(1),null);
var state_47062__$1 = (function (){var statearr_47065 = state_47062;
(statearr_47065[(8)] = inst_46974);

return statearr_47065;
})();
if(cljs.core.truth_(inst_46975)){
var statearr_47066_48368 = state_47062__$1;
(statearr_47066_48368[(1)] = (22));

} else {
var statearr_47067_48369 = state_47062__$1;
(statearr_47067_48369[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (27))){
var inst_47005 = (state_47062[(9)]);
var inst_46930 = (state_47062[(10)]);
var inst_47003 = (state_47062[(11)]);
var inst_47010 = (state_47062[(12)]);
var inst_47010__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47003,inst_47005);
var inst_47011 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47010__$1,inst_46930,done);
var state_47062__$1 = (function (){var statearr_47068 = state_47062;
(statearr_47068[(12)] = inst_47010__$1);

return statearr_47068;
})();
if(cljs.core.truth_(inst_47011)){
var statearr_47069_48370 = state_47062__$1;
(statearr_47069_48370[(1)] = (30));

} else {
var statearr_47070_48371 = state_47062__$1;
(statearr_47070_48371[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (1))){
var state_47062__$1 = state_47062;
var statearr_47071_48376 = state_47062__$1;
(statearr_47071_48376[(2)] = null);

(statearr_47071_48376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (24))){
var inst_46961 = (state_47062[(7)]);
var inst_46980 = (state_47062[(2)]);
var inst_46981 = cljs.core.next(inst_46961);
var inst_46939 = inst_46981;
var inst_46940 = null;
var inst_46941 = (0);
var inst_46942 = (0);
var state_47062__$1 = (function (){var statearr_47072 = state_47062;
(statearr_47072[(13)] = inst_46939);

(statearr_47072[(14)] = inst_46941);

(statearr_47072[(15)] = inst_46940);

(statearr_47072[(16)] = inst_46942);

(statearr_47072[(17)] = inst_46980);

return statearr_47072;
})();
var statearr_47073_48380 = state_47062__$1;
(statearr_47073_48380[(2)] = null);

(statearr_47073_48380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (39))){
var state_47062__$1 = state_47062;
var statearr_47077_48384 = state_47062__$1;
(statearr_47077_48384[(2)] = null);

(statearr_47077_48384[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (4))){
var inst_46930 = (state_47062[(10)]);
var inst_46930__$1 = (state_47062[(2)]);
var inst_46931 = (inst_46930__$1 == null);
var state_47062__$1 = (function (){var statearr_47078 = state_47062;
(statearr_47078[(10)] = inst_46930__$1);

return statearr_47078;
})();
if(cljs.core.truth_(inst_46931)){
var statearr_47079_48388 = state_47062__$1;
(statearr_47079_48388[(1)] = (5));

} else {
var statearr_47080_48389 = state_47062__$1;
(statearr_47080_48389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (15))){
var inst_46939 = (state_47062[(13)]);
var inst_46941 = (state_47062[(14)]);
var inst_46940 = (state_47062[(15)]);
var inst_46942 = (state_47062[(16)]);
var inst_46957 = (state_47062[(2)]);
var inst_46958 = (inst_46942 + (1));
var tmp47074 = inst_46939;
var tmp47075 = inst_46941;
var tmp47076 = inst_46940;
var inst_46939__$1 = tmp47074;
var inst_46940__$1 = tmp47076;
var inst_46941__$1 = tmp47075;
var inst_46942__$1 = inst_46958;
var state_47062__$1 = (function (){var statearr_47081 = state_47062;
(statearr_47081[(13)] = inst_46939__$1);

(statearr_47081[(14)] = inst_46941__$1);

(statearr_47081[(15)] = inst_46940__$1);

(statearr_47081[(16)] = inst_46942__$1);

(statearr_47081[(18)] = inst_46957);

return statearr_47081;
})();
var statearr_47082_48397 = state_47062__$1;
(statearr_47082_48397[(2)] = null);

(statearr_47082_48397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (21))){
var inst_46984 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47086_48398 = state_47062__$1;
(statearr_47086_48398[(2)] = inst_46984);

(statearr_47086_48398[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (31))){
var inst_47010 = (state_47062[(12)]);
var inst_47014 = done(null);
var inst_47015 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47010);
var state_47062__$1 = (function (){var statearr_47087 = state_47062;
(statearr_47087[(19)] = inst_47014);

return statearr_47087;
})();
var statearr_47088_48399 = state_47062__$1;
(statearr_47088_48399[(2)] = inst_47015);

(statearr_47088_48399[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (32))){
var inst_47004 = (state_47062[(20)]);
var inst_47005 = (state_47062[(9)]);
var inst_47003 = (state_47062[(11)]);
var inst_47002 = (state_47062[(21)]);
var inst_47017 = (state_47062[(2)]);
var inst_47018 = (inst_47005 + (1));
var tmp47083 = inst_47004;
var tmp47084 = inst_47003;
var tmp47085 = inst_47002;
var inst_47002__$1 = tmp47085;
var inst_47003__$1 = tmp47084;
var inst_47004__$1 = tmp47083;
var inst_47005__$1 = inst_47018;
var state_47062__$1 = (function (){var statearr_47089 = state_47062;
(statearr_47089[(20)] = inst_47004__$1);

(statearr_47089[(9)] = inst_47005__$1);

(statearr_47089[(11)] = inst_47003__$1);

(statearr_47089[(21)] = inst_47002__$1);

(statearr_47089[(22)] = inst_47017);

return statearr_47089;
})();
var statearr_47090_48402 = state_47062__$1;
(statearr_47090_48402[(2)] = null);

(statearr_47090_48402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (40))){
var inst_47030 = (state_47062[(23)]);
var inst_47034 = done(null);
var inst_47035 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47030);
var state_47062__$1 = (function (){var statearr_47091 = state_47062;
(statearr_47091[(24)] = inst_47034);

return statearr_47091;
})();
var statearr_47092_48405 = state_47062__$1;
(statearr_47092_48405[(2)] = inst_47035);

(statearr_47092_48405[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (33))){
var inst_47021 = (state_47062[(25)]);
var inst_47023 = cljs.core.chunked_seq_QMARK_(inst_47021);
var state_47062__$1 = state_47062;
if(inst_47023){
var statearr_47093_48411 = state_47062__$1;
(statearr_47093_48411[(1)] = (36));

} else {
var statearr_47094_48412 = state_47062__$1;
(statearr_47094_48412[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (13))){
var inst_46951 = (state_47062[(26)]);
var inst_46954 = cljs.core.async.close_BANG_(inst_46951);
var state_47062__$1 = state_47062;
var statearr_47095_48414 = state_47062__$1;
(statearr_47095_48414[(2)] = inst_46954);

(statearr_47095_48414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (22))){
var inst_46974 = (state_47062[(8)]);
var inst_46977 = cljs.core.async.close_BANG_(inst_46974);
var state_47062__$1 = state_47062;
var statearr_47096_48415 = state_47062__$1;
(statearr_47096_48415[(2)] = inst_46977);

(statearr_47096_48415[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (36))){
var inst_47021 = (state_47062[(25)]);
var inst_47025 = cljs.core.chunk_first(inst_47021);
var inst_47026 = cljs.core.chunk_rest(inst_47021);
var inst_47027 = cljs.core.count(inst_47025);
var inst_47002 = inst_47026;
var inst_47003 = inst_47025;
var inst_47004 = inst_47027;
var inst_47005 = (0);
var state_47062__$1 = (function (){var statearr_47097 = state_47062;
(statearr_47097[(20)] = inst_47004);

(statearr_47097[(9)] = inst_47005);

(statearr_47097[(11)] = inst_47003);

(statearr_47097[(21)] = inst_47002);

return statearr_47097;
})();
var statearr_47098_48418 = state_47062__$1;
(statearr_47098_48418[(2)] = null);

(statearr_47098_48418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (41))){
var inst_47021 = (state_47062[(25)]);
var inst_47037 = (state_47062[(2)]);
var inst_47038 = cljs.core.next(inst_47021);
var inst_47002 = inst_47038;
var inst_47003 = null;
var inst_47004 = (0);
var inst_47005 = (0);
var state_47062__$1 = (function (){var statearr_47099 = state_47062;
(statearr_47099[(20)] = inst_47004);

(statearr_47099[(9)] = inst_47005);

(statearr_47099[(11)] = inst_47003);

(statearr_47099[(27)] = inst_47037);

(statearr_47099[(21)] = inst_47002);

return statearr_47099;
})();
var statearr_47100_48423 = state_47062__$1;
(statearr_47100_48423[(2)] = null);

(statearr_47100_48423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (43))){
var state_47062__$1 = state_47062;
var statearr_47101_48424 = state_47062__$1;
(statearr_47101_48424[(2)] = null);

(statearr_47101_48424[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (29))){
var inst_47046 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47102_48425 = state_47062__$1;
(statearr_47102_48425[(2)] = inst_47046);

(statearr_47102_48425[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (44))){
var inst_47055 = (state_47062[(2)]);
var state_47062__$1 = (function (){var statearr_47103 = state_47062;
(statearr_47103[(28)] = inst_47055);

return statearr_47103;
})();
var statearr_47104_48426 = state_47062__$1;
(statearr_47104_48426[(2)] = null);

(statearr_47104_48426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (6))){
var inst_46994 = (state_47062[(29)]);
var inst_46993 = cljs.core.deref(cs);
var inst_46994__$1 = cljs.core.keys(inst_46993);
var inst_46995 = cljs.core.count(inst_46994__$1);
var inst_46996 = cljs.core.reset_BANG_(dctr,inst_46995);
var inst_47001 = cljs.core.seq(inst_46994__$1);
var inst_47002 = inst_47001;
var inst_47003 = null;
var inst_47004 = (0);
var inst_47005 = (0);
var state_47062__$1 = (function (){var statearr_47105 = state_47062;
(statearr_47105[(20)] = inst_47004);

(statearr_47105[(9)] = inst_47005);

(statearr_47105[(29)] = inst_46994__$1);

(statearr_47105[(11)] = inst_47003);

(statearr_47105[(21)] = inst_47002);

(statearr_47105[(30)] = inst_46996);

return statearr_47105;
})();
var statearr_47106_48432 = state_47062__$1;
(statearr_47106_48432[(2)] = null);

(statearr_47106_48432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (28))){
var inst_47021 = (state_47062[(25)]);
var inst_47002 = (state_47062[(21)]);
var inst_47021__$1 = cljs.core.seq(inst_47002);
var state_47062__$1 = (function (){var statearr_47107 = state_47062;
(statearr_47107[(25)] = inst_47021__$1);

return statearr_47107;
})();
if(inst_47021__$1){
var statearr_47108_48433 = state_47062__$1;
(statearr_47108_48433[(1)] = (33));

} else {
var statearr_47109_48434 = state_47062__$1;
(statearr_47109_48434[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (25))){
var inst_47004 = (state_47062[(20)]);
var inst_47005 = (state_47062[(9)]);
var inst_47007 = (inst_47005 < inst_47004);
var inst_47008 = inst_47007;
var state_47062__$1 = state_47062;
if(cljs.core.truth_(inst_47008)){
var statearr_47110_48435 = state_47062__$1;
(statearr_47110_48435[(1)] = (27));

} else {
var statearr_47111_48436 = state_47062__$1;
(statearr_47111_48436[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (34))){
var state_47062__$1 = state_47062;
var statearr_47112_48437 = state_47062__$1;
(statearr_47112_48437[(2)] = null);

(statearr_47112_48437[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (17))){
var state_47062__$1 = state_47062;
var statearr_47113_48439 = state_47062__$1;
(statearr_47113_48439[(2)] = null);

(statearr_47113_48439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (3))){
var inst_47060 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47062__$1,inst_47060);
} else {
if((state_val_47063 === (12))){
var inst_46989 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47114_48441 = state_47062__$1;
(statearr_47114_48441[(2)] = inst_46989);

(statearr_47114_48441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (2))){
var state_47062__$1 = state_47062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47062__$1,(4),ch);
} else {
if((state_val_47063 === (23))){
var state_47062__$1 = state_47062;
var statearr_47115_48445 = state_47062__$1;
(statearr_47115_48445[(2)] = null);

(statearr_47115_48445[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (35))){
var inst_47044 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47116_48446 = state_47062__$1;
(statearr_47116_48446[(2)] = inst_47044);

(statearr_47116_48446[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (19))){
var inst_46961 = (state_47062[(7)]);
var inst_46965 = cljs.core.chunk_first(inst_46961);
var inst_46966 = cljs.core.chunk_rest(inst_46961);
var inst_46967 = cljs.core.count(inst_46965);
var inst_46939 = inst_46966;
var inst_46940 = inst_46965;
var inst_46941 = inst_46967;
var inst_46942 = (0);
var state_47062__$1 = (function (){var statearr_47117 = state_47062;
(statearr_47117[(13)] = inst_46939);

(statearr_47117[(14)] = inst_46941);

(statearr_47117[(15)] = inst_46940);

(statearr_47117[(16)] = inst_46942);

return statearr_47117;
})();
var statearr_47118_48447 = state_47062__$1;
(statearr_47118_48447[(2)] = null);

(statearr_47118_48447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (11))){
var inst_46939 = (state_47062[(13)]);
var inst_46961 = (state_47062[(7)]);
var inst_46961__$1 = cljs.core.seq(inst_46939);
var state_47062__$1 = (function (){var statearr_47119 = state_47062;
(statearr_47119[(7)] = inst_46961__$1);

return statearr_47119;
})();
if(inst_46961__$1){
var statearr_47120_48449 = state_47062__$1;
(statearr_47120_48449[(1)] = (16));

} else {
var statearr_47121_48450 = state_47062__$1;
(statearr_47121_48450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (9))){
var inst_46991 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47122_48451 = state_47062__$1;
(statearr_47122_48451[(2)] = inst_46991);

(statearr_47122_48451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (5))){
var inst_46937 = cljs.core.deref(cs);
var inst_46938 = cljs.core.seq(inst_46937);
var inst_46939 = inst_46938;
var inst_46940 = null;
var inst_46941 = (0);
var inst_46942 = (0);
var state_47062__$1 = (function (){var statearr_47123 = state_47062;
(statearr_47123[(13)] = inst_46939);

(statearr_47123[(14)] = inst_46941);

(statearr_47123[(15)] = inst_46940);

(statearr_47123[(16)] = inst_46942);

return statearr_47123;
})();
var statearr_47124_48452 = state_47062__$1;
(statearr_47124_48452[(2)] = null);

(statearr_47124_48452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (14))){
var state_47062__$1 = state_47062;
var statearr_47125_48456 = state_47062__$1;
(statearr_47125_48456[(2)] = null);

(statearr_47125_48456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (45))){
var inst_47052 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47126_48459 = state_47062__$1;
(statearr_47126_48459[(2)] = inst_47052);

(statearr_47126_48459[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (26))){
var inst_46994 = (state_47062[(29)]);
var inst_47048 = (state_47062[(2)]);
var inst_47049 = cljs.core.seq(inst_46994);
var state_47062__$1 = (function (){var statearr_47127 = state_47062;
(statearr_47127[(31)] = inst_47048);

return statearr_47127;
})();
if(inst_47049){
var statearr_47128_48462 = state_47062__$1;
(statearr_47128_48462[(1)] = (42));

} else {
var statearr_47129_48463 = state_47062__$1;
(statearr_47129_48463[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (16))){
var inst_46961 = (state_47062[(7)]);
var inst_46963 = cljs.core.chunked_seq_QMARK_(inst_46961);
var state_47062__$1 = state_47062;
if(inst_46963){
var statearr_47130_48464 = state_47062__$1;
(statearr_47130_48464[(1)] = (19));

} else {
var statearr_47131_48465 = state_47062__$1;
(statearr_47131_48465[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (38))){
var inst_47041 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47132_48466 = state_47062__$1;
(statearr_47132_48466[(2)] = inst_47041);

(statearr_47132_48466[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (30))){
var state_47062__$1 = state_47062;
var statearr_47133_48467 = state_47062__$1;
(statearr_47133_48467[(2)] = null);

(statearr_47133_48467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (10))){
var inst_46940 = (state_47062[(15)]);
var inst_46942 = (state_47062[(16)]);
var inst_46950 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46940,inst_46942);
var inst_46951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46950,(0),null);
var inst_46952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46950,(1),null);
var state_47062__$1 = (function (){var statearr_47134 = state_47062;
(statearr_47134[(26)] = inst_46951);

return statearr_47134;
})();
if(cljs.core.truth_(inst_46952)){
var statearr_47135_48468 = state_47062__$1;
(statearr_47135_48468[(1)] = (13));

} else {
var statearr_47136_48469 = state_47062__$1;
(statearr_47136_48469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (18))){
var inst_46987 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47137_48470 = state_47062__$1;
(statearr_47137_48470[(2)] = inst_46987);

(statearr_47137_48470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (42))){
var state_47062__$1 = state_47062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47062__$1,(45),dchan);
} else {
if((state_val_47063 === (37))){
var inst_47021 = (state_47062[(25)]);
var inst_47030 = (state_47062[(23)]);
var inst_46930 = (state_47062[(10)]);
var inst_47030__$1 = cljs.core.first(inst_47021);
var inst_47031 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47030__$1,inst_46930,done);
var state_47062__$1 = (function (){var statearr_47138 = state_47062;
(statearr_47138[(23)] = inst_47030__$1);

return statearr_47138;
})();
if(cljs.core.truth_(inst_47031)){
var statearr_47139_48471 = state_47062__$1;
(statearr_47139_48471[(1)] = (39));

} else {
var statearr_47140_48472 = state_47062__$1;
(statearr_47140_48472[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (8))){
var inst_46941 = (state_47062[(14)]);
var inst_46942 = (state_47062[(16)]);
var inst_46944 = (inst_46942 < inst_46941);
var inst_46945 = inst_46944;
var state_47062__$1 = state_47062;
if(cljs.core.truth_(inst_46945)){
var statearr_47141_48474 = state_47062__$1;
(statearr_47141_48474[(1)] = (10));

} else {
var statearr_47142_48475 = state_47062__$1;
(statearr_47142_48475[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___48366,cs,m,dchan,dctr,done))
;
return ((function (switch__46366__auto__,c__46465__auto___48366,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46367__auto__ = null;
var cljs$core$async$mult_$_state_machine__46367__auto____0 = (function (){
var statearr_47143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47143[(0)] = cljs$core$async$mult_$_state_machine__46367__auto__);

(statearr_47143[(1)] = (1));

return statearr_47143;
});
var cljs$core$async$mult_$_state_machine__46367__auto____1 = (function (state_47062){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47062);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47144){if((e47144 instanceof Object)){
var ex__46370__auto__ = e47144;
var statearr_47145_48478 = state_47062;
(statearr_47145_48478[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48480 = state_47062;
state_47062 = G__48480;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46367__auto__ = function(state_47062){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46367__auto____1.call(this,state_47062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46367__auto____0;
cljs$core$async$mult_$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46367__auto____1;
return cljs$core$async$mult_$_state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___48366,cs,m,dchan,dctr,done))
})();
var state__46467__auto__ = (function (){var statearr_47146 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47146[(6)] = c__46465__auto___48366);

return statearr_47146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___48366,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47148 = arguments.length;
switch (G__47148) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48498 = arguments.length;
var i__4731__auto___48499 = (0);
while(true){
if((i__4731__auto___48499 < len__4730__auto___48498)){
args__4736__auto__.push((arguments[i__4731__auto___48499]));

var G__48501 = (i__4731__auto___48499 + (1));
i__4731__auto___48499 = G__48501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47153){
var map__47154 = p__47153;
var map__47154__$1 = (((((!((map__47154 == null))))?(((((map__47154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47154):map__47154);
var opts = map__47154__$1;
var statearr_47156_48505 = state;
(statearr_47156_48505[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__47154,map__47154__$1,opts){
return (function (val){
var statearr_47157_48513 = state;
(statearr_47157_48513[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__47154,map__47154__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47158_48515 = state;
(statearr_47158_48515[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47149){
var G__47150 = cljs.core.first(seq47149);
var seq47149__$1 = cljs.core.next(seq47149);
var G__47151 = cljs.core.first(seq47149__$1);
var seq47149__$2 = cljs.core.next(seq47149__$1);
var G__47152 = cljs.core.first(seq47149__$2);
var seq47149__$3 = cljs.core.next(seq47149__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47150,G__47151,G__47152,seq47149__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47159 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47160){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47160 = meta47160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47161,meta47160__$1){
var self__ = this;
var _47161__$1 = this;
return (new cljs.core.async.t_cljs$core$async47159(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47160__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47161){
var self__ = this;
var _47161__$1 = this;
return self__.meta47160;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47159.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47159.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47159.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47159.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47159.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47159.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47159.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47159.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47160","meta47160",-150107725,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47159";

cljs.core.async.t_cljs$core$async47159.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47159");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47159.
 */
cljs.core.async.__GT_t_cljs$core$async47159 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47159(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47160){
return (new cljs.core.async.t_cljs$core$async47159(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47160));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47159(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46465__auto___48542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___48542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___48542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47263){
var state_val_47264 = (state_47263[(1)]);
if((state_val_47264 === (7))){
var inst_47178 = (state_47263[(2)]);
var state_47263__$1 = state_47263;
var statearr_47265_48549 = state_47263__$1;
(statearr_47265_48549[(2)] = inst_47178);

(statearr_47265_48549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (20))){
var inst_47190 = (state_47263[(7)]);
var state_47263__$1 = state_47263;
var statearr_47266_48550 = state_47263__$1;
(statearr_47266_48550[(2)] = inst_47190);

(statearr_47266_48550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (27))){
var state_47263__$1 = state_47263;
var statearr_47267_48551 = state_47263__$1;
(statearr_47267_48551[(2)] = null);

(statearr_47267_48551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (1))){
var inst_47165 = (state_47263[(8)]);
var inst_47165__$1 = calc_state();
var inst_47167 = (inst_47165__$1 == null);
var inst_47168 = cljs.core.not(inst_47167);
var state_47263__$1 = (function (){var statearr_47268 = state_47263;
(statearr_47268[(8)] = inst_47165__$1);

return statearr_47268;
})();
if(inst_47168){
var statearr_47269_48553 = state_47263__$1;
(statearr_47269_48553[(1)] = (2));

} else {
var statearr_47270_48554 = state_47263__$1;
(statearr_47270_48554[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (24))){
var inst_47237 = (state_47263[(9)]);
var inst_47214 = (state_47263[(10)]);
var inst_47223 = (state_47263[(11)]);
var inst_47237__$1 = (inst_47214.cljs$core$IFn$_invoke$arity$1 ? inst_47214.cljs$core$IFn$_invoke$arity$1(inst_47223) : inst_47214.call(null,inst_47223));
var state_47263__$1 = (function (){var statearr_47271 = state_47263;
(statearr_47271[(9)] = inst_47237__$1);

return statearr_47271;
})();
if(cljs.core.truth_(inst_47237__$1)){
var statearr_47272_48555 = state_47263__$1;
(statearr_47272_48555[(1)] = (29));

} else {
var statearr_47273_48556 = state_47263__$1;
(statearr_47273_48556[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (4))){
var inst_47181 = (state_47263[(2)]);
var state_47263__$1 = state_47263;
if(cljs.core.truth_(inst_47181)){
var statearr_47274_48559 = state_47263__$1;
(statearr_47274_48559[(1)] = (8));

} else {
var statearr_47275_48560 = state_47263__$1;
(statearr_47275_48560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (15))){
var inst_47208 = (state_47263[(2)]);
var state_47263__$1 = state_47263;
if(cljs.core.truth_(inst_47208)){
var statearr_47276_48563 = state_47263__$1;
(statearr_47276_48563[(1)] = (19));

} else {
var statearr_47277_48566 = state_47263__$1;
(statearr_47277_48566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (21))){
var inst_47213 = (state_47263[(12)]);
var inst_47213__$1 = (state_47263[(2)]);
var inst_47214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47213__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47213__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47213__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47263__$1 = (function (){var statearr_47278 = state_47263;
(statearr_47278[(13)] = inst_47215);

(statearr_47278[(12)] = inst_47213__$1);

(statearr_47278[(10)] = inst_47214);

return statearr_47278;
})();
return cljs.core.async.ioc_alts_BANG_(state_47263__$1,(22),inst_47216);
} else {
if((state_val_47264 === (31))){
var inst_47245 = (state_47263[(2)]);
var state_47263__$1 = state_47263;
if(cljs.core.truth_(inst_47245)){
var statearr_47279_48569 = state_47263__$1;
(statearr_47279_48569[(1)] = (32));

} else {
var statearr_47280_48570 = state_47263__$1;
(statearr_47280_48570[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (32))){
var inst_47222 = (state_47263[(14)]);
var state_47263__$1 = state_47263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47263__$1,(35),out,inst_47222);
} else {
if((state_val_47264 === (33))){
var inst_47213 = (state_47263[(12)]);
var inst_47190 = inst_47213;
var state_47263__$1 = (function (){var statearr_47281 = state_47263;
(statearr_47281[(7)] = inst_47190);

return statearr_47281;
})();
var statearr_47282_48573 = state_47263__$1;
(statearr_47282_48573[(2)] = null);

(statearr_47282_48573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (13))){
var inst_47190 = (state_47263[(7)]);
var inst_47197 = inst_47190.cljs$lang$protocol_mask$partition0$;
var inst_47198 = (inst_47197 & (64));
var inst_47199 = inst_47190.cljs$core$ISeq$;
var inst_47200 = (cljs.core.PROTOCOL_SENTINEL === inst_47199);
var inst_47201 = ((inst_47198) || (inst_47200));
var state_47263__$1 = state_47263;
if(cljs.core.truth_(inst_47201)){
var statearr_47283_48577 = state_47263__$1;
(statearr_47283_48577[(1)] = (16));

} else {
var statearr_47284_48579 = state_47263__$1;
(statearr_47284_48579[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (22))){
var inst_47222 = (state_47263[(14)]);
var inst_47223 = (state_47263[(11)]);
var inst_47221 = (state_47263[(2)]);
var inst_47222__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47221,(0),null);
var inst_47223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47221,(1),null);
var inst_47224 = (inst_47222__$1 == null);
var inst_47225 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47223__$1,change);
var inst_47226 = ((inst_47224) || (inst_47225));
var state_47263__$1 = (function (){var statearr_47285 = state_47263;
(statearr_47285[(14)] = inst_47222__$1);

(statearr_47285[(11)] = inst_47223__$1);

return statearr_47285;
})();
if(cljs.core.truth_(inst_47226)){
var statearr_47286_48583 = state_47263__$1;
(statearr_47286_48583[(1)] = (23));

} else {
var statearr_47287_48585 = state_47263__$1;
(statearr_47287_48585[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (36))){
var inst_47213 = (state_47263[(12)]);
var inst_47190 = inst_47213;
var state_47263__$1 = (function (){var statearr_47288 = state_47263;
(statearr_47288[(7)] = inst_47190);

return statearr_47288;
})();
var statearr_47289_48595 = state_47263__$1;
(statearr_47289_48595[(2)] = null);

(statearr_47289_48595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (29))){
var inst_47237 = (state_47263[(9)]);
var state_47263__$1 = state_47263;
var statearr_47290_48596 = state_47263__$1;
(statearr_47290_48596[(2)] = inst_47237);

(statearr_47290_48596[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (6))){
var state_47263__$1 = state_47263;
var statearr_47291_48597 = state_47263__$1;
(statearr_47291_48597[(2)] = false);

(statearr_47291_48597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (28))){
var inst_47233 = (state_47263[(2)]);
var inst_47234 = calc_state();
var inst_47190 = inst_47234;
var state_47263__$1 = (function (){var statearr_47292 = state_47263;
(statearr_47292[(7)] = inst_47190);

(statearr_47292[(15)] = inst_47233);

return statearr_47292;
})();
var statearr_47293_48598 = state_47263__$1;
(statearr_47293_48598[(2)] = null);

(statearr_47293_48598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (25))){
var inst_47259 = (state_47263[(2)]);
var state_47263__$1 = state_47263;
var statearr_47294_48600 = state_47263__$1;
(statearr_47294_48600[(2)] = inst_47259);

(statearr_47294_48600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (34))){
var inst_47257 = (state_47263[(2)]);
var state_47263__$1 = state_47263;
var statearr_47295_48602 = state_47263__$1;
(statearr_47295_48602[(2)] = inst_47257);

(statearr_47295_48602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (17))){
var state_47263__$1 = state_47263;
var statearr_47296_48604 = state_47263__$1;
(statearr_47296_48604[(2)] = false);

(statearr_47296_48604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (3))){
var state_47263__$1 = state_47263;
var statearr_47297_48605 = state_47263__$1;
(statearr_47297_48605[(2)] = false);

(statearr_47297_48605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (12))){
var inst_47261 = (state_47263[(2)]);
var state_47263__$1 = state_47263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47263__$1,inst_47261);
} else {
if((state_val_47264 === (2))){
var inst_47165 = (state_47263[(8)]);
var inst_47170 = inst_47165.cljs$lang$protocol_mask$partition0$;
var inst_47171 = (inst_47170 & (64));
var inst_47172 = inst_47165.cljs$core$ISeq$;
var inst_47173 = (cljs.core.PROTOCOL_SENTINEL === inst_47172);
var inst_47174 = ((inst_47171) || (inst_47173));
var state_47263__$1 = state_47263;
if(cljs.core.truth_(inst_47174)){
var statearr_47298_48625 = state_47263__$1;
(statearr_47298_48625[(1)] = (5));

} else {
var statearr_47299_48626 = state_47263__$1;
(statearr_47299_48626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (23))){
var inst_47222 = (state_47263[(14)]);
var inst_47228 = (inst_47222 == null);
var state_47263__$1 = state_47263;
if(cljs.core.truth_(inst_47228)){
var statearr_47300_48627 = state_47263__$1;
(statearr_47300_48627[(1)] = (26));

} else {
var statearr_47301_48629 = state_47263__$1;
(statearr_47301_48629[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (35))){
var inst_47248 = (state_47263[(2)]);
var state_47263__$1 = state_47263;
if(cljs.core.truth_(inst_47248)){
var statearr_47302_48633 = state_47263__$1;
(statearr_47302_48633[(1)] = (36));

} else {
var statearr_47303_48636 = state_47263__$1;
(statearr_47303_48636[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (19))){
var inst_47190 = (state_47263[(7)]);
var inst_47210 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47190);
var state_47263__$1 = state_47263;
var statearr_47304_48639 = state_47263__$1;
(statearr_47304_48639[(2)] = inst_47210);

(statearr_47304_48639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (11))){
var inst_47190 = (state_47263[(7)]);
var inst_47194 = (inst_47190 == null);
var inst_47195 = cljs.core.not(inst_47194);
var state_47263__$1 = state_47263;
if(inst_47195){
var statearr_47305_48643 = state_47263__$1;
(statearr_47305_48643[(1)] = (13));

} else {
var statearr_47306_48645 = state_47263__$1;
(statearr_47306_48645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (9))){
var inst_47165 = (state_47263[(8)]);
var state_47263__$1 = state_47263;
var statearr_47307_48646 = state_47263__$1;
(statearr_47307_48646[(2)] = inst_47165);

(statearr_47307_48646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (5))){
var state_47263__$1 = state_47263;
var statearr_47308_48647 = state_47263__$1;
(statearr_47308_48647[(2)] = true);

(statearr_47308_48647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (14))){
var state_47263__$1 = state_47263;
var statearr_47309_48651 = state_47263__$1;
(statearr_47309_48651[(2)] = false);

(statearr_47309_48651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (26))){
var inst_47223 = (state_47263[(11)]);
var inst_47230 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47223);
var state_47263__$1 = state_47263;
var statearr_47310_48655 = state_47263__$1;
(statearr_47310_48655[(2)] = inst_47230);

(statearr_47310_48655[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (16))){
var state_47263__$1 = state_47263;
var statearr_47311_48657 = state_47263__$1;
(statearr_47311_48657[(2)] = true);

(statearr_47311_48657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (38))){
var inst_47253 = (state_47263[(2)]);
var state_47263__$1 = state_47263;
var statearr_47312_48658 = state_47263__$1;
(statearr_47312_48658[(2)] = inst_47253);

(statearr_47312_48658[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (30))){
var inst_47215 = (state_47263[(13)]);
var inst_47214 = (state_47263[(10)]);
var inst_47223 = (state_47263[(11)]);
var inst_47240 = cljs.core.empty_QMARK_(inst_47214);
var inst_47241 = (inst_47215.cljs$core$IFn$_invoke$arity$1 ? inst_47215.cljs$core$IFn$_invoke$arity$1(inst_47223) : inst_47215.call(null,inst_47223));
var inst_47242 = cljs.core.not(inst_47241);
var inst_47243 = ((inst_47240) && (inst_47242));
var state_47263__$1 = state_47263;
var statearr_47313_48660 = state_47263__$1;
(statearr_47313_48660[(2)] = inst_47243);

(statearr_47313_48660[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (10))){
var inst_47165 = (state_47263[(8)]);
var inst_47186 = (state_47263[(2)]);
var inst_47187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47186,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47186,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47186,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47190 = inst_47165;
var state_47263__$1 = (function (){var statearr_47314 = state_47263;
(statearr_47314[(16)] = inst_47187);

(statearr_47314[(17)] = inst_47188);

(statearr_47314[(7)] = inst_47190);

(statearr_47314[(18)] = inst_47189);

return statearr_47314;
})();
var statearr_47315_48673 = state_47263__$1;
(statearr_47315_48673[(2)] = null);

(statearr_47315_48673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (18))){
var inst_47205 = (state_47263[(2)]);
var state_47263__$1 = state_47263;
var statearr_47316_48682 = state_47263__$1;
(statearr_47316_48682[(2)] = inst_47205);

(statearr_47316_48682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (37))){
var state_47263__$1 = state_47263;
var statearr_47317_48683 = state_47263__$1;
(statearr_47317_48683[(2)] = null);

(statearr_47317_48683[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47264 === (8))){
var inst_47165 = (state_47263[(8)]);
var inst_47183 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47165);
var state_47263__$1 = state_47263;
var statearr_47318_48684 = state_47263__$1;
(statearr_47318_48684[(2)] = inst_47183);

(statearr_47318_48684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___48542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46366__auto__,c__46465__auto___48542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46367__auto__ = null;
var cljs$core$async$mix_$_state_machine__46367__auto____0 = (function (){
var statearr_47319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47319[(0)] = cljs$core$async$mix_$_state_machine__46367__auto__);

(statearr_47319[(1)] = (1));

return statearr_47319;
});
var cljs$core$async$mix_$_state_machine__46367__auto____1 = (function (state_47263){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47263);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47320){if((e47320 instanceof Object)){
var ex__46370__auto__ = e47320;
var statearr_47321_48696 = state_47263;
(statearr_47321_48696[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48697 = state_47263;
state_47263 = G__48697;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46367__auto__ = function(state_47263){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46367__auto____1.call(this,state_47263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46367__auto____0;
cljs$core$async$mix_$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46367__auto____1;
return cljs$core$async$mix_$_state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___48542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46467__auto__ = (function (){var statearr_47322 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47322[(6)] = c__46465__auto___48542);

return statearr_47322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___48542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47324 = arguments.length;
switch (G__47324) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47327 = arguments.length;
switch (G__47327) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__47325_SHARP_){
if(cljs.core.truth_((p1__47325_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47325_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47325_SHARP_.call(null,topic)))){
return p1__47325_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47325_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47328 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47329){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47329 = meta47329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47330,meta47329__$1){
var self__ = this;
var _47330__$1 = this;
return (new cljs.core.async.t_cljs$core$async47328(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47329__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47330){
var self__ = this;
var _47330__$1 = this;
return self__.meta47329;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47328.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47328.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47328.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47328.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47328.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47328.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47328.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47329","meta47329",469143872,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47328";

cljs.core.async.t_cljs$core$async47328.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47328");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47328.
 */
cljs.core.async.__GT_t_cljs$core$async47328 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47328(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47329){
return (new cljs.core.async.t_cljs$core$async47328(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47329));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47328(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46465__auto___48726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___48726,mults,ensure_mult,p){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___48726,mults,ensure_mult,p){
return (function (state_47402){
var state_val_47403 = (state_47402[(1)]);
if((state_val_47403 === (7))){
var inst_47398 = (state_47402[(2)]);
var state_47402__$1 = state_47402;
var statearr_47404_48727 = state_47402__$1;
(statearr_47404_48727[(2)] = inst_47398);

(statearr_47404_48727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (20))){
var state_47402__$1 = state_47402;
var statearr_47405_48728 = state_47402__$1;
(statearr_47405_48728[(2)] = null);

(statearr_47405_48728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (1))){
var state_47402__$1 = state_47402;
var statearr_47406_48730 = state_47402__$1;
(statearr_47406_48730[(2)] = null);

(statearr_47406_48730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (24))){
var inst_47381 = (state_47402[(7)]);
var inst_47390 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47381);
var state_47402__$1 = state_47402;
var statearr_47407_48732 = state_47402__$1;
(statearr_47407_48732[(2)] = inst_47390);

(statearr_47407_48732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (4))){
var inst_47333 = (state_47402[(8)]);
var inst_47333__$1 = (state_47402[(2)]);
var inst_47334 = (inst_47333__$1 == null);
var state_47402__$1 = (function (){var statearr_47408 = state_47402;
(statearr_47408[(8)] = inst_47333__$1);

return statearr_47408;
})();
if(cljs.core.truth_(inst_47334)){
var statearr_47409_48733 = state_47402__$1;
(statearr_47409_48733[(1)] = (5));

} else {
var statearr_47410_48734 = state_47402__$1;
(statearr_47410_48734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (15))){
var inst_47375 = (state_47402[(2)]);
var state_47402__$1 = state_47402;
var statearr_47411_48738 = state_47402__$1;
(statearr_47411_48738[(2)] = inst_47375);

(statearr_47411_48738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (21))){
var inst_47395 = (state_47402[(2)]);
var state_47402__$1 = (function (){var statearr_47412 = state_47402;
(statearr_47412[(9)] = inst_47395);

return statearr_47412;
})();
var statearr_47413_48745 = state_47402__$1;
(statearr_47413_48745[(2)] = null);

(statearr_47413_48745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (13))){
var inst_47357 = (state_47402[(10)]);
var inst_47359 = cljs.core.chunked_seq_QMARK_(inst_47357);
var state_47402__$1 = state_47402;
if(inst_47359){
var statearr_47414_48746 = state_47402__$1;
(statearr_47414_48746[(1)] = (16));

} else {
var statearr_47415_48747 = state_47402__$1;
(statearr_47415_48747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (22))){
var inst_47387 = (state_47402[(2)]);
var state_47402__$1 = state_47402;
if(cljs.core.truth_(inst_47387)){
var statearr_47416_48748 = state_47402__$1;
(statearr_47416_48748[(1)] = (23));

} else {
var statearr_47417_48750 = state_47402__$1;
(statearr_47417_48750[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (6))){
var inst_47333 = (state_47402[(8)]);
var inst_47381 = (state_47402[(7)]);
var inst_47383 = (state_47402[(11)]);
var inst_47381__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47333) : topic_fn.call(null,inst_47333));
var inst_47382 = cljs.core.deref(mults);
var inst_47383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47382,inst_47381__$1);
var state_47402__$1 = (function (){var statearr_47418 = state_47402;
(statearr_47418[(7)] = inst_47381__$1);

(statearr_47418[(11)] = inst_47383__$1);

return statearr_47418;
})();
if(cljs.core.truth_(inst_47383__$1)){
var statearr_47419_48755 = state_47402__$1;
(statearr_47419_48755[(1)] = (19));

} else {
var statearr_47420_48756 = state_47402__$1;
(statearr_47420_48756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (25))){
var inst_47392 = (state_47402[(2)]);
var state_47402__$1 = state_47402;
var statearr_47421_48757 = state_47402__$1;
(statearr_47421_48757[(2)] = inst_47392);

(statearr_47421_48757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (17))){
var inst_47357 = (state_47402[(10)]);
var inst_47366 = cljs.core.first(inst_47357);
var inst_47367 = cljs.core.async.muxch_STAR_(inst_47366);
var inst_47368 = cljs.core.async.close_BANG_(inst_47367);
var inst_47369 = cljs.core.next(inst_47357);
var inst_47343 = inst_47369;
var inst_47344 = null;
var inst_47345 = (0);
var inst_47346 = (0);
var state_47402__$1 = (function (){var statearr_47422 = state_47402;
(statearr_47422[(12)] = inst_47345);

(statearr_47422[(13)] = inst_47368);

(statearr_47422[(14)] = inst_47346);

(statearr_47422[(15)] = inst_47343);

(statearr_47422[(16)] = inst_47344);

return statearr_47422;
})();
var statearr_47423_48758 = state_47402__$1;
(statearr_47423_48758[(2)] = null);

(statearr_47423_48758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (3))){
var inst_47400 = (state_47402[(2)]);
var state_47402__$1 = state_47402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47402__$1,inst_47400);
} else {
if((state_val_47403 === (12))){
var inst_47377 = (state_47402[(2)]);
var state_47402__$1 = state_47402;
var statearr_47424_48759 = state_47402__$1;
(statearr_47424_48759[(2)] = inst_47377);

(statearr_47424_48759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (2))){
var state_47402__$1 = state_47402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47402__$1,(4),ch);
} else {
if((state_val_47403 === (23))){
var state_47402__$1 = state_47402;
var statearr_47425_48760 = state_47402__$1;
(statearr_47425_48760[(2)] = null);

(statearr_47425_48760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (19))){
var inst_47333 = (state_47402[(8)]);
var inst_47383 = (state_47402[(11)]);
var inst_47385 = cljs.core.async.muxch_STAR_(inst_47383);
var state_47402__$1 = state_47402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47402__$1,(22),inst_47385,inst_47333);
} else {
if((state_val_47403 === (11))){
var inst_47357 = (state_47402[(10)]);
var inst_47343 = (state_47402[(15)]);
var inst_47357__$1 = cljs.core.seq(inst_47343);
var state_47402__$1 = (function (){var statearr_47426 = state_47402;
(statearr_47426[(10)] = inst_47357__$1);

return statearr_47426;
})();
if(inst_47357__$1){
var statearr_47427_48761 = state_47402__$1;
(statearr_47427_48761[(1)] = (13));

} else {
var statearr_47428_48762 = state_47402__$1;
(statearr_47428_48762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (9))){
var inst_47379 = (state_47402[(2)]);
var state_47402__$1 = state_47402;
var statearr_47429_48763 = state_47402__$1;
(statearr_47429_48763[(2)] = inst_47379);

(statearr_47429_48763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (5))){
var inst_47340 = cljs.core.deref(mults);
var inst_47341 = cljs.core.vals(inst_47340);
var inst_47342 = cljs.core.seq(inst_47341);
var inst_47343 = inst_47342;
var inst_47344 = null;
var inst_47345 = (0);
var inst_47346 = (0);
var state_47402__$1 = (function (){var statearr_47430 = state_47402;
(statearr_47430[(12)] = inst_47345);

(statearr_47430[(14)] = inst_47346);

(statearr_47430[(15)] = inst_47343);

(statearr_47430[(16)] = inst_47344);

return statearr_47430;
})();
var statearr_47431_48764 = state_47402__$1;
(statearr_47431_48764[(2)] = null);

(statearr_47431_48764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (14))){
var state_47402__$1 = state_47402;
var statearr_47435_48765 = state_47402__$1;
(statearr_47435_48765[(2)] = null);

(statearr_47435_48765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (16))){
var inst_47357 = (state_47402[(10)]);
var inst_47361 = cljs.core.chunk_first(inst_47357);
var inst_47362 = cljs.core.chunk_rest(inst_47357);
var inst_47363 = cljs.core.count(inst_47361);
var inst_47343 = inst_47362;
var inst_47344 = inst_47361;
var inst_47345 = inst_47363;
var inst_47346 = (0);
var state_47402__$1 = (function (){var statearr_47436 = state_47402;
(statearr_47436[(12)] = inst_47345);

(statearr_47436[(14)] = inst_47346);

(statearr_47436[(15)] = inst_47343);

(statearr_47436[(16)] = inst_47344);

return statearr_47436;
})();
var statearr_47437_48766 = state_47402__$1;
(statearr_47437_48766[(2)] = null);

(statearr_47437_48766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (10))){
var inst_47345 = (state_47402[(12)]);
var inst_47346 = (state_47402[(14)]);
var inst_47343 = (state_47402[(15)]);
var inst_47344 = (state_47402[(16)]);
var inst_47351 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47344,inst_47346);
var inst_47352 = cljs.core.async.muxch_STAR_(inst_47351);
var inst_47353 = cljs.core.async.close_BANG_(inst_47352);
var inst_47354 = (inst_47346 + (1));
var tmp47432 = inst_47345;
var tmp47433 = inst_47343;
var tmp47434 = inst_47344;
var inst_47343__$1 = tmp47433;
var inst_47344__$1 = tmp47434;
var inst_47345__$1 = tmp47432;
var inst_47346__$1 = inst_47354;
var state_47402__$1 = (function (){var statearr_47438 = state_47402;
(statearr_47438[(12)] = inst_47345__$1);

(statearr_47438[(17)] = inst_47353);

(statearr_47438[(14)] = inst_47346__$1);

(statearr_47438[(15)] = inst_47343__$1);

(statearr_47438[(16)] = inst_47344__$1);

return statearr_47438;
})();
var statearr_47439_48772 = state_47402__$1;
(statearr_47439_48772[(2)] = null);

(statearr_47439_48772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (18))){
var inst_47372 = (state_47402[(2)]);
var state_47402__$1 = state_47402;
var statearr_47440_48775 = state_47402__$1;
(statearr_47440_48775[(2)] = inst_47372);

(statearr_47440_48775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47403 === (8))){
var inst_47345 = (state_47402[(12)]);
var inst_47346 = (state_47402[(14)]);
var inst_47348 = (inst_47346 < inst_47345);
var inst_47349 = inst_47348;
var state_47402__$1 = state_47402;
if(cljs.core.truth_(inst_47349)){
var statearr_47441_48776 = state_47402__$1;
(statearr_47441_48776[(1)] = (10));

} else {
var statearr_47442_48777 = state_47402__$1;
(statearr_47442_48777[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___48726,mults,ensure_mult,p))
;
return ((function (switch__46366__auto__,c__46465__auto___48726,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_47443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47443[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_47443[(1)] = (1));

return statearr_47443;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_47402){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47402);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47444){if((e47444 instanceof Object)){
var ex__46370__auto__ = e47444;
var statearr_47445_48790 = state_47402;
(statearr_47445_48790[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48795 = state_47402;
state_47402 = G__48795;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_47402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_47402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___48726,mults,ensure_mult,p))
})();
var state__46467__auto__ = (function (){var statearr_47446 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47446[(6)] = c__46465__auto___48726);

return statearr_47446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___48726,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47448 = arguments.length;
switch (G__47448) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47450 = arguments.length;
switch (G__47450) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47452 = arguments.length;
switch (G__47452) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46465__auto___48834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___48834,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___48834,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47491){
var state_val_47492 = (state_47491[(1)]);
if((state_val_47492 === (7))){
var state_47491__$1 = state_47491;
var statearr_47493_48841 = state_47491__$1;
(statearr_47493_48841[(2)] = null);

(statearr_47493_48841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (1))){
var state_47491__$1 = state_47491;
var statearr_47494_48842 = state_47491__$1;
(statearr_47494_48842[(2)] = null);

(statearr_47494_48842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (4))){
var inst_47455 = (state_47491[(7)]);
var inst_47457 = (inst_47455 < cnt);
var state_47491__$1 = state_47491;
if(cljs.core.truth_(inst_47457)){
var statearr_47495_48843 = state_47491__$1;
(statearr_47495_48843[(1)] = (6));

} else {
var statearr_47496_48844 = state_47491__$1;
(statearr_47496_48844[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (15))){
var inst_47487 = (state_47491[(2)]);
var state_47491__$1 = state_47491;
var statearr_47497_48845 = state_47491__$1;
(statearr_47497_48845[(2)] = inst_47487);

(statearr_47497_48845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (13))){
var inst_47480 = cljs.core.async.close_BANG_(out);
var state_47491__$1 = state_47491;
var statearr_47498_48846 = state_47491__$1;
(statearr_47498_48846[(2)] = inst_47480);

(statearr_47498_48846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (6))){
var state_47491__$1 = state_47491;
var statearr_47499_48848 = state_47491__$1;
(statearr_47499_48848[(2)] = null);

(statearr_47499_48848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (3))){
var inst_47489 = (state_47491[(2)]);
var state_47491__$1 = state_47491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47491__$1,inst_47489);
} else {
if((state_val_47492 === (12))){
var inst_47477 = (state_47491[(8)]);
var inst_47477__$1 = (state_47491[(2)]);
var inst_47478 = cljs.core.some(cljs.core.nil_QMARK_,inst_47477__$1);
var state_47491__$1 = (function (){var statearr_47500 = state_47491;
(statearr_47500[(8)] = inst_47477__$1);

return statearr_47500;
})();
if(cljs.core.truth_(inst_47478)){
var statearr_47501_48862 = state_47491__$1;
(statearr_47501_48862[(1)] = (13));

} else {
var statearr_47502_48863 = state_47491__$1;
(statearr_47502_48863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (2))){
var inst_47454 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47455 = (0);
var state_47491__$1 = (function (){var statearr_47503 = state_47491;
(statearr_47503[(7)] = inst_47455);

(statearr_47503[(9)] = inst_47454);

return statearr_47503;
})();
var statearr_47504_48865 = state_47491__$1;
(statearr_47504_48865[(2)] = null);

(statearr_47504_48865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (11))){
var inst_47455 = (state_47491[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47491,(10),Object,null,(9));
var inst_47464 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47455) : chs__$1.call(null,inst_47455));
var inst_47465 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47455) : done.call(null,inst_47455));
var inst_47466 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47464,inst_47465);
var state_47491__$1 = state_47491;
var statearr_47505_48873 = state_47491__$1;
(statearr_47505_48873[(2)] = inst_47466);


cljs.core.async.impl.ioc_helpers.process_exception(state_47491__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (9))){
var inst_47455 = (state_47491[(7)]);
var inst_47468 = (state_47491[(2)]);
var inst_47469 = (inst_47455 + (1));
var inst_47455__$1 = inst_47469;
var state_47491__$1 = (function (){var statearr_47506 = state_47491;
(statearr_47506[(7)] = inst_47455__$1);

(statearr_47506[(10)] = inst_47468);

return statearr_47506;
})();
var statearr_47507_48886 = state_47491__$1;
(statearr_47507_48886[(2)] = null);

(statearr_47507_48886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (5))){
var inst_47475 = (state_47491[(2)]);
var state_47491__$1 = (function (){var statearr_47508 = state_47491;
(statearr_47508[(11)] = inst_47475);

return statearr_47508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47491__$1,(12),dchan);
} else {
if((state_val_47492 === (14))){
var inst_47477 = (state_47491[(8)]);
var inst_47482 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47477);
var state_47491__$1 = state_47491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47491__$1,(16),out,inst_47482);
} else {
if((state_val_47492 === (16))){
var inst_47484 = (state_47491[(2)]);
var state_47491__$1 = (function (){var statearr_47509 = state_47491;
(statearr_47509[(12)] = inst_47484);

return statearr_47509;
})();
var statearr_47510_48894 = state_47491__$1;
(statearr_47510_48894[(2)] = null);

(statearr_47510_48894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (10))){
var inst_47459 = (state_47491[(2)]);
var inst_47460 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47491__$1 = (function (){var statearr_47511 = state_47491;
(statearr_47511[(13)] = inst_47459);

return statearr_47511;
})();
var statearr_47512_48898 = state_47491__$1;
(statearr_47512_48898[(2)] = inst_47460);


cljs.core.async.impl.ioc_helpers.process_exception(state_47491__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (8))){
var inst_47473 = (state_47491[(2)]);
var state_47491__$1 = state_47491;
var statearr_47513_48902 = state_47491__$1;
(statearr_47513_48902[(2)] = inst_47473);

(statearr_47513_48902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___48834,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46366__auto__,c__46465__auto___48834,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_47514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47514[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_47514[(1)] = (1));

return statearr_47514;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_47491){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47491);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47515){if((e47515 instanceof Object)){
var ex__46370__auto__ = e47515;
var statearr_47516_48907 = state_47491;
(statearr_47516_48907[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48908 = state_47491;
state_47491 = G__48908;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_47491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_47491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___48834,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46467__auto__ = (function (){var statearr_47517 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47517[(6)] = c__46465__auto___48834);

return statearr_47517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___48834,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47520 = arguments.length;
switch (G__47520) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46465__auto___48918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___48918,out){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___48918,out){
return (function (state_47552){
var state_val_47553 = (state_47552[(1)]);
if((state_val_47553 === (7))){
var inst_47532 = (state_47552[(7)]);
var inst_47531 = (state_47552[(8)]);
var inst_47531__$1 = (state_47552[(2)]);
var inst_47532__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47531__$1,(0),null);
var inst_47533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47531__$1,(1),null);
var inst_47534 = (inst_47532__$1 == null);
var state_47552__$1 = (function (){var statearr_47554 = state_47552;
(statearr_47554[(7)] = inst_47532__$1);

(statearr_47554[(9)] = inst_47533);

(statearr_47554[(8)] = inst_47531__$1);

return statearr_47554;
})();
if(cljs.core.truth_(inst_47534)){
var statearr_47555_48919 = state_47552__$1;
(statearr_47555_48919[(1)] = (8));

} else {
var statearr_47556_48920 = state_47552__$1;
(statearr_47556_48920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (1))){
var inst_47521 = cljs.core.vec(chs);
var inst_47522 = inst_47521;
var state_47552__$1 = (function (){var statearr_47557 = state_47552;
(statearr_47557[(10)] = inst_47522);

return statearr_47557;
})();
var statearr_47558_48921 = state_47552__$1;
(statearr_47558_48921[(2)] = null);

(statearr_47558_48921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (4))){
var inst_47522 = (state_47552[(10)]);
var state_47552__$1 = state_47552;
return cljs.core.async.ioc_alts_BANG_(state_47552__$1,(7),inst_47522);
} else {
if((state_val_47553 === (6))){
var inst_47548 = (state_47552[(2)]);
var state_47552__$1 = state_47552;
var statearr_47559_48932 = state_47552__$1;
(statearr_47559_48932[(2)] = inst_47548);

(statearr_47559_48932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (3))){
var inst_47550 = (state_47552[(2)]);
var state_47552__$1 = state_47552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47552__$1,inst_47550);
} else {
if((state_val_47553 === (2))){
var inst_47522 = (state_47552[(10)]);
var inst_47524 = cljs.core.count(inst_47522);
var inst_47525 = (inst_47524 > (0));
var state_47552__$1 = state_47552;
if(cljs.core.truth_(inst_47525)){
var statearr_47561_48972 = state_47552__$1;
(statearr_47561_48972[(1)] = (4));

} else {
var statearr_47562_48973 = state_47552__$1;
(statearr_47562_48973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (11))){
var inst_47522 = (state_47552[(10)]);
var inst_47541 = (state_47552[(2)]);
var tmp47560 = inst_47522;
var inst_47522__$1 = tmp47560;
var state_47552__$1 = (function (){var statearr_47563 = state_47552;
(statearr_47563[(10)] = inst_47522__$1);

(statearr_47563[(11)] = inst_47541);

return statearr_47563;
})();
var statearr_47564_48988 = state_47552__$1;
(statearr_47564_48988[(2)] = null);

(statearr_47564_48988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (9))){
var inst_47532 = (state_47552[(7)]);
var state_47552__$1 = state_47552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47552__$1,(11),out,inst_47532);
} else {
if((state_val_47553 === (5))){
var inst_47546 = cljs.core.async.close_BANG_(out);
var state_47552__$1 = state_47552;
var statearr_47565_48998 = state_47552__$1;
(statearr_47565_48998[(2)] = inst_47546);

(statearr_47565_48998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (10))){
var inst_47544 = (state_47552[(2)]);
var state_47552__$1 = state_47552;
var statearr_47566_48999 = state_47552__$1;
(statearr_47566_48999[(2)] = inst_47544);

(statearr_47566_48999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (8))){
var inst_47532 = (state_47552[(7)]);
var inst_47533 = (state_47552[(9)]);
var inst_47522 = (state_47552[(10)]);
var inst_47531 = (state_47552[(8)]);
var inst_47536 = (function (){var cs = inst_47522;
var vec__47527 = inst_47531;
var v = inst_47532;
var c = inst_47533;
return ((function (cs,vec__47527,v,c,inst_47532,inst_47533,inst_47522,inst_47531,state_val_47553,c__46465__auto___48918,out){
return (function (p1__47518_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47518_SHARP_);
});
;})(cs,vec__47527,v,c,inst_47532,inst_47533,inst_47522,inst_47531,state_val_47553,c__46465__auto___48918,out))
})();
var inst_47537 = cljs.core.filterv(inst_47536,inst_47522);
var inst_47522__$1 = inst_47537;
var state_47552__$1 = (function (){var statearr_47567 = state_47552;
(statearr_47567[(10)] = inst_47522__$1);

return statearr_47567;
})();
var statearr_47568_49019 = state_47552__$1;
(statearr_47568_49019[(2)] = null);

(statearr_47568_49019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___48918,out))
;
return ((function (switch__46366__auto__,c__46465__auto___48918,out){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_47569 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47569[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_47569[(1)] = (1));

return statearr_47569;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_47552){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47552);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47570){if((e47570 instanceof Object)){
var ex__46370__auto__ = e47570;
var statearr_47571_49024 = state_47552;
(statearr_47571_49024[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49025 = state_47552;
state_47552 = G__49025;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_47552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_47552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___48918,out))
})();
var state__46467__auto__ = (function (){var statearr_47572 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47572[(6)] = c__46465__auto___48918);

return statearr_47572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___48918,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47574 = arguments.length;
switch (G__47574) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46465__auto___49027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___49027,out){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___49027,out){
return (function (state_47598){
var state_val_47599 = (state_47598[(1)]);
if((state_val_47599 === (7))){
var inst_47580 = (state_47598[(7)]);
var inst_47580__$1 = (state_47598[(2)]);
var inst_47581 = (inst_47580__$1 == null);
var inst_47582 = cljs.core.not(inst_47581);
var state_47598__$1 = (function (){var statearr_47600 = state_47598;
(statearr_47600[(7)] = inst_47580__$1);

return statearr_47600;
})();
if(inst_47582){
var statearr_47601_49036 = state_47598__$1;
(statearr_47601_49036[(1)] = (8));

} else {
var statearr_47602_49037 = state_47598__$1;
(statearr_47602_49037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (1))){
var inst_47575 = (0);
var state_47598__$1 = (function (){var statearr_47603 = state_47598;
(statearr_47603[(8)] = inst_47575);

return statearr_47603;
})();
var statearr_47604_49045 = state_47598__$1;
(statearr_47604_49045[(2)] = null);

(statearr_47604_49045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (4))){
var state_47598__$1 = state_47598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47598__$1,(7),ch);
} else {
if((state_val_47599 === (6))){
var inst_47593 = (state_47598[(2)]);
var state_47598__$1 = state_47598;
var statearr_47605_49046 = state_47598__$1;
(statearr_47605_49046[(2)] = inst_47593);

(statearr_47605_49046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (3))){
var inst_47595 = (state_47598[(2)]);
var inst_47596 = cljs.core.async.close_BANG_(out);
var state_47598__$1 = (function (){var statearr_47606 = state_47598;
(statearr_47606[(9)] = inst_47595);

return statearr_47606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47598__$1,inst_47596);
} else {
if((state_val_47599 === (2))){
var inst_47575 = (state_47598[(8)]);
var inst_47577 = (inst_47575 < n);
var state_47598__$1 = state_47598;
if(cljs.core.truth_(inst_47577)){
var statearr_47607_49062 = state_47598__$1;
(statearr_47607_49062[(1)] = (4));

} else {
var statearr_47608_49063 = state_47598__$1;
(statearr_47608_49063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (11))){
var inst_47575 = (state_47598[(8)]);
var inst_47585 = (state_47598[(2)]);
var inst_47586 = (inst_47575 + (1));
var inst_47575__$1 = inst_47586;
var state_47598__$1 = (function (){var statearr_47609 = state_47598;
(statearr_47609[(10)] = inst_47585);

(statearr_47609[(8)] = inst_47575__$1);

return statearr_47609;
})();
var statearr_47610_49064 = state_47598__$1;
(statearr_47610_49064[(2)] = null);

(statearr_47610_49064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (9))){
var state_47598__$1 = state_47598;
var statearr_47611_49066 = state_47598__$1;
(statearr_47611_49066[(2)] = null);

(statearr_47611_49066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (5))){
var state_47598__$1 = state_47598;
var statearr_47612_49067 = state_47598__$1;
(statearr_47612_49067[(2)] = null);

(statearr_47612_49067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (10))){
var inst_47590 = (state_47598[(2)]);
var state_47598__$1 = state_47598;
var statearr_47613_49071 = state_47598__$1;
(statearr_47613_49071[(2)] = inst_47590);

(statearr_47613_49071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (8))){
var inst_47580 = (state_47598[(7)]);
var state_47598__$1 = state_47598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47598__$1,(11),out,inst_47580);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___49027,out))
;
return ((function (switch__46366__auto__,c__46465__auto___49027,out){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_47614 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47614[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_47614[(1)] = (1));

return statearr_47614;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_47598){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47598);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47615){if((e47615 instanceof Object)){
var ex__46370__auto__ = e47615;
var statearr_47616_49077 = state_47598;
(statearr_47616_49077[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49078 = state_47598;
state_47598 = G__49078;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_47598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_47598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___49027,out))
})();
var state__46467__auto__ = (function (){var statearr_47617 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47617[(6)] = c__46465__auto___49027);

return statearr_47617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___49027,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47619 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47619 = (function (f,ch,meta47620){
this.f = f;
this.ch = ch;
this.meta47620 = meta47620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47621,meta47620__$1){
var self__ = this;
var _47621__$1 = this;
return (new cljs.core.async.t_cljs$core$async47619(self__.f,self__.ch,meta47620__$1));
});

cljs.core.async.t_cljs$core$async47619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47621){
var self__ = this;
var _47621__$1 = this;
return self__.meta47620;
});

cljs.core.async.t_cljs$core$async47619.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47619.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47619.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47619.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47619.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47622 = (function (f,ch,meta47620,_,fn1,meta47623){
this.f = f;
this.ch = ch;
this.meta47620 = meta47620;
this._ = _;
this.fn1 = fn1;
this.meta47623 = meta47623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47624,meta47623__$1){
var self__ = this;
var _47624__$1 = this;
return (new cljs.core.async.t_cljs$core$async47622(self__.f,self__.ch,self__.meta47620,self__._,self__.fn1,meta47623__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47624){
var self__ = this;
var _47624__$1 = this;
return self__.meta47623;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47622.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47618_SHARP_){
var G__47625 = (((p1__47618_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47618_SHARP_) : self__.f.call(null,p1__47618_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47625) : f1.call(null,G__47625));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47622.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47620","meta47620",-2016019267,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47619","cljs.core.async/t_cljs$core$async47619",-1867842689,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47623","meta47623",2120299370,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47622";

cljs.core.async.t_cljs$core$async47622.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47622");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47622.
 */
cljs.core.async.__GT_t_cljs$core$async47622 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47622(f__$1,ch__$1,meta47620__$1,___$2,fn1__$1,meta47623){
return (new cljs.core.async.t_cljs$core$async47622(f__$1,ch__$1,meta47620__$1,___$2,fn1__$1,meta47623));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47622(self__.f,self__.ch,self__.meta47620,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47626 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47626) : self__.f.call(null,G__47626));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47619.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47619.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47620","meta47620",-2016019267,null)], null);
});

cljs.core.async.t_cljs$core$async47619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47619";

cljs.core.async.t_cljs$core$async47619.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47619");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47619.
 */
cljs.core.async.__GT_t_cljs$core$async47619 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47619(f__$1,ch__$1,meta47620){
return (new cljs.core.async.t_cljs$core$async47619(f__$1,ch__$1,meta47620));
});

}

return (new cljs.core.async.t_cljs$core$async47619(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47627 = (function (f,ch,meta47628){
this.f = f;
this.ch = ch;
this.meta47628 = meta47628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47629,meta47628__$1){
var self__ = this;
var _47629__$1 = this;
return (new cljs.core.async.t_cljs$core$async47627(self__.f,self__.ch,meta47628__$1));
});

cljs.core.async.t_cljs$core$async47627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47629){
var self__ = this;
var _47629__$1 = this;
return self__.meta47628;
});

cljs.core.async.t_cljs$core$async47627.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47627.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47627.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async47627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47628","meta47628",857483204,null)], null);
});

cljs.core.async.t_cljs$core$async47627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47627";

cljs.core.async.t_cljs$core$async47627.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47627");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47627.
 */
cljs.core.async.__GT_t_cljs$core$async47627 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47627(f__$1,ch__$1,meta47628){
return (new cljs.core.async.t_cljs$core$async47627(f__$1,ch__$1,meta47628));
});

}

return (new cljs.core.async.t_cljs$core$async47627(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47630 = (function (p,ch,meta47631){
this.p = p;
this.ch = ch;
this.meta47631 = meta47631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47632,meta47631__$1){
var self__ = this;
var _47632__$1 = this;
return (new cljs.core.async.t_cljs$core$async47630(self__.p,self__.ch,meta47631__$1));
});

cljs.core.async.t_cljs$core$async47630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47632){
var self__ = this;
var _47632__$1 = this;
return self__.meta47631;
});

cljs.core.async.t_cljs$core$async47630.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47630.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47630.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47630.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47630.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47630.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47630.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47631","meta47631",-2080840498,null)], null);
});

cljs.core.async.t_cljs$core$async47630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47630";

cljs.core.async.t_cljs$core$async47630.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47630");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47630.
 */
cljs.core.async.__GT_t_cljs$core$async47630 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47630(p__$1,ch__$1,meta47631){
return (new cljs.core.async.t_cljs$core$async47630(p__$1,ch__$1,meta47631));
});

}

return (new cljs.core.async.t_cljs$core$async47630(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47634 = arguments.length;
switch (G__47634) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46465__auto___49169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___49169,out){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___49169,out){
return (function (state_47655){
var state_val_47656 = (state_47655[(1)]);
if((state_val_47656 === (7))){
var inst_47651 = (state_47655[(2)]);
var state_47655__$1 = state_47655;
var statearr_47657_49170 = state_47655__$1;
(statearr_47657_49170[(2)] = inst_47651);

(statearr_47657_49170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (1))){
var state_47655__$1 = state_47655;
var statearr_47658_49171 = state_47655__$1;
(statearr_47658_49171[(2)] = null);

(statearr_47658_49171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (4))){
var inst_47637 = (state_47655[(7)]);
var inst_47637__$1 = (state_47655[(2)]);
var inst_47638 = (inst_47637__$1 == null);
var state_47655__$1 = (function (){var statearr_47659 = state_47655;
(statearr_47659[(7)] = inst_47637__$1);

return statearr_47659;
})();
if(cljs.core.truth_(inst_47638)){
var statearr_47660_49172 = state_47655__$1;
(statearr_47660_49172[(1)] = (5));

} else {
var statearr_47661_49173 = state_47655__$1;
(statearr_47661_49173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (6))){
var inst_47637 = (state_47655[(7)]);
var inst_47642 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47637) : p.call(null,inst_47637));
var state_47655__$1 = state_47655;
if(cljs.core.truth_(inst_47642)){
var statearr_47662_49174 = state_47655__$1;
(statearr_47662_49174[(1)] = (8));

} else {
var statearr_47663_49175 = state_47655__$1;
(statearr_47663_49175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (3))){
var inst_47653 = (state_47655[(2)]);
var state_47655__$1 = state_47655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47655__$1,inst_47653);
} else {
if((state_val_47656 === (2))){
var state_47655__$1 = state_47655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47655__$1,(4),ch);
} else {
if((state_val_47656 === (11))){
var inst_47645 = (state_47655[(2)]);
var state_47655__$1 = state_47655;
var statearr_47664_49176 = state_47655__$1;
(statearr_47664_49176[(2)] = inst_47645);

(statearr_47664_49176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (9))){
var state_47655__$1 = state_47655;
var statearr_47665_49177 = state_47655__$1;
(statearr_47665_49177[(2)] = null);

(statearr_47665_49177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (5))){
var inst_47640 = cljs.core.async.close_BANG_(out);
var state_47655__$1 = state_47655;
var statearr_47666_49178 = state_47655__$1;
(statearr_47666_49178[(2)] = inst_47640);

(statearr_47666_49178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (10))){
var inst_47648 = (state_47655[(2)]);
var state_47655__$1 = (function (){var statearr_47667 = state_47655;
(statearr_47667[(8)] = inst_47648);

return statearr_47667;
})();
var statearr_47668_49183 = state_47655__$1;
(statearr_47668_49183[(2)] = null);

(statearr_47668_49183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (8))){
var inst_47637 = (state_47655[(7)]);
var state_47655__$1 = state_47655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47655__$1,(11),out,inst_47637);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___49169,out))
;
return ((function (switch__46366__auto__,c__46465__auto___49169,out){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_47669 = [null,null,null,null,null,null,null,null,null];
(statearr_47669[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_47669[(1)] = (1));

return statearr_47669;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_47655){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47655);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47670){if((e47670 instanceof Object)){
var ex__46370__auto__ = e47670;
var statearr_47671_49192 = state_47655;
(statearr_47671_49192[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49194 = state_47655;
state_47655 = G__49194;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_47655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_47655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___49169,out))
})();
var state__46467__auto__ = (function (){var statearr_47672 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47672[(6)] = c__46465__auto___49169);

return statearr_47672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___49169,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47674 = arguments.length;
switch (G__47674) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto__){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto__){
return (function (state_47736){
var state_val_47737 = (state_47736[(1)]);
if((state_val_47737 === (7))){
var inst_47732 = (state_47736[(2)]);
var state_47736__$1 = state_47736;
var statearr_47738_49202 = state_47736__$1;
(statearr_47738_49202[(2)] = inst_47732);

(statearr_47738_49202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (20))){
var inst_47702 = (state_47736[(7)]);
var inst_47713 = (state_47736[(2)]);
var inst_47714 = cljs.core.next(inst_47702);
var inst_47688 = inst_47714;
var inst_47689 = null;
var inst_47690 = (0);
var inst_47691 = (0);
var state_47736__$1 = (function (){var statearr_47739 = state_47736;
(statearr_47739[(8)] = inst_47689);

(statearr_47739[(9)] = inst_47691);

(statearr_47739[(10)] = inst_47690);

(statearr_47739[(11)] = inst_47688);

(statearr_47739[(12)] = inst_47713);

return statearr_47739;
})();
var statearr_47740_49204 = state_47736__$1;
(statearr_47740_49204[(2)] = null);

(statearr_47740_49204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (1))){
var state_47736__$1 = state_47736;
var statearr_47741_49205 = state_47736__$1;
(statearr_47741_49205[(2)] = null);

(statearr_47741_49205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (4))){
var inst_47677 = (state_47736[(13)]);
var inst_47677__$1 = (state_47736[(2)]);
var inst_47678 = (inst_47677__$1 == null);
var state_47736__$1 = (function (){var statearr_47742 = state_47736;
(statearr_47742[(13)] = inst_47677__$1);

return statearr_47742;
})();
if(cljs.core.truth_(inst_47678)){
var statearr_47743_49208 = state_47736__$1;
(statearr_47743_49208[(1)] = (5));

} else {
var statearr_47744_49209 = state_47736__$1;
(statearr_47744_49209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (15))){
var state_47736__$1 = state_47736;
var statearr_47748_49210 = state_47736__$1;
(statearr_47748_49210[(2)] = null);

(statearr_47748_49210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (21))){
var state_47736__$1 = state_47736;
var statearr_47749_49211 = state_47736__$1;
(statearr_47749_49211[(2)] = null);

(statearr_47749_49211[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (13))){
var inst_47689 = (state_47736[(8)]);
var inst_47691 = (state_47736[(9)]);
var inst_47690 = (state_47736[(10)]);
var inst_47688 = (state_47736[(11)]);
var inst_47698 = (state_47736[(2)]);
var inst_47699 = (inst_47691 + (1));
var tmp47745 = inst_47689;
var tmp47746 = inst_47690;
var tmp47747 = inst_47688;
var inst_47688__$1 = tmp47747;
var inst_47689__$1 = tmp47745;
var inst_47690__$1 = tmp47746;
var inst_47691__$1 = inst_47699;
var state_47736__$1 = (function (){var statearr_47750 = state_47736;
(statearr_47750[(8)] = inst_47689__$1);

(statearr_47750[(14)] = inst_47698);

(statearr_47750[(9)] = inst_47691__$1);

(statearr_47750[(10)] = inst_47690__$1);

(statearr_47750[(11)] = inst_47688__$1);

return statearr_47750;
})();
var statearr_47751_49214 = state_47736__$1;
(statearr_47751_49214[(2)] = null);

(statearr_47751_49214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (22))){
var state_47736__$1 = state_47736;
var statearr_47752_49215 = state_47736__$1;
(statearr_47752_49215[(2)] = null);

(statearr_47752_49215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (6))){
var inst_47677 = (state_47736[(13)]);
var inst_47686 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47677) : f.call(null,inst_47677));
var inst_47687 = cljs.core.seq(inst_47686);
var inst_47688 = inst_47687;
var inst_47689 = null;
var inst_47690 = (0);
var inst_47691 = (0);
var state_47736__$1 = (function (){var statearr_47753 = state_47736;
(statearr_47753[(8)] = inst_47689);

(statearr_47753[(9)] = inst_47691);

(statearr_47753[(10)] = inst_47690);

(statearr_47753[(11)] = inst_47688);

return statearr_47753;
})();
var statearr_47754_49217 = state_47736__$1;
(statearr_47754_49217[(2)] = null);

(statearr_47754_49217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (17))){
var inst_47702 = (state_47736[(7)]);
var inst_47706 = cljs.core.chunk_first(inst_47702);
var inst_47707 = cljs.core.chunk_rest(inst_47702);
var inst_47708 = cljs.core.count(inst_47706);
var inst_47688 = inst_47707;
var inst_47689 = inst_47706;
var inst_47690 = inst_47708;
var inst_47691 = (0);
var state_47736__$1 = (function (){var statearr_47755 = state_47736;
(statearr_47755[(8)] = inst_47689);

(statearr_47755[(9)] = inst_47691);

(statearr_47755[(10)] = inst_47690);

(statearr_47755[(11)] = inst_47688);

return statearr_47755;
})();
var statearr_47756_49218 = state_47736__$1;
(statearr_47756_49218[(2)] = null);

(statearr_47756_49218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (3))){
var inst_47734 = (state_47736[(2)]);
var state_47736__$1 = state_47736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47736__$1,inst_47734);
} else {
if((state_val_47737 === (12))){
var inst_47722 = (state_47736[(2)]);
var state_47736__$1 = state_47736;
var statearr_47757_49222 = state_47736__$1;
(statearr_47757_49222[(2)] = inst_47722);

(statearr_47757_49222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (2))){
var state_47736__$1 = state_47736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47736__$1,(4),in$);
} else {
if((state_val_47737 === (23))){
var inst_47730 = (state_47736[(2)]);
var state_47736__$1 = state_47736;
var statearr_47758_49223 = state_47736__$1;
(statearr_47758_49223[(2)] = inst_47730);

(statearr_47758_49223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (19))){
var inst_47717 = (state_47736[(2)]);
var state_47736__$1 = state_47736;
var statearr_47759_49224 = state_47736__$1;
(statearr_47759_49224[(2)] = inst_47717);

(statearr_47759_49224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (11))){
var inst_47702 = (state_47736[(7)]);
var inst_47688 = (state_47736[(11)]);
var inst_47702__$1 = cljs.core.seq(inst_47688);
var state_47736__$1 = (function (){var statearr_47760 = state_47736;
(statearr_47760[(7)] = inst_47702__$1);

return statearr_47760;
})();
if(inst_47702__$1){
var statearr_47761_49225 = state_47736__$1;
(statearr_47761_49225[(1)] = (14));

} else {
var statearr_47762_49226 = state_47736__$1;
(statearr_47762_49226[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (9))){
var inst_47724 = (state_47736[(2)]);
var inst_47725 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47736__$1 = (function (){var statearr_47763 = state_47736;
(statearr_47763[(15)] = inst_47724);

return statearr_47763;
})();
if(cljs.core.truth_(inst_47725)){
var statearr_47764_49227 = state_47736__$1;
(statearr_47764_49227[(1)] = (21));

} else {
var statearr_47765_49228 = state_47736__$1;
(statearr_47765_49228[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (5))){
var inst_47680 = cljs.core.async.close_BANG_(out);
var state_47736__$1 = state_47736;
var statearr_47766_49229 = state_47736__$1;
(statearr_47766_49229[(2)] = inst_47680);

(statearr_47766_49229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (14))){
var inst_47702 = (state_47736[(7)]);
var inst_47704 = cljs.core.chunked_seq_QMARK_(inst_47702);
var state_47736__$1 = state_47736;
if(inst_47704){
var statearr_47767_49230 = state_47736__$1;
(statearr_47767_49230[(1)] = (17));

} else {
var statearr_47768_49231 = state_47736__$1;
(statearr_47768_49231[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (16))){
var inst_47720 = (state_47736[(2)]);
var state_47736__$1 = state_47736;
var statearr_47769_49232 = state_47736__$1;
(statearr_47769_49232[(2)] = inst_47720);

(statearr_47769_49232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (10))){
var inst_47689 = (state_47736[(8)]);
var inst_47691 = (state_47736[(9)]);
var inst_47696 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47689,inst_47691);
var state_47736__$1 = state_47736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47736__$1,(13),out,inst_47696);
} else {
if((state_val_47737 === (18))){
var inst_47702 = (state_47736[(7)]);
var inst_47711 = cljs.core.first(inst_47702);
var state_47736__$1 = state_47736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47736__$1,(20),out,inst_47711);
} else {
if((state_val_47737 === (8))){
var inst_47691 = (state_47736[(9)]);
var inst_47690 = (state_47736[(10)]);
var inst_47693 = (inst_47691 < inst_47690);
var inst_47694 = inst_47693;
var state_47736__$1 = state_47736;
if(cljs.core.truth_(inst_47694)){
var statearr_47770_49247 = state_47736__$1;
(statearr_47770_49247[(1)] = (10));

} else {
var statearr_47771_49248 = state_47736__$1;
(statearr_47771_49248[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto__))
;
return ((function (switch__46366__auto__,c__46465__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46367__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46367__auto____0 = (function (){
var statearr_47772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47772[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46367__auto__);

(statearr_47772[(1)] = (1));

return statearr_47772;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46367__auto____1 = (function (state_47736){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47736);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47773){if((e47773 instanceof Object)){
var ex__46370__auto__ = e47773;
var statearr_47774_49254 = state_47736;
(statearr_47774_49254[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49260 = state_47736;
state_47736 = G__49260;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46367__auto__ = function(state_47736){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46367__auto____1.call(this,state_47736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46367__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46367__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto__))
})();
var state__46467__auto__ = (function (){var statearr_47775 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47775[(6)] = c__46465__auto__);

return statearr_47775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto__))
);

return c__46465__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47777 = arguments.length;
switch (G__47777) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47779 = arguments.length;
switch (G__47779) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47781 = arguments.length;
switch (G__47781) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46465__auto___49270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___49270,out){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___49270,out){
return (function (state_47805){
var state_val_47806 = (state_47805[(1)]);
if((state_val_47806 === (7))){
var inst_47800 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47807_49278 = state_47805__$1;
(statearr_47807_49278[(2)] = inst_47800);

(statearr_47807_49278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (1))){
var inst_47782 = null;
var state_47805__$1 = (function (){var statearr_47808 = state_47805;
(statearr_47808[(7)] = inst_47782);

return statearr_47808;
})();
var statearr_47809_49279 = state_47805__$1;
(statearr_47809_49279[(2)] = null);

(statearr_47809_49279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (4))){
var inst_47785 = (state_47805[(8)]);
var inst_47785__$1 = (state_47805[(2)]);
var inst_47786 = (inst_47785__$1 == null);
var inst_47787 = cljs.core.not(inst_47786);
var state_47805__$1 = (function (){var statearr_47810 = state_47805;
(statearr_47810[(8)] = inst_47785__$1);

return statearr_47810;
})();
if(inst_47787){
var statearr_47811_49291 = state_47805__$1;
(statearr_47811_49291[(1)] = (5));

} else {
var statearr_47812_49292 = state_47805__$1;
(statearr_47812_49292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (6))){
var state_47805__$1 = state_47805;
var statearr_47813_49296 = state_47805__$1;
(statearr_47813_49296[(2)] = null);

(statearr_47813_49296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (3))){
var inst_47802 = (state_47805[(2)]);
var inst_47803 = cljs.core.async.close_BANG_(out);
var state_47805__$1 = (function (){var statearr_47814 = state_47805;
(statearr_47814[(9)] = inst_47802);

return statearr_47814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47805__$1,inst_47803);
} else {
if((state_val_47806 === (2))){
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47805__$1,(4),ch);
} else {
if((state_val_47806 === (11))){
var inst_47785 = (state_47805[(8)]);
var inst_47794 = (state_47805[(2)]);
var inst_47782 = inst_47785;
var state_47805__$1 = (function (){var statearr_47815 = state_47805;
(statearr_47815[(10)] = inst_47794);

(statearr_47815[(7)] = inst_47782);

return statearr_47815;
})();
var statearr_47816_49297 = state_47805__$1;
(statearr_47816_49297[(2)] = null);

(statearr_47816_49297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (9))){
var inst_47785 = (state_47805[(8)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47805__$1,(11),out,inst_47785);
} else {
if((state_val_47806 === (5))){
var inst_47785 = (state_47805[(8)]);
var inst_47782 = (state_47805[(7)]);
var inst_47789 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47785,inst_47782);
var state_47805__$1 = state_47805;
if(inst_47789){
var statearr_47818_49300 = state_47805__$1;
(statearr_47818_49300[(1)] = (8));

} else {
var statearr_47819_49302 = state_47805__$1;
(statearr_47819_49302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (10))){
var inst_47797 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47820_49314 = state_47805__$1;
(statearr_47820_49314[(2)] = inst_47797);

(statearr_47820_49314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (8))){
var inst_47782 = (state_47805[(7)]);
var tmp47817 = inst_47782;
var inst_47782__$1 = tmp47817;
var state_47805__$1 = (function (){var statearr_47821 = state_47805;
(statearr_47821[(7)] = inst_47782__$1);

return statearr_47821;
})();
var statearr_47822_49318 = state_47805__$1;
(statearr_47822_49318[(2)] = null);

(statearr_47822_49318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___49270,out))
;
return ((function (switch__46366__auto__,c__46465__auto___49270,out){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_47823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47823[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_47823[(1)] = (1));

return statearr_47823;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_47805){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47805);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47824){if((e47824 instanceof Object)){
var ex__46370__auto__ = e47824;
var statearr_47825_49340 = state_47805;
(statearr_47825_49340[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49350 = state_47805;
state_47805 = G__49350;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_47805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_47805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___49270,out))
})();
var state__46467__auto__ = (function (){var statearr_47826 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47826[(6)] = c__46465__auto___49270);

return statearr_47826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___49270,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47828 = arguments.length;
switch (G__47828) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46465__auto___49386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___49386,out){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___49386,out){
return (function (state_47866){
var state_val_47867 = (state_47866[(1)]);
if((state_val_47867 === (7))){
var inst_47862 = (state_47866[(2)]);
var state_47866__$1 = state_47866;
var statearr_47868_49390 = state_47866__$1;
(statearr_47868_49390[(2)] = inst_47862);

(statearr_47868_49390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47867 === (1))){
var inst_47829 = (new Array(n));
var inst_47830 = inst_47829;
var inst_47831 = (0);
var state_47866__$1 = (function (){var statearr_47869 = state_47866;
(statearr_47869[(7)] = inst_47830);

(statearr_47869[(8)] = inst_47831);

return statearr_47869;
})();
var statearr_47870_49398 = state_47866__$1;
(statearr_47870_49398[(2)] = null);

(statearr_47870_49398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47867 === (4))){
var inst_47834 = (state_47866[(9)]);
var inst_47834__$1 = (state_47866[(2)]);
var inst_47835 = (inst_47834__$1 == null);
var inst_47836 = cljs.core.not(inst_47835);
var state_47866__$1 = (function (){var statearr_47871 = state_47866;
(statearr_47871[(9)] = inst_47834__$1);

return statearr_47871;
})();
if(inst_47836){
var statearr_47872_49414 = state_47866__$1;
(statearr_47872_49414[(1)] = (5));

} else {
var statearr_47873_49415 = state_47866__$1;
(statearr_47873_49415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47867 === (15))){
var inst_47856 = (state_47866[(2)]);
var state_47866__$1 = state_47866;
var statearr_47874_49424 = state_47866__$1;
(statearr_47874_49424[(2)] = inst_47856);

(statearr_47874_49424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47867 === (13))){
var state_47866__$1 = state_47866;
var statearr_47875_49428 = state_47866__$1;
(statearr_47875_49428[(2)] = null);

(statearr_47875_49428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47867 === (6))){
var inst_47831 = (state_47866[(8)]);
var inst_47852 = (inst_47831 > (0));
var state_47866__$1 = state_47866;
if(cljs.core.truth_(inst_47852)){
var statearr_47876_49429 = state_47866__$1;
(statearr_47876_49429[(1)] = (12));

} else {
var statearr_47877_49433 = state_47866__$1;
(statearr_47877_49433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47867 === (3))){
var inst_47864 = (state_47866[(2)]);
var state_47866__$1 = state_47866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47866__$1,inst_47864);
} else {
if((state_val_47867 === (12))){
var inst_47830 = (state_47866[(7)]);
var inst_47854 = cljs.core.vec(inst_47830);
var state_47866__$1 = state_47866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47866__$1,(15),out,inst_47854);
} else {
if((state_val_47867 === (2))){
var state_47866__$1 = state_47866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47866__$1,(4),ch);
} else {
if((state_val_47867 === (11))){
var inst_47846 = (state_47866[(2)]);
var inst_47847 = (new Array(n));
var inst_47830 = inst_47847;
var inst_47831 = (0);
var state_47866__$1 = (function (){var statearr_47878 = state_47866;
(statearr_47878[(7)] = inst_47830);

(statearr_47878[(8)] = inst_47831);

(statearr_47878[(10)] = inst_47846);

return statearr_47878;
})();
var statearr_47879_49444 = state_47866__$1;
(statearr_47879_49444[(2)] = null);

(statearr_47879_49444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47867 === (9))){
var inst_47830 = (state_47866[(7)]);
var inst_47844 = cljs.core.vec(inst_47830);
var state_47866__$1 = state_47866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47866__$1,(11),out,inst_47844);
} else {
if((state_val_47867 === (5))){
var inst_47834 = (state_47866[(9)]);
var inst_47830 = (state_47866[(7)]);
var inst_47831 = (state_47866[(8)]);
var inst_47839 = (state_47866[(11)]);
var inst_47838 = (inst_47830[inst_47831] = inst_47834);
var inst_47839__$1 = (inst_47831 + (1));
var inst_47840 = (inst_47839__$1 < n);
var state_47866__$1 = (function (){var statearr_47880 = state_47866;
(statearr_47880[(11)] = inst_47839__$1);

(statearr_47880[(12)] = inst_47838);

return statearr_47880;
})();
if(cljs.core.truth_(inst_47840)){
var statearr_47881_49445 = state_47866__$1;
(statearr_47881_49445[(1)] = (8));

} else {
var statearr_47882_49446 = state_47866__$1;
(statearr_47882_49446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47867 === (14))){
var inst_47859 = (state_47866[(2)]);
var inst_47860 = cljs.core.async.close_BANG_(out);
var state_47866__$1 = (function (){var statearr_47884 = state_47866;
(statearr_47884[(13)] = inst_47859);

return statearr_47884;
})();
var statearr_47885_49447 = state_47866__$1;
(statearr_47885_49447[(2)] = inst_47860);

(statearr_47885_49447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47867 === (10))){
var inst_47850 = (state_47866[(2)]);
var state_47866__$1 = state_47866;
var statearr_47886_49457 = state_47866__$1;
(statearr_47886_49457[(2)] = inst_47850);

(statearr_47886_49457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47867 === (8))){
var inst_47830 = (state_47866[(7)]);
var inst_47839 = (state_47866[(11)]);
var tmp47883 = inst_47830;
var inst_47830__$1 = tmp47883;
var inst_47831 = inst_47839;
var state_47866__$1 = (function (){var statearr_47887 = state_47866;
(statearr_47887[(7)] = inst_47830__$1);

(statearr_47887[(8)] = inst_47831);

return statearr_47887;
})();
var statearr_47888_49465 = state_47866__$1;
(statearr_47888_49465[(2)] = null);

(statearr_47888_49465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___49386,out))
;
return ((function (switch__46366__auto__,c__46465__auto___49386,out){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_47889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47889[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_47889[(1)] = (1));

return statearr_47889;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_47866){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47866);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47890){if((e47890 instanceof Object)){
var ex__46370__auto__ = e47890;
var statearr_47891_49491 = state_47866;
(statearr_47891_49491[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49493 = state_47866;
state_47866 = G__49493;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_47866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_47866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___49386,out))
})();
var state__46467__auto__ = (function (){var statearr_47892 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47892[(6)] = c__46465__auto___49386);

return statearr_47892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___49386,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47894 = arguments.length;
switch (G__47894) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46465__auto___49497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46465__auto___49497,out){
return (function (){
var f__46466__auto__ = (function (){var switch__46366__auto__ = ((function (c__46465__auto___49497,out){
return (function (state_47936){
var state_val_47937 = (state_47936[(1)]);
if((state_val_47937 === (7))){
var inst_47932 = (state_47936[(2)]);
var state_47936__$1 = state_47936;
var statearr_47938_49502 = state_47936__$1;
(statearr_47938_49502[(2)] = inst_47932);

(statearr_47938_49502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47937 === (1))){
var inst_47895 = [];
var inst_47896 = inst_47895;
var inst_47897 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47936__$1 = (function (){var statearr_47939 = state_47936;
(statearr_47939[(7)] = inst_47896);

(statearr_47939[(8)] = inst_47897);

return statearr_47939;
})();
var statearr_47940_49512 = state_47936__$1;
(statearr_47940_49512[(2)] = null);

(statearr_47940_49512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47937 === (4))){
var inst_47900 = (state_47936[(9)]);
var inst_47900__$1 = (state_47936[(2)]);
var inst_47901 = (inst_47900__$1 == null);
var inst_47902 = cljs.core.not(inst_47901);
var state_47936__$1 = (function (){var statearr_47941 = state_47936;
(statearr_47941[(9)] = inst_47900__$1);

return statearr_47941;
})();
if(inst_47902){
var statearr_47942_49514 = state_47936__$1;
(statearr_47942_49514[(1)] = (5));

} else {
var statearr_47943_49515 = state_47936__$1;
(statearr_47943_49515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47937 === (15))){
var inst_47926 = (state_47936[(2)]);
var state_47936__$1 = state_47936;
var statearr_47944_49516 = state_47936__$1;
(statearr_47944_49516[(2)] = inst_47926);

(statearr_47944_49516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47937 === (13))){
var state_47936__$1 = state_47936;
var statearr_47945_49517 = state_47936__$1;
(statearr_47945_49517[(2)] = null);

(statearr_47945_49517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47937 === (6))){
var inst_47896 = (state_47936[(7)]);
var inst_47921 = inst_47896.length;
var inst_47922 = (inst_47921 > (0));
var state_47936__$1 = state_47936;
if(cljs.core.truth_(inst_47922)){
var statearr_47946_49524 = state_47936__$1;
(statearr_47946_49524[(1)] = (12));

} else {
var statearr_47947_49525 = state_47936__$1;
(statearr_47947_49525[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47937 === (3))){
var inst_47934 = (state_47936[(2)]);
var state_47936__$1 = state_47936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47936__$1,inst_47934);
} else {
if((state_val_47937 === (12))){
var inst_47896 = (state_47936[(7)]);
var inst_47924 = cljs.core.vec(inst_47896);
var state_47936__$1 = state_47936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47936__$1,(15),out,inst_47924);
} else {
if((state_val_47937 === (2))){
var state_47936__$1 = state_47936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47936__$1,(4),ch);
} else {
if((state_val_47937 === (11))){
var inst_47904 = (state_47936[(10)]);
var inst_47900 = (state_47936[(9)]);
var inst_47914 = (state_47936[(2)]);
var inst_47915 = [];
var inst_47916 = inst_47915.push(inst_47900);
var inst_47896 = inst_47915;
var inst_47897 = inst_47904;
var state_47936__$1 = (function (){var statearr_47948 = state_47936;
(statearr_47948[(7)] = inst_47896);

(statearr_47948[(11)] = inst_47914);

(statearr_47948[(8)] = inst_47897);

(statearr_47948[(12)] = inst_47916);

return statearr_47948;
})();
var statearr_47949_49530 = state_47936__$1;
(statearr_47949_49530[(2)] = null);

(statearr_47949_49530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47937 === (9))){
var inst_47896 = (state_47936[(7)]);
var inst_47912 = cljs.core.vec(inst_47896);
var state_47936__$1 = state_47936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47936__$1,(11),out,inst_47912);
} else {
if((state_val_47937 === (5))){
var inst_47904 = (state_47936[(10)]);
var inst_47900 = (state_47936[(9)]);
var inst_47897 = (state_47936[(8)]);
var inst_47904__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47900) : f.call(null,inst_47900));
var inst_47905 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47904__$1,inst_47897);
var inst_47906 = cljs.core.keyword_identical_QMARK_(inst_47897,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47907 = ((inst_47905) || (inst_47906));
var state_47936__$1 = (function (){var statearr_47950 = state_47936;
(statearr_47950[(10)] = inst_47904__$1);

return statearr_47950;
})();
if(cljs.core.truth_(inst_47907)){
var statearr_47951_49536 = state_47936__$1;
(statearr_47951_49536[(1)] = (8));

} else {
var statearr_47952_49537 = state_47936__$1;
(statearr_47952_49537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47937 === (14))){
var inst_47929 = (state_47936[(2)]);
var inst_47930 = cljs.core.async.close_BANG_(out);
var state_47936__$1 = (function (){var statearr_47954 = state_47936;
(statearr_47954[(13)] = inst_47929);

return statearr_47954;
})();
var statearr_47955_49538 = state_47936__$1;
(statearr_47955_49538[(2)] = inst_47930);

(statearr_47955_49538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47937 === (10))){
var inst_47919 = (state_47936[(2)]);
var state_47936__$1 = state_47936;
var statearr_47956_49542 = state_47936__$1;
(statearr_47956_49542[(2)] = inst_47919);

(statearr_47956_49542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47937 === (8))){
var inst_47896 = (state_47936[(7)]);
var inst_47904 = (state_47936[(10)]);
var inst_47900 = (state_47936[(9)]);
var inst_47909 = inst_47896.push(inst_47900);
var tmp47953 = inst_47896;
var inst_47896__$1 = tmp47953;
var inst_47897 = inst_47904;
var state_47936__$1 = (function (){var statearr_47957 = state_47936;
(statearr_47957[(14)] = inst_47909);

(statearr_47957[(7)] = inst_47896__$1);

(statearr_47957[(8)] = inst_47897);

return statearr_47957;
})();
var statearr_47958_49562 = state_47936__$1;
(statearr_47958_49562[(2)] = null);

(statearr_47958_49562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46465__auto___49497,out))
;
return ((function (switch__46366__auto__,c__46465__auto___49497,out){
return (function() {
var cljs$core$async$state_machine__46367__auto__ = null;
var cljs$core$async$state_machine__46367__auto____0 = (function (){
var statearr_47959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47959[(0)] = cljs$core$async$state_machine__46367__auto__);

(statearr_47959[(1)] = (1));

return statearr_47959;
});
var cljs$core$async$state_machine__46367__auto____1 = (function (state_47936){
while(true){
var ret_value__46368__auto__ = (function (){try{while(true){
var result__46369__auto__ = switch__46366__auto__(state_47936);
if(cljs.core.keyword_identical_QMARK_(result__46369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46369__auto__;
}
break;
}
}catch (e47960){if((e47960 instanceof Object)){
var ex__46370__auto__ = e47960;
var statearr_47961_49566 = state_47936;
(statearr_47961_49566[(5)] = ex__46370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49568 = state_47936;
state_47936 = G__49568;
continue;
} else {
return ret_value__46368__auto__;
}
break;
}
});
cljs$core$async$state_machine__46367__auto__ = function(state_47936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46367__auto____1.call(this,state_47936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46367__auto____0;
cljs$core$async$state_machine__46367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46367__auto____1;
return cljs$core$async$state_machine__46367__auto__;
})()
;})(switch__46366__auto__,c__46465__auto___49497,out))
})();
var state__46467__auto__ = (function (){var statearr_47962 = (f__46466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46466__auto__.cljs$core$IFn$_invoke$arity$0() : f__46466__auto__.call(null));
(statearr_47962[(6)] = c__46465__auto___49497);

return statearr_47962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46467__auto__);
});})(c__46465__auto___49497,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
