import CityForm from './scenes/Main/components/CityForm/CityForm';
import DataFetcher from './scenes/Main/components/DataFetcher/DataFetcher';
import HTMLElem from './scenes/Main/components/HTMLElem/HTMLElem';
import WeatherDisplay from './scenes/Main/components/WeatherDisplay/WeatherDisplay';
import './style.scss';

// DataFetcher.getWeatherData('Mexico City', 'imperial').then(data => console.log(data));
// DataFetcher.getWeatherData('Mexico City', 'metric').then(data => console.log(data));

const mainSection = HTMLElem('section', [], document.body);
mainSection.node.id = 'main';
const container = HTMLElem('div', ['container', 'h-100'], mainSection.node);
const row = HTMLElem('div', ['row', 'h-100'], container.node);
const column = HTMLElem('div', ['col', 'd-flex', 'flex-column', 'justify-content-center', 'text-center'], row.node);
column.node.appendChild(WeatherDisplay.node);
const form = CityForm();
form.node.classList.toggle('my-5');
const onClickSubmit = () => {
  DataFetcher.getWeatherData(form.getInputData().city, 'metric').then(data => WeatherDisplay.setTemperature(data.main.temp));
};
form.addClickCallback(onClickSubmit);
column.node.appendChild(form.node);
