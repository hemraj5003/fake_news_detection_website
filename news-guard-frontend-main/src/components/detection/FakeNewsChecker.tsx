import React, { useState } from 'react';
import NewsTextForm from './NewsTextForm';
import ResultCard from './ResultCard';
import { detectNews, loginUser } from 'src/api/newsApiService';
import { toast } from '@/hooks/use-toast';

const FakeNewsChecker = () => {
  const [newsText, setNewsText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectionResult, setDetectionResult] = useState<{
    result: 'real' | 'fake';
    confidence: number;
    explanation: string;
  } | null>(null);

  const handleLogin = async () => {
    try {
      await loginUser({ username: 'admin', password: 'admin123' });
      toast({ title: 'Logged in successfully!' });
    } catch {
      toast({
        title: 'Login Failed',
        description: 'Check your credentials or server.',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsText.trim()) return;

    const token = localStorage.getItem('token');
    if (!token) {
      await handleLogin();
    }

    setIsAnalyzing(true);
    setDetectionResult(null);

    try {
      const result = await detectNews(newsText);
      setDetectionResult({
        result: result.result,
        confidence: result.confidence,
        explanation: result.explanation,
      });
    } catch (error) {
      toast({
        title: 'Analysis Failed',
        description: 'Unable to analyze the news at the moment.',
        variant: 'destructive',
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setNewsText('');
    setDetectionResult(null);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(newsText);
      toast({
        title: 'Copied!',
        description: 'News text copied to clipboard.',
      });
    } catch {
      toast({
        title: 'Copy Failed',
        description: 'Unable to copy the text.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {!detectionResult ? (
        <NewsTextForm
          newsText={newsText}
          isAnalyzing={isAnalyzing}
          onChange={setNewsText}
          onSubmit={handleSubmit}
        />
      ) : (
        <ResultCard
          result={detectionResult}
          onReset={handleReset}
          onCopyText={handleCopy}
        />
      )}
    </div>
  );
};

export default FakeNewsChecker;
