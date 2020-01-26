import Landing from '@/views/Landing.vue';
import Header from '@/components/Header/HeaderBar.vue';

export default [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/player',
    name: 'player',
    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "player" */ '@/views/Player.vue'),
    },
  },
  {
    path: '/profile',
    name: 'profile',
    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
    },
  },
];
