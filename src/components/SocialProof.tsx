"use client";

import { motion } from "framer-motion";

export function SocialProof() {
  const companies = ["TechCorp", "BuildCo", "DataSys", "CloudNet", "InnovateLabs"];

  return (
    <section className="py-12 border-y border-white/5 bg-steel/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-titanium/60 mb-8">
            Trusted by innovative companies across MENA
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass px-8 py-4 rounded-xl"
              >
                <span className="text-titanium/40 font-semibold tracking-wide">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

