import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Liquidity from './pages/Liquidity';
import NotFound from './pages/NotFound';

export default (
  <Router>
    <Home path="/" />
    <Liquidity path="/liquidity" />
    <NotFound default />
  </Router>
);
