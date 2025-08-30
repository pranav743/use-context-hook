import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/feedback':
        return 'Feedback Form';
      case '/slideshow':
        return 'Image Slideshow';
      case '/todos':
        return 'Todo List';
      default:
        return 'Home';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {!isHomePage && (
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              <div>
                <h2 className="text-xl font-semibold">{getPageTitle()}</h2>
                {!isHomePage && (
                  <p className="text-sm text-muted-foreground">
                    React Apps Collection
                  </p>
                )}
              </div>
            </div>
            
            {!isHomePage && (
              <Button variant="outline" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}
