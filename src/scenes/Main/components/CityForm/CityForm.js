import HTMLElem from '../HTMLElem/HTMLElem';

const CityForm = () => {
  const form = HTMLElem('form', []);
  const { node } = form;
  const cityInput = HTMLElem('input', ['form-control'], node);
  cityInput.node.placeholder = 'Please enter your city';
  return { node };
};

export default CityForm;
