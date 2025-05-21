import React, { useState, createContext, useContext, useEffect } from "react";

// ---------- Types ----------
interface Place {
  id: number;
  name: string;
  visited: boolean;
}

interface TravelContextType {
  places: Place[];
  addPlace: (name: string) => void;
  toggleVisited: (id: number) => void;
}

// ---------- Context ----------
const TravelContext = createContext<TravelContextType | undefined>(undefined);

const useTravel = () => {
  const context = useContext(TravelContext);
  if (!context) throw new Error("useTravel must be used within TravelProvider");
  return context;
};

const TravelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [places, setPlaces] = useState<Place[]>([]);

  const addPlace = (name: string) => {
    const newPlace: Place = {
      id: Date.now(),
      name,
      visited: false,
    };
    setPlaces(prev => [...prev, newPlace]);
  };

  const toggleVisited = (id: number) => {
    setPlaces(prev =>
      prev.map(place =>
        place.id === id ? { ...place, visited: !place.visited } : place
      )
    );
  };

  return (
    <TravelContext.Provider value={{ places, addPlace, toggleVisited }}>
      {children}
    </TravelContext.Provider>
  );
};

// ---------- Components ----------
const AddPlace: React.FC = () => {
  const [input, setInput] = useState("");
  const { addPlace } = useTravel();

  const handleAdd = () => {
    if (input.trim()) {
      addPlace(input);
      setInput("");
    }
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <input
        type="text"
        value={input}
        placeholder="Add a place"
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: 6, width: 200 }}
      />
      <button onClick={handleAdd} style={{ marginLeft: 8 }}>
        Add
      </button>
    </div>
  );
};

const PlaceList: React.FC = () => {
  const { places, toggleVisited } = useTravel();

  return (
    <ul>
      {places.map(place => (
        <li key={place.id} style={{ marginBottom: 8 }}>
          <span style={{ textDecoration: place.visited ? "line-through" : "none" }}>
            {place.name}
          </span>
          <button onClick={() => toggleVisited(place.id)} style={{ marginLeft: 10 }}>
            {place.visited ? "Undo" : "Visited"}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Stats: React.FC = () => {
  const { places } = useTravel();
  const visitedCount = places.filter(p => p.visited).length;

  return (
    <p>
      Visited {visitedCount} of {places.length} places.
    </p>
  );
};

// ---------- App ----------
const App: React.FC = () => {
  return (
    <TravelProvider>
      <div style={{ padding: 20 }}>
        <h1>🌍 Travel Bucket List</h1>
        <AddPlace />
        <PlaceList />
        <Stats />
      </div>
    </TravelProvider>
  );
};

export default App;
