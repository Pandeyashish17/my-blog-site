import Link from "next/link";
import { Button } from "@material-tailwind/react";
import useStateContext from "../context/StateContext";
import { useEffect } from "react";

const Notfound = () => {
  const { aosFunc } = useStateContext();
  useEffect(() => {
    aosFunc();
  }, []);
  return (
    <div className="mt-14 mb-10 " data-aos="zoom-in">
      <div className="container">
        <div className="text-center">
          <img
            src="https://togy-app.vercel.app/assets/img/error.png"
            className="inline-block mb-10"
            alt="error-image"
          />
          <h3 className="font-bold text-18px md:text-20px lg:text-24px mb-15 lg:mb-18">
            {` Oops! That page can't be found`}
          </h3>
          <p className="md:max-w-[510px] md:ml-auto md:mr-auto leading-7 md:leading-8 text-optional-color mb-10 md:mb-15 text-13px md:text-15px lg:text-16px">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link href="/">
            <Button ripple={true}>Back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
