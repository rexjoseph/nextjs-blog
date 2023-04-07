import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head"

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>Undercode UI - Posts</title>
      </Head>
      <AllPosts posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage;