import { Link, Outlet } from "react-router-dom";
import styles from "./Profile.module.css";

export default function Login() {
  return (
    <div>
      <div className={`${styles.UserInfo}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1 d-flex flex-column align-items-center">
              <img src="dan.jpg" className={`${styles.UserImage}`} alt="" />
              <h4 className="display-4">Daniel Gross</h4>
              <p className={`${styles.Description}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt harum excepturi blanditiis magnam! Rerum, placeat et?
                Debitis est at iusto nostrum neque aliquam, ad voluptates
                praesentium dolores omnis iure possimus!
              </p>
              <Link
                to="/"
                className={`${styles.UserSettings} btn btn-sm btn-outline-secondary`}
              >
                <i className={`${styles.UserSettingsIcon}`}>
                  Edit Profile Settings
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="mt-4">
              <ul className={`${styles.Nav}`}>
                <li className={`${styles.NavItem}`}>
                  <Link
                    to={"/profile/articles"}
                    className={`${styles.NavLink}`}
                  >
                    My Articles
                  </Link>
                </li>
                <li className={`${styles.NavItem}`}>
                  <Link
                    className={`${styles.NavLink}`}
                    to={"/profile/favorites"}
                  >
                    Favorited Articles
                  </Link>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
