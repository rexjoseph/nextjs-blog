import { Fragment } from "react";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";
import Footer from "@/components/footerpage/footer";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Undercode UI</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
      <Footer />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;