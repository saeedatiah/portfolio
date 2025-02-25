'use client'
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const socialMediaLinks = [
  { name: 'Facebook', icon: <FaFacebook />, link: 'https://facebook.com' },
  { name: 'Twitter', icon: <FaTwitter />, link: 'https://twitter.com' },
  { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://linkedin.com' },
  { name: 'Instagram', icon: <FaInstagram />, link: 'https://instagram.com' },
  { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com' },
];

const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center space-x-8 py-16">
      {socialMediaLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-800"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 15,
            delay: index * 0.2,
            duration: 0.8,
          }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMedia;