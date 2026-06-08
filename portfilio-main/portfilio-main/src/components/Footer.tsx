export default function Footer() {
  return (
    <footer className="py-8 sm:py-10 md:py-12 border-t border-white/5 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="text-center md:text-left">
          <p className="text-base sm:text-lg font-space-grotesk font-medium text-white">Patel Rishabh</p>
          <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 sm:mt-1 font-manrope font-light">MERN Developer | BCA Student</p>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 font-manrope font-light">© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
