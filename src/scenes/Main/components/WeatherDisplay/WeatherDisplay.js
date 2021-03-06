import HTMLElem from '../HTMLElem/HTMLElem';
import './styles.scss';

const WeatherDisplay = (() => {
  const container = HTMLElem('div', ['container']);
  const { node } = container;
  node.id = 'temperatureText';
  const weatherIcon = (() => {
    const icon = HTMLElem('i', ['fa-10x', 'mb-3'], node);
    let activeStyle = NaN;
    const setIconStyle = (iconCssClasses) => {
      if (!Number.isNaN(activeStyle)) {
        activeStyle.forEach(cssClass => icon.node.classList.toggle(cssClass));
      }
      iconCssClasses.map(cssClass => icon.node.classList.toggle(cssClass));
      activeStyle = iconCssClasses;
    };
    return { ...icon, setIconStyle };
  })();
  weatherIcon.setIconStyle(['fas', 'fa-thermometer-three-quarters']);
  const topText = HTMLElem('h2', [], node);
  const textDisplay = HTMLElem('h1', ['display-3'], node);
  const bottomText = HTMLElem('h2', [], node);
  const units = () => ({ metric: 'ºC', imperial: 'ºF' });
  const setTemperature = (temperature, system = units().metric, city = NaN, country = NaN) => {
    topText.node.textContent = 'Current temperature:';
    textDisplay.node.textContent = `${temperature} ${system}`;
    bottomText.node.textContent = `in ${city}, ${country}`;
    if (system === units().metric) {
      switch (true) {
        case (temperature < 16):
          weatherIcon.setIconStyle(['fas', 'fa-thermometer-empty', 'text-info']);
          break;
        case (temperature < 24):
          weatherIcon.setIconStyle(['fas', 'fa-thermometer-half', 'text-warning']);
          break;
        case (temperature >= 24):
          weatherIcon.setIconStyle(['fas', 'fa-thermometer-three-quarters', 'text-danger']);
      }
    } else if (system === units().imperial) {
      switch (true) {
        case (temperature < 60):
          weatherIcon.setIconStyle(['fas', 'fa-thermometer-empty', 'text-info']);
          break;
        case (temperature < 75):
          weatherIcon.setIconStyle(['fas', 'fa-thermometer-half', 'text-warning']);
          break;
        case (temperature >= 75):
          weatherIcon.setIconStyle(['fas', 'fa-thermometer-three-quarters', 'text-danger']);
      }
    }
  };

  return { node, setTemperature, units };
})();

export default WeatherDisplay;
