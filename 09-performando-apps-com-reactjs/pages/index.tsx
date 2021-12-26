import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

import styles from "../styles/Home.module.css";

const Home = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();
    setResults(data);
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Busca</h1>

      <form className={styles.form} onSubmit={handleSearch}>
        <input
          type="text"
          className={styles.input}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />

        <button type="submit" className={styles.button}>Buscar</button>
      </form>

      <SearchResults results={results} onAddToWishList={addToWishList} />
    </div>
  );
};

export default Home;
