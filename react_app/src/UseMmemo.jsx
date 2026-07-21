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
  function Parent({ items }) {
  // Without useMemo, `config` is a new object every render,
  // so <Child> re-renders even if config's contents are identical
  const config = useMemo(() => ({ sortBy: 'name', order: 'asc' }), []);

  return <Child config={config} items={items} />;
}

const Child = React.memo(function Child({ config, items }) {
  console.log('Child rendered');
  return <div>{items.length} items sorted by {config.sortBy}</div>;
});

function Dashboard({ transactions, filters }) {
  const stats = useMemo(() => {
    const filtered = transactions.filter(t =>
      (!filters.category || t.category === filters.category) &&
      t.date >= filters.startDate
    );
    return {
      total: filtered.reduce((sum, t) => sum + t.amount, 0),
      count: filtered.length,
      average: filtered.length ? filtered.reduce((s, t) => s + t.amount, 0) / filtered.length : 0,
    };
  }, [transactions, filters.category, filters.startDate]);

  return <StatsPanel stats={stats} />;
}
  return (
    <>
      <h1>Use of UseMemo</h1>
    </>
  );
}

export default useMemo;







