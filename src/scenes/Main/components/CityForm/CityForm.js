import HTMLElem from '../HTMLElem/HTMLElem';

const CityForm = () => {
  const clickCallbacks = [];
  const inputGroup = HTMLElem('div', ['input-group']);
  const { node } = inputGroup;
  const cityInput = HTMLElem('input', ['form-control'], node);
  cityInput.node.placeholder = 'Please enter your city';
  const buttonContainer = HTMLElem('div', ['input-group-append'], node);
  const button = HTMLElem('div', ['btn', 'btn-primary'], buttonContainer.node);
  button.node.textContent = 'Submit';

  const addClickCallback = callbackfn => clickCallbacks.push(callbackfn);
  const getInputData = () => ({ city: cityInput.node.value });
  const onClickSubmit = () => {
    clickCallbacks.forEach(callbackfn => callbackfn());
  };

  button.node.addEventListener('click', onClickSubmit);

  return { addClickCallback, getInputData, node };
};

export default CityForm;
