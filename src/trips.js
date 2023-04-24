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
  constructor(date, destinationId, duration, tripId, status, numTravelers, travelerId){
    this.date = date
    this.destinationId = destinationId
    this.duration = duration
    this.tripId = tripId
    this.status = status
    this.activities = []
    this.numTravelers = numTravelers
    this.travelerId = travelerId
  }

  addActivity(){

  }

  calculateTotalCost(){
    
  }

  getTripDetails(){
    return this.trips
  }

 
}