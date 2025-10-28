import { PostList } from "./components/PostList.jsx";

const posts = [
  {
    title: "Full-Stack React Projects",
    contents: "Let's become full-stack developers",
    author: "Daniel Bugl",
  },
  { title: "Hello React!" },
];

export function App() {
  return <PostList posts={posts} />;
}
