<template>
    <the-header title="RememberMe"></the-header>
    <ul>
        <!--<stored-resources :resources="storedResources"></stored-resources>-->
        <the-resources></the-resources>
    </ul>
</template>


<script>
//import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';
export default {
    components: {
        //StoredResources,
        TheHeader,
        TheResources
    },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>

