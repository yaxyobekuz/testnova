const TestItem = () => {
  return (
    <li className="test-item !border-transparent">
      <div className="size-12 bg-neutral-100 animate-pulse rounded-lg mb-5 md:size-14" />

      <div className="mb-5 xs:mb-6 md:mb-4">
        {/* Title */}
        <div className="max-w-56 w-2/3 h-7 bg-neutral-100 animate-pulse rounded-lg mb-2.5 md:h-8" />

        {/* Description */}
        <div className="max-w-96 w-full h-5 bg-neutral-100 animate-pulse rounded-lg md:h-6" />
      </div>

      {/* Count */}
      <div className="max-w-64 w-3/4 h-5 bg-neutral-100 animate-pulse rounded-lg xs:h-6" />
    </li>
  );
};

export default TestItem;
