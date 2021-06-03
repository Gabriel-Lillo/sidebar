import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { BsCalendarFill } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";

export const Sidebar = [
    {
        title: "Inicio",
        path: '/inicio',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Agenda",
        path: '/agenda',
        icon: <BsCalendarFill/>,
        cName: 'nav-text'
    },
    {
        title: "Ingresos",
        path: '/ingresos',
        icon: <BsBarChart/>,
        cName: 'nav-text'
    },
    {
        title: "Clientes",
        path: '/clientes',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: "Mis Redes",
        path: '/redes',
        icon: <IoIcons.IoIosGitNetwork />,
        cName: 'nav-text'
    },
]