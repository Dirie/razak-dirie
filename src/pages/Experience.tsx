import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const experienceData = [
  {
    id: 1,
    company: 'Origon Inc',
    position: 'Senior Software Engineer | Senior solution architecture',
    period: '2021 - Present',
    location: 'Mogadishu - Benadir, Somalia',
    description: 'Led development of software development, cloud-based solutions and microservices architecture.',
    achievements: [
      'Architected and implemented scalable backend services using Go and Python',
      'Reduced system latency by 40% through optimization',
      'Mentored junior developers and led technical interviews'
    ]
  },
  {
    id: 2,
    company: 'Horn Technology',
    position: 'Software Developer',
    period: '2016 - 2021',
    location: 'Nairobi, East Africa',
    description: 'Focused on Software development.',
    achievements: [
      'Built high-performance web applications using React',
      'Improved checkout process efficiency by 25%',
      'Implemented A/B testing framework',
      'Implemented CI/CD pipelines for enterprise clients',
      'Contributed to open-source projects'
    ]
  }
];

const Experience = () => {
  return (
    <div className="max-w-4xl xs:w-full mx-auto px-4 xs:px-2 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl xs:text-xl font-bold text-center mb-12"
      >
        Professional Experience
      </motion.h1>

      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex xs:flex-col items-center xs:items-start justify-between xs:space-y-2">
                  <div className="flex items-center xs:items-start  space-x-4">
                    <div className="p-3 xs:p-2 bg-primary/10 rounded-full xs:hidden">
                      <Briefcase className="w-6 h-6 xs:h-3 xs:w-3 text-primary " />
                    </div>
                    <div>
                      <h2 className="text-2xl xs:text-xl font-semibold">{exp.company}</h2>
                      <p className="text-xl xs:text-sm text-muted-foreground">{exp.position}</p>
                    </div>
                  </div>
                  <div className="text-right ">
                    <div className="flex items-center text-muted-foreground xs:text-sm">
                      <Calendar className="w-4 h-4 mr-2 xs:hidden" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground mt-1 xs:text-sm">
                      <MapPin className="w-4 h-4 mr-2 xs:hidden" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + ((i + 1) * 0.1) }}
                      className="flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;