'use client'
import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'React', level: 90, color: '#61DBFB' },
  { name: 'JavaScript', level: 85, color: '#F7DF1E' },
  { name: 'CSS', level: 80, color: '#2965F1' },
  { name: 'Node.js', level: 70, color: '#68A063' },
  { name: 'TypeScript', level: 75, color: '#007ACC' },
  { name: 'Git', level: 85, color: '#F05032' },
];

const softSkills = [
  { name: 'Communication', level: 80, color: '#4CAF50' },
  { name: 'Teamwork', level: 85, color: '#FFC107' },
  { name: 'Problem Solving', level: 90, color: '#00BCD4' },
  { name: 'Leadership', level: 75, color: '#E91E63' },
  { name: 'Creativity', level: 80, color: '#9C27B0' },
  { name: 'Adaptability', level: 70, color: '#FF5722' },
];

const SkillCard = ({ name, level, color, index }: { name: string; level: number; color: string; index: number }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center p-6"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      {/* دائرة المهارة */}
      <motion.div
        className="relative flex justify-center items-center w-32 h-32 rounded-full overflow-hidden"
        style={{ background: `${color}30` }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          duration: 0.8,
          delay: index * 0.3,
        }}
      >
        <motion.div
          className="absolute w-28 h-28 rounded-full"
          style={{ background: color }}
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 100 - (level / 100) * 100 }}
          transition={{ duration: 1 }}
        />
        
        {/* اسم المهارة داخل الدائرة */}
        <motion.h3
          className="text-white text-xl font-semibold z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          {name}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="grid grid-cols-3 gap-8 py-8">
      <div className="col-span-3 text-center mb-8">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Technical Skills
        </motion.h2>
      </div>
      {technicalSkills.map((skill, index) => (
        <SkillCard key={index} name={skill.name} level={skill.level} color={skill.color} index={index} />
      ))}
      
      <div className="col-span-3 text-center mb-8 mt-16">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Soft Skills
        </motion.h2>
      </div>
      {softSkills.map((skill, index) => (
        <SkillCard key={index} name={skill.name} level={skill.level} color={skill.color} index={index} />
      ))}
    </div>
  );
};

export default Skills;
