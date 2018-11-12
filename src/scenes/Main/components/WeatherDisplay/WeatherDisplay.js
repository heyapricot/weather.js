import HTMLElem from '../HTMLElem/HTMLElem';
import './styles.scss';

const WeatherDisplay = (() => {
  const container = HTMLElem('div', ['container']);
  const { node } = container;
  const icon = HTMLElem('i', ['fas', 'fa-thermometer-three-quarters', 'fa-10x'], node);
  icon.node.style.color = 'white';
  const textDisplay = HTMLElem('h1', ['display-3'], node);
  textDisplay.node.id = 'temperatureText';
  const units = {
    metric: 'ºC',
    imperial: 'ºF',
  };
  const setTemperature = (temperature, system = units.metric) => { textDisplay.node.textContent = `${temperature} ${system}`; };

  return { node, setTemperature };
})();

export default WeatherDisplay;
