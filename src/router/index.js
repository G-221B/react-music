import { Redirect } from 'react-router-dom';

import GGDiscover from '@/pages/discover';
import GGMine from '@/pages/mine';
import GGFriends from '@/pages/friends';
import GGRecommend from '@/pages/discover/c-pages/recommend';
import GGRanking from '@/pages/discover/c-pages/ranking';
import GGPlaylist from '@/pages/discover/c-pages/playlist';
import GGDjradio from '@/pages/discover/c-pages/djradio';
import GGAlbum from '@/pages/discover/c-pages/album';
import GGArtist from '@/pages/discover/c-pages/artist';
const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to='/discover' />;
    },
  },
  {
    path: '/discover',
    component: GGDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        component: GGRecommend,
      },
      {
        path: '/discover/ranking',
        component: GGRanking,
      },
      {
        path: '/discover/playlist',
        component: GGPlaylist,
      },
      {
        path: '/discover/artist',
        component: GGArtist,
      },
      {
        path: '/discover/djradio',
        component: GGDjradio,
      },
      {
        path: '/discover/album',
        component: GGAlbum,
      },
    ],
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
