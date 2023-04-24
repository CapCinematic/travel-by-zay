// date
// "2022/09/16"
// destinationID
// 49
// duration
// 8
// id
// 1
// status
// "approved"
// suggestedActivities
// []
// travelers
// 1
// userID
// 44

class Trips {
  constructor(date, destinationId, duration, tripId, status, activities, numTravelers, travelerId){
    this.date = date
    this.destinationId = destinationId
    this.duration = duration
    this.tripId = tripId
    this.status = status
    this.activities = []
    this.numTravelers = numTravelers
    this.travelerId = travelerId
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