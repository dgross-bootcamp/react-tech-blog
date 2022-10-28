import { Link } from "react-router-dom";

const JumbotronFeaturedPost: React.FC<{}> = () => {
  return (
    <div className="bg-dark text-white p-5 mb-4 rounded shadow-lg">
      <div className="col-6">
        <h1 className="display-4 fst-italic">
          This is the title of one of our featured blog
        </h1>
      </div>
      <p className="lead my-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        delectus vitae minus inventore nemo vero laborum placeat omnis sit!
        Recusandae molestiae facilis dolor nostrum animi voluptas expedita quam
        voluptatem tenetur!
      </p>
      <p className="lead mb-0">
        <Link to="/blog" className="text-danger fw-semibold">
          Continue reading...
        </Link>
      </p>
    </div>
  );
};

export default JumbotronFeaturedPost;
