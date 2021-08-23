import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
//import FriendContact from './components/FriendContact.vue';
//import NewFriend from './components/NewFriend.vue';
//import FoodType from './components/FoodType.vue';

const app = createApp(App);

app.use(router);

//app.component('friend-contact',FriendContact);
//app.component('new-friend',NewFriend);
//app.component('food-type',FoodType);

app.mount('#app');
