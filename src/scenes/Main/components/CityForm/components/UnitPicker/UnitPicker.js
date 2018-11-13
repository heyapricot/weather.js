import HTMLElem from '../../../HTMLElem/HTMLElem';

const UnitPicker = (textContent, cssClasses) => {
  const buttonGroup = HTMLElem('div', ['btn-group']);
  const { node } = buttonGroup;
  const buttonParameters = textContent.map(
    (text, index) => ({ text, style: cssClasses[index] }),
  );
  const buttons = buttonParameters.map((parameters) => {
    const button = HTMLElem('div', parameters.style, node);
    button.node.textContent = parameters.text;
    return button;
  });

  return { buttons, node };
};

export default UnitPicker;
