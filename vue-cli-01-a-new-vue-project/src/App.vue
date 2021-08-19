<template>
  <section>
    <header><h1>My Friends</h1></header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phoneno"
        :email-address="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
        @delete="deleteContact">
      </friend-contact>
    </ul>
    <header><h1>Restaurants Listing</h1></header>
    <new-food @add-foodItem="addFoodItem"></new-food>
    <ul>
      <food-type v-for="food in foods" :key="food.id"
      :id="food.id"
      :type="food.type"
      :name="food.name"
      :price="food.price"
      :is-favourite="food.isFavouriteFood"
      @togglefavourite-food="toggleFoodStatus"
      @delete="deleteFoodItem">
      </food-type>
    </ul>
  </section>
</template>

<script>
import FoodType from './components/FoodType.vue';
import NewFood from './components/NewFood.vue';
//import NewFriend from './components/NewFriend.vue';
export default {
  components: { FoodType, NewFood },
  //components: { NewFriend },
  data() {
    return {
      friends: [
        {
          id: "std1",
          name: "Peter",
          phoneno: "8945677566",
          email: "peter@gmail.com",
          isFavourite: true,
        },
        {
          id: "std2",
          name: "John",
          phoneno: "89412456322",
          email: "john@gmail.com",
          isFavourite: false,
        },
      ],
      foods: [
        {
          id: 'f1',
          type: "Chinese",
          name: "Noodles",
          price: "200",
          isFavouriteFood: true,
        },
        {
          id: 'f2',
          type: "South Indian",
          name: "Dosha",
          price: "150",
          isFavouriteFood: false,
        }

      ]
    };
  },
  methods: {
    toggleFavouriteStatus(friendID){
      const identifiedFriend = this.friends.find(
        friend => friend.id === friendID
      );
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
    },
    addContact(name,phone,email){
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phoneno: phone,
        email: email,
        isFavourite: false
      }
      this.friends.push(newFriendContact);
    },
    deleteContact(friendID){
      this.friends = this.friends.filter((friend) => friend.id!==friendID);
    },
    toggleFoodStatus(foodId){
      const identifiedFood = this.foods.find(
        food => food.id === foodId
      );
      identifiedFood.isFavouriteFood = !identifiedFood.isFavouriteFood;
    },
    addFoodItem(type,name,price){
      const newFoodItem = {
        id: new Date().toISOString(),
        type: type,
        name: name,
        price: price,
        isFavouriteFood: false
      }
      this.foods.push(newFoodItem);
    },
    deleteFoodItem(foodId){
      this.foods = this.foods.filter((food) => food.id !== foodId);
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
