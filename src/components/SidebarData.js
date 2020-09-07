import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Login',
    path: '/login',
    icon: <AiIcons.AiFillLock />,
    cName: 'nav-text'
  },
  {
    title: 'Map',
    path: '/map',
    icon: <IoIcons.IoMdMap />,
    cName: 'nav-text'
  },
  /*{
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },*/
  {
    title: 'Locations',
    path: '/locations',
    icon: <IoIcons.IoIosLocate />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Logout',
    path: '/login',
    icon: <IoIcons.IoIosLogOut />,
    cName: 'nav-text'
  }
];