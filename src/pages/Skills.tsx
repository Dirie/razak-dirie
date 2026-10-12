import { motion } from 'framer-motion';
import { Code, Database, Cloud, Globe, Terminal, Cpu } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const skillsData = [
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'php','laravel','wordpress', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    category: 'Backend Development',
    icon: Code,
    skills: ['Node.js', 'Python', 'Java', 'Go', 'Express', 'Django']
  },
  {
    category: 'Database Technologies',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'MSSQL']
  },
  {
    category: 'Cloud & DevOpsSec',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GCP', "Ceybersecurity"]
  },
  {
    category: 'Programming Languages',
    icon: Terminal,
    skills: ['JavaScript', 'Python', 'Java', 'Go', 'C++', 'C#']
  },
  {
    category: 'Tools & Technologies',
    icon: Cpu,
    skills: ['Git', 'VS Code', 'Postman', 'Linux']
  }
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl xs:text-xl font-bold text-center mb-12"
      >
        Technical Skills
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 xs:hidden bg-primary/10 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl xs:text-base font-semibold">{category.category}</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (i * 0.05) }}
                        className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
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

export default Skills;