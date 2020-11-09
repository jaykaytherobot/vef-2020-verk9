
import { map } from 'leaflet';
import { el, element, formatDate } from './utils';
import { createPopup } from './map';

export async function populateSite(ul, earthquakes) {
  earthquakes
    .then((equakeArray) => {
      console.log(equakeArray)
      equakeArray.forEach(equake => {
        let marker = createPopup(equake, '');
        ul.appendChild(
          el('li', 
            el('div',
              el('h2', equake.properties.title),
              el('dl', 
                el('dt', 'Tími'),
                el('dd', `${formatDate(equake.properties.time)}`),
                el('dt', 'Styrkur'),
                el('dd', `${equake.properties.mag} á richter`)
              ),
              el('div', 
                element('button', { 'class': 'buttons' }, { click: () => {
                  marker.openPopup();
                }}, 'Sjá á korti'),
                element('a', { 'href': equake.properties.url }, {}, 'Skoða nánar')
              )
            )
          )
        );
      });
      document.querySelector('.earthquakes-container').removeChild(document.querySelector('.loading'));
    });
}