import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(


<BrowserRouter>
      <div>



        <Switch>
         <Route exact path="/" component={App} />

          {/* <Route exact path="/terms-and-conditions" component={TermsConditions} /> */}
          {/* <Route exact path="/privacy" component={Privacy} /> */}
          <Route exact path="/redirect/"  
          component={() => { 
              window.location.href = 'https://example.com/1234'; 
              return null;
              }}
           />

          {/* <Route component={NotFound} /> */}
        </Switch>

      </div>

    </BrowserRouter>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
