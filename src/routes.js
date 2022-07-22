import HomePage from './views/pages/HomePage.vue';
import CityPage from './views/pages/CityPage.vue';
import CreateGuestPage from './views/pages/CreateGuestPage.vue'
import CreateCityPage from './views/pages/CreateCityPage.vue'
export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/cities/:id',
        name: 'city',
        component: CityPage
    },
    {
        path: '/create-guest',
        name: 'crete-guest',
        component: CreateGuestPage
    },
    {
        path: '/create-city',
        name: 'crete-city',
        component: CreateCityPage
    }
]