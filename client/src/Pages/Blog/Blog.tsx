import Article from "./Article/Article";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Blog.module.css";

const Detail: React.FC<{}> = () => {
  return (
    <main className={`${styles.Detail} bg-light`}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-8">
            <Article />
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
