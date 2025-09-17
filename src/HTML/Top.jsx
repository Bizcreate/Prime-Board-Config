// src/HTML/Top.jsx
export default function Top() {
  return (
    <div className="w-screen flex items-center justify-between px-6 md:px-10">
      <div className="flex items-center gap-3">
        <img
          src="/brand/shaka-logo.png"   // <- you can swap to pmbc-logo.jpg or PMBC-lettering-logo.png anytime
          alt="Prime Mates Board Club"
          style={{ height: 36 }}
        />
        <span style={{ fontWeight: 800, letterSpacing: 0.4 }}>
          Prime Board Config
        </span>
      </div>

      <div id="section-label-container" className="flex gap-4 text-xs md:text-sm text-gray-400">
        <span className="text-black">1. BOARD</span>
        <span>2. TRUCKS</span>
        <span>3. WHEELS</span>
        <span>4. FINISH</span>
      </div>
    </div>
  );
}
