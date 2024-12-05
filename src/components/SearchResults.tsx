import React from 'react';
import { SearchResult } from '../types';

interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No results found. Try adjusting your search.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {results.map((result) => (
        <article
          key={result.id}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-semibold text-gray-900">{result.title}</h2>
            <span className="text-sm text-gray-500">{result.date}</span>
          </div>
          <p className="text-gray-600 mb-3">{result.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
              {result.category}
            </span>
            <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
              Read more →
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}