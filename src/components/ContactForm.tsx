'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="rounded-2xl border border-white/5 bg-surface/50 p-8 backdrop-blur-xl">
      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 mb-4">
            <CheckCircle size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">Message Sent!</h3>
          <p className="text-sm text-text-muted leading-relaxed max-w-sm mx-auto">
            Thank you for reaching out. We will get back to you as soon as possible.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 text-sm text-primary hover:text-primary-light font-medium transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-text-primary text-sm focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-text-primary text-sm focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-text-primary text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-semibold text-sm transition-all shadow-lg shadow-primary/25"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
            <Send size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
