const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",

    secondary:
      "bg-gray-900 text-white hover:bg-black",

    outline:
      "border border-gray-300 bg-white hover:bg-gray-100",

    ghost:
      "hover:bg-gray-100",
  };

  return (
    <button
      className={`rounded-2xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;