class Traveler {
  constructor (trips, pendingTrips){
    this.trips
    this.pendingTrips
  }

  getTripDetails(){
    return this.trips
  }

  calculateTotalSpent(){
    const totalSpent = this.trips.reduce((acc, curr) => {

    }, 0)
  }

  makeTripRequest(){
    const estimatedCost = this.calculateEstimatedCost();

    const newTrip = {
      date: date,
      duration: duration,
      travelers: travelers,
      destination: destination,
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