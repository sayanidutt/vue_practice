<template>
    <base-dialog v-if="isInputError" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Invalid Input</p>
            <p>Please check all fields</p>
        </template>
        <template #actions>
            <button @click="confirmError">Okay</button>
        </template>
    </base-dialog>
    <form @submit.prevent="submitFoodItem">
        <div>
        <label>Food type</label>
        <input type="text" v-model.trim="enteredType"/>
    </div>

    <div>
        <label>Food Name</label>
        <input type="text" v-model.trim="enteredName"/>
    </div>

    <div>
        <label>Food Price</label>
        <input type="text" v-model.trim="enteredPrice"/>
    </div>
    <button>Add New Food Item</button>
    </form>
</template>

<script>
import BaseDialog from './BaseDialog.vue';
export default {
  components: { BaseDialog },
    emits: ['add-foodItem'],
    data(){
        return{
            enteredType: '',
            enteredName: '',
            enteredPrice: '',
            isInputError: false
        }
    },
    methods: {
        submitFoodItem(){
            if(this.enteredType === '' || this.enteredName === '' || this.enteredPrice === ''){
                this.isInputError = true;
                return;
            }
            this.$emit('add-foodItem',
            this.enteredType,
            this.enteredName,
            this.enteredPrice
            )
        },
        confirmError(){
            this.isInputError = false;
        }
    }
}
</script>
