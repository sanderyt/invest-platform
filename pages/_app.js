import "../styles/main.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "@fortawesome/fontawesome-free/js/all";
import "react-vis/dist/main.scss";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AuthProvider } from "../context/auth";
import cookies from "next-cookies";

const fetch = require("node-fetch").default;

const client = new ApolloClient({
  uri: "https://cms-invest-platform.herokuapp.com/graphql",
  fetch,
  cache: new InMemoryCache()
});

const MyApp = ({ Component, pageProps, props, store }) => {
  console.log(store, "proppss");
  return (
    <ApolloProvider client={client}>
      <AuthProvider {...props}>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
};

MyApp.getInitialProps = async ctx => {
  // const cookies = cookie.parse(ctx.ctx.req.headers.cookie);
  // const user = JSON.parse(cookies.user);
  const user = cookies(ctx.ctx).user;
  return {
    user
  };

  // console.log(user.user, "user");
  // return {
  //   props: {
  //     user
  //     // user: { user: { id: "5f297eaba80b8800175e02aa" } }
  //   }
  // };
};

export default MyApp;
