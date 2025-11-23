import { motion } from 'framer-motion'

type AuthSlideInProps = {

    children: any
    key: string

}

const AuthSlideIn = (props: AuthSlideInProps) => {
    return (
        <motion.div
            initial={{ opacity: .4, x: 80 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 160,
                damping: 25
            }}
            key={ props.key }
        >
            {
                props.children
            }
        </motion.div>
    )
}

export default AuthSlideIn