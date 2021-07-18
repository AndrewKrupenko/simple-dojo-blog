import {useParams, useHistory} from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
  const {id} = useParams();
  const {justdata: blog, isPending, error} = useFetch('http://localhost:8001/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8001/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete Post</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;