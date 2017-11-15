import Vue from "vue";
import VueRouter from "vue-router";
import ContractForm from "../components/Contracts/ContractForm";
Vue.use(VueRouter);

const router = new VueRouter(
    {
        routes: [
            {
                name: 'home',
                path: '/',
                component: ContractForm
            },
        ]
    })


export default router;