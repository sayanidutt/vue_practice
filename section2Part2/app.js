const app = Vue.createApp({
    data(){
        return {
            counter : 0,
            name : '',
            confirmedName : '',
            //fullName : '',
            lastname : ''
        };
    },
    watch: {
        counter(value){
            if(value>50){
                this.counter = 0;
            }
        }

        /*name(value){
            if(value === ''){
                this.fullName =  '';
            }
            else {
                this.fullName = value + " "+ "Cook";
            }
        }*/
        /*
        lastname(value){
            if(value === ''){
                this.fullName =  '';
            }
            else {
                this.fullName = this.name + " "+ value;
            }
        }*/
    },
    computed: {
        fullName(){
            console.log("Running Again");
            if(this.name === ''){
                return '';
            }
            return this.name + " "+ this.lastname;
        }
    },
    methods: {
        add(num){
            this.counter = this.counter+num;
        },
        reduce(num){
            this.counter = this.counter-num;
        },
        setname(event,lastname){
            this.name = event.target.value + " "+ lastname;
        },
        submitForm(event){
            //event.preventDefault();
            alert('Submitted');
        },
        confirmInput(){
            this.confirmedName = this.name;
        },
        outputName(){
            if(this.name === ''){
                return '';
            }
            return this.name + " "+ "Cook";
        }
    }
});

app.mount('#events');