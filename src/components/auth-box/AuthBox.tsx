import './auth-box.scss'
import Input from '../input/Input'
import Button from '../button/Button'
import { Link } from 'react-router'
import { motion } from 'framer-motion'

type AuthBoxProps = {
    
    title: string
    inputs: {
        type: string
        placeholder: string
    }[]
    button: string
    links: {
        name: string
        url: string
    }[]

}

const AuthBox = (props: AuthBoxProps) => {
    return (
        <motion.div
            className='auth-box'
            initial={{  y: -40 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 25
            }}
        >
            <h1>{ props.title }</h1>
            {
                props.inputs.map(input => (
                    <Input type={ input.type } placeholder={ input.placeholder } />
                ))
            }
            <div className='align-items-center'>
                <Button type='primary' text={ props.button } />
            </div>
            <div className="auth-box_links">
                {
                    props.links.map(link => (
                        <Link to={ link.url }><p>{ link.name }</p></Link>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default AuthBox