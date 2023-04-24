// alt
// "overview of city buildings with a clear sky"
// destination
// "Lima, Peru"
// estimatedFlightCostPerPerson
// 400
// estimatedLodgingCostPerDay
// 70
// id
// 1
// image
// :
class Destination {
  constructor(destinationObj){
    this.destination = destinationObj.destination
    this.estimatedFlightCostPerPerson = destinationObj.estimatedFlightCostPerPerson
    this.estimatedLodgingCostPerDay = destinationObj.estimatedLodgingCostPerDay
    this.id = destinationObj.id
    this.image = destinationObj.image
  }
}

export default Destination