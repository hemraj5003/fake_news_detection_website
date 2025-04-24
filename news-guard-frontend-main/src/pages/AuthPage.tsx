import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { loginUser, registerUser } from '../api/newsApiService';

type FormData = {
  name?: string;
  email: string;
  password: string;
};

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!isLogin && !formData.name?.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.password.trim()) {
      toast({
        title: "Password required",
        description: "Please enter your password.",
        variant: "destructive",
      });
      return false;
    }

    if (!isLogin && formData.password.length < 8) {
      toast({
        title: "Password too short",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const credentials = {
        username: formData.email,
        password: formData.password,
      };

      if (isLogin) {
        await loginUser(credentials);
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
      } else {
        await registerUser(credentials);
        await loginUser(credentials); // auto-login after registration
        toast({
          title: "Registration successful",
          description: "Account created and logged in.",
        });
      }

      navigate('/');
    } catch (error: any) {
      toast({
        title: "Authentication failed",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="max-w-md mx-auto w-full px-4 sm:px-6">
        <motion.div
          className="bg-white shadow-xl rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-2 bg-neutral/10 rounded-full mb-4">
                <Shield className="h-6 w-6 text-neutral mr-2" />
                <span className="text-lg font-medium text-neutral-dark">
                  {isLogin ? "Welcome Back" : "Join NewsGuard"}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {isLogin ? "Log in to your account" : "Create a new account"}
              </h2>
              <p className="mt-2 text-gray-600">
                {isLogin
                  ? "Enter your credentials to access your account"
                  : "Sign up to start detecting fake news and save your history"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {!isLogin && (
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Full Name
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="email" className="text-gray-700">
                  Email Address
                </Label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={
                      isLogin ? "Enter your password" : "Create a strong password"
                    }
                    className="pl-10"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading
                    ? isLogin
                      ? "Logging in..."
                      : "Signing up..."
                    : isLogin
                    ? "Log In"
                    : "Sign Up"}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
