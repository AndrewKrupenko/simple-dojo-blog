import BlogList from './BlogLIst';
import useFetch from './useFetch';

const Home = () => {
  const { justdata: blogs, isPending, error } = useFetch('http://localhost:8001/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" />}
    </div>
  );
}

export default Home;