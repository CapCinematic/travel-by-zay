const fetchData = (dataSet) => {
  return fetch(`http://localhost:3001/api/v1/${dataSet}`)
  .then(response => {
    if(response.ok){
      return response.json()
    } else {
      throw Error(response.statusText)
    }
  }).catch(error => console.log(error))
  };
  
  let fetchAll = Promise.all([
    fetchData('travelers'),
    fetchData('travelers/1'),
    fetchData('trips'),
    fetchData('destinations'),
    ]);


  

  export {fetchAll, fetchData}