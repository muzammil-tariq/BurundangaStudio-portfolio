//
// store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        rainbowColors: [
            '#9400D3',
            '#4B0082',
            '#0000FF',
            '#00FF00',
            '#FFFF00',
            '#FF7F00',
            '#FF0000'
        ],
        files: []
    },
    actions: {
        setFiles(context, files) { context.commit('SET_FILES', files) }
    },
    mutations: {
        SET_FILES: (state, files) => { state.files = files }
    }
})
