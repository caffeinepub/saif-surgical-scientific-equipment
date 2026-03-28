import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const productCategories = [
  {
    category: "Surgical Instruments",
    products: [
      {
        name: "Surgical Scissors Set",
        desc: "High-grade stainless steel scissors for precision surgical use — straight, curved and iris variants included.",
        emoji: "✂️",
      },
      {
        name: "Forceps Collection",
        desc: "Complete set of surgical forceps: tissue, hemostatic, dressing and artery forceps for clinical procedures.",
        emoji: "🔬",
      },
      {
        name: "Retractor Kit",
        desc: "Self-retaining and handheld retractors for wound exposure during surgical procedures.",
        emoji: "🩺",
      },
    ],
  },
  {
    category: "Laboratory Equipment",
    products: [
      {
        name: "Digital Microscope",
        desc: "High-resolution binocular microscope with LED illumination, 40x–1000x magnification for lab analysis.",
        emoji: "🔭",
      },
      {
        name: "Centrifuge Machine",
        desc: "Benchtop centrifuge with variable speed control, ideal for blood and urine sample separation.",
        emoji: "⚙️",
      },
      {
        name: "pH Meter (Digital)",
        desc: "Precision digital pH meter with auto-calibration, temperature compensation and ATC for accurate readings.",
        emoji: "📊",
      },
    ],
  },
  {
    category: "Glassware",
    products: [
      {
        name: "Beakers Set",
        desc: "Borosilicate glass beakers in 50ml, 100ml, 250ml, 500ml and 1000ml sizes, heat resistant.",
        emoji: "🧪",
      },
      {
        name: "Test Tubes Pack",
        desc: "Assorted borosilicate glass test tubes with rubber stoppers, ideal for mixing and heating experiments.",
        emoji: "🧫",
      },
      {
        name: "Measuring Cylinders",
        desc: "Graduated measuring cylinders in multiple volumes with clear calibration markings.",
        emoji: "📏",
      },
    ],
  },
  {
    category: "Diagnostic Tools",
    products: [
      {
        name: "Stethoscope",
        desc: "Dual-head acoustic stethoscope for auscultation of cardiovascular and respiratory sounds.",
        emoji: "💉",
      },
      {
        name: "BP Monitor",
        desc: "Digital automatic blood pressure monitor with memory storage and irregular heartbeat detection.",
        emoji: "❤️",
      },
      {
        name: "Thermometer Set",
        desc: "Digital and infrared thermometers for accurate temperature measurement in clinical settings.",
        emoji: "🌡️",
      },
    ],
  },
];

export default function Products() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Our Products
          </h1>
          <p className="text-blue-200 text-lg">
            High-quality equipment across surgical, laboratory, scientific and
            educational categories
          </p>
        </div>
      </section>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16"
        data-ocid="products.section"
      >
        {productCategories.map((cat, catIdx) => (
          <section key={cat.category}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy mb-2">
                {cat.category}
              </h2>
              <div className="w-16 h-1 bg-brand-blue rounded mb-8" />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  data-ocid={`products.item.${catIdx * 3 + i + 1}`}
                >
                  <div className="h-36 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-6xl">
                    {product.emoji}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-brand-navy text-base mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {product.desc}
                    </p>
                    <Link
                      to="/get-quote"
                      className="inline-flex items-center gap-1 bg-brand-blue hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                      data-ocid={`products.button.${catIdx * 3 + i + 1}`}
                    >
                      Request Price
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
