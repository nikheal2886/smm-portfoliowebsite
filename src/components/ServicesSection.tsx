import { motion } from 'framer-motion';
import { Camera, Film, BarChart3, Palette, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Camera,
    title: 'We Shoot',
    description: 'We create quality, brand-specific, organic content that captures your essence.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Film,
    title: 'We Edit',
    description: 'From high-quality visual assets to engaging short-form video, our content is crafted to stop the scroll.',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: BarChart3,
    title: 'We Manage',
    description: 'Real-time analytics to refine campaigns, ensuring every interaction contributes to your bottom line.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Craft a cohesive visual language that resonates with your audience and stands out.',
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    icon: Target,
    title: 'Strategy',
    description: 'Data-driven social media strategies tailored to your business goals and target audience.',
    gradient: 'from-green-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Measurable growth through engagement optimization and community building.',
    gradient: 'from-orange-500 to-yellow-500',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Core <span className="text-gradient">Velocity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Strategy is our foundation. Execution is our art.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="glass group hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
