import Landing from '@/views/Landing.vue';
import Header from '@/components/Header/HeaderBar.vue';

export default [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/messaging',
    name: 'messaging',
    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "messaging" */ '@/views/Messaging.vue'),
    },
  },
];
