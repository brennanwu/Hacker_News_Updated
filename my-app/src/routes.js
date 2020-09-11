import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Submit from './Submit.js';
import RetrievedData from './RetrievedData';

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
          <Route path="/submit" exact component={Submit}/>
          <Route path="/retrieve" exact component={RetrievedData}/>
        </Switch>
      </BrowserRouter>
    );
}