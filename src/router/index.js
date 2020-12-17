import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'
import ProductDetails from '../views/ProductDetails.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/shopping",
            name: "Shop",
            component: Shop
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact,
            alias: "/contact-us"
        },
        {
            path: "/products/:id",
            name: "ProductDetails",
            component: ProductDetails
        },
        {
            path: "/us-contact",
            redirect: { name: "Contact"}
        },
        {
            path: "/:catchAll(.*)",
            component: NotFound
        }

    ]
})

export default router