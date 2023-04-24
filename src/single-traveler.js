import { getTraveler, getTrip, getDestination } from "./data.js/getData"


class Traveler {
  constructor (travelerObj){
    this.id = travelerObj.id, 
    this.name = travelerObj.name, 
    this.travelType = travelerObj.travelerType
    this.trips = []
  }

 getTravelerById(travelerObj){
  return travelerObj.id
 }

}
export default Traveler