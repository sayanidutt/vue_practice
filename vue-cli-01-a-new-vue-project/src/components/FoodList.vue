<template>
  <section>
    <header><h1>Restaurants Listing</h1></header>
    <new-food @add-foodItem="addFoodItem"></new-food>
    <ul>
      <food-type
        v-for="food in foods"
        :key="food.id"
        :id="food.id"
        :type="food.type"
        :name="food.name"
        :price="food.price"
        :is-favourite="food.isFavouriteFood"
        @togglefavourite-food="toggleFoodStatus"
        @delete="deleteFoodItem"
      >
      </food-type>
    </ul>
  </section>
</template>

<script>
import FoodType from './FoodType.vue';
import NewFood from './NewFood.vue';
export default {
    components: {
        FoodType,
        NewFood
    },
  data() {
    return {
      foods: [
        {
          id: "f1",
          type: "Chinese",
          name: "Noodles",
          price: "200",
          isFavouriteFood: true,
        },
        {
          id: "f2",
          type: "South Indian",
          name: "Dosha",
          price: "150",
          isFavouriteFood: false,
        },
      ],
    };
  },
  methods: {
    toggleFoodStatus(foodId) {
      const identifiedFood = this.foods.find((food) => food.id === foodId);
      identifiedFood.isFavouriteFood = !identifiedFood.isFavouriteFood;
    },
    addFoodItem(type, name, price) {
      const newFoodItem = {
        id: new Date().toISOString(),
        type: type,
        name: name,
        price: price,
        isFavouriteFood: false,
      };
      this.foods.push(newFoodItem);
    },
    deleteFoodItem(foodId) {
      this.foods = this.foods.filter((food) => food.id !== foodId);
    },
  },
};
</script>
