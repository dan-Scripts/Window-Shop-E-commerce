import Text from "@/common/components/ui/text";

type Props = {
  onClose: () => void;
};

const Banner = ({ onClose }: Props) => {
  
  return (
    <div className="py-4 text-white bg-black">
      <div className="container flex items-center justify-center sm:justify-evenly">
        <div className="flex flex-1 items-center justify-center gap-2">
          <a href="#">
            <img src="images/giftBox.svg" alt="promo image" />
          </a>
          <Text className="text-gray-200 font-rubik" size="textBase" as="p">
            <span> Sign up and get 10% off to your first order. </span>
            <a
              href="http://www.google.com"
              className="inline-block underline capitalize hover:no-underline sm:inline"
            >
              Sign up now
            </a>
          </Text>
        </div>
        <div className="rounded-full cursor-pointer" onClick={onClose}>
          <img
            src="images/img_closeIcon.svg"
            alt="closeButton"
            className="w-6 h-6 sm:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
