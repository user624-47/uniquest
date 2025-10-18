import { motion } from "framer-motion";

export const AppShowcase = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-padding">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Your Shopping Adventure Awaits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Explore our intuitive interface and start your journey today
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center gap-8 flex-wrap md:flex-nowrap"
          >
            <div className="w-64 h-[500px] glass-card p-2 transform rotate-[-5deg] animate-float">
              <img
                src="/lovable-uploads/80c8dd53-5d3a-4edf-a214-09affc31f91b.png"
                alt="UNIQUEST App Screenshot 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-[500px] glass-card p-2 z-10 scale-110">
              <img
                src="/lovable-uploads/bb0511fc-9e64-4ecc-b466-293149f02208.png"
                alt="UNIQUEST App Screenshot 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-[500px] glass-card p-2 transform rotate-[5deg] animate-float">
              <img
                src="/lovable-uploads/80c8dd53-5d3a-4edf-a214-09affc31f91b.png"
                alt="UNIQUEST App Screenshot 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};