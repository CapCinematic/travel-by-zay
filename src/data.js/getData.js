const travelersUrl = 'http://localhost:3001/api/v1/travelers'
const singleTravelerUrl = 'http://localhost:3001/api/v1/travelers/2'
const tripsUrl = 'http://localhost:3001/api/v1/trips'
const destinationsUrl = 'http://localhost:3001/api/v1/destinations'

const fetchData = (url) => {
  return fetch(url)
  .then(response => response.json())
  };
  
  const fetchAll = () => {
    return Promise.all([
    fetchData(travelersUrl),
    fetchData(singleTravelerUrl),
    fetchData(tripsUrl),
    fetchData(destinationsUrl),
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