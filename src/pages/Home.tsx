import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <section className="text-center space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
        >
          Welcome to my portfolio
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Crafting Digital Experiences
        </motion.h1>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Featured Project"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <span className="text-sm text-muted-foreground">Featured Project</span>
          <h2 className="text-2xl font-semibold">Innovation Through Design</h2>
          <p className="text-muted-foreground leading-relaxed">
            Exploring the intersection of technology and design to create meaningful digital experiences that inspire and engage users across platforms.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;