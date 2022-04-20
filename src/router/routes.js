const Home = () => import('../pages/Home/index.vue')
// import Search from '../pages/Search'
const Search = () => import('../pages/Search')
const Detail = () => import('../pages/Detail')
const Buy = () => import('../pages/Buy')
const Cart = () => import('../pages/Cart')

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
    {
        name: 'buy', // 路由名称
        path: '/buy',
        component: Buy,
    },
    {
        name: 'cart', // 路由名称
        path: '/cart',
        component: Cart,
        meta: {
            isHiddenHeader: true
        }
    },
]