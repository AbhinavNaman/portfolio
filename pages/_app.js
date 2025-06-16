import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-black dark:text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}


export default MyApp;
