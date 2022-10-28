import { Link } from "react-router-dom";
import styles from "./HorizontalFeaturedPost.module.css";

const HorizontalFeaturedPost: React.FC<{}> = () => {
  return (
    <div className="col-md-6">
      <div className="card flex-md-row mb-4 shadow">
        <div className="card-body d-flex flex-column">
          <p className="text-danger fw-bold">Technology</p>
          <h3 className="mb-0">
            <Link to="/blog" className="text-dark text-decoration-none">
              Horizontal Featured Post
            </Link>
          </h3>
          <p className={`${styles.Date} text-muted mb-2`}>
            Thursday, October 27th
          </p>
          <p className={`${styles.Description} card-text truncate-line-clamp`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            totam! Explicabo tempore, ipsa nemo pariatur vero obcaecati natus
            ex? Nulla ea reprehenderit minima dolorem sunt eum unde tempora
            fugit cum.
          </p>
          <Link to="/blog" className={`${styles.Link} mb-0 text-muted`}>
            Continue reading...
          </Link>
        </div>
        <img
          src="https://picsum.photos/200/250"
          alt=""
          className={`${styles.Image} card-img-right flex-auto d-none d-md-block`}
        />
      </div>
    </div>
  );
};

export default HorizontalFeaturedPost;
