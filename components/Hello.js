import { motion } from 'framer-motion'

const Hello = () => (
		<>
		<motion.div initial='hidden' animate='visible' variants={{
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0
    }
  }
}}>
			<h1>Hello Component</h1>
			
			<style jsx>{`
				h1{color: blue}
			`}</style>
			</motion.div>
		</>



	)

export default Hello
