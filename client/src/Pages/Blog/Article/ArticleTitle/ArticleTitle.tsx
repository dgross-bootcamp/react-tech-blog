import { Link } from "react-router-dom";
import styles from "./ArticleTitle.module.css";

const ArticleTitle: React.FC<{}> = () => {
  return (
    <div className="pt-3 pb-4 px-0">
      <h3 className="fs-6">
        <Link
          to={"/"}
          className="text-uppercase border-bottom border-danger text-danger text-decoration-none"
        >
          Frontend
        </Link>
      </h3>
      <h4 className="text-primary fs-2 fw-bold">
        This is the title to the blog post and I am going to show it here
      </h4>
      <div
        className={`${styles.AvatarContainer} d-flex align-items-start pt-3 pb-4`}
      >
        <div className={`${styles.ImageContainer} rounded-circle`}>
          <img className="mw-100" src="dan.jpg" alt="profile"></img>
        </div>
        <div className="ps-2">
          <label className="text-danger m-0 d-inline-block">Dan Gross</label>
          <span className={`${styles.Date} d-block text-uppercase`}>
            oct 27 2022
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleTitle;
