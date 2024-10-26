export default function Checkbox() {
  return (
    <input
      className="size-[17px] appearance-none border-[3px] border-blue rounded-full cursor-pointer duration-300 p-2 hover:border-blue-dark hover:bg-blue-dark hover:bg-opacity-20 checked:border-purple-dark checked:bg-purple-dark checked:bg-checkmark checked:bg-no-repeat checked:bg-center checked:duration-0 hover:checked:bg-purple hover:checked:border-purple"
      type="checkbox"
    />
  );
}
