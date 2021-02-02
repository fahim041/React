import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Context } from '../Context/BlogContext';
import Background from '../images/bg2.jpg';

const ShowBlog = () => {
    const { state } = useContext(Context);
    const location = useLocation();
    const history = useHistory();

    const Id = location.state;
    const blogPost = state.find((blogPost) => blogPost.id === Id)

    const edit = (id) => {
        history.push('/edit', id)
    }

    console.log(state);

    return(
        <div >


          <body class = "pricing sidebar-collapse" data-new-gr-c-s-check-loaded = "14.993.0" data-gr-ext-installed = "" > <div class="page-header header-filter header-small" data-parallax="true" style={{
backgroundImage: `url(${Background})`
          }}>
            <div class="container">
              <div class="main main-raised" style={{
                marginTop: '500px'
              }}>
                <div class="container">
                  <div class="pricing-2">

                    <div class="row">
                      <div className="col-md-3"></div>
                      <div class="col-md-6">
                        <div class="card card-pricing card-raised">
                          <div class="card-body">
                            <div class="col-md-12">
                              <div >
                                <div class="card-header card-header-rose">
                                  <div style={{float:'right'}}>

                                    <button onClick={()=> history.push('/')}  type="button" rel="tooltip" style={{marginLeft: '10px'}} class="btn btn-rose btn-round">
                                      <i class="material-icons" style={{width:'20px'}}>keyboard_backspace</i>
                                    </button>
                                    <button onClick={()=> edit(blogPost.id)}  type="button" rel="tooltip" style={{marginLeft: '10px'}} class="btn btn-rose btn-round">
                                      <i class="material-icons" style={{width:'20px'}}>edit</i>
                                    </button>
                                  </div>
                                  <h4 class="card-title">{blogPost.title}</h4>

                                </div>
                                <div class="card-body">
                                  {blogPost.content}
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="col-md-3"></div>

                  </div>
                </div>

              </div>
            </div>
          </div>


        </body>
        </div>
    )
}

export default ShowBlog;
