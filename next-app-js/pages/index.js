import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import IndexMainFooter from '../components/index/IndexMainFooter'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, CardText, CardHeader, CardBody, Button } from 'reactstrap';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Система "Софья"</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Создавай юридические документы на лету...&nbsp;
            {/* <code className={styles.code}>pages/index.js</code> */}
          </p>
          <div>
            <a
              href="/"
              target="_self"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/svg-ooo-fdt-image.svg"
                alt="ООО ФДТ"
                className={styles.vercelLogo}
                width={120}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/svg-sofia-black-image.svg"
            alt="Sofia Logo"
            width={320}
            height={107}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/svg-v-1-0-2-image.svg"
              alt="v1.0.2"
              width={120}
              height={25}
              priority
            />
          </div>
        </div>

        <IndexMainFooter />
      </main>
    </>
  )
}
