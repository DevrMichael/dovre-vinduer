import React from "react";
import '../sass/index.scss'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function App({ Component, pageProps }) {
 return (<>
 <NavBar />
 <Component {...pageProps} />
 <Footer />
 </>
 )
}

export default App;
