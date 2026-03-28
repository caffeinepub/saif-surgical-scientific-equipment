import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  DollarSign,
  MapPin,
  Phone,
  Trophy,
  Truck,
  User,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const categories = [
  {
    title: "Surgical Instruments",
    img: "/assets/generated/category-surgical.dim_600x400.jpg",
    desc: "Premium quality surgical tools for hospitals, clinics and medical professionals",
  },
  {
    title: "Laboratory Equipment",
    img: "/assets/generated/category-laboratory.dim_600x400.jpg",
    desc: "Advanced lab instruments for diagnostics, research and analysis",
  },
  {
    title: "Scientific Tools",
    img: "/assets/generated/category-scientific.dim_600x400.jpg",
    desc: "Precision scientific instruments for research and industrial use",
  },
  {
    title: "Educational Equipment",
    img: "/assets/generated/category-educational.dim_600x400.jpg",
    desc: "Science equipment for schools, colleges and medical students",
  },
];

const benefits = [
  {
    icon: Trophy,
    title: "Trusted Local Supplier",
    desc: "Serving Anand and Gujarat for years with genuine products",
  },
  {
    icon: CheckCircle,
    title: "Quality-Tested Products",
    desc: "Every product is verified for quality and compliance",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Best prices in the region with no compromise on quality",
  },
  {
    icon: Zap,
    title: "Quick Response",
    desc: "Fast replies on WhatsApp and phone, same-day quotes",
  },
];

const trustItems = [
  { icon: User, label: "Mr. Aliasgar A. Vohara" },
  { icon: MapPin, label: "Anand, Gujarat" },
  { icon: Truck, label: "Fast Local Delivery" },
  { icon: CheckCircle, label: "Trusted by Clinics & Labs" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-medical.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="hero.section"
      >
        <div className="absolute inset-0 bg-[#082B45]/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white pt-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block bg-brand-green/20 border border-brand-green/40 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-6">
              Anand's Most Trusted Equipment Supplier
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
              Leading Surgical &amp; Scientific
              <br />
              <span className="text-blue-300">Equipment Supplier in Anand</span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Trusted by hospitals, clinics, laboratories &amp; schools across
              Gujarat. Quality products at competitive prices with fast local
              delivery.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:9898056315"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-lg hover:shadow-xl"
                data-ocid="hero.primary_button"
              >
                📞 Call Now: 9898056315
              </a>
              <a
                href="https://wa.me/919898056315"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-lg hover:shadow-xl"
                data-ocid="hero.secondary_button"
              >
                💬 WhatsApp Now
              </a>
              <Link
                to="/get-quote"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-navy font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200"
                data-ocid="hero.button"
              >
                Get a Quote
              </Link>
            </div>
            <p className="mt-8 text-sm text-blue-200">
              Owner: Mr. Aliasgar A. Vohara • Anand, Gujarat 388001
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        className="bg-brand-blue text-white py-4"
        data-ocid="trust.section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <item.icon className="w-4 h-4 text-blue-200" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section
        className="bg-brand-lightgray py-20"
        data-ocid="categories.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
              Our Product Categories
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive range of quality equipment for healthcare, research
              and education
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                data-ocid={`categories.item.${i + 1}`}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-brand-navy text-base mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {cat.desc}
                  </p>
                  <Link
                    to="/get-quote"
                    className="inline-flex items-center gap-1 bg-brand-blue hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                    data-ocid={`categories.button.${i + 1}`}
                  >
                    Request Price
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20" data-ocid="benefits.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We go above and beyond to deliver the best service to our clients
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-card transition-all duration-300"
                data-ocid={`benefits.item.${i + 1}`}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section
        className="bg-brand-navy text-white py-16"
        data-ocid="cta.section"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Need Equipment Urgently?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Call us now or send a WhatsApp message. We respond within minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:9898056315"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl"
              data-ocid="cta.primary_button"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919898056315"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-navy font-bold px-8 py-3.5 rounded-xl text-base transition-all duration-200"
              data-ocid="cta.secondary_button"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-20" data-ocid="location.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
              Find Us in Anand
            </h2>
            <p className="text-gray-600">
              Visit us or get in touch — we're always happy to help
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-brand-lightgray rounded-2xl p-8">
              <div className="flex items-start gap-3 mb-5">
                <MapPin className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-brand-navy mb-1">
                    Our Location
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bhalej Rd, near Shah Petroleum,
                    <br />
                    Ganesh Chokdi, Sardar Ganj,
                    <br />
                    Anand, Gujarat 388001
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <a
                  href="tel:9898056315"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  9898056315
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=Saif+Surgical+Anand+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors duration-200"
                data-ocid="location.button"
              >
                Get Directions
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3!2d72.9718!3d22.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzUyLjIiTiA3MsKwNTgnMTguNSJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Saif Surgical Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
