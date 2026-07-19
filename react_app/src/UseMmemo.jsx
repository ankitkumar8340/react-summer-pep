function useMemo() {
    function ProductList({ products, searchTerm }) {
  // This runs on EVERY render, even if searchTerm didn't change
  const filtered = products.filter(p => p.name.includes(searchTerm));
  return <ul>{filtered.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}

function ProductList({ products, searchTerm }) {
  const filtered = useMemo(() => {
    return products.filter(p => p.name.includes(searchTerm));
  }, [products, searchTerm]); // recompute only if these change

  return <ul>{filtered.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
  
  return (
    <>
      <h1>Use of UseMemo</h1>
    </>
  );
}

export default useMemo;