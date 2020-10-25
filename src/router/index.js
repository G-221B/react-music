import GGDiscover from '@/pages/discover';
import GGMine from '@/pages/mine';
import GGFriends from '@/pages/friends';
const routes = [
  {
    path: '/',
    exact: true,
    component: GGDiscover,
  },
  {
    path: '/mine',
    component: GGMine,
  },
  {
    path: '/friends',
    component: GGFriends,
  },
];

export default routes;
