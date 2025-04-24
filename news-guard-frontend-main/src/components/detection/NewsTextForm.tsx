import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, ArrowRight, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface NewsTextFormProps {
  newsText: string;
  isAnalyzing: boolean;
  onChange: (text: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const NewsTextForm = ({
  newsText,
  isAnalyzing,
  onChange,
  onSubmit
}: NewsTextFormProps) => {
  return (
    <Card className="w-full shadow-md animate-fade-in">
      <CardHeader>
        <div className="flex items-center">
          <Shield className="h-6 w-6 text-neutral mr-2" />
          <CardTitle>NewsGuard Analyzer</CardTitle>
        </div>
        <CardDescription>
          Paste a news article, social media post, or any text to analyze its credibility
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <div>
              <Textarea
                placeholder="Enter news text here..."
                className="min-h-[200px] resize-y"
                value={newsText}
                onChange={(e) => onChange(e.target.value)}
                disabled={isAnalyzing}
              />
            </div>
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-neutral hover:bg-neutral-dark"
                disabled={isAnalyzing || !newsText.trim()}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze Text
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsTextForm;
