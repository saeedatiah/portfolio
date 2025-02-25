'use client'
import { motion } from 'framer-motion';
import AutoFlipCard from '../components/AutoFlipCard';

const data = [
  { name: 'Project 1', cost: 9, grad: '#0fcf7b, #0c9f30' },
  { name: 'Project 2', cost: 19, grad: '#f7256e, #cc0c48' },
];


const Projects = () => {
  return (
    <div className="flex justify-center gap-8 py-8">
      {data.map((project, index) => (
        <AutoFlipCard
          key={index}
          name={project.name}
          cost={project.cost}
          grad={project.grad}
          index={index}
        />
      ))}
    </div>
  );
};

export default Projects;