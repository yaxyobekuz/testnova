import { Link } from "react-router-dom";

// Components
import Icon from "../../../components/common/Icon";

// Images
import bookImage from "../../../assets/images/3d-book.webp";

// Icons
import arrowRightIcon from "../../../assets/icons/outline/arrow-right-white.svg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr from-[#f2eef5] -mt-[86px] pt-28 pb-20">
      <div className="flex items-center justify-between container h-full">
        {/* Main Content */}
        <div className="space-y-5">
          {/* Title */}
          <h1 className="text-[32px] leading-normal font-semibold">
            TestNova bilan bilimingizni sinash <br /> orqali o'zingizni rivojlantiring!
          </h1>

          {/* Description */}
          <p className="max-w-xl text-lg text-neutral-500">
            Fanlar, til imtihonlari va ko'plab yo'nalishlardagi testlar siz
            uchun tayyor. O'rganing, sinang va yangi cho'qqilar sari intiling.
          </p>

          {/* Tests */}
          <Link to="bolimlar" className="btn-primary max-w-max">
            <span>Barcha testlar</span>
            <Icon src={arrowRightIcon} alt="O'ng tomon" />
          </Link>
        </div>

        {/* Image */}
        <Icon
          size={384}
          src={bookImage}
          className="size-96"
          alt="Qizil va ko'k rangli Kitob, Evrika, Porlayotgan 3d chiroq"
        />
      </div>
    </div>
  );
};

export default Hero;
