import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function GetQuote() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", phone: "", product: "", quantity: "", message: "" });
      toast.success(
        "Quote request sent! We'll respond within 30 minutes via WhatsApp or call.",
      );
    }, 1000);
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Get a Quote
          </h1>
          <p className="text-blue-200 text-lg">
            Fill in your requirements and we'll get back to you in minutes
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-card p-8"
        >
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">
            Quote Request Form
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            data-ocid="quote.modal"
          >
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="q-name"
              >
                Full Name *
              </label>
              <input
                id="q-name"
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                placeholder="Your full name"
                data-ocid="quote.input"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="q-phone"
              >
                Phone Number *
              </label>
              <input
                id="q-phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                placeholder="Your phone number"
                data-ocid="quote.input"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="q-product"
              >
                Product Required *
              </label>
              <input
                id="q-product"
                type="text"
                required
                value={form.product}
                onChange={(e) =>
                  setForm((p) => ({ ...p, product: e.target.value }))
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                placeholder="e.g. Digital Microscope, Surgical Scissors"
                data-ocid="quote.input"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="q-qty"
              >
                Quantity
              </label>
              <input
                id="q-qty"
                type="number"
                min="1"
                value={form.quantity}
                onChange={(e) =>
                  setForm((p) => ({ ...p, quantity: e.target.value }))
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                placeholder="How many do you need?"
                data-ocid="quote.input"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="q-msg"
              >
                Additional Message
              </label>
              <textarea
                id="q-msg"
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none"
                placeholder="Any specific requirements, brand preferences, budget..."
                data-ocid="quote.textarea"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand-green hover:bg-emerald-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-lg text-base transition-colors duration-200"
              data-ocid="quote.submit_button"
            >
              {submitting ? "Sending..." : "Send Quote Request"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            ⏱ We'll respond within 30 minutes via WhatsApp or call
          </p>
        </motion.div>
      </div>
    </div>
  );
}
