import CityForm from './scenes/Main/components/CityForm/CityForm';
import HTMLElem from './scenes/Main/components/HTMLElem/HTMLElem';
import './style.scss';

import DataFetcher from './scenes/Main/components/DataFetcher/DataFetcher';

// DataFetcher.getWeatherData('Mexico City', 'imperial').then(data => console.log(data));
// DataFetcher.getWeatherData('Mexico City', 'metric').then(data => console.log(data));

const mainSection = document.createElement('section');
mainSection.id = 'main';
const container = HTMLElem('div', ['container', 'h-100'], mainSection);
const row = HTMLElem('div', ['row', 'h-100'], container.node);
const column = HTMLElem('div', ['col', 'd-flex', 'flex-column', 'justify-content-center'], row.node);
const form = CityForm();
column.node.appendChild(form.node);
document.body.appendChild(mainSection);
