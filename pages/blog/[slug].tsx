import { getAllPostSlugs, getPostdata } from "../../lib/posts";
import { Box, jsx, Text, Divider, Flex } from "theme-ui";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export default function Posts({ source, frontMatter }: any) {
  return (
    <Box sx={{ variant: "containers.page" }}>
      <Box sx={{ mt: "4rem" }}>
        <h1>{frontMatter.title}</h1>
        <p>
          {new Date(frontMatter.date).toLocaleDateString("en-US")} •{" "}
          {frontMatter.author}
        </p>
        <Divider color="muted" />
        <Box>
          <MDXRemote {...source} />
        </Box>
      </Box>
    </Box>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await serialize(content);
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
