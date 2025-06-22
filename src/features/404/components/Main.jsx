// Components
import Icon from "../../../components/common/Icon";

// Images
import image404 from "../../../assets/images/404.webp";

const Main = () => {
  return (
    <div className="flex items-center justify-center grow">
      <div className="flex flex-col items-center justify-center gap-5">
        <Icon size={320} src={image404} className="size-80" alt="3d 404" />
        <h1 className="text-[32px] font-semibold">Sahifa topilmadi!</h1>
      </div>
    </div>
  );
};

export default Main;
