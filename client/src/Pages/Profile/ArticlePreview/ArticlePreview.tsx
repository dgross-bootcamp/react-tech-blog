import { useState } from "react";
import styles from "./ArticlePreview.module.css";

export default function ArticlePreview() {
  const [isEmpty, setIsEmpty] = useState(false);

  if (isEmpty) {
    return (
      <div className={`${styles.ProfileFavorites}`}>
        <p>No article are here...yet.</p>
      </div>
    );
  }

  return (
    <div className={`${styles.ArticlePreview}`}>
      <div className={`${styles.ArticleMeta}`}>
        <a className={`${styles.ArticleLink}`} href="/">
          <img className={`${styles.ArticleImage}`} src="dan.jpg" alt="" />
        </a>
        <div>
          <div className={`${styles.ArticleInfo}`}>
            <a href="/" className={`${styles.ArticleAuthor}`}>
              Daniel Gross
            </a>
            <span className={`${styles.ArticleDate}`}>October 31</span>
          </div>
        </div>
        <div className={`${styles.ArticleFavorite}`}>
          <button
            className={`${styles.ArticleFavoriteButton} btn btn-outline-primary btn-sm`}
          >
            <i className={`${styles.ArticleIcon}`}></i> 0
          </button>
        </div>
      </div>

      <div className="d-flex flex-column">
        <a href="/" className={`${styles.ArticlePreview}`}>
          <div className="d-flex flex-column">
            <h1 className={`${styles.ArticlePreviewHeading}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel
              dolore nobis provident possimus nihil sunt. Dicta obcaecati quos,
            </h1>
            <p className={`${styles.ArticlePreviewBody}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              eius, nesciunt harum aliquid facilis magni a quia! Ut modi nostrum
              odit maiores quae quos similique amet. Necessitatibus, sapiente!
              Ratione, quam!
            </p>
            <span className={`${styles.ArticlePreviewMore}`}>Read more...</span>
          </div>
        </a>
        <ul className={`${styles.TagList}`}>
          <li className={`${styles.TagItem}`}>Tag One</li>
          <li className={`${styles.TagItem}`}>Tag Two</li>
          <li className={`${styles.TagItem}`}>Tag Three</li>
          <li className={`${styles.TagItem}`}>Tag Four</li>
        </ul>
      </div>
    </div>
  );
}
