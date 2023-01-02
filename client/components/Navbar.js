import {useRouter} from 'next/router'
import Link from "next/link"
// import styles from
import Image from "next/image"

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Bankruptcy', path: '/bankruptcy'},
    {id: 3, title: 'Login', path: '/login'},
    {id: 4, title: 'Registration', path: '/registration'},
]

const NavBar = () => {

    const {pathname} = useRouter()

    return (
        <nav>
            <div>
                OWLSYS
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRn9zI8G6iMq0jNJ7EJDLY1YChIb8XdbwxXMxqVw2E9ldxccwyhqGt_CpuOVzYnn_Cs644l4irwKAPMNU7DgFyUGEVjmBhpZ-6MxNOsQxOLliHPhjxoK-os&usqp=CAE" width="60" height="60" alt="Logo" />
                {/* <Image
                    src="/"
                    width={60}
                    height={60}
                    alt="Logo"
                    placeholder="blur"
                /> */}
            </div>
            <div>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}>{title}</Link>
                ))}
            </div>
        </nav>
    )
}

export default NavBar