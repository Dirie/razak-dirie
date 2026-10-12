import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {blogs} from "../data/blogs";
import  parse  from 'html-react-parser';

const Blog = () => {
  return (
    <div className="max-w-7xl xs:w-full xs:p-2 mx-auto p-4 md:p-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        Blog Posts
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`${blog.slug}`}>
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader className="p-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 xs:text-xl">{blog.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">{blog.date}</p>
                  <p className="text-muted-foreground">{parse(blog.content.substring(0,50))}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;