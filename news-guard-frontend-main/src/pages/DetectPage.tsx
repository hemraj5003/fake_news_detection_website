
import React, { useState } from 'react';
import { detectNews } from '@/api/newsApiService';
import { useToast } from "@/hooks/use-toast";
import HeroSection from '@/components/detection/HeroSection';
import NewsTextForm from '@/components/detection/NewsTextForm';
import ResultCard from '@/components/detection/ResultCard';
import ExamplesSection from '@/components/detection/ExamplesSection';

type DetectionResult = {
  result: 'real' | 'fake';
  confidence: number;
  explanation: string;
};

const DetectPage = () => {
  const [newsText, setNewsText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | DetectionResult>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to analyze.",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnalyzing(true);
    setResult(null);
    
    try {
      const response = await detectNews(newsText);
      setResult(response);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze the text. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(newsText);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard.",
    });
  };

  const handleReset = () => {
    setNewsText('');
    setResult(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="py-12 bg-gray-50 flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsTextForm 
            newsText={newsText}
            isAnalyzing={isAnalyzing}
            onChange={setNewsText}
            onSubmit={handleSubmit}
          />

          {result && (
            <ResultCard 
              result={result}
              onReset={handleReset}
              onCopyText={handleCopyText}
            />
          )}
        </div>
      </section>

      <ExamplesSection />
    </div>
  );
};

export default DetectPage;
