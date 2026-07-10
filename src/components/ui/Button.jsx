const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",

    secondary:
      "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100",

    outline:
      "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-orange-50",

    danger: "bg-red-500 text-white hover:bg-red-600",

    success: "bg-green-500 text-white hover:bg-green-600",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        rounded-[var(--radius-md)]
        font-medium
        transition-color
        duration-200
        cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
