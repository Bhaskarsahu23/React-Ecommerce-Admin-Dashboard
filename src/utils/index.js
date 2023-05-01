import {
  home,
  order,
  products,
  addproduct,
  //   cart,
  transitions,
  users,
  review,
  profile,
} from '../assets';

export const sideNavLinks = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    img: home,
  },
  {
    id: 'products',
    title: 'Products',
    img: products,
  },
  {
    id: 'addproduct',
    title: 'Add Product',
    img: addproduct,
  },
  {
    id: 'orders',
    title: 'Orders',
    img: order,
  },
  {
    id: 'users',
    title: 'Users',
    img: users,
  },

  {
    id: 'transactions',
    title: 'Transactions',
    img: transitions,
  },
  {
    id: 'reviews',
    title: 'Reviews',
    img: review,
  },
];

export const profileInfo = {
  name: 'Jhon',
  profileImg: profile,
};
