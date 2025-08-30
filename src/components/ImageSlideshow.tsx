import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageSlideshow() {
const images = [
    {
        id: 1,
        url: 'https://tkahler.com/blog/wp-content/uploads/2016/11/20161121-chicago-syline-sunrise-ba01-hdr-edit-e1480083379266.jpg',
        alt: 'Cityscape Image 1',
        title: 'Urban Landscape 1'
    },
    {
        id: 2,
        url: 'https://i.etsystatic.com/40873921/r/il/75f0f7/5080371486/il_1080xN.5080371486_ql54.jpg',
        alt: 'Cityscape Image 2',
        title: 'Urban Landscape 2'
    },
    {
        id: 3,
        url: 'https://www.guideoftheworld.com/wp-content/uploads/2023/07/Lincoln-Park-Zoo.jpg',
        alt: 'Cityscape Image 3',
        title: 'Urban Landscape 3'
    }
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Image Slideshow</h1>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Photo Gallery</CardTitle>
          <CardDescription className="text-center">
            Navigate through our image collection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                className="w-full h-64 md:h-80 object-cover transition-opacity duration-300"
              />
              
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={goToNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">{images[currentIndex].title}</h3>
              <p className="text-sm text-muted-foreground">
                Image {currentIndex + 1} of {images.length}
              </p>
            </div>
            
            <div className="flex justify-center space-x-2 mt-4">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex
                      ? 'bg-primary'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-center space-x-4 mt-6">
              <Button
                variant="outline"
                onClick={goToPrevious}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={goToNext}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
