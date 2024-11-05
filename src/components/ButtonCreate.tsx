import { ButtonHTMLAttributes } from 'react';

type ButtonCreateProps = {
  text: string;
  src: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonCreate({
  text,
  src,
  ...props
}: ButtonCreateProps) {
  return (
    <button
      className="flex items-center gap-2 bg-blue-dark font-bold text-sm text-gray-100 p-4 rounded-lg hover:bg-blue duration-300"
      {...props}
    >
      {text}
      <img src={src} alt="plus" />
    </button>
  );
}
