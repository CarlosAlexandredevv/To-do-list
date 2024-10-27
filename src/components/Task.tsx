import { useState } from 'react';
import ButtonTrash from './ButtonTrash';
import Checkbox from './Checkbox';

export default function Task({ text }: { text: string }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="flex bg-gray-500 border border-gray-400 rounded-lg p-4">
      <Checkbox onChange={handleCheckboxChange} />
      <p
        className={`mx-3 flex-1 text-sm font-inter ${
          isChecked ? 'text-gray-300 line-through' : 'text-gray-100'
        }`}
      >
        {text}
      </p>
      <ButtonTrash />
    </div>
  );
}
