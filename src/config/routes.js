//
// routes.js

import App from './../App'

const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/',
                redirect: '/home'
            },
            {
                name: 'home',
                path: '/home',
                component: (resolve) => {
                    require(['./../components/home/Home.vue'], resolve)
                }
            },
            {
                name: 'about',
                path: '/about',
                component: (resolve) => {
                    require(['./../components/about/About.vue'], resolve)
                }
            },
            {
              name: '404',
              path: '/error_404',
              component: (resolve) => {
                  require(['./../components/404/404.vue'], resolve)
              }
          }
        ]
    },
    {
      path: '*',
      redirect: '/error_404'
    }
]

export default routes
