import { useQuery } from "@apollo/client";
import { Link, Outlet } from "react-router-dom";
import { UserDTO } from "../../types/types";
import { QUERY_GET_USER } from "../../utils/queries/getUser";
import styles from "./Profile.module.css";

export default function Login() {
  const { loading, data } = useQuery<{
    getUser: Pick<UserDTO, "username" | "image" | "bio">;
  }>(QUERY_GET_USER);

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className={`${styles.UserInfo}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1 d-flex flex-column align-items-center">
              <img
                src={data.getUser.image}
                className={`${styles.UserImage}`}
                alt={data.getUser.username}
              />
              <h4 className="display-4">{data.getUser.username}</h4>
              <p className={`${styles.Description}`}>{data.getUser.bio}</p>
              <Link
                to="/settings"
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
