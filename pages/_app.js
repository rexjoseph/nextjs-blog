import Footer from "@/components/layout/footer";
import "@/styles/globals.css";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
