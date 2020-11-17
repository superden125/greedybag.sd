function sort(items) {
  for (var i = 0; i < items.length - 2; i++) {
    for (var j = items.length - 1; j >= i + 1; j--) {
      var t1 = items[j].value / items[j].weight;
      var t2 = items[j - 1].value / items[j - 1].weight;

      if (t1 > t2) {
        [items[j], items[j - 1]] = [items[j - 1], items[j]];
      }
    }
  }
}

function greedy1(items, weight) {
  // const items = [...itemsList];
  // sort(items);

  // const items = itemsList.slice().sort((a, b) => {
  //   return b.value / b.weight - a.value / a.weight;
  // });

  items.forEach((item) => {
    item.qty = parseInt(weight / item.weight);
    weight -= item.qty * item.weight;
  });
  return items;
}

function greedy2(items, weight) {
  // const items = [...itemsList];
  // sort(items);

  // const items = itemsList.slice().sort((a, b) => {
  //   return b.value / b.weight - a.value / a.weight;
  // });

  items.forEach((item) => {
    item.qty = parseInt(weight / item.weight);
    if (item.qty > item.stock) {
      item.qty = item.stock;
    }
    weight -= item.qty * item.weight;
  });
  return items;
}

function greedy3(items, weight) {
  // const items = [...itemsList];
  // sort(items);

  // const items = itemsList.slice().sort((a, b) => {
  //   return b.value / b.weight - a.value / a.weight;
  // });

  items.forEach((item) => {
    item.qty = parseInt(weight / item.weight);
    if (item.qty > 1) {
      item.qty = 1;
    }
    weight -= item.qty * item.weight;
  });
  return items;
}

const greedy = (itemsList, type, weight) => {
  const items = [...itemsList];
  sort(items);
  console.log(items);
  switch (type) {
    case 1:
      return greedy1(items, weight);

    case 2:
      return greedy2(items, weight);

    case 3:
      return greedy3(items, weight);

    default:
      return items;
  }
};

export { greedy };
