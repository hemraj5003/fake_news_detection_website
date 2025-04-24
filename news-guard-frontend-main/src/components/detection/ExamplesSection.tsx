
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const ExamplesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Example Analyses
          </h2>
          <p className="mt-2 text-gray-600">
            See how our detector evaluates different types of content
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="w-full shadow-sm border-truth/50">
            <CardHeader className="bg-truth/10 rounded-t-lg">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-truth mr-2" />
                <CardTitle className="text-lg">Verified News Example</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 text-sm">
                "NASA's Perseverance rover has collected its 20th rock sample from Mars, continuing its mission to gather material that will eventually be returned to Earth for detailed study."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-2 h-2 rounded-full bg-truth mr-2" />
                <span className="text-sm text-truth-dark font-medium">Verified (98% confidence)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full shadow-sm border-falsehood/50">
            <CardHeader className="bg-falsehood/10 rounded-t-lg">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-falsehood mr-2" />
                <CardTitle className="text-lg">Misleading Content Example</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 text-sm">
                "Scientists confirm that common household microwave ovens emit radiation that alters the DNA of food, causing widespread health problems that have been covered up by the food industry."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-2 h-2 rounded-full bg-falsehood mr-2" />
                <span className="text-sm text-falsehood-dark font-medium">Misleading (95% confidence)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
