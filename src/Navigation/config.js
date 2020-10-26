import Loadable from 'react-loadable';

const Routes = [
    {
        path: '/',
        exact: true,
        meta: {
            title: 'Home'
        },
        component: Loadable({
            loader: () => import('Pages/Home'),
            loading: () => null
        })
    }
];

export default Routes;