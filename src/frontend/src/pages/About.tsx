import { Award, Heart, Shield, Star } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "500+", label: "Products" },
  { value: "200+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "Same Day", label: "Response" },
];

const values = [
  {
    icon: Shield,
    title: "Quality",
    desc: "Only genuine, quality-tested products from trusted manufacturers",
  },
  {
    icon: Star,
    title: "Affordability",
    desc: "Competitive pricing without compromising on quality or service",
  },
  {
    icon: Heart,
    title: "Trust",
    desc: "Building long-term relationships with our clients and community",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Striving for the highest standards in everything we do",
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              About Saif Surgical &amp; Scientific Equipment
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Serving the healthcare and scientific community of Anand, Gujarat
              with dedication and trust
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-blue text-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-3xl sm:text-4xl">
                  {s.value}
                </div>
                <div className="text-blue-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl text-brand-navy mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Saif Surgical &amp; Scientific Equipment was founded with a
                clear mission: to make high-quality surgical instruments,
                laboratory equipment and scientific tools accessible to
                hospitals, clinics, laboratories and educational institutions
                across Anand and the broader Gujarat region.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We understand the critical role that reliable equipment plays in
                healthcare delivery and scientific research. That's why we
                maintain a comprehensive inventory of quality-tested products
                from trusted manufacturers, ensuring you always have access to
                what you need.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From small medical stores to large hospitals, we cater to every
                need with personalised service, competitive pricing and fast
                local delivery.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-brand-lightgray rounded-2xl p-8">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-6">
                  Meet Our Owner
                </h3>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-display font-bold text-2xl">
                    A
                  </div>
                  <div>
                    <p className="font-display font-bold text-brand-navy text-lg">
                      Mr. Aliasgar A. Vohara
                    </p>
                    <p className="text-gray-500 text-sm">
                      Proprietor, Saif Surgical
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With years of experience in the medical equipment industry,
                  Mr. Vohara has built Saif Surgical on the pillars of quality,
                  integrity and customer satisfaction. His deep understanding of
                  the local healthcare market enables us to provide exactly what
                  our clients need.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="tel:9898056315"
                    className="text-brand-blue font-semibold text-sm hover:underline"
                  >
                    📞 9898056315
                  </a>
                  <a
                    href="https://wa.me/919898056315"
                    className="text-brand-green font-semibold text-sm hover:underline"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-brand-lightgray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-brand-navy mb-3">
              Our Mission &amp; Values
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Quality + Affordability + Trust — the foundation of everything we
              do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-card text-center"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-display font-bold text-brand-navy mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
