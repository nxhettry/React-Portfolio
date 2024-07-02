import React from 'react';

const Input = ({ type, id, name, value, onChange, placeholder, required }) => {
  const inputType = type === 'textarea' ? 'textarea' : 'input';

  return React.createElement(inputType, {
    className: type === 'textarea' ? 'bg-inherit text-black outline outline-gray-200 h-36 px-4 py-4px text-md' : 'bg-inherit outline text-black outline-gray-200 h-12 px-4 text-md',
    placeholder,
    id,
    type: type === 'textarea' ? null : type,
    name,
    value,
    onChange,
    required,
    spellCheck: false,
  });
};

export default Input;