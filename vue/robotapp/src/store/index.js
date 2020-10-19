import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        robot: {
            joints: [
                {
                    id: 0,
                    axisX: 10,
                    axisY: 10,
                    axisZ: 10,
                }, {
                    id: 1,
                    axisX: 30,
                    axisY: 30,
                    axisZ: 30,
                }, {
                    id: 2,
                    axisX: 0,
                    axisY: 0,
                    axisZ: 0,
                }
            ],
            tool: {},
        },
        tools: {
            parts: [{
                    finger1: true,
                    finger2: true,
                    finger3: true,
                    finger4: true,
                    finger5: true,
                },]
        },
    },
    mutations: {},
    actions: {},
    modules: {}
});
//# sourceMappingURL=index.js.map