export default function Hero() {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white text-center py-20 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 animate-fadeIn">
        <h1 className="text-5xl font-bold mb-4">AIRA</h1>
        <p className="text-xl mb-6 opacity-90">
          Artificial Intelligence Readiness & Adaptability
        </p>
        <a href="#modules">
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Start AI Readiness Scan
          </button>
        </a>
      </div>
    </header>
  );
}