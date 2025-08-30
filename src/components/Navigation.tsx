import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, ImageIcon, CheckSquare } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    {
      path: '/feedback',
      label: 'Feedback Form',
      icon: MessageSquare,
      description: 'Submit and view feedback'
    },
    {
      path: '/slideshow',
      label: 'Image Slideshow',
      icon: ImageIcon,
      description: 'Browse through images'
    },
    {
      path: '/todos',
      label: 'Todo List',
      icon: CheckSquare,
      description: 'Manage your tasks'
    }
  ];

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">React Apps Collection</h1>
        <p className="text-muted-foreground">
          Explore three different apps built with ShadCN and React Router
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Card key={item.path} className={`transition-all duration-200 hover:shadow-md ${
              isActive ? 'ring-2 ring-primary' : ''
            }`}>
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Icon className="h-12 w-12 mx-auto text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <Button asChild className="w-full">
                  <Link to={item.path}>
                    {isActive ? 'Current Page' : 'Open App'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Built with React, TypeScript, ShadCN, and Tailwind CSS
        </p>
      </div>
    </div>
  );
}
