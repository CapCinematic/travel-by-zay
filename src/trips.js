
import { getTraveler, getTrip, getDestination } from "./data.js/getData"

class Trips {
  constructor(tripsObjOfArrays){
    this.trips = tripsObjOfArrays
  }

  getTripsByTraveler(traveler){
    return this.trips.find(trip => trip.id === traveler.id)
  }

  
}

export {Trips}