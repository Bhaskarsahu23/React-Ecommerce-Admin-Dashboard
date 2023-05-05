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

export const salesData = [
  {
    name: '',
    sales: 0,
  },

  {
    name: 'January',
    sales: 30,
  },
  {
    name: 'Fabuary',
    sales: 100,
  },
  {
    name: 'March',
    sales: 500,
  },
  {
    name: 'April',
    sales: 390,
  },
  {
    name: 'May',

    sales: 480,
  },
  {
    name: 'June',

    sales: 380,
  },
];
