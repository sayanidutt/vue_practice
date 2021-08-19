<template>
    <form @submit.prevent="submitFoodItem">
        <div>
        <label>Food type</label>
        <input type="text" v-model="enteredType"/>
    </div>

    <div>
        <label>Food Name</label>
        <input type="text" v-model="enteredName"/>
    </div>

    <div>
        <label>Food Price</label>
        <input type="text" v-model="enteredPrice"/>
    </div>
    <button>Add New Food Item</button>
    </form>
</template>

<script>
export default {
    emits: ['add-foodItem'],
    data(){
        return{
            enteredType: '',
            enteredName: '',
            enteredPrice: '',
        }
    },
    methods: {
        submitFoodItem(){
            this.$emit('add-foodItem',
            this.enteredType,
            this.enteredName,
            this.enteredPrice
            )
        }
    }
}
</script>
