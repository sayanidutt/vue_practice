import { createStore } from 'vuex';

import rootmutations from './mutations.js';
import rootActions from './actions.js';
import rootgetters from './getters.js';
import counterModule from './counter/index.js';

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: rootmutations,
    actions: rootActions,
    getters: rootgetters,
});

export default store;