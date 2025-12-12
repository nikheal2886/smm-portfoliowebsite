import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Swapnil Karad',
    role: 'Director of Strategy & Founding Partner',
    description: 'Swapnil architects the high-level strategies that define client growth paths, ensuring every campaign is aligned with market opportunity and scalable impact.',
    initials: 'SK',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Nikhil Karad',
    role: 'Chief Executive Officer (CEO)',
    description: 'As the CEO, Nikhil drives the company\'s vision, operations, and business development, fostering a culture of excellence and client-centric innovation.',
    initials: 'NK',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    name: 'Deesha Jadhav',
    role: 'Lead Content Strategist & Editorial Director',
    description: 'Deesha leads the creative team, ensuring all content is expertly crafted, on-brand, and optimized for maximum engagement across all social platforms.',
    initials: 'DJ',
    gradient: 'from-cyan-600 to-blue-600',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The Architects of <span className="text-gradient">KARADS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the strategic minds and creative forces dedicated to amplifying your brand's presence and impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 h-full flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="font-heading text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {member.description}
                </p>
                <div className="flex gap-3 mt-6">
                  <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
