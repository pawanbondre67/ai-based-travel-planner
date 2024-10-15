import React, { useState } from 'react';

interface Place {
  id: number;
  name: string;
}

const places: Place[] = [
  { id: 1, name: 'New York' },
  { id: 2, name: 'Los Angeles' },
  { id: 3, name: 'Chicago' },
  { id: 4, name: 'Houston' },
  { id: 5, name: 'Phoenix' },
  // Add more places as needed
];

const SearchableDropdown: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(true); // Start with dropdown visible

  // Filter places based on search term
  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (place: Place) => {
    setSelectedPlace(place);
    setSearchTerm(place.name); // Show the selected place's name in the input field
    setShowDropdown(false); // Hide the dropdown after selection
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true); // Show the dropdown while typing
  };

  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl mb-4">Select a Place</h2>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a place..."
          className="border p-2 w-full mb-2"
        />
        {/* Down arrow icon */}
        {searchTerm && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            ▼
          </span>
        )}
      </div>
      {/* Show the dropdown based on showDropdown state */}
      {showDropdown && (
        <div className="border p-2 max-h-40 overflow-y-auto">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <div
                key={place.id}
                onClick={() => handleSelect(place)}
                className="cursor-pointer hover:bg-gray-200 p-2"
              >
                {place.name}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No places found</div>
          )}
        </div>
      )}
      {selectedPlace && (
        <div className="mt-4">
          <h3 className="text-lg font-medium">Selected Place:</h3>
          <p>{selectedPlace.name}</p>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
