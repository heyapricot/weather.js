import HTMLElem from '../../../HTMLElem/HTMLElem';

const UnitPicker = (textContent, cssClasses, values) => {
  const buttonGroup = HTMLElem('div', ['btn-group']);
  const { node } = buttonGroup;
  const buttonParameters = textContent.map(
    (text, index) => ({ text, style: cssClasses[index], value: values[index] }),
  );


  const buttons = buttonParameters.map((parameters, index) => {
    const clickCallbacks = [];
    const button = HTMLElem('div', parameters.style, buttonGroup.node);
    button.node.textContent = parameters.text;
    const addClickCallback = callbackfn => clickCallbacks.push(callbackfn);
    const onClick = () => clickCallbacks.forEach(callbackfn => callbackfn());
    const closure = () => console.log(`I'm button ${index}`);
    const value = () => parameters;
    addClickCallback(closure);
    button.node.addEventListener('click', onClick);
    return { addClickCallback, ...button, value };
  });

  return { buttons, node };
};

export default UnitPicker;
