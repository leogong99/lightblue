'use client';

export default function SimpleTest() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Simple Test Page
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            This is a simple test to verify that Tailwind CSS is working correctly.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Primary Button
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Secondary Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
