"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function HelloPage() {
  const greetings = [
    { text: "Hello", language: "English", description: "A warm welcome" },
    { text: "Hola", language: "Spanish", description: "¡Bienvenido!" },
    { text: "Bonjour", language: "French", description: "Bienvenue" },
    { text: "こんにちは", language: "Japanese", description: "Konnichiwa" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Hello */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
              Hello!
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light animate-slide-up">
              Welcome to our beautiful hello page
            </p>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto animate-slide-up delay-100">
              Discover greetings from around the world in this modern, responsive design
            </p>
          </div>

          {/* Greeting Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {greetings.map((greeting, index) => (
              <Card
                key={greeting.language}
                className="group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer bg-white/70 backdrop-blur-sm border-white/20 animate-fade-in"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {greeting.text}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-1">
                    {greeting.language}
                  </p>
                  <p className="text-sm text-gray-500">
                    {greeting.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 space-y-4 animate-fade-in delay-300">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 font-medium">
              Made with ❤️ using Next.js & Tailwind CSS
            </p>
            <p className="text-sm text-gray-400">
              Experience the beauty of modern web design
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-100 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}