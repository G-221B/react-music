import React, { memo } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import routes from '@/router';
import store from '@/store';

import GGHeader from '@/components/header';
import GGFooter from '@/components/footer';
import GGAppPlayerBar from '@/pages/player/app-player-bar';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GGHeader></GGHeader>
        <Switch>{renderRoutes(routes)}</Switch>
        <GGFooter></GGFooter>
        <GGAppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
