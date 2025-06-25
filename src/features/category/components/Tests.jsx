// Components
import TestItem from "../../../components/common/TestItem";

const Tests = () => {
  return (
    <div className="py-8 md:py-10">
      <div className="container">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }, (_, index) => (
            <TestItem
              count={10}
              key={index}
              title="HTML basic"
              description={"HTML bo'yicha boshlang'ich savollar"}
              icon="https://andarov-frontquiz.netlify.app/img/js.svg"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tests;
