import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import BlogForm from './BlogForm';
import { Context } from '../Context/BlogContext';

const EditBlog = (props) => {
    const location = useLocation();
    const history = useHistory();
    const { updateBlogPost, state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === location.state)
    return(
        <div>
            <BlogForm value={blogPost} 
                onSubmit={(blog) => {
                    updateBlogPost(blog, () => {
                        history.push('/show', location.state)
                    })
                }}
            />
        </div>
    )
}

export default EditBlog;