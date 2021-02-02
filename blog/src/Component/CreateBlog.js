import React, { useContext } from 'react';
import BlogForm from './BlogForm';
import { Context } from "../Context/BlogContext";
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
    const history = useHistory();
    const { createBlogPost } = useContext(Context);
    return(
        <div>
            <BlogForm onSubmit={(blog) => {
                createBlogPost(blog, () => {
                    history.push('/');
                })
            }} />
        </div>
    )
}

export default CreateBlog;