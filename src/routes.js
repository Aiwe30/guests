import HomePage from './views/pages/HomePage.vue';
import CityPage from './views/pages/CityPage.vue';
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
    }
]