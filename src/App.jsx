import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#0f172a";
      document.body.style.color = "#f1f5f9";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#1a1a1a";
    }
  }, [darkMode]);

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode
            ? "dark bg-background text-foreground"
            : "bg-background text-foreground"
        }`}
      >
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
              darkMode ? "bg-primary-500/10" : "bg-primary-100"
            }`}
          ></div>
          <div
            className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
              darkMode ? "bg-purple-500/10" : "bg-purple-100"
            }`}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          {/* Header */}
          <header className="flex justify-between items-center mb-8 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-display font-bold text-gradient">
                Hero Movie Explorer
              </h1>
            </div>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </header>

          {/* Main Content */}
          <main className="animate-slide-up">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="mt-16 text-center text-muted animate-fade-in">
            <p>Powered by OMDB API • Made with ❤️ for movie lovers</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
