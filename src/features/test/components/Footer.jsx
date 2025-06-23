const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 w-full bg-neutral-50 py-5">
      <div className="flex items-center gap-5 container">
        {/* Progressbar */}
        <div className="w-full h-1 bg-primary-100 rounded-full">
          <div className="w-2/3 h-full bg-primary-500 rounded-full" />
        </div>

        {/* Progress text */}
        <div className="btn-outline gap-1.5 shrink-0 w-24 font-medium hover:bg-white">
          <span className="text-primary-500">7</span>
          <span className="text-neutral-500">/</span>
          <span className="text-neutral-500">10</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
