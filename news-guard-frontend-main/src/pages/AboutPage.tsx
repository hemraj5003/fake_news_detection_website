
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Server, 
  Code, 
  Shield, 
  Brain,
  LineChart,
  Share2,
  Users,
  BookOpen 
} from 'lucide-react';

const AboutPage = () => {
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-flex items-center justify-center p-2 bg-white/30 backdrop-blur-sm rounded-full mb-6">
              <Shield className="h-5 w-5 text-neutral mr-2" />
              <span className="text-sm font-medium text-neutral-dark">About NewsGuard</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Fighting Misinformation with AI
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Learn about our mission, the technology behind our fake news detection, and why we're dedicated to creating a more informed world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="lg:grid lg:grid-cols-2 lg:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                At NewsGuard, we're on a mission to combat misinformation and help people make informed decisions about the content they consume. We believe that everyone deserves access to tools that can verify information in an increasingly complex media landscape.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Misinformation can spread rapidly online, shaping opinions and influencing important decisions. Our goal is to empower individuals with AI technology that can help separate fact from fiction, fostering a more informed public discourse.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-neutral text-white">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Protect Truth</h3>
                    <p className="mt-2 text-base text-gray-600">
                      We're committed to protecting truth in media by making fact-checking technology accessible to everyone.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-neutral text-white">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Educate Users</h3>
                    <p className="mt-2 text-base text-gray-600">
                      We help educate users about the characteristics of misleading content and improve media literacy.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-neutral text-white">
                      <Share2 className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Promote Transparency</h3>
                    <p className="mt-2 text-base text-gray-600">
                      We believe in transparency in how our technology works and the datasets we use to train our models.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="mt-10 lg:mt-0"
              variants={fadeIn}
            >
              <div className="relative">
                <div className="aspect-w-5 aspect-h-3 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="Newspapers and digital news"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral/40 to-transparent mix-blend-multiply" />
                </div>
                <div className="absolute left-0 bottom-0 right-0 p-6">
                  <blockquote className="mt-6">
                    <p className="text-lg font-medium text-white">
                      "In a world where misinformation can spread at the speed of light, technology must evolve to help separate truth from fiction."
                    </p>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Model & Dataset Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Our Technology</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Powered by state-of-the-art machine learning algorithms and trained on extensive datasets.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-12 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden relative"
              variants={fadeIn}
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-neutral/10 rounded-lg mb-6">
                  <Brain className="h-8 w-8 text-neutral" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">The AI Model</h3>
                <p className="text-gray-600 mb-4">
                  Our fake news detection system uses a combination of natural language processing (NLP) and deep learning techniques to analyze articles and identify patterns associated with misinformation.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral"></div>
                    </div>
                    <p className="ml-3">Transformer-based architecture for understanding context and nuance</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral"></div>
                    </div>
                    <p className="ml-3">Bi-directional language modeling to capture complex relationships</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral"></div>
                    </div>
                    <p className="ml-3">Feature extraction from linguistic patterns, writing style, and content markers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral"></div>
                    </div>
                    <p className="ml-3">Regular retraining with new examples to improve accuracy</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden relative"
              variants={fadeIn}
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-neutral/10 rounded-lg mb-6">
                  <Database className="h-8 w-8 text-neutral" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">The Dataset</h3>
                <p className="text-gray-600 mb-4">
                  Our models are trained on a diverse and extensive collection of news articles from various sources, carefully labeled to distinguish between reliable and unreliable content.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral"></div>
                    </div>
                    <p className="ml-3">25,000+ manually labeled articles from diverse sources</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral"></div>
                    </div>
                    <p className="ml-3">Incorporates datasets from Kaggle's "Fake News Detection" challenge</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral"></div>
                    </div>
                    <p className="ml-3">Balanced representation of different topics and political orientations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-neutral"></div>
                    </div>
                    <p className="ml-3">Continuously updated with user-reported and feedback-based examples</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Our Tech Stack</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Built with modern technologies to ensure performance, scalability, and security.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              variants={fadeIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-neutral/10 rounded-md mb-4">
                <Code className="h-6 w-6 text-neutral" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Frontend</h3>
              <ul className="space-y-2">
                <li className="text-center text-gray-600">React.js</li>
                <li className="text-center text-gray-600">TypeScript</li>
                <li className="text-center text-gray-600">Tailwind CSS</li>
                <li className="text-center text-gray-600">Framer Motion</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              variants={fadeIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-neutral/10 rounded-md mb-4">
                <Server className="h-6 w-6 text-neutral" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Backend</h3>
              <ul className="space-y-2">
                <li className="text-center text-gray-600">Python</li>
                <li className="text-center text-gray-600">Flask</li>
                <li className="text-center text-gray-600">JWT Authentication</li>
                <li className="text-center text-gray-600">RESTful API</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              variants={fadeIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-neutral/10 rounded-md mb-4">
                <Brain className="h-6 w-6 text-neutral" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">AI/ML</h3>
              <ul className="space-y-2">
                <li className="text-center text-gray-600">TensorFlow</li>
                <li className="text-center text-gray-600">PyTorch</li>
                <li className="text-center text-gray-600">Scikit-learn</li>
                <li className="text-center text-gray-600">Hugging Face Transformers</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              variants={fadeIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-neutral/10 rounded-md mb-4">
                <Database className="h-6 w-6 text-neutral" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Infrastructure</h3>
              <ul className="space-y-2">
                <li className="text-center text-gray-600">MongoDB</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to try it yourself?
            </h2>
            <p className="mt-4 text-xl text-neutral-light max-w-2xl mx-auto">
              Experience our AI-powered fake news detection firsthand.
            </p>
            <div className="mt-8">
              <motion.a 
                href="/detect" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutral bg-white hover:bg-gray-100 md:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Detecting
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
