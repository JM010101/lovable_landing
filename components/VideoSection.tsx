'use client';

import { motion } from 'framer-motion';
import { Play, Clock, Eye } from 'lucide-react';
import { videos } from '@/lib/data';
import Image from 'next/image';

export default function VideoSection() {
  return (
    <section id="videos" className="py-24 bg-gradient-to-b from-purple-900/10 to-black">
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
              Latest Videos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn from our latest tutorials, guides, and insights
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
                {/* Thumbnail */}
                <div className="relative w-full h-full">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Play size={24} className="text-black ml-1" fill="currentColor" />
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/80 rounded-md backdrop-blur-sm">
                    <Clock size={14} className="text-white" />
                    <span className="text-white text-sm font-medium">{video.duration}</span>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-4">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{new Date(video.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  {video.views && (
                    <>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{video.views.toLocaleString()} views</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
