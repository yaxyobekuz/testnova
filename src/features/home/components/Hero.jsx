import { Link } from "react-router-dom";

// Components
import Icon from "../../../components/common/Icon";

// Images
import bookImage from "../../../assets/images/3d-book.webp";

// Icons
import arrowRightIcon from "../../../assets/icons/outline/arrow-right-white.svg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr from-[#f2eef5] -mt-[86px] pt-24 pb-16 xs:pt-28 xs:pb-20">
      <div className="flex flex-col-reverse items-center justify-between container h-full md:flex-row">
        {/* Main Content */}
        <div className="space-y-5">
          {/* Title */}
          <h1 className="sm:text-center md:text-left">
            TestNova bilan bilimingizni sinash{" "}
            <br className="hidden xs:block" /> orqali o'zingizni rivojlantiring!
          </h1>

          {/* Description */}
          <p className="max-w-xl text-neutral-500 xs:text-lg sm:text-center md:text-left">
            Fanlar, til imtihonlari va ko'plab yo'nalishlardagi testlar siz
            uchun tayyor. O'rganing, sinang va yangi cho'qqilar sari intiling.
          </p>

          {/* Tests */}
          <Link
            to="bolimlar"
            className="btn-primary max-w-max sm:mx-auto md:mx-0"
          >
            <span>Barcha testlar</span>
            <Icon src={arrowRightIcon} alt="O'ng tomon" />
          </Link>
        </div>

        {/* Image */}
        <Icon
          size={384}
          src={bookImage}
          className="w-full h-auto aspect-square xs:size-96"
          alt="Qizil va ko'k rangli Kitob, Evrika, Porlayotgan 3d chiroq"
        />
      </div>
    </div>
  );
};

export default Hero;
