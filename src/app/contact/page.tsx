'use client';

import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend, FiMessageSquare } from 'react-icons/fi';
import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link with form data
    const { name, email, subject, message } = formState;
    const mailtoLink = `mailto:leogong99@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'leogong99@gmail.com',
      link: 'mailto:leogong99@gmail.com',
      description: 'Send me an email directly',
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/javascriptguru',
      link: 'https://linkedin.com/in/javascriptguru',
      description: 'Connect on LinkedIn',
    },
    {
      icon: FiGithub,
      title: 'GitHub',
      value: 'github.com/jinggong',
      link: 'https://github.com/jinggong',
      description: 'Check out my code',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Seattle, WA',
      link: null,
      description: 'Based in Seattle',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-24"
      >
        <div className="inline-flex items-center gap-3 bg-white border-2 border-zinc-200 rounded-xl px-6 py-3 mb-8">
          <FiMessageSquare className="text-accent" size={24} />
          <span className="font-heading font-bold text-lg text-primary">Get In Touch</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-primary mb-8 tracking-tight">
          Let's Connect
        </h1>
        <p className="text-2xl text-zinc-600 max-w-4xl mx-auto leading-relaxed">
          Want to discuss technology, projects, or just connect? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-10 md:p-12 border-2 border-zinc-200 hover:border-accent transition-colors duration-200"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Send a Message</h2>
            <p className="text-lg text-zinc-600 mb-8">
              Fill out the form below and it will open in your email client.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-heading font-semibold text-primary mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-zinc-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 outline-none font-medium text-primary placeholder:text-zinc-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-heading font-semibold text-primary mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-zinc-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 outline-none font-medium text-primary placeholder:text-zinc-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-base font-heading font-semibold text-primary mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-zinc-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 outline-none font-medium text-primary placeholder:text-zinc-400"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-heading font-semibold text-primary mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl border-2 border-zinc-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 outline-none resize-none font-medium text-primary placeholder:text-zinc-400"
                  placeholder="Tell me about what you'd like to discuss..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-5 bg-accent text-white rounded-xl font-heading font-bold text-lg shadow-lg hover:bg-primary transition-colors duration-200 flex items-center justify-center gap-3 cursor-pointer"
              >
                <FiSend size={24} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="relative bg-primary rounded-3xl p-10 shadow-lg text-white overflow-hidden">
              <div className="absolute inset-0 block-pattern opacity-10" aria-hidden="true" />
              <div className="relative z-10">
                <h2 className="text-3xl font-heading font-bold mb-4">Direct Contact</h2>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Whether you have questions about my work, want to discuss technology, or just want to connect, 
                  feel free to reach out through any of these channels.
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className={`bg-white rounded-2xl p-6 border-2 border-zinc-200 transition-all duration-200 ${
                      method.link ? 'hover:border-accent cursor-pointer' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold text-primary mb-1">
                          {method.title}
                        </h3>
                        <p className="text-base text-accent font-semibold mb-1">
                          {method.value}
                        </p>
                        <p className="text-sm text-zinc-500">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );

                return method.link ? (
                  <a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={method.title}>{content}</div>
                );
              })}
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-accent/10 border-2 border-accent/20 rounded-2xl p-6 text-center"
            >
              <div className="text-5xl mb-3">⏱️</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                Quick Response
              </h3>
              <p className="text-zinc-600">
                I typically respond within 24-48 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
