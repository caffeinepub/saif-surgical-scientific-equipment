export default function StickyCallBar() {
  return (
    <a
      href="tel:9898056315"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-blue text-white text-center py-3 text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
      data-ocid="call.button"
    >
      📞 Call Now: 9898056315
    </a>
  );
}
