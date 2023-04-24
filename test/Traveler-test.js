import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/single-traveler';
import { getTraveler } from '../src/data.js/getData';
describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler({id: getTraveler.id, name: getTraveler.name, travelType: getTraveler.travelType})
  });
  it('should be a function', function () {
    expect(Traveler).to.be.a('function');
  });

  it('should have a single traveler object', () => {
    expect(traveler.singleTraveler).to.deep.equal(
      { id: 1, name: 'John Smith', travelType: 'business' }
    );
  })

  it('should have default values for trips and pendingTrips', () => {
    expect(traveler.trips).to.deep.equal([]);
    expect(traveler.pendingTrips).to.deep.equal([]);
  });
  
  it('should be able to add a trip', () => {
    traveler.makeTripRequest('Denver', '2023/05/03', 7, 3);
    expect(traveler.pendingTrips).to.deep.equal([{
      id: 1,
        destination: 'Denver',
        date: '2022/06/01',
        duration: 7,
        travelers: 3,
        status: 'pending',
        suggestedActivities: [],
    }])
  });

  // it('should be able to return total cost', () => {
    
  // })

  // it('should be able to calculate total spent on trips', () => {
    
  // })

  // it('should be able to get trip details', () => {
    
  // })

  it.skip('', () => {
    
  })

  it.skip('', () => {
    
  })

})

