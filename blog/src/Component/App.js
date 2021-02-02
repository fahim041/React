import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import BlogList from './BlogList';
import CreateBlog from './CreateBlog';
import EditBlog from './EditBlog';
import ShowBlog from './ShowBlog';
import { useLocation, useHistory } from 'react-router-dom';

const App = () => {
  const history = useHistory();
    return(
        <>

          <body class="pricing sidebar-collapse" data-new-gr-c-s-check-loaded="14.993.0" data-gr-ext-installed="">
            <nav class="navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent" color-on-scroll="100" id="sectionsNav">
              <div class="container">
                <div class="navbar-translate">
                  <a class="navbar-brand">
                    Blog App With React Context
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div class="collapse navbar-collapse">
                  <ul class="navbar-nav ml-auto">

                    <li class="dropdown nav-item">
                      <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        <i class="material-icons">view_day</i> Options
                      </a>
                      <div class="dropdown-menu dropdown-with-icons">

                        <a class="dropdown-item" style={{cursor:'pointer'}} href="/">
                          <i class="material-icons">list</i>Reset Blog List
                        </a>

                      </div>
                    </li>


                  </ul>
                </div>
              </div>
            </nav>
          </body>
        <BrowserRouter>
            <Route path="/" exact component={()=> (<BlogList />)} />
            <Route path="/edit" exact component={()=>(<EditBlog />)} />
            <Route path="/show" exact component={()=>(<ShowBlog />)} />
            <Route path="/create" exact component={() => (<CreateBlog />)} />
        </BrowserRouter>
        </>

    )
}

export default App;
