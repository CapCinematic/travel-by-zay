const fetchData = (url) => {
  return fetch(url)
  .then(response => response.json())
  };
  
  const fetchAll = () => {
    return Promise.all([
    fetchData('http://localhost:3001/api/v1/travelers'),
    fetchData('http://localhost:3001/api/v1/travelers/<id> where<id> will be a number of a traveler’s id'),
    fetchData('http://localhost:3001/api/v1/trips	'),
    fetchData('http://localhost:3001/api/v1/destinations'),
    ]);
  } 
// : 
// Array(4)
// 0
// {travelers: Array(50)}
// 1
// {message: 'No traveler found with an id of <id> where<id> will be a number of a traveler’s id'}
// 2
// {trips: Array(203)}
// 3
// {destinations: Array(50)}
  console.log('fetchAll',fetchAll())
  export default fetchAll