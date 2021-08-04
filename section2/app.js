const app = Vue.createApp({
    data(){
        return{
            statusA: "Beginner",
            statusB: "Master",
            courseGoal:"Finish the course and learn vue",
            courseStatement: "<h2>Learn vue and become a master</h2>",
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const random = Math.random();
            if(random<0.5){
                return this.statusA;
            }
            else{
                return this.statusB;
            }
        }
    }
});

app.mount('#user-goal');