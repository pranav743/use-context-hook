import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FeedbackData {
  name: string;
  email: string;
  feedback: string;
}

export default function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackData>({
    name: '',
    email: '',
    feedback: ''
  });
  const [submittedData, setSubmittedData] = useState<FeedbackData[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.feedback) {
      setSubmittedData(prev => [...prev, formData]);
      setFormData({ name: '', email: '', feedback: '' });
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Feedback Form</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Submit Feedback</CardTitle>
            <CardDescription>We'd love to hear your thoughts!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium mb-2">
                  Feedback
                </label>
                <Textarea
                  id="feedback"
                  name="feedback"
                  placeholder="Share your feedback..."
                  value={formData.feedback}
                  onChange={handleInputChange}
                  required
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full">
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Submitted Feedback</CardTitle>
            <CardDescription>Recent feedback submissions</CardDescription>
          </CardHeader>
          <CardContent>
            {submittedData.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No feedback submitted yet.
              </p>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {submittedData.map((data, index) => (
                  <div key={`${data.email}-${index}`} className="border rounded-lg p-4 bg-muted/50">
                    <div className="font-semibold text-sm">Name: {data.name}</div>
                    <div className="text-sm text-muted-foreground">Email: {data.email}</div>
                    <div className="mt-2 text-sm">
                      <strong>Feedback:</strong>
                      <p className="mt-1">{data.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
