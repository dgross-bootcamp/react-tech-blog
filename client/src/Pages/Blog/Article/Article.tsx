import ArticleImage from "./ArticleImage/ArticleImage";
import styles from "./Article.module.css";
import ArticleTitle from "./ArticleTitle/ArticleTitle";
import ArticleContent from "./ArticleContent/ArticleContent";

const Article: React.FC<{}> = () => {
  return (
    <article className={`${styles.Article}`}>
      <ArticleImage />
      <ArticleTitle />
      <ArticleContent />
    </article>
  );
};

export default Article;
