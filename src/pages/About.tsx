import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, User, MapPin, Calendar, BookOpen,MessageCircleMore } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const whatsapp = MessageCircleMore
  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4 xs:px-1">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <div className="relative inline-block md:pt-3">
          <img
            src="assets/images/p1.png"
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover border-4 border-primary/20"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full"
          >
            <User size={20} />
          </motion.div>
        </div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-primary sm:text-2xl xs:text-2xl"
        >
        Abdulrazak A. Dirie
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center xs:justify-start space-x-2 text-muted-foreground xs:flex-col xs:space-y-2"
        >
          <div className='flex items-center justify-start space-x-2'>
          <MapPin size={18} />
          <span className='xs:text-xs'>East Africa, Mogadishu & Nairobi</span>
          <span className="mx-2 sm:hidden xs:hidden">•</span>

          </div>
          <div className='flex items-center justify-center space-x-2'>
          <Calendar size={18} />
          <span className='xs:text-xs'>Available for opportunities</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-6"
      >
        <Card className="overflow-hidden">
          <CardContent className="p-6 xs:py-6 xs:px-2">
            <h2 className="text-2xl xs:text-xl sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="text-primary" />
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Experienced technology professional with over 10 years of expertise in software engineering and the development of cutting-edge, artificial intelligence-powered applications. Passionate about leveraging innovative technologies to solve complex problems and deliver impactful solutions. Skilled in designing scalable systems, optimizing performance, and driving AI-driven product development. A collaborative team player with a proven track record of leading cross-functional projects and delivering high-quality results in fast-paced environments. Dedicated to continuous learning and staying at the forefront of emerging tech trends to create transformative digital experiences.
            </p>
          </CardContent>
        </Card>

        {/* Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Years of Experience", value: "10+" },
            { title: "Projects Completed", value: "50+" },
            { title: "Happy Clients", value: "30+" },
            { title: "Countries Worked With", value: "5+" }
          ].map((fact, index) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{fact.value}</h3>
                  <p className="text-sm text-muted-foreground">{fact.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Social Links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center space-x-4"
      >
        {[
          { icon: Github, href: "https://github.com/dirie", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/abdulrazak-a-d-84088611a/", label: "LinkedIn" },
          { icon: Twitter, href: "https://x.com/AbdulrazakDirie", label: "Twitter" },
          { icon: Mail, href: "mailto:abdulrazak.dirie@gmail.com", label: "Email" },
          { icon: whatsapp, href: "https://wa.me/+252615991378", label: "whatsapp" }
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </motion.section>
    </div>
  );
};

export default About;