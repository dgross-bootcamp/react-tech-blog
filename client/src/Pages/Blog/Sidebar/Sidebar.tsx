import SidebarAuthor from "./SidebarAuthor/SidebarAuthor";
import SidebarPosts from "./SidebarPosts/SidebarPosts";

const Sidebar: React.FC<{}> = () => {
  return (
    <>
      <SidebarAuthor />
      <SidebarPosts />
    </>
  );
};

export default Sidebar;
