import { useState } from 'react';
import ButtonTrash from './ButtonTrash';
import Checkbox from './Checkbox';

type TaskProps = {
  text: string;
  onComplete: () => void;
  onUncomplete: () => void;
  onDelete: () => void;
};

export default function Task({
  text,
  onComplete,
  onUncomplete,
  onDelete,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    if (!isChecked) {
      onComplete();
    } else {
      onUncomplete();
    }
    setIsChecked(!isChecked);
  }

  function handleDeleteTask() {
    onDelete();
  }

  return (
    <div className="flex bg-gray-500 border border-gray-400 rounded-lg p-4 truncate">
      <Checkbox onClick={handleCheckboxChange} />
      <p
        className={`mx-3 flex-1 text-sm font-inter truncate ${
          isChecked ? 'text-gray-300 line-through' : 'text-gray-100'
        }`}
      >
        {text}
      </p>
      <ButtonTrash onClick={handleDeleteTask} />
    </div>
  );
}
