// src/pages/MakananPage.jsx
import { useState, useEffect } from 'react';
import { Buildings } from '../data/buildings';
import RecipeGrid from '../components/buildings/RecipeGrid';

export default function MakananPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

 
  const allMakanan = Object.values(Buildings.builds);

  useEffect(() => {
    
    const filter = () => {x
      if (searchQuery.trim() === '') {
        setFilteredRecipes(allMakanan);
      } else {
        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = allMakanan.filter(recipe => 
          recipe.name.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredRecipes(filtered);
      }
    };

    
    filter();
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-indigo-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        
        <RecipeGrid recipes={filteredRecipes} />
      </main>
    </div>
  );
}