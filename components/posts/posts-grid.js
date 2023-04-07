import PostsItem from "./post-item";


function PostsGrid(props) {
  const { posts } = props;

  return <ul>
    {
      posts.map((post) => (
        <PostsItem key={post.slug} post={post} />
      ))
    }
  </ul>
}

export default PostsGrid;