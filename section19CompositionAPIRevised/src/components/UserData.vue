<template>
    <div>
        <h2>{{ username }}</h2>
        <h2>{{ age }}</h2>
    </div>
</template>


<script>
import { 
    computed, inject,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted 
    } 
    from 'vue';
export default {
    props: ['firstName','lastName'],
    setup(props,context){
        const username = computed(function(){
            return props.firstName + " " + props.lastName;
        });

        console.log(context);

        const age = inject('userAge');
        //context.emit('save-data',...);

        onBeforeMount(function(){
            console.log('onBeforeMount');
        })

        onMounted(function(){
            console.log('onMounted');
        })

        onBeforeUpdate(function(){
            console.log('onBeforeUpdate');
        })

        onUpdated(function(){
            console.log('onUpdated');
        })

        onBeforeUnmount(function(){
            console.log('onBeforeUnmount');
        })

        onUnmounted(function(){
            console.log('onUnmounted');
        })

        return {
            username,
            age
        }
    }
}
</script>
