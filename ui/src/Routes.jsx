import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import AppFrame from 'components/Frame';
import Customers from 'views/Customers';
import Transfers from 'views/Transfers';

function Routes() {
  return (
    <AppFrame>
      <Switch>
        <Redirect exact path="/" to="/customers" />

        <Route exact path="/customers">
          <Customers />
        </Route>

        <Route exact path="/transfers">
          <Transfers />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </AppFrame>
  );
}

export default Routes;
