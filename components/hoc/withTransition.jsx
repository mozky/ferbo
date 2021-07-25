import { motion, AnimatePresence } from "framer-motion"

const withTransition = (Component, key) => {
  console.log(key)
  return () => (
    <AnimatePresence>
      <motion.div
        key={`inside-page-${key}`}
        className="inside-page slide-in"
        initial={{ top: '-100%' }}
        animate={{ top: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
      >
        <Component />
      </motion.div>
    </AnimatePresence>
  )
}

export default withTransition