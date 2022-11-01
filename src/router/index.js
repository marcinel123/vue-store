import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage"
import ProductsPage from "../components/ProductsPage"
import AboutUsPage from "../components/AboutUsPage"
import ContactPage from "../components/ContactPage"
import MensClothing from "../components/MensClothing"
import JeweleryPage from "../components/JeweleryPage"

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage

    },
    {
        path: "/products",
        name: "ProductsPage",
        component: ProductsPage

    },
    {
        path: "/contact",
        name: "ContactPage",
        component: ContactPage

    },
    {
        path: "/aboutus",
        name: "AboutUsPage",
        component: AboutUsPage

    },
    {
        path: "/mens",
        name: "MensClothing",
        component: MensClothing

    },
    {
        path: "/jewelery",
        name: "JeweleryPage",
        component: JeweleryPage

    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router