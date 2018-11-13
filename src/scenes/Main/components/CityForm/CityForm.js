import HTMLElem from '../HTMLElem/HTMLElem';
import UnitPicker from './components/UnitPicker/UnitPicker';

const CityForm = () => {
  const clickCallbacks = [];
  const container = HTMLElem('div', ['container']);
  const { node } = container;
  const inputGroup = HTMLElem('div', ['input-group', 'mb-3'], node);
  const cityInput = HTMLElem('input', ['form-control'], inputGroup.node);
  cityInput.node.placeholder = 'Please enter your city';
  const buttonContainer = HTMLElem('div', ['input-group-append'], inputGroup.node);
  const button = HTMLElem('div', ['btn', 'btn-light'], node);
  button.node.textContent = 'Submit';
  const unitPicker = UnitPicker(['ºC', 'ºF'], [['btn', 'btn-primary'], ['btn', 'btn-info']], ['metric', 'imperial']);
  buttonContainer.node.appendChild(unitPicker.node);

  const addClickCallback = callbackfn => clickCallbacks.push(callbackfn);
  const getInputData = () => ({ city: cityInput.node.value });
  const onClickSubmit = () => {
    clickCallbacks.forEach(callbackfn => callbackfn());
  };
  const unitSystem = () => unitPicker.activeButton().value;

  button.node.addEventListener('click', onClickSubmit);

  return { addClickCallback, getInputData, node, unitSystem };
};

export default CityForm;
