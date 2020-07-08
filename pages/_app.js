import "../styles/main.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "@fortawesome/fontawesome-free/js/all";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AuthProvider } from "../context/auth";

const fetch = require("node-fetch").default;

const client = new ApolloClient({
  uri:
    "https://api-eu-central-1.graphcms.com/v2/ckcagy5ev012001ywfhtgchip/master",
  fetch,
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
