'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Code, BookOpen } from 'lucide-react';
import { downloads } from '@/lib/data';

const iconMap = {
  pdf: FileText,
  template: Code,
  guide: BookOpen,
};

export default function DownloadsSection() {
  return (
    <section id="downloads" className="py-24 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Free Downloads
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get access to premium resources, templates, and guides - completely free
          </p>
        </motion.div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((download, index) => {
            const IconComponent = iconMap[download.type];
            
            return (
              <motion.div
                key={download.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:bg-white/10 hover:border-purple-500/50 transition-all">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <IconComponent size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-purple-300 transition-colors">
                    {download.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-1">
                    {download.description}
                  </p>

                  {/* Download Button */}
                  <motion.a
                    href={download.downloadUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all group/btn"
                  >
                    <Download size={18} className="group-hover/btn:translate-y-0.5 transition-transform" />
                    Download Free
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
