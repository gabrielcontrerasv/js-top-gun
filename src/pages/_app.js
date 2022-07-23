import '../styles/globals.css'
/*import 'tailwindcss/tailwind.css'*/

function MyApp({ Component, pageProps }) {
  console.log("test")
  return <Component {...pageProps} />
}

export default MyApp
