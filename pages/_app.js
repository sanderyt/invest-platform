import "../styles/main.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "@fortawesome/fontawesome-free/js/all";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AuthProvider } from "../context/auth";

const fetch = require("node-fetch").default;

const client = new ApolloClient({
  uri: "https://cms-invest-platform.herokuapp.com/graphql",
  fetch,
  cache: new InMemoryCache()
});

const MyApp = ({ Component, pageProps, props }) => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider {...props}>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
};

// MyApp.getInitialProps = async ctx => {
//   // const cookies = cookie.parse(ctx.ctx.req.headers.cookie);
//   // console.log(cookies, "cookies");
//   return {
//     props: {
//       // user: cookies,
//       user: { user: { id: "5f297eaba80b8800175e02aa" } }
//     }
//   };
// };

export default MyApp;
