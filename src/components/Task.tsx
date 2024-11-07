import ButtonTrash from './ButtonTrash';
import Checkbox from './Checkbox';

type TaskProps = {
  text: string;
  isChecked: boolean;
  onDelete: () => void;
  onComplete: () => void;
  onUncomplete: () => void;
};

export default function Task({
  text,
  isChecked,
  onDelete,
  onComplete,
  onUncomplete,
}: TaskProps) {
  function handleCheckboxChange() {
    if (!isChecked) {
      onComplete();
    } else {
      onUncomplete();
    }
  }

  function handleDeleteTask() {
    onDelete();
  }

  return (
    <div className="flex bg-gray-500 border border-gray-400 rounded-lg p-4">
      <Checkbox onClick={handleCheckboxChange} checked={isChecked} />
      <p
        className={`mx-3 flex-1 text-sm font-inter break-words ${
          isChecked ? 'text-gray-300 line-through' : 'text-gray-100'
        }`}
      >
        {text}
      </p>

      <ButtonTrash onClick={handleDeleteTask} />
    </div>
  );
}
