import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const portfolioItems = [
  {
    id: 1,
    type: 'image',
    src: 'https://raw.githubusercontent.com/nikheal2886/smm-portfoliowebsite/main/Interior/2.jpg',
    title: 'Interior Design Campaign',
    category: 'Photography',
  },
  {
    id: 2,
    type: 'image',
    src: 'https://raw.githubusercontent.com/nikheal2886/smm-portfoliowebsite/main/Interior/5.JPG',
    title: 'Luxury Spaces',
    category: 'Brand Content',
  },
  {
    id: 3,
    type: 'image',
    src: 'https://raw.githubusercontent.com/nikheal2886/smm-portfoliowebsite/main/Interior/6.jpg',
    title: 'Modern Living',
    category: 'Photography',
  },
  {
    id: 4,
    type: 'image',
    src: 'https://raw.githubusercontent.com/nikheal2886/smm-portfoliowebsite/main/Interior/7.PNG',
    title: 'Social Media Graphics',
    category: 'Design',
  },
  {
    id: 5,
    type: 'image',
    src: 'https://raw.githubusercontent.com/nikheal2886/smm-portfoliowebsite/main/Interior/8.jpg',
    title: 'Lifestyle Content',
    category: 'Photography',
  },
  {
    id: 6,
    type: 'image',
    src: 'https://raw.githubusercontent.com/nikheal2886/smm-portfoliowebsite/main/Interior/9.jpg',
    title: 'Architecture Series',
    category: 'Brand Content',
  },
];

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            All assets in one gallery. Click to enlarge.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl glass">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{item.category}</span>
                  <h4 className="font-heading font-semibold text-lg">{item.title}</h4>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl glass border-border/50 p-0 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>{selectedItem?.title || 'Portfolio Item'}</DialogTitle>
          </VisuallyHidden>
          {selectedItem && (
            <div className="relative">
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{selectedItem.category}</span>
                <h4 className="font-heading font-semibold text-2xl">{selectedItem.title}</h4>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
