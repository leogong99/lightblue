'use client';

import { motion } from 'framer-motion';
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiSend,
  FiTerminal,
  FiMessageSquare,
} from 'react-icons/fi';
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
    const { name, email, subject, message } = formState;
    const mailtoLink = `mailto:leogong99@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'leogong99@gmail.com',
      link: 'mailto:leogong99@gmail.com',
      description: 'Send me an email directly',
      color: '#3B82F6',
      bgVar: '--stat-blue-bg',
      borderVar: '--stat-blue-border',
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      value: '/in/javascriptguru',
      link: 'https://linkedin.com/in/javascriptguru',
      description: 'Connect on LinkedIn',
      color: '#06B6D4',
      bgVar: '--nav-active-bg',
      borderVar: '--nav-active-border',
    },
    {
      icon: FiGithub,
      title: 'GitHub',
      value: 'github.com/jinggong',
      link: 'https://github.com/jinggong',
      description: 'Check out my code',
      color: '#8B5CF6',
      bgVar: '--stat-purple-bg',
      borderVar: '--stat-purple-border',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Seattle, WA',
      link: null,
      description: 'Based in the Pacific Northwest',
      color: '#10B981',
      bgVar: '--stat-green-bg',
      borderVar: '--stat-green-border',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--page-bg)' }}>
      {/* Dot grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--dot-color) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div
        className="fixed top-1/4 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, var(--orb-blue) 0%, transparent 70%)' }}
      />
      <div
        className="fixed bottom-1/4 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, var(--orb-cyan) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <FiTerminal className="text-cyan-600 dark:text-cyan-400" size={13} />
            <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">$ ./send-message.sh</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Let&apos;s Connect
          </h1>
          <p className="text-slate-600 dark:text-zinc-500 text-lg max-w-2xl">
            Want to discuss technology, projects, or just connect? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--top-line)' }} />

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <FiMessageSquare className="text-cyan-600 dark:text-cyan-400" size={13} />
                <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">// compose_message</span>
              </div>

              <h2
                className="text-2xl font-bold text-slate-900 dark:text-white mb-1"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Send a Message
              </h2>
              <p className="text-slate-500 dark:text-zinc-600 text-sm font-mono mb-8">
                Opens in your email client on submit
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {(['name', 'email', 'subject'] as const).map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-xs font-mono text-slate-400 dark:text-zinc-500 mb-2"
                    >
                      {field}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formState[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl font-mono text-sm text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-zinc-700 focus:outline-none transition-all duration-200"
                      style={{ background: 'var(--input-bg)', border: '1px solid var(--input-border)' }}
                      onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.4)'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--input-border)'; }}
                      placeholder={field === 'name' ? 'John Doe' : field === 'email' ? 'john@example.com' : 'Project Inquiry'}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-400 dark:text-zinc-500 mb-2"
                  >
                    message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl font-mono text-sm text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-zinc-700 focus:outline-none resize-none transition-all duration-200"
                    style={{ background: 'var(--input-bg)', border: '1px solid var(--input-border)' }}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.4)'; }}
                    onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--input-border)'; }}
                    placeholder="Tell me what you'd like to discuss..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(59,130,246,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-mono font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer text-white transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                    boxShadow: '0 0 20px rgba(59,130,246,0.3)',
                  }}
                >
                  <FiSend size={15} />
                  ./send-message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Status banner */}
            <div
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--top-line)' }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--hero-corner)' }} />
              <div className="relative z-10">
                <h2
                  className="text-lg font-bold text-slate-900 dark:text-white mb-2"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Direct Contact
                </h2>
                <p className="text-slate-500 dark:text-zinc-500 text-sm leading-relaxed">
                  Whether you have questions about my work, want to discuss tech, or just want to connect — reach out.
                </p>
              </div>
            </div>

            {/* Contact method cards */}
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const card = (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
                  onMouseEnter={(e) => {
                    if (method.link) {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${method.color}30`;
                      el.style.boxShadow = `0 4px 20px ${method.color}12`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--card-border)';
                    el.style.boxShadow = 'var(--card-shadow)';
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `var(${method.bgVar})`, border: `1px solid var(${method.borderVar})` }}
                  >
                    <Icon style={{ color: method.color }} size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 dark:text-zinc-600 font-mono mb-0.5">{method.title}</div>
                    <div
                      className="text-sm font-semibold truncate"
                      style={{ color: method.link ? method.color : undefined }}
                    >
                      <span className={method.link ? '' : 'text-slate-900 dark:text-white'}>{method.value}</span>
                    </div>
                    <div className="text-xs text-slate-400 dark:text-zinc-600">{method.description}</div>
                  </div>
                </motion.div>
              );

              return method.link ? (
                <a
                  key={method.title}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block cursor-pointer"
                >
                  {card}
                </a>
              ) : (
                <div key={method.title}>{card}</div>
              );
            })}

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="p-5 rounded-xl text-center"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}
            >
              <div className="font-mono text-xs text-slate-400 dark:text-zinc-600 mb-1">// response_time</div>
              <div
                className="text-sm font-semibold text-slate-900 dark:text-white"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Typically within 24–48 hours
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
