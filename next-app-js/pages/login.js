import Head from "next/head"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Heading from "../components/heading"

// export default function Bankruptcy() {
//   <>
//     <Header />
//     <Heading text="Hello, dudes" />
//     <h1>Bankruptcy Start Page - /bankruptcy</h1>
//     <Footer />
//   </>
// }

const Login = () => (
  <>
    <Head>
      <title>Войти в OwlSys</title>
    </Head>
    <Header />
    <Heading text="Login" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, dolorem.</p>
    <Footer />
  </>
)

export default Login