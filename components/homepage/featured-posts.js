import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css"

function FeaturedPosts(props) {
  return <section className={classes.section}>
     <PostsGrid posts={props.posts} />
  </section>
}

export default FeaturedPosts;