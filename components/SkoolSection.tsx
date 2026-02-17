'use client';

import { motion } from 'framer-motion';
import { Users, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react';
import { skoolData } from '@/lib/data';
import { formatDate, formatNumber } from '@/lib/utils';

export default function SkoolSection() {
  return (
    <section id="skool" className="py-24 bg-gradient-to-b from-black to-purple-900/10">
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
              Join Our Skool Community
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with creators, share knowledge, and grow together in our vibrant community
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                <Users size={24} className="text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{formatNumber(skoolData.memberCount)}</div>
                <div className="text-gray-400 text-sm">Active Members</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                <MessageSquare size={24} className="text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{formatNumber(skoolData.stats.posts)}</div>
                <div className="text-gray-400 text-sm">Community Posts</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl">
                <TrendingUp size={24} className="text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{skoolData.stats.engagement}</div>
                <div className="text-gray-400 text-sm">Engagement Rate</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Featured Posts</h3>
          <div className="space-y-4">
            {skoolData.featuredPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
              >
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-purple-500/50"
          >
            Join Skool Community
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
