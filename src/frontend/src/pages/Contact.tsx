import { MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", requirement: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", phone: "", requirement: "" });
      toast.success(
        "Message sent! We'll get back to you shortly on WhatsApp or phone.",
      );
    }, 1000);
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="text-blue-200 text-lg">
            Reach out via call, WhatsApp or the form below
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-brand-blue text-white py-6">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:9898056315"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 font-bold text-xl px-6 py-3 rounded-xl transition-colors"
            data-ocid="contact.primary_button"
          >
            <Phone className="w-5 h-5" /> 9898056315
          </a>
          <a
            href="https://wa.me/919898056315"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-emerald-600 font-semibold px-6 py-3 rounded-xl transition-colors"
            data-ocid="contact.secondary_button"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Now
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.modal"
            >
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="c-name"
                >
                  Name *
                </label>
                <input
                  id="c-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                  placeholder="Your full name"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="c-phone"
                >
                  Phone *
                </label>
                <input
                  id="c-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                  placeholder="Your phone number"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="c-req"
                >
                  Your Requirement *
                </label>
                <textarea
                  id="c-req"
                  required
                  rows={4}
                  value={form.requirement}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, requirement: e.target.value }))
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none"
                  placeholder="Tell us what you need..."
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-blue hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                data-ocid="contact.submit_button"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Address + Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-brand-lightgray rounded-2xl p-6">
              <h3 className="font-display font-bold text-brand-navy text-lg mb-4">
                Our Address
              </h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bhalej Rd, near Shah Petroleum,
                  <br />
                  Ganesh Chokdi, Sardar Ganj,
                  <br />
                  Anand, Gujarat 388001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <a
                  href="tel:9898056315"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  9898056315
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3!2d72.9718!3d22.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzUyLjIiTiA3MsKwNTgnMTguNSJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Saif Surgical Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
