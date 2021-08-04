const app = Vue.createApp({
    data(){
        return{
            enterValue: '',
            goals:[]
        };
    },
    methods: {
        addGoals(){
            this.goals.push(this.enterValue);
        },
        removeGoals(idx){
            this.goals.splice(idx,1);
        }
    }
});

app.mount('#user-goals');