import { getData } from './apiCalls';

describe('apiCalls', () => {
  describe('getData', () => {
    let cleanedPlanets;
    beforeEach(() => {
      cleanedPlanets = [{
        atmosphere: "Carbon dioxide, argon, nitrogen, traces of oxygen and water",
        averageTemp: -81,
        climate: "The atmosphere on Mars is extremely thin. Mars is an extremely cold planet with an average temperature around minus-80 degrees. Temperatures can dip to minus-225 degrees around the poles. Periods of warmth are brief — highs can reach 70 degrees for a brief time around Noon at the equator in the summer.",
        cutout: "https://i.dlpng.com/static/png/305213_preview.png",
        dayLength: "24 hours & 37 minutes",
        description: "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere.  This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past.  Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.",
        diameter: "4,222 miles",
        discovery: "Known to the ancients and visible to the naked eye↵",
        gravity: 0.38,
        id: 4,
        image2: "https://cdn.mos.cms.futurecdn.net/br4FkqpBujNhxsTfxgtXdE.jpg",
        image: "https://www.jpl.nasa.gov/images/mars/20160421/PIA00407-16.jpg",
        isFavored: false,
        key: 4,
        milesFromSun: "141.6 million",
        moons: 2,
        namesake: "Roman god of war",
        successfulMissions: "Mariner 4, Mariner 6, Mariner 7, Mars 2, Mars 3, Mariner 9, Viking 1, Viking 2, Mars Global Surveyor, Mars Pathfinder, Sojourner, Mars Odyssey, Mars Express, Spirit, Opprutunity, Rosetta, Mars Reconnaissance Orbiter, Phoenex, Dawn, Curiosity, Mars Orbiter Mission, MAVEN, ExoMars Trace Gas Orbiter, InSight & MarCO",
        sunRevolution: 687,
        title: "Mars",
        travelTime: "7 months"
      }];

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(cleanedPlanets)
        });
      });
    });
    
    it('should be called with the correct URL', () => {
      const expected = 'https://api.sheety.co/d7540295-434f-4ab0-be80-664042d906c4';
      getData();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return cleaned planet data (HAPPY)', async () => {
      const result = await getData();
      expect(result).toEqual(cleanedPlanets);
    });

    it('should return an error if it can\'t fetch data (SAD)', async () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(getData()).rejects.toEqual(Error('There was an error retrieving your planetary data...'))
    });
  });
});