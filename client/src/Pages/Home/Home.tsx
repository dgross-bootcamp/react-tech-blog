import React from "react";
import FeaturedPosts from "./FeaturedPosts/FeaturedPosts";
import PostGrid from "./PostGrid/PostGrid";

const Home: React.FC<{}> = () => {
  return (
    <>
      <FeaturedPosts />
      <main>
        <PostGrid />
      </main>
    </>
  );
};

export default Home;
