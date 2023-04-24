
class Traveler {
  constructor (travelersId, name, travelType){
    this.singleTraveler = [
      {id: travelersId, 
      name: name, 
      travelType: travelType}
    ]
    this.trips = []
    this.pendingTrips = []
  }

  calculateTotalSpent(){
    const totalSpent = this.trips.reduce((acc, curr) => {

    }, 0)
  }

  makeTripRequest(destination, date, duration, travelers){
    // const estimatedCost = this.calculateEstimatedCost();

    const newTrip = {
      
      destination: destination,
      date: date,
      duration: duration,
      travelers: travelers,
      cost: estimatedCost,
      status: "pending"
    }

    this.pendingTrips.push(newTrip)
  }

  calculateEstimatedCost(){
    // API call to get destination information and calculate estimated cost
    // Return estimated cost with 10% travel agent fee
  }
 
}

export default Traveler