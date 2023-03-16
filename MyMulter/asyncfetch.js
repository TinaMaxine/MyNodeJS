async function fetchUsingAwait() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  
  fetchUsingAwait();