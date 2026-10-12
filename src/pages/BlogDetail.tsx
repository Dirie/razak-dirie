import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import _ from "lodash";
import {blogs} from "../data/blogs";


const BlogDetail = () => {
  const { slug  } = useParams();
  const blog = _.find(blogs, ['slug', slug])

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl xs:w-full xs:p-2 mx-auto p-4 md:p-8 space-y-6"
    >
      <motion.img
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        src={blog.image}
        alt={blog.title}
        className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
      />
      <motion.h1
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-3xl xs:text-xl md:text-4xl font-bold"
      >
        {blog.title}
      </motion.h1>
      <p className="text-muted-foreground">{blog.date}</p>
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="prose max-w-none"
      >
        <p className="text-lg leading-relaxed whitespace-pre-line ">{parse(blog.content)}</p>
      </motion.div>
    </motion.div>
    
  );
};

export default BlogDetail;