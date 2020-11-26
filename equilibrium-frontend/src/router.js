import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/", alias:"/landingPage", name: "landingPage", component: () => import("./views/LandingPage")   },

        { path: "/sign-up", alias:"/signUp", name: "signUp", component: () => import("./views/SignUp")   },
        { path: "/sign-up-complete", alias:"/signUpComplete", name: "signUpComplete", component: () => import("./views/SignUpComplete")   },

        { path: "/login", alias:"/login", name: "login", component: () => import("./views/Login")   },
        { path: "/login-complete", alias:"/loginComplete", name: "loginComplete", component: () => import("./views/LoginComplete")   },

        { path: "/forget-password", alias:"/forgetPassword", name: "forgetPassword", component: () => import("./views/ForgetPassword")   },
        { path: "/forget-password-complete", alias:"/forgetPasswordComplete", name: "forgetPasswordComplete", component: () => import("./views/ForgetPasswordComplete")   },

        { path: "/dashboard", alias:"/dashboard", name: "dashboard", component: () => import("./views/Dashboard")   },

        { path: "/add-client-1", alias:"/addClient1", name: "addClient1", component: () => import("./views/AddClient/AddClientS1")   },

        { path: "/add-client-2", alias:"/addClient2", name: "addClient2", component: () => import("./views/AddClient/AddClientS2")   },

        { path: "/add-client-3", alias:"/addClient3", name: "addClient3", component: () => import("./views/AddClient/AddClientS3")   },
        { path: "/add-client-3-1", alias:"/addClient3.1", name: "addClient3.1", component: () => import("./views/AddClient/AddClientS3_1")   },
        { path: "/add-client-3-2", alias:"/addClient3.2", name: "addClient3.2", component: () => import("./views/AddClient/AddClientS3_2")   },
        { path: "/add-client-3-3", alias:"/addClient3.3", name: "addClient3.3", component: () => import("./views/AddClient/AddClientS3_3")   },

        { path: "/add-client-4", alias:"/addClient4", name: "addClient4", component: () => import("./views/AddClient/AddClientS4")   },
        { path: "/add-client-4-1", alias:"/addClient4.1", name: "addClient4.1", component: () => import("./views/AddClient/AddClientS4_1")   },
        { path: "/add-client-4-2", alias:"/addClient4.2", name: "addClient4.2", component: () => import("./views/AddClient/AddClientS4_2")   },

        { path: "/add-client-5", alias:"/addClient5", name: "addClient5", component: () => import("./views/AddClient/AddClientS5")   },
        { path: "/add-client-5-1", alias:"/addClient5.1", name: "addClient5.1", component: () => import("./views/AddClient/AddClientS5_1")   },
        { path: "/add-client-5-2", alias:"/addClient5.2", name: "addClient5.2", component: () => import("./views/AddClient/AddClientS5_2")   },
        { path: "/add-client-5-3", alias:"/addClient5.3", name: "addClient5.3", component: () => import("./views/AddClient/AddClientS5_3")   },

        { path: "/add-client-6", alias:"/addClient6", name: "addClient6", component: () => import("./views/AddClient/AddClientS6")   },
        { path: "/add-client-6-1", alias:"/addClient6.1", name: "addClient6.1", component: () => import("./views/AddClient/AddClientS6_1")   },

        { path: "/add-client-7", alias:"/addClient7", name: "addClient7", component: () => import("./views/AddClient/AddClientS7Final")   },

        { path: "/view-accounts", alias:"/viewAccounts", name: "viewAccounts", component: () => import("./views/ViewAccounts")   },

        { path: "/register-payment", alias:"/registerPayment", name: "registerPayment", component: () => import("./views/RegisterPayment")   },
        { path: "/register-payment-1/:id", alias:"/registerPayment1", name: "registerPayment1", component: () => import("./views/RegisterPayment/RegisterPaymentS1")   },
        { path: "/register-payment-2/:id", alias:"/registerPayment2", name: "registerPayment2", component: () => import("./views/RegisterPayment/RegisterPaymentS2")   },
        { path: "/register-payment-final/:id", alias:"/registerPaymentFinal", name: "registerPaymentFinal", component: () => import("./views/RegisterPayment/RegisterPaymentFinal")   },

        { path: "/register-sale", alias:"/registerSale", name: "registerSale", component: () => import("./views/RegisterSale")   },
        { path: "/register-sale-1/:id", alias:"/registerSale1", name: "registerSale1", component: () => import("./views/RegisterSale/RegisterSaleS1")   },
        { path: "/register-sale-2/:id", alias:"/registerSale2", name: "registerSale2", component: () => import("./views/RegisterSale/RegisterSaleS2")   },
        { path: "/register-sale-final/:id", alias:"/registerSaleFinal", name: "registerSaleFinal", component: () => import("./views/RegisterSale/RegisterSaleFinal")   },

        { path: "/movements/:id", alias:"/movements", name: "movements", component: () => import("./views/Movements")   },
    ]
})

