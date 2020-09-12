import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Submit from './Submit.js';
import RetrievedData from './RetrievedData';
import Comments from './Comments';
import Login from './Login';
// import Login from './Login';

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
          <Route path="/submit" exact component={Submit}/>
          <Route path="/retrieve" exact component={RetrievedData}/>
          <Route path='/comments' exact component={Comments} />
          <Route path='/login' exact component={Login} />
          {/* <Route path='/login' exact component={Login} /> */}
        </Switch>
      </BrowserRouter>
    );
}