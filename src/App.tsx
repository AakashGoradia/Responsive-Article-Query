import React, { useState, useMemo } from 'react';
import { SearchBox } from './components/SearchBox';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchResults } from './components/SearchResults';
import { mockResults } from './data/mockData';
import { Library } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => 
    Array.from(new Set(mockResults.map(result => result.category))),
    []
  );

  const filteredResults = useMemo(() => {
    return mockResults.filter(result => {
      const matchesSearch = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || result.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Library className="h-8 w-8 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Article Search</h1>
          </div>
          <p className="text-gray-600">Search through our collection of articles</p>
        </div>

        <div className="space-y-6">
          <SearchBox 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <SearchResults results={filteredResults} />
        </div>
      </div>
    </div>
  );
}

export default App;