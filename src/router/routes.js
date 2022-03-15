const Home = () => import('../pages/Home')

export default [{
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
        isShowTypeNav: true
    }
}]