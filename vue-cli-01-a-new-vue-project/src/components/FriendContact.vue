<template>

<li>
    <h2>{{ name }}</h2>
    <!--<button @click="toggleDetails">{‌{ detailsAreVisible ? 'Hide' : 'Show' }}Details</button>-->
    <button @click="toggleDetails">{{ !detailsAreVisible?'Show Details':'Hide Details' }}</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ phoneNumber }}</li>
        <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
</li>
    
</template>

<script>
export default {
    props: [
    'name',
    'phoneNumber',
    'emailAddress'
  ],
    data(){
        return {
            detailsAreVisible: false,
            friend: {
                id: 'std1',
                name: 'Peter',
                phoneno: '8945677566',
                email: 'peter@gmail.com'
            }
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }

};
</script>