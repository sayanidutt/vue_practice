<template>
  <section class="container">
    <user-data :first-name="firstname" :last-name="lastname" :ujob="ujob"></user-data>
    <h2>{{ user.age }}</h2>
    <button @click="setAge">Change Age</button>
    <button @click="setJob">Change Job</button>
    <div>
      <input type="text" placeholder="Firstname" v-model="firstname">
      <input type="text" placeholder="Lastname" ref="lastNameInput">
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
//import { ref } from 'vue';
import UserData from './components/UserData.vue';
import { ref,reactive,watch,computed,provide } from 'vue';
export default {
  components:{
    UserData
  },
  setup(){
    //const uname = ref('Peter');

    /*const user = ref({
      name: 'Peter',
      age: 31
    })*/
    const firstname = ref('');
    const lastname = ref('');
    const ujob = ref('Teacher');
    const lastNameInput = ref(null);

    const user = reactive({
      //name: 'Peter',
      age: 31 
    })

    provide('userJob',ujob);

    //const usernew = toRefs(user);

    /*setTimeout(function(){
      //user.value.name = 'Max';
      //user.value.age = 32;
      user.name = 'Max';
      user.age = 32;
    },2000); */

    function setNewAge(){
      user.age = 33;
    }

    function setNewJob(){
      ujob.value = "Professor";
    }

    function setLastName(){
      lastname.value = lastNameInput.value.value;
    }

    const uname = computed(function(){
      return firstname.value + " " + lastname.value;
    })

    watch([ujob, uname], function(newValues,oldValues){
      console.log('Old Job: '+oldValues[0]);
      console.log('New Job: '+newValues[0]);
      console.log('Old Name: '+oldValues[1]);
      console.log('New Name: '+newValues[1]);
    })


    return { 
      user:user,
      setAge:setNewAge,
      setJob:setNewJob,
      firstname,
      lastname,
      lastNameInput,
      setLastName,
      ujob,
      userName:uname,
     };
    //return { user:user, name: usernew.name, age:usernew.age};
  }
  /*data() {
    return {
      userName: 'Maximilian',
    };
  },*/
};
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>