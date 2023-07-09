import React from 'react'

import { DashboardOutlined, DiscountOutlined, EmojiEventsOutlined, EventSeatOutlined, NotificationsActiveOutlined, SupervisorAccountOutlined} from '@mui/icons-material';
export const SidebarData = [

    {
        icon : <DashboardOutlined/>,
        title : "Dashboard",
        path: "dashboard",
    },
    {
        icon : <SupervisorAccountOutlined/>,
        title : "Employee's",
        path : "employees",
        
    },
    {
        icon : <EmojiEventsOutlined/>,
        title : "Tournament's",
        path : "tournaments"
    },
    {
        icon : <EventSeatOutlined/>,
        title : "Reserve Seat",
        path : "reservations"
    },
    {
        icon : <DiscountOutlined/>,
        title : "Discounts",
        path : "discounts"
    },
    {
        icon : <NotificationsActiveOutlined/>,
        title : "Notification's",
        path : "notifications"
    },
 
]

// import React from 'react';
// import { DashboardOutlined, DiscountOutlined, EmojiEventsOutlined, EventSeatOutlined, NotificationsActiveOutlined, SupervisorAccountOutlined } from '@mui/icons-material';
// import { Tooltip } from '@mui/material';

// export const SidebarData = [
//   {
//     icon: <Tooltip title="Dashboard" placement="right"><DashboardOutlined /></Tooltip>,
//     title: "Dashboard",
//     path: "dashboard",
//   },
//   {
//     icon: <Tooltip title="Employee's" placement="right"><SupervisorAccountOutlined /></Tooltip>,
//     title: "Employee's",
//     path: "employees",
//   },
//   {
//     icon: <Tooltip title="Tournament's" placement="right"><EmojiEventsOutlined /></Tooltip>,
//     title: "Tournament's",
//     path: "tournaments"
//   },
//   {
//     icon: <Tooltip title="Reserve Seat" placement="right"><EventSeatOutlined /></Tooltip>,
//     title: "Reserve Seat",
//     path: "reservations"
//   },
//   {
//     icon: <Tooltip title="Discounts" placement="right"><DiscountOutlined /></Tooltip>,
//     title: "Discounts",
//     path: "discounts"
//   },
//   {
//     icon: <Tooltip title="Notification's" placement="right"><NotificationsActiveOutlined /></Tooltip>,
//     title: "Notification's",
//     path: "notifications"
//   },
// ];
