import { createPinia } from "pinia";

const store =  createPinia(
    {
        state:{
            test:'1234'
        },
        getters:{},
        setters:{},
        mutations:{}
    }
)

export default store;
