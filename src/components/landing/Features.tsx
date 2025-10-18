import { motion } from "framer-motion";
import { Trophy, ShoppingBag, Users, Gift } from "lucide-react";

const features = [
  {
    icon: <Trophy className="w-8 h-8 text-uniquest-purple" />,
    title: "Compete & Win",
    description: "Join exciting competitions and climb the leaderboard to earn exclusive rewards.",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-uniquest-purple" />,
    title: "Shop Unique Items",
    description: "Discover and purchase exclusive items from our carefully curated marketplace.",
  },
  {
    icon: <Users className="w-8 h-8 text-uniquest-purple" />,
    title: "Community Trading",
    description: "Connect with other players to trade items and build your collection.",
  },
  {
    icon: <Gift className="w-8 h-8 text-uniquest-purple" />,
    title: "Daily Rewards",
    description: "Log in daily to earn bonus points and unlock special achievements.",
  },
];

export const Features = () => {
  return (
    <section className="section-padding bg-uniquest-gray">
      <div className="container-padding">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose UNIQUEST?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Experience shopping like never before with our unique gamified platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover-card"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};