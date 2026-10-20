import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

import pro from "../components/pro.vue"


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            component:pro
        },
        {
            path:'/more',
            component:()=> import ('../components/btn3.vue')
        }
    ]
})
export default router