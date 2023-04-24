// destination
// "Lima, Peru"
// estimatedFlightCostPerPerson
// 400
// estimatedLodgingCostPerDay
// 70
// id
// 1
// image


class Destinations {
  constructor(destination,estFlightCostPP,estLodgingCostPD,destinationId, imageUrl){
    this.destination = destination
    this.estFlightCostPP = estFlightCostPP
    this.estLodgingCostPD = estLodgingCostPD
    this.id = destinationId
    this.image = imageUrl
  }
}