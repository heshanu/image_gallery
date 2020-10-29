import React from 'react';
//import './App.css';

function App() {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" className="w-full" alt="image"/ > 
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By hecha
        </div>
        <ul>
          <li><strong>Views</strong>4000</li>
          <li><strong>Downloads</strong>1000</li>
          <li><strong>Views</strong>4000</li>
        </ul>   
      </div>
    </div>
  );
}

export default App;
