import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import menuFoods from "./data";

const App = () => {
  const [searchValue, setSearchValue] = useState(""); // Kullanıcının girdiği ID veya isim
  const [results, setResults] = useState([]); // Arama sonuçlarını tutar

  const handleSearch = (value) => {
    if (value.trim() === "") {
      setResults([]); // Boşsa sonuçları temizle
      return;
    }

    // ID veya isim eşleşmesi
    const filteredItems = menuFoods.filter(
      (food) =>
        food.id === value || // ID eşleşmesi
        food.name.toLowerCase().includes(value.toLowerCase()) // İsim eşleşmesi
    );

    setResults(filteredItems); // Bulunan öğeleri güncelle
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value); // Girdiği değeri güncelle
    handleSearch(value); // Arama işlemini çağır
  };

  return (
    <div className="relative flex-col items-center justify-center w-screen h-screen">
      <div className="px-5">
        <div className="flex items-center border-2 bg-white border-[#C21E2D] rounded overflow-hidden hover:shadow-lg transition-shadow duration-300 mt-5">
          <input
            type="text"
            className="flex-grow px-4 py-2 border-none h9 focus:outline-none"
            placeholder="Suchen..."
            value={searchValue}
            onChange={handleInputChange} // Değer değiştiğinde hem arama yap hem de state güncelle
          />
          <button className="p-2 text-black transition-colors duration-300 bg-white h-9">
            <FaSearch />
          </button>
        </div>
      </div>

      <div
        className={`mt-5 absolute backdrop-blur-md w-full px-5 transition-transform duration-500 ${
          results.length > 0 || searchValue
            ? "translate-y-0"
            : "-translate-y-60"
        }`}
      >
        {results.length > 0 ? (
          <div className="p-4 bg-white border border-gray-300 rounded bg-opacity-30">
            {results.map((result) => (
              <div
                key={result.id}
                className="mb-3 border-b pb-3 border-[#C21E2D]"
              >
                <h2 className="text-sm font-medium">{result.name}</h2>
                <p className="text-sm text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        ) : (
          searchValue && (
            <p className="px-1 text-red-500">
              Keine Ergebnisse gefunden für: {searchValue}
            </p>
          )
        )}
      </div>

      <div className="flex justify-center -z-10">
        <img src="/img3.jpeg"/>
      </div>
    </div>
  );
};

export default App;
