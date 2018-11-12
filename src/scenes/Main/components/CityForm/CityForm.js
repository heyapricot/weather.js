import HTMLElem from '../HTMLElem/HTMLElem';

const CityForm = () => {
  const form = HTMLElem('form', []);
  const { node } = form;
  const cityInput = HTMLElem('input', ['form-control', 'my-3'], node);
  cityInput.node.placeholder = 'Please enter your city';
  const submit = HTMLElem('button', ['btn', 'btn-primary'], node);
  submit.node.textContent = 'Submit';
  submit.node.type = 'submit';
  return { node };
};

export default CityForm;
