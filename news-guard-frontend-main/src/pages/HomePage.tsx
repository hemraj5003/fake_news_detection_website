
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Shield, 
  AlertTriangle, 
  Star, 
  BarChart4, 
  Brain,
  FileCheck,
  Users,
  BookOpen
} from 'lucide-react';

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50, delay: 0.2 }
    }
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Detect fake news</span>
                <motion.span 
                  className="block text-neutral"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  with AI precision
                </motion.span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                NewsGuard helps you identify misleading information with our advanced artificial intelligence model, trained on thousands of verified news articles.
              </p>
              <motion.div 
                className="mt-10 flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Link to="/detect">
                  <Button className="bg-neutral hover:bg-neutral-dark px-8 py-3 text-lg group">
                    Try Fake News Detector
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="px-8 py-3 text-lg">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-12 lg:mt-0"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-64 h-64 bg-blue-400 rounded-full opacity-10" />
                </motion.div>
                <div className="relative">
                  <motion.div 
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-8 sm:p-10">
                      <div className="flex items-center justify-center w-16 h-16 bg-neutral-light rounded-full mx-auto">
                        <Shield className="w-8 h-8 text-neutral" />
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-2xl font-medium text-gray-900">
                          Verified News
                        </h3>
                        <p className="mt-2 text-base text-gray-600">
                          "The new climate change report was released by scientists yesterday with updated findings."
                        </p>
                        <motion.div 
                          className="mt-4 inline-flex items-center px-4 py-2 bg-truth/20 rounded-full"
                          animate={{ 
                            y: [0, -3, 0],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 2,
                            delay: 1
                          }}
                        >
                          <div className="w-3 h-3 rounded-full bg-truth mr-2" />
                          <span className="text-truth-dark font-medium">Verified (96%)</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="mt-6 bg-white rounded-2xl shadow-xl overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-8 sm:p-10">
                      <div className="flex items-center justify-center w-16 h-16 bg-falsehood-light rounded-full mx-auto">
                        <AlertTriangle className="w-8 h-8 text-falsehood" />
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-2xl font-medium text-gray-900">
                          Fake News
                        </h3>
                        <p className="mt-2 text-base text-gray-600">
                          "Scientists discover that 5G networks are causing the spread of viral infections worldwide."
                        </p>
                        <motion.div 
                          className="mt-4 inline-flex items-center px-4 py-2 bg-falsehood/20 rounded-full"
                          animate={{ 
                            y: [0, -3, 0],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 2,
                            delay: 1.5
                          }}
                        >
                          <div className="w-3 h-3 rounded-full bg-falsehood mr-2" />
                          <span className="text-falsehood-dark font-medium">Misleading (92%)</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              variants={fadeIn}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              We're dedicated to empowering people with AI tools to identify misinformation and make informed decisions.
            </motion.p>
          </div>

          <motion.div 
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerChildren}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden relative"
              variants={cardHover}
              whileHover="hover"
              initial="rest"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md mb-4">
                  <FileCheck className="h-6 w-6 text-neutral" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Accuracy Matters</h3>
                <p className="text-gray-600">Our model is trained on verified news sources to ensure reliable fact-checking.</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral to-neutral-light"></div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden relative"
              variants={cardHover}
              whileHover="hover"
              initial="rest"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md mb-4">
                  <Users className="h-6 w-6 text-neutral" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Accessible For All</h3>
                <p className="text-gray-600">We believe everyone deserves free access to tools that combat misinformation.</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral to-neutral-light"></div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden relative"
              variants={cardHover}
              whileHover="hover"
              initial="rest"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md mb-4">
                  <BookOpen className="h-6 w-6 text-neutral" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
                <p className="text-gray-600">Our AI models improve over time with your feedback to better identify deception.</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral to-neutral-light"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              variants={fadeIn}
            >
              How NewsGuard Works
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Our sophisticated AI model analyzes text to identify patterns of misinformation.
            </motion.p>
          </div>

          <motion.div 
            className="mt-20"
            variants={staggerChildren}
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div 
                className="pt-6 card-hover"
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-neutral rounded-md shadow-lg">
                        <Brain className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-gray-900">
                      Deep Learning
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      Our model uses advanced neural networks trained on thousands of verified and fake news articles.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="pt-6 card-hover"
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-neutral rounded-md shadow-lg">
                        <BarChart4 className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-gray-900">
                      Confidence Scores
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      Every analysis comes with a confidence percentage to help you understand reliability.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="pt-6 card-hover"
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-neutral rounded-md shadow-lg">
                        <Star className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-gray-900">
                      Detailed Explanations
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      Get insights into why a news article might be misleading or why it seems credible.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-neutral py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to spot fake news?
            </h2>
            <p className="mt-4 text-xl text-neutral-light max-w-2xl mx-auto">
              Try our AI-powered detector now and see for yourself how accurate it is.
            </p>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/detect">
                <Button className="px-8 py-3 text-lg bg-white text-neutral-dark hover:bg-gray-100 group">
                  Start Detecting
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
