const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
w-full
rounded-xl
border
border-gray-300
bg-white
px-4
py-3
text-base
text-gray-800
outline-none
transition-colors
duration-200
placeholder:text-gray-400
focus:border-[var(--color-primary)]
focus:ring-4
focus:ring-orange-100
${className}
`}
      {...props}
    />
  );
};

export default Input;
