import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Blog from "./Pages/Blog/Blog";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import {
  createHttpLink,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Profile from "./Pages/Profile/Profile";
import ProfileArticles from "./Pages/Profile/ProfileArticles/ProfileArticles";
import ProfileFavorites from "./Pages/Profile/ProfileFavorites/ProfileFavorites";
import Settings from "./Pages/Settings/Settings";

const httpLink: ApolloLink = createHttpLink({
  uri: "/graphql",
});

const authLink: ApolloLink = setContext((_: any, { headers }: any) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App: React.FC<{}> = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<ProfileArticles />} />
            <Route path="articles" element={<ProfileArticles />} />
            <Route path="favorites" element={<ProfileFavorites />} />
          </Route>
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ApolloProvider>
  );
};

export default App;
