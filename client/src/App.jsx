import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6 shadow-lg">
            <span className="text-white text-3xl">📘</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            DSA Sheet Tracker
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Master Data Structures and Algorithms with our comprehensive
            tracking system. Monitor your progress, stay consistent, and achieve
            your coding goals.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Track Progress
            </h3>
            <p className="text-gray-600 text-sm">
              Monitor your completion rate and see how far you've come
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Organized Topics
            </h3>
            <p className="text-gray-600 text-sm">
              Well-structured topics from basic to advanced concepts
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl">🔗</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quality Resources
            </h3>
            <p className="text-gray-600 text-sm">
              Access curated YouTube videos, articles, and LeetCode problems
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        {!loggedIn ? (
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/login"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Started - Login
            </a>
            <a
              href="/register"
              className="inline-block bg-white hover:bg-gray-50 text-gray-800 font-medium px-8 py-3 rounded-lg transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 shadow-sm"
            >
              Create Account
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-600 text-lg">✅</span>
                <p className="text-green-800 font-medium">
                  Welcome back! You're logged in.
                </p>
              </div>
            </div>

            <a
              href="/dashboard"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Go to Dashboard
            </a>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Start your journey today and become a better programmer! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
