
import { getTraveler, getTrip, getDestination } from "./data.js/getData"

class Trip {
  constructor(tripObj){
    this.date = tripObj.date
    this.destinationID = tripObj.destinationID
    this.duration = tripObj.duration
    this.id = tripObj.id
    this.status = tripObj.status
    this.suggestedActivities = tripObj.suggestedActivities
    this.travelers = tripObj.travelers
    this.userID = tripObj.userID
  }

  getTripsByTraveler(traveler){
    return this.trips.find(trip => trip.id === traveler.id)
  }

  
}

export default Trip