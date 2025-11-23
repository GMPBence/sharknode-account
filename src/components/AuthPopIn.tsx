import { motion } from 'framer-motion'

type AuthPopInProps = {

    children: React.ReactNode
    key: string

}

const AuthPopIn = (props: AuthPopInProps) => {
    return (
        <motion.div
            key={ props.key }
            initial={{ scale: .95, y: -40 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 25
            }}
        >
            {
                props.children
            }
        </motion.div>
    )
}

export default AuthPopIn