import HTMLElem from '../HTMLElem/HTMLElem';

const CityForm = () => {
  const clickCallbacks = [];
  const form = HTMLElem('form', []);
  const { node } = form;
  const cityInput = HTMLElem('input', ['form-control', 'my-3'], node);
  cityInput.node.placeholder = 'Please enter your city';
  const button = HTMLElem('div', ['btn', 'btn-primary'], node);
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
