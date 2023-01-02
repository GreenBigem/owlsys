import styles from '../../styles/Home.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const IndexMainFooter = () => (
    <>
        <div className={styles.grid}>
            <a
            href="/registration"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
            >
            <h2 className={inter.className}>
                Регистрация <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Для начала работу зарегистрируйся в &nbsp;Системе.
            </p>
            </a>

            <a
            href="/login"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
            >
            <h2 className={inter.className}>
                Войти <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Если Вы уже зарегистрированы, то просто&nbsp;войдите в Систему!
            </p>
            </a>

            <a
            href="/prices"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
            >
            <h2 className={inter.className}>
                Стоимость <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Стоимость работы в Системе дешевле Вашего &nbsp;времени.
            </p>
            </a>

            <a
            href="/blog"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
            >
            <h2 className={inter.className}>
                Сообщество <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Обсуждения, улучшения, помощь, а также &nbsp;общение.
            </p>
            </a>
        </div>
    </>
)

export default IndexMainFooter