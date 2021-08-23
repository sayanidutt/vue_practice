import { createRouter,createWebHistory } from "vue-router";

import FriendList from './components/FriendList.vue';
import FoodList from './components/FoodList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', redirect: '/friends'},
        { path:'/friends',component:FriendList },
        { path:'/foods',component: FoodList }
    ]
});

export default router;