import React from 'react';

const ComparisonSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Tired of Stressful Meal Planning?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* The Old Way */}
        <div className="bg-gray-900 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-white">The Old Way</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">×</span>
              <span className="text-gray-300">Spending hours searching for recipes each week across multiple websites</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">×</span>
              <span className="text-gray-300">Manually creating shopping lists and constantly forgetting ingredients</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">×</span>
              <span className="text-gray-300">Wasting food because you bought too much or items expired</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">×</span>
              <span className="text-gray-300">Boring, uninspiring meal presentations making cooking feel like a chore</span>
            </li>
          </ul>
        </div>

        {/* The MealMind Way */}
        <div className="bg-gray-900 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-white">The MealMind Way</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-mealmind-teal mr-2">✓</span>
              <span className="text-gray-300">AI-powered recipe suggestions based on your preferences, dietary needs, and what's in your pantry</span>
            </li>
            <li className="flex items-start">
              <span className="text-mealmind-teal mr-2">✓</span>
              <span className="text-gray-300">Streamlined shopping with well-structured grocery lists that combine ingredients and prevent unnecessary purchases</span>
            </li>
            <li className="flex items-start">
              <span className="text-mealmind-teal mr-2">✓</span>
              <span className="text-gray-300">Beautiful AI-generated food visuals and step-by-step cooking images to make meal planning inspiring</span>
            </li>
            <li className="flex items-start">
              <span className="text-mealmind-teal mr-2">✓</span>
              <span className="text-gray-300">Intelligent meal planning calendar that integrates with your schedule and suggests creative ways to use leftovers</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
