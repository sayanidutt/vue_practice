const app = Vue.createApp({
    data(){
        return{
            friends: [
                {
                    id: 'std1',
                    name: 'Raj',
                    phoneno: '9876534534',
                    email: 'raj@gmail.com',
                },
                {
                    id: 'std2',
                    name: 'Rajiv',
                    phoneno: '9876123245',
                    email: 'rajiv@gmail.com',
                },
            ],
        };
    },
    methods: {
        
    }
});

app.component('friend-contact',{
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails">{{ !detailsAreVisible?'Show Details':'Hide Details' }}</button>
            <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phoneno }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
            </ul>
        </li>
    `,
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: 'std2',
                name: 'Rajiv',
                phoneno: '9876123245',
                email: 'rajiv@gmail.com',
            },
        };

    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');