import React, {useContext} from 'react';
import {Context} from '../Context/BlogContext';
import {Link, useHistory} from 'react-router-dom';
import BlogForm from './BlogForm';
import Background from '../images/bg2.jpg';

const BlogList = () => {
  const {state, deleteBlogPost} = useContext(Context);
  const history = useHistory();
  console.log(history);

  const Show = (blog) => {
    /*history.push({
            pathname: '/edit',
            search: `${blog.id}`
        }) */
    history.push('/show', blog.id)
    console.log(history);
  }

  const create = () => {
    history.push('/create');
  }

  const renderBlogTable = () => {
    return (
      <tbody>
        {
          state.map((blog, index) => {
            return (<tr key={index}>
              <td>{blog.title}</td>
              <td class="td-actions text-right">
                <button onClick={() => Show(blog)} type="button" rel="tooltip" class="btn btn-rose btn-round">
                  <i class="material-icons">preview</i>
                </button>
                <button onClick={() => deleteBlogPost(blog.id)} type="button" rel="tooltip" style={{marginLeft: '10px'}} class="btn btn-rose btn-round">
                  <i class="material-icons">delete</i>
                </button>
              </td>
              <br />


            </tr>)
          })
        } </tbody>)
        }

              console.log(state);
              return (<>
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
                              <div class="card card-pricing card-raised bg-rose">
                                <div class="card-body">
                                  <h1 class="card-title">Blog Table</h1>
                                  <button onClick={()=>create()} type="button" rel="tooltip" style={{marginLeft: '10px'}} class="btn btn-rose btn-round">
                                    <i class="material-icons">create</i>
                                  </button>
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th class="text-info">Title</th>
                                        <th class="text-info text-right">Actions</th>

                                      </tr>
                                    </thead>
                                    {renderBlogTable()}
                                  </table>


                                </div>
                              </div>
                            </div>
                            <div className="col-md-3"></div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                </body>
</>)
}

export default BlogList;
