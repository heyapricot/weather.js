import HTMLElem from '../HTMLElem/HTMLElem';
import './styles.scss';

const WeatherDisplay = (() => {
  const container = HTMLElem('div', ['container']);
  const { node } = container;
  node.id = 'temperatureText';
  const icon = HTMLElem('i', ['fas', 'fa-thermometer-three-quarters', 'fa-10x', 'mb-3'], node);
  const topText = HTMLElem('h2', [], node);
  const textDisplay = HTMLElem('h1', ['display-3'], node);
  const bottomText = HTMLElem('h2', [], node);
  const units = () => ({ metric: 'ºC', imperial: 'ºF' });
  const setTemperature = (temperature, system = units().metric, city = NaN, country = NaN) => {
    topText.node.textContent = 'Current temperature:';
    textDisplay.node.textContent = `${temperature} ${system}`;
    bottomText.node.textContent = `in ${city}, ${country}`;
  };

  return { node, setTemperature, units };
})();

export default WeatherDisplay;
