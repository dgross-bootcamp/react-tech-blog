import { Link } from "react-router-dom";
import styles from "./SidebarPosts.module.css";

type Post = {
  id: number;
  title: string;
  author: string;
  date: string;
};

const mockPosts: Post[] = [
  {
    id: 1,
    title: "12 Surprising TypeScript Tricks You Need to Know",
    author: "Ross King",
    date: "oct 27 2022",
  },
  {
    id: 2,
    title: "The biggest React trends of 2022 (you won't believe #5)",
    author: "Andrew Hojo",
    date: "sept 20 2022",
  },
  {
    id: 3,
    title: "You Won't Believe the Secret Drink inside my Yellow Water Bottle",
    author: "Dan Gross",
    date: "feb 11 2022",
  },
  {
    id: 4,
    title: "Engineering Managers HATE this One Developer Trick.",
    author: "Ross King",
    date: "jan 23 2023",
  },
];

const SidebarPosts: React.FC<{}> = () => {
  return (
    <div className={`bg-white my-3 mx-0 w-100 d-inline-block rounded-2 shadow`}>
      <div className={`${styles.PostsContainer} p-3`}>
        <h3 className={`text-danger fs-4 m-0 fw-bold`}>Latests Posts</h3>
      </div>
      <div className={`p-3`}>
        {mockPosts.map((post, index) => {
          return (
            <div
              key={post.id}
              className={`${
                index !== 0 ? styles.PostBorder : ""
              } d-flex align-items-start`}
            >
              <div className={`${styles.PostBody} pe-3`}>
                <div>
                  <h4 className={`m-0 fs-6 fw-semibold`}>
                    <Link to={"/"} className={`text-decoration-none`}>
                      {post.title}
                    </Link>
                  </h4>
                </div>
                <div>
                  <p
                    className={`${styles.Meta} text-muted text-uppercase d-inline-block me-2`}
                  >
                    {post.author}
                  </p>
                  <p
                    className={`${styles.Meta} text-muted text-uppercase d-inline-block me-2`}
                  >
                    {post.date}
                  </p>
                </div>
              </div>
              <div className={`${styles.ImageContainer}`}>
                <img
                  src="https://picsum.photos/90/45"
                  alt=""
                  className="align-middle rounded-2"
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarPosts;
