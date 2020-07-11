(ns lobsterwatch.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::lobsters
 (fn [db]
   (:lobsters db)))

(re-frame/reg-sub
 ::window
 (fn [{:keys [window]}]
   window))
