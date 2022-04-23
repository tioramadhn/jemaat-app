import ButtonAppBar from "../components/Appbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ButtonAppBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
