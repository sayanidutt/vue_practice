<template>
  <div class="container">
    <p>{{ uname }}</p>
    <p>{{ place.placename }}</p>
    <p>{{ place.pin }}</p>
  </div>
  <section>
    <user-data :first-name="firstname" :last-name="lastname"></user-data>
    <button @click="changeAge">Change Age</button>
    <input type="text" placeholder="FirstName" v-model="firstname"/>
    <input type="text" placeholder="LastName" v-model="lastname"/>
  </section>
</template>

<script>
import { ref,reactive,computed,watch, provide } from 'vue'; 
import UserData from './components/UserData.vue';
export default{
  components: { UserData },
  setup(){
    const uname = ref('Max');
    const uage = ref(24);
    const firstname = ref('');
    const lastname = ref('');

    const place = reactive({
      placename: 'Kolkata',
      pin: 700140
    });

    provide('userAge',uage);

    /*setTimeout(function(){
      uname.value = 'John';
      place.pin = 700145;
    },2000);*/

    function changeAge(){
      uage.value = 30;
    }

    const username = computed(function(){
      return firstname.value + " " + lastname.value;
    })

    watch(uage,function(newValue,oldValue){
      //console.log('New Aage:'+ newValue);
      //console.log('Old age: '+oldValue);
      console.log('New Age: '+ newValue);
      console.log('Old Age: '+ oldValue);
    })



    return{
      uname,
      uage,
      place,
      changeAge: changeAge,
      username,
      firstname,
      lastname
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>