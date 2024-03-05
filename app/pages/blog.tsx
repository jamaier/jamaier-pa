import { GetStaticPaths, GetStaticProps } from "next";

const Blog = () => {
  return <div>coming soon</div>;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {},
  };
};

export default Blog;
