
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-white/30 backdrop-blur-sm rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Shield className="h-5 w-5 text-neutral mr-2" />
            <span className="text-sm font-medium text-neutral-dark">AI-Powered News Verification</span>
          </motion.div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              News Detection Tool
            </motion.span>
            <motion.span 
              className="block text-neutral"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Fight Misinformation
            </motion.span>
          </h1>
          
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Enter any news article or claim to analyze its credibility. 
            Our AI model helps you identify misleading information in seconds.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link to="/detect">
              <Button className="bg-neutral hover:bg-neutral-dark mr-4 group">
                Try It Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="hover:bg-white/60">
                Learn More
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.div 
              className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm w-full md:w-56"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-semibold text-gray-900">Accurate Detection</h3>
              <p className="text-sm text-gray-600 mt-1">Our model is trained on thousands of verified articles</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm w-full md:w-56"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-semibold text-gray-900">Instant Results</h3>
              <p className="text-sm text-gray-600 mt-1">Get verification results in seconds</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm w-full md:w-56"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-semibold text-gray-900">Fight Fake News</h3>
              <p className="text-sm text-gray-600 mt-1">Empower yourself against misinformation</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
