import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CulinAIryLogo from '@/components/CulinAIryLogo';
import recipesData from '@/lib/recipes.json';

interface Ingredient {
  name: string;
  image: string;
  amount: string;
}

interface Step {
  number: number;
  instruction: string;
  image: string;
}

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  prepTime: string;
  calories: number;
  tags: string[];
  detailedDescription: string;
  ingredients: Ingredient[];
  steps: Step[];
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function RecipeDetail({ params }: PageProps) {
  const recipe = recipesData.recipes.find((r): r is Recipe => r.id === decodeURIComponent(params.id));
  if (!recipe) return <div>Recipe not found</div>;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200">
      <header className="w-full py-4 px-4 md:px-8 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center">
          <Link href="/recipes" className="flex items-center">
            <CulinAIryLogo />
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <Link 
            href="/recipes" 
            className="text-culinairy-teal hover:text-culinairy-cyan transition-colors inline-flex items-center mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Recipes
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4 text-white">{recipe.title}</h1>
              <p className="text-gray-400 text-lg mb-6">{recipe.description}</p>

              <div className="bg-gray-700/30 rounded-lg p-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                {recipe.detailedDescription}
              </p>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-culinairy-teal mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">25 min</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-culinairy-cyan mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm">8 min</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-culinairy-teal mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm">800 kcal</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 text-sm bg-gray-700 text-gray-200 rounded-full">Family Friendly</span>
                <span className="px-3 py-1 text-sm bg-gray-700 text-gray-200 rounded-full">Quick</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-white">Ingredients</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {recipe.ingredients.map((ingredient) => (
                <div 
                  key={ingredient.name}
                  className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="relative w-1/2 mx-auto aspect-square mb-3 rounded-lg overflow-hidden bg-gray-700">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-white mb-1">{ingredient.name}</h3>
                  <p className="text-xs text-gray-400">{ingredient.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
         {/* Cooking Steps */}
         <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Cooking Instructions</h2>
          <div className="space-y-8">
            {recipe.steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-culinairy-teal text-white font-bold text-xl">
                  {step.number}
                </div>
                <div className="flex-grow">
                  <p className="text-lg mb-4">{step.instruction}</p>
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image src={step.image} alt={`Step ${step.number}`} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full py-6 px-4 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CulinAIry. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <a href="mailto:hello@culinairy.ai" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
