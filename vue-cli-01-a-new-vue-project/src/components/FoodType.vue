<template>
    <li>
        <h2>{{ type }}{{ isFavourite?'Favourite Food':''}}</h2>
        <button @click="toggleFavourite">Toggle Favourite</button>
        <button @click="toggleDetails">{{ !isFoodVisible?'Show Food Details':'Hide Food Details'}}</button>
        <ul v-if="isFoodVisible">
            <li><strong>Food Type:</strong>{{ name }}</li>
            <li><strong>Food Price:</strong>{{ price }}</li>
        </ul>
        <button @click="$emit('delete',id)">Delete Food Item</button>
    </li>
</template>

<script>
export default {
    props: ['id','type','name','price','isFavourite'],
    emits: ['togglefavourite-food','delete'],
    data(){
        return{
            isFoodVisible: false,
        };
    },
    methods: {
        toggleDetails(){
            this.isFoodVisible = !this.isFoodVisible;
        },
        toggleFavourite(){
            this.$emit('togglefavourite-food',this.id);
        }
    }
}
</script>
