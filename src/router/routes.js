const Home = () => import('../pages/Home/index.vue')
// import Search from '../pages/Search'
const Search = () => import('../pages/Search')

export default [{
        name: 'home',
        path: '/home',
        component: Home,
    },
    {
        name: 'search', // 路由名称
        path: '/search/:keyword?',
        component: Search,
    },
]