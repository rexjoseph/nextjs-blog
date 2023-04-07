import AllPostsItem from "./all-post-item";
import classes from "./all-posts.module.css";

function AllPosts(props) {
  const { posts } = props;

  return <ul className={classes.flex}>
    {
      posts.map((post) => (
        <AllPostsItem key={post.slug} post={post} />
      ))
    }
  </ul>
}

export default AllPosts;