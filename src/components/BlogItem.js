import {Link} from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-preview" key={blog.id}>
      <Link to={`/blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
      </Link>
    </div>
  );
};

export default BlogItem;
