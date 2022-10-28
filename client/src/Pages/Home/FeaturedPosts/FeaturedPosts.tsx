import React from "react";
import HorizontalFeaturedPost from "./HorizontalFeaturedPost/HorizontalFeaturedPost";
import JumbotronFeaturedPost from "./JumbotronFeaturedPost/JumbotronFeaturedPost";

const FeaturedPosts: React.FC<{}> = () => {
  return (
    <>
      <JumbotronFeaturedPost />
      <div className="row">
        {Array.from({ length: 2 }).map((_) => (
          <HorizontalFeaturedPost />
        ))}
      </div>
    </>
  );
};

export default FeaturedPosts;
