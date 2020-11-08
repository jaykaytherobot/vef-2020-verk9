import { populateSite } from './lib/geodataUsage';
import { fetchEarthquakes } from './lib/earthquakes';
import { init } from './lib/map';


document.addEventListener('DOMContentLoaded', async () => {
  const eqList = document.querySelector('.earthquakes');
  const earthquakes = fetchEarthquakes();

  init('mapid');
  populateSite(eqList, earthquakes);
});
