const SectionTitle = ({
  subtitle,
  title,
}) => {
  return (
    <div className="mb-14">

      <span className="font-semibold text-orange-500">
        {subtitle}
      </span>

      <h2 className="mt-2 text-4xl font-black text-gray-900">
        {title}
      </h2>

    </div>
  );
};

export default SectionTitle;