import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const searchTimeoutRef = useRef();
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    searchTimeoutRef.current = setTimeout(() => {
      console.log({ search });
      if (!search) return;

      doSearch(search);
    }, 500);
  }, [search]);

  const [imageUrls, setImageUrls] = useState([]);
  async function doSearch(query) {
    try {
      const url = `https://api.wikimedia.org/core/v1/commons/search/page?q=${encodeURIComponent(
        query
      )}`;

      const response = await fetch(url).then((r) => r.json());
      console.log({ response });
      setImageUrls(
        response.pages.map((r) => ({
          url: r?.thumbnail?.url,
          id: r?.id,
        }))
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="Search images"
          value={search}
          onChange={(a) => setSearch(a.currentTarget.value)}
        />
        <h1>Wikimedia image browser</h1>
        {imageUrls.map((image) => (
          <img alt={search} src={image.url} key={image.id} />
        ))}
      </header>
    </div>
  );
}

export default App;
