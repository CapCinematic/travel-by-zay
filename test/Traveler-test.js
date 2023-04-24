import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/single-traveler';

describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(1, 'John Smith', 'business')
  });
  it('should be a function', function () {
    expect(Traveler).to.be.a('function');
  });

  it('should have a single traveler array', () => {
    expect(traveler.singleTraveler).to.deep.equal([
      { id: 1, name: 'John Smith', travelType: 'business' }
    ]);
  })

  it('should have default values for trips and pendingTrips', () => {
    expect(traveler.trips).to.deep.equal([]);
    expect(traveler.pendingTrips).to.deep.equal([]);
  });

})

