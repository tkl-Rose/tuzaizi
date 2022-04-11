const Home = () => import('../pages/Home/index.vue')
// import Search from '../pages/Search'
const Search = () => import('../pages/Search')
const Detail = () => import('../pages/Detail')

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
    {
        name: 'detail', // 路由名称
        path: '/detail',
        component: Detail,
    },
]