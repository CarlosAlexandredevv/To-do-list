type InputProps = {
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ placeholder, ...props }: InputProps) {
  return (
    <input
      className="flex-1 bg-gray-500 text-gray-100 p-4 border-2 border-gray-700 rounded-lg placeholder:text-gray-300 focus:border-purple-dark outline-none"
      placeholder={placeholder}
      {...props}
    />
  );
}
