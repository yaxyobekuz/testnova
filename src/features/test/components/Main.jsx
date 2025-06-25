// Components
import Icon from "../../../components/common/Icon";

// Backgrounds
import patternImage from "../../../assets/backgrounds/education-pattern.webp";

const Main = () => {
  return (
    <div className="pt-8 pb-20 md:pt-10">
      <div className="container">
        {/* Question container */}
        <div className="relative overflow-hidden max-w-2xl w-full bg-primary-50 py-8 px-5 mx-auto mb-8 border-2 border-primary-400 rounded-2xl text-center text-lg font-medium animate-slide-up sm:text-xl sm:px-8">
          {/* Question  */}
          <span className="relative z-10">
            Filterning qaysi hossasi yordamida berilgan elementga hiralik
            qo'shishimiz mumkin?
          </span>

          {/* Pattern 1 */}
          <Icon
            draggable={false}
            aria-hidden="true"
            src={patternImage}
            className="absolute z-0 left-0 top-0 size-40 opacity-30 rotate-180 select-none"
          />

          {/* Pattern 2 */}
          <Icon
            draggable={false}
            aria-hidden="true"
            src={patternImage}
            className="absolute z-0 right-0 bottom-0 size-40 opacity-30 select-none"
          />
        </div>

        {/* Answers */}
        <div className="space-y-3.5">
          {Array.from({ length: 4 }, (_, index) => (
            <button
              key={index}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              className="flex items-center justify-center max-w-2xl w-full h-14 bg-white px-4 mx-auto border-2 border-transparent rounded-2xl text-center font-medium cursor-pointer animate-slide-up outline-none transition-colors duration-300 hover:bg-primary-50 hover:border-primary-400 focus:bg-primary-50 focus:border-primary-400"
            >
              {`Savol javobi ${index + 1}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
