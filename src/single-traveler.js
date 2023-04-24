
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

 
}

export default Traveler