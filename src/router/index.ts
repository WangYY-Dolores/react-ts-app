import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import React, { lazy } from "react";

const Home = lazy(() => import('../views/Home/Home')) // lazy loading
const Apply = lazy(() => import('../views/Apply/Apply'))
const Check = lazy(() => import('../views/Check/Check'))
const Exception = lazy(() => import('../views/Exception/Exception'))
const Login = lazy(() => import('../views/Login/Login'))
const Sign = lazy(() => import('../views/Sign/Sign'))


const routes: RouteObject[] = [
    {
        path: '/',
        element: React.createElement(Home),
        children: [
            {
                path: 'sign',
                element: React.createElement(Sign)
            },
            {
                path: 'exception',
                element: React.createElement(Exception)
            },
            {
                path: 'apply',
                element: React.createElement(Apply)
            },
            {
                path: 'check',
                element: React.createElement(Check)
            }
        ]
    },
    {
        path: '/login',
        element: React.createElement(Login)
    }
];

const router = createBrowserRouter(routes);

export default router;