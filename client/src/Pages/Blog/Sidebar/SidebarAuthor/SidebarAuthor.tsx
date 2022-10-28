import styles from "./SidebarAuthor.module.css";

const SidebarAuthor: React.FC<{}> = () => {
  return (
    <div className={`bg-white my-3 mx-0 w-100 d-inline-block rounded-2 shadow`}>
      <div className={`${styles.AuthorContainer} p-3`}>
        <h3 className={`text-danger fs-4 m-0 fw-bold`}>Author</h3>
      </div>
      <div className={`p-3`}>
        <div className={`mb-3 align-items-center d-flex`}>
          <div className={`${styles.Avatar} rounded-circle`}>
            <img className="mw-100" src="dan.jpg" alt="profile"></img>
          </div>
          <div className={`${styles.Name}`}>
            <h4 className={`ps-4 m-0 fs-4 text-primary`}>
              Hello, I'm Daniel William Gross
            </h4>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias,
          totam possimus quod nemo quidem magni, aspernatur harum
          exercitationem, illo corrupti facilis sunt tempora culpa aliquam!
          Corrupti dolorem officia vero.
        </p>
      </div>
    </div>
  );
};

export default SidebarAuthor;
