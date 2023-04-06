import PostsGrid from "./posts-grid";

function AllPosts(props) {
  return <section>
    <h1>All Posts</h1>
    <PostsGrid posts={props.post} />
  </section>
}

export default AllPosts;