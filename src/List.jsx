function List() {
  const fruits = [
    { id: 1, name: "orange", kcal: 47 },
    { id: 2, name: "banana", kcal: 89 },
    { id: 3, name: "kiwi", kcal: 61 },
    { id: 4, name: "mango", kcal: 60 },
    { id: 5, name: "apple", kcal: 52 },
  ];

  fruits.sort((a, b) => a.kcal - b.kcal);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp;<b>{fruit.kcal}&nbsp;kcal</b>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default List;
