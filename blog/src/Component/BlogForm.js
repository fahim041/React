import React, { useState } from 'react';
import Background from '../images/bg2.jpg';
import { useLocation, useHistory } from 'react-router-dom';

const BlogForm = (props) => {
  const history = useHistory();
    const initialState = {
        title : '',
        content : ''
    }
    const [allFormValue, setAllFormValue] = useState(props.value ? props.value : initialState);

    const changeHandler = e => {
        setAllFormValue({...allFormValue, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>


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
                            <h1 className="card-title">{props?.value ? 'Edit Blog Form': 'Create Blog Form'}</h1>
                            <form style={{marginTop:'40px', width:'70%'}}>
                              <div class="form-group">

                                <input
                                  name="title"
                                  value={allFormValue.title}
                                  onChange={changeHandler}
                                type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Blog Title" />

                                <div class="form-group"></div>

                                <textarea
                                  name="content"
                                  value={allFormValue.content}
                                  onChange={changeHandler}
                                type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Content" >
                                </textarea>
                              </div>
                              <button
                                type="submit" onClick={(e)=>{
                                  e.preventDefault();
                                  props.onSubmit(allFormValue);
                                }}
                              class="btn btn-rose btn-round">
                                Submit
                              </button>
                              <button class="btn btn-rose btn-round" onClick={()=> history.push('/')}>Back</button>
                            </form>

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
        </div>
    )
}

export default BlogForm;
