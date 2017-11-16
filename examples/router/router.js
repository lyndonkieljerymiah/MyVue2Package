import Vue from "vue";
import VueRouter from "vue-router";
import ContractForm from "../components/Contracts/ContractForm";
import CalendarExample from "../components/Calendars/CalendarExample";
Vue.use(VueRouter);

const router = new VueRouter(
    {
        routes: [
            {
                name: 'home',
                path: '/',
                component: ContractForm
            },
            {
                name: 'calendar',
                path: '/calendar',
                component: CalendarExample
            },
        ]
    })


export default router;