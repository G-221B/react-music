import React, { memo } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '@/router';

import GGHeader from '@/components/header';
import GGFooter from '@/components/footer';

export default memo(function App() {
  return (
    <HashRouter>
      <GGHeader></GGHeader>
      <Switch>{renderRoutes(routes)}</Switch>
      <GGFooter></GGFooter>
    </HashRouter>
  );
});
