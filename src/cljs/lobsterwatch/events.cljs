(ns lobsterwatch.events
  (:require [re-frame.core :as rf]
            [lobsterwatch.util :as util]
            [lobsterwatch.db :as db]
            [clojure.string :as s]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-fx
 ::window-resized
 (fn [{:keys [db]}]
   {:db (-> db
            (assoc-in [:window :width] (.-innerWidth js/window))
            (assoc-in [:window :height] (.-innerHeight js/window)))}))

(defn velocity
  [{:keys [x y vx vy] :as lobster}]
  (-> lobster
      (update :x + vx)
      (update :y + vy)))

(rf/reg-event-db
 ::anim-step
 (fn [db]
   (update-in db [:lobsters] #(map velocity %))))
