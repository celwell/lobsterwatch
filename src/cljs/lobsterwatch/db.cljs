(ns lobsterwatch.db)

(def default-db
  {:lobsters [{:name "Fred" :x 50 :y 400 :vx 0.5 :vy -0.1}
              {:name "Thomas" :x 150 :y 500 :vx 0.1 :vy -0.2}
              {:name "Jeff" :x 20 :y 300 :vx 0.01 :vy -0.02}]
   :window {:width nil
            :height nil}})
