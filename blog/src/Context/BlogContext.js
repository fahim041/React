import createDataContext from "./CreateDataContext";

const blogReducers = (state, action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state, {
                id: Math.random(),
                title : action.payload.title,
                content : action.payload.content
            }];

        case 'update_blogpost':
            return state.map((oldPost) => {
                return oldPost.id === action.payload.id ?
                action.payload : oldPost
            });

        case 'delete_blogpost':
          return state.filter(blogPost => blogPost.id !== action.payload.id);

        default:
            return state
    }
}

const createBlogPost = dispatch => {
    return (blog, callback) => {
        dispatch({ type: 'add_blogpost', payload:{title:blog.title, content: blog.content}});
        if(callback) {
            callback();
        }
    }
}

const deleteBlogPost =  dispatch => {
  return (id, callback) => {
    dispatch({ type: 'delete_blogpost', payload:{id}});
    if(callback){
      callback();
    }
  }
}

const updateBlogPost = dispatch => {
    return (blog, callback) => {
        console.log("Actions", blog);
        dispatch({type: 'update_blogpost', payload:{id: blog.id, title:blog.title, content: blog.content}});
        if(callback){
            callback();
        }
    }
}

export const {Context, Provider} = createDataContext(
    blogReducers,
    {
        createBlogPost,
        updateBlogPost,
        deleteBlogPost
    },
    [
        {id : 1, title : 'Blog Post #1', content : 'this is content'},
        {id : 2, title : 'Blog Post #2', content : 'this is content #2'},
    ]
);
