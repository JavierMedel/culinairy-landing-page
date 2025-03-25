import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CulinAIryLogo from '@/components/CulinAIryLogo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recipes - CulinAIry',
  description: 'Discover AI-powered recipes tailored to your taste - CulinAIry',
};

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  prepTime: string;
  calories: number;
  tags: string[];
}


const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Chicken Chow Mein-Style Noodles',
    description: 'with Stir-fried Veggies and Peanuts',
    image: '/images/dishes/Chicken_Chow_Mein_Style_Noodlesw.png',
    cookTime: '35 min',
    prepTime: '8 min',
    calories: 820,
    tags: ['Family Friendly', 'Protein Plus']
  },
  {
    id: '2',
    title: 'Lemony Beef and Orzo Bowls',
    description: 'with Feta and Sweet Peppers',
    image: '/images/dishes/Lemony_Beef_and_Orzo_Bowlswith_F.png',
    cookTime: '25 min',
    prepTime: '8 min',
    calories: 800,
    tags: ['Family Friendly', 'Quick']
  },
  {
    id: '3',
    title: 'Salisbury Steak-Style Pork Patties and Mash',
    description: 'with Shallot Gravy and Apple Salad',
    image: '/images/dishes/Salisbury_Steak_Style_Pork_Patti.png',
    cookTime: '40 min',
    prepTime: '8 min',
    calories: 860,
    tags: ['Family Friendly']
  },
  {
    id: '4',
    title: 'Mango-Glazed Caribbean-Style Chicken',
    description: 'with Creamy Coleslaw and Green Onion-Lime Rice',
    image: '/images/dishes/Mango_Glazed_Caribbean_Style_Chi.png',
    cookTime: '30 min',
    prepTime: '5 min',
    calories: 840,
    tags: ['Low CO2']
  },
  {
    id: '5',
    title: 'Smothered Pork Chops',
    description: 'with Fusilli and Garlicky Broccoli',
    image: '/images/dishes/Smothered_Pork_Chopswith_Fusilli.png',
    cookTime: '35 min',
    prepTime: '8 min',
    calories: 800,
    tags: ['New', 'Protein Plus']
  },
  {
    id: '6',
    title: 'Sweet and Savoury Pork Burgers',
    description: 'with Herby Fries and Dijonnaise',
    image: '/images/dishes/Sweet_and_Savoury_Pork_Burgerswi.png',
    cookTime: '30 min',
    prepTime: '10 min',
    calories: 1230,
    tags: ['Discovery']
  }
];

const RecipesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200">
      <header className="w-full py-4 px-4 md:px-8 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <CulinAIryLogo />
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">AI-Powered Recipes</h1>
          <p className="text-gray-400 text-lg">
            Discover delicious recipes tailored to your taste preferences and dietary needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{recipe.title}</h3>
                <p className="text-gray-400 mb-4">{recipe.description}</p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-culinairy-teal mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">{recipe.cookTime}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-culinairy-cyan mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-sm">{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-culinairy-teal mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="text-sm">{recipe.calories} kcal</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-700 text-gray-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="w-full py-6 px-4 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CulinAIry. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <a
              href="mailto:hello@culinairy.ai"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecipesPage;