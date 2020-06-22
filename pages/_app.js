import "../styles/main.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import { AuthProvider } from "../context/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
