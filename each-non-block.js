const each = (arr, fn) => {
  const len = arr.length;
  const iter = i => {
    setTimeout(() => {
      fn(arr[i]);
      if (i < len - 1) iter(++i);
    }, 0);
  };
  iter(0);
};

const a = [1, 2, 3, 4, 5, 6];
each(a, (elem) => console.log(elem));
