//router set-up

import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import React, { lazy } from "react";
import { CopyOutlined, CalendarOutlined, WarningOutlined, FileAddOutlined, ScheduleOutlined, } from '@ant-design/icons'


const Home = lazy(() => import('../views/Home/Home')) // lazy loading
const Apply = lazy(() => import('../views/Apply/Apply'))
const Check = lazy(() => import('../views/Check/Check'))
const Exception = lazy(() => import('../views/Exception/Exception'))
const Login = lazy(() => import('../views/Login/Login'))
const Sign = lazy(() => import('../views/Sign/Sign'))
const BeforeEach = lazy(() => import('../components/BeforeEach/BeforeEach'))


declare module 'react-router' {
    interface IndexRouteObject {
        meta?: {
            menu?: boolean
            title?: string
            icon?: React.ReactNode
            auth?: boolean
        }
    }
    interface NonIndexRouteObject {
        meta?: {
            menu?: boolean
            title?: string
            icon?: React.ReactNode
            auth?: boolean
        }
    }
}

export const routes: RouteObject[] = [
    {
        path: '/',
        element: React.createElement(BeforeEach, null, React.createElement(Home)), // level 1 routing
        meta: {
            menu: true,
            title: "Attendance management",
            icon: React.createElement(CopyOutlined),
            auth: true
        },
        children: [
            {
                path: 'sign',
                element: React.createElement(Sign),
                meta: {
                    menu: true,
                    title: "Online Sign-Up",
                    icon: React.createElement(CalendarOutlined),
                    auth: true
                }
            },
            {
                path: 'exception',
                element: React.createElement(Exception),
                meta: {
                    menu: true,
                    title: "Attendence Exception Look-Up",
                    icon: React.createElement(WarningOutlined),
                    auth: true
                }
            },
            {
                path: 'apply',
                element: React.createElement(Apply),
                meta: {
                    menu: true,
                    title: "Adding Attendence",
                    icon: React.createElement(FileAddOutlined),
                    auth: true
                }
            },
            {
                path: 'check',
                element: React.createElement(Check),
                meta: {
                    menu: true,
                    title: "Check my Attendece",
                    icon: React.createElement(ScheduleOutlined),
                    auth: true
                }
            }
        ]
    },
    {
        path: '/login',
        element: React.createElement(BeforeEach, null, React.createElement(Login))
    }
];

const router = createBrowserRouter(routes);

export default router;