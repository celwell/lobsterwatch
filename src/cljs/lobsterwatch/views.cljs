(ns lobsterwatch.views
  (:require [re-frame.core :as rf]
            [lobsterwatch.util :as util]
            [lobsterwatch.subs :as subs]
            [lobsterwatch.events :as events]
            ["react-konva" :as rk]))

(defn canvas* []
  (let [lobsters (rf/subscribe [::subs/lobsters])
        window (rf/subscribe [::subs/window])]
    (fn []
      [:> rk/Stage {:class "stage"
                    :width (:width @window)
                    :height (:height @window)}
       [:> rk/Layer
        (doall
         (for [{:keys [x y name] :as lobster} @lobsters]
           ^{:key name}
           [:> rk/Circle {:x (int (- x 10))
                          :y (int (- y 10))
                          :radius 10
                          :fill "rgba(200,0,0,1)"
                          ;; :stroke "black"
                          ;; :strokeWidth 1
                          }]))
        ]])))

(defn anim-loop
  []
  (rf/dispatch [::events/anim-step])
  (js/requestAnimationFrame anim-loop))

(def canvas
  (with-meta canvas*
    {:component-did-mount
     (fn [_this]
       (js/requestAnimationFrame anim-loop))}))

(defn main-panel []
  (fn []
    [:div
     [canvas]]))
