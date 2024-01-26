import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <div>
    {/* <h1>hello</h1> */}
    <Component {...pageProps} />
  </div>;
}
