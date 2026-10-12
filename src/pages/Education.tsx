import { motion } from 'framer-motion';
import { GraduationCap, Building, Award } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const educationData = [
  {
    id: 1,
    type: 'University',
    institution: 'University of the witwatersrand',
    degree: 'Master of Science in Computer Science',
    year: '2020-2022',
    description: 'Specialized in Artificial Intelligence and Machine Learning',
    icon: GraduationCap,
    achievements: ['Dean\'s List', 'Research Assistant', 'AI Lab Lead']
  },
  {
    id: 2,
    type: 'University',
    institution: 'University of the witwatersrand',
    degree: 'Bachelor of Science in Computer Science & Applied math',
    year: '2016-2020',
    description: 'Focus on Software Engineering and Artificial Intelligence',
    icon: GraduationCap,
    achievements: ['Merit award']
  },
  {
    id: 3,
    type: 'University',
    institution: 'Benadir University',
    degree: 'Bachelor of Science in Computer Science',
    year: '2016-2020',
    description: 'Focus on Software Engineering and Systems Design',
    icon: GraduationCap,
    achievements: ['First Class Honors', 'Programming Club President']
  },
  {
    id: 4,
    type: 'High School',
    institution: 'Kaah high school',
    degree: 'High School Diploma',
    year: '2012-2016',
    description: 'Advanced Placement in Mathematics and Computer Science',
    icon: Building,
    achievements: ['First Class Honors', 'Math Olympiad Gold Medal']
  }
];

const Education = () => {
  return (
    <div className="max-w-4xl xs:w-full mx-auto px-4 xs:px-2 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-2xl xs:text-xl font-bold text-center mb-12"
      >
        Educational Journey
      </motion.h1>

      <div className="space-y-8">
        {educationData.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center xs:items-start space-x-4">
                    <div className="p-3 xs:p-2 bg-primary/10 rounded-full">
                      <Icon className="w-6 h-6 xs:h-3 xs:w-3 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl xs:text-base sm:text-xl font-semibold">{edu.institution}</h2>
                      <p className="text-muted-foreground">{edu.year}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-16 xs:ml-0">
                    <h3 className="text-lg xs:text-base  font-medium mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + ((i + 1) * 0.1) }}
                          className="flex items-center xs:items-start space-x-2"
                        >
                          <Award className="w-4 h-4 text-primary" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;