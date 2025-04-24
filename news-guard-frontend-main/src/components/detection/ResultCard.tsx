import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  RefreshCw,
  Copy,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

type DetectionResult = {
  result: 'real' | 'fake';
  confidence: number;
  explanation: string;
  trusted_source?: {
    trusted: boolean;
    source?: string;
    url?: string;
    error?: string;
  };
};

interface ResultCardProps {
  result: DetectionResult;
  onReset: () => void;
  onCopyText: () => void;
}

const ResultCard = ({ result, onReset, onCopyText }: ResultCardProps) => {
  const isReal = result.result === 'real';
  const confidence = Math.round(result.confidence * 100);
  const [feedbackGiven, setFeedbackGiven] = useState<'agree' | 'disagree' | null>(null);
  
  const handleFeedback = (type: 'agree' | 'disagree') => {
    setFeedbackGiven(type);
    
    toast({
      title: "Thank you for your feedback!",
      description: "Your input helps improve our detection model.",
    });
  };
  
  return (
    <Card className={cn(
      "w-full mt-8 animate-fade-in",
      isReal ? "border-truth/50" : "border-falsehood/50"
    )}>
      <CardHeader className={cn(
        "rounded-t-lg",
        isReal ? "bg-truth/10" : "bg-falsehood/10"
      )}>
        <div className="flex items-center">
          {isReal ? (
            <CheckCircle className="h-6 w-6 text-truth mr-2" />
          ) : (
            <AlertTriangle className="h-6 w-6 text-falsehood mr-2" />
          )}
          <CardTitle>
            {isReal ? "Likely Genuine" : "Potentially Misleading"}
          </CardTitle>
        </div>
        <CardDescription>
          Our AI analysis suggests this content is {isReal ? "likely genuine" : "potentially misleading"}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Confidence</span>
            <span className="text-sm font-medium">{confidence}%</span>
          </div>
          <Progress 
            value={confidence} 
            className={isReal ? "bg-truth/20" : "bg-falsehood/20"}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2 flex items-center">
            <Info className="h-4 w-4 mr-1" />
            Explanation
          </h4>
          <div className="text-gray-700 text-sm bg-gray-50 p-4 rounded-md space-y-2">
            <p>{result.explanation}</p>

            {result.trusted_source?.trusted && result.trusted_source.url && (
              <a
                href={result.trusted_source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                🔗 View Source: {result.trusted_source.source}
              </a>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-2 flex items-center">
            <Info className="h-4 w-4 mr-1" />
            Do you agree with this assessment?
          </h4>
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleFeedback('agree')}
              disabled={feedbackGiven !== null}
              className={feedbackGiven === 'agree' ? 'bg-truth/20 border-truth' : ''}
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              Agree
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleFeedback('disagree')}
              disabled={feedbackGiven !== null}
              className={feedbackGiven === 'disagree' ? 'bg-falsehood/20 border-falsehood' : ''}
            >
              <ThumbsDown className="h-4 w-4 mr-2" />
              Disagree
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onReset}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Analyze New Text
        </Button>
        <Button variant="ghost" onClick={onCopyText}>
          <Copy className="h-4 w-4 mr-2" />
          Copy Text
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
