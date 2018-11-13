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
  const button = HTMLElem('div', ['btn', 'btn-primary'], node);
  button.node.textContent = 'Submit';
  const unitPicker = UnitPicker(['ºC', 'ºF'], Array(2).fill(['btn', 'btn-info']));
  buttonContainer.node.appendChild(unitPicker.node);

  const addClickCallback = callbackfn => clickCallbacks.push(callbackfn);
  const getInputData = () => ({ city: cityInput.node.value });
  const onClickSubmit = () => {
    clickCallbacks.forEach(callbackfn => callbackfn());
  };

  button.node.addEventListener('click', onClickSubmit);

  return { addClickCallback, getInputData, node };
};

export default CityForm;
