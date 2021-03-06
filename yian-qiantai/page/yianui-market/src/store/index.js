import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import app from './modules/app'
import tab from './modules/tab'
import iframe from './modules/iframe'
import user from './modules/user'


const store = new vuex.Store({
    modules: {
        app: app,
        tab: tab,
        //iframe: iframe,
        user: user,

    }
})

export default store