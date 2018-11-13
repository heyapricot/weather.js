import HTMLElem from '../../../HTMLElem/HTMLElem';

const UnitPicker = (textContent, cssClasses, values) => {
  let activeIndex = 0;
  const clickCallbacks = [];
  const buttonGroup = HTMLElem('div', ['btn-group']);
  let buttons = [];
  const activeButton = () => buttons[activeIndex];
  const addClickCallback = callbackfn => clickCallbacks.push(callbackfn);
  const onClick = () => clickCallbacks.forEach(callbackfn => callbackfn());
  const { node } = buttonGroup;
  const buttonParameters = textContent.map(
    (text, index) => ({ text, style: cssClasses[index], value: values[index] }),
  );

  const toggleAppearance = () => {
    buttons.forEach(button => button.node.classList.toggle('active'));
    activeIndex = (activeIndex + 1) % buttons.length;
  };

  addClickCallback(toggleAppearance);

  buttons = buttonParameters.map((parameters, index) => {
    const button = HTMLElem('div', parameters.style, buttonGroup.node);
    if (index === 0) button.node.classList.toggle('active');
    button.node.textContent = parameters.text;
    button.node.addEventListener('click', onClick);
    return { ...button, ...parameters };
  });

  return {
    activeButton, addClickCallback, buttons, node,
  };
};


export default UnitPicker;
