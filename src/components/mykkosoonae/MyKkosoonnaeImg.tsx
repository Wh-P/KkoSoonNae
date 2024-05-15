import React from "react";
import { Avatar } from "flowbite-react";
import { LuSwitchCamera } from "react-icons/lu";

interface MyKkosoonnaeImgProps {
  img?: string;
}

const MyKkosoonnaeImg: React.FC<MyKkosoonnaeImgProps> = (props) => {
  return (
    <div className="flex justify-center w-full">
      <div className="relative w-fit">
        <Avatar img={props.img} size="xl" rounded bordered color="light" />
        <div className="absolute size-10 bottom-0 right-0">
          <button className="flex justify-center items-center size-full rounded-full bg-MAIN_COLOR">
            <LuSwitchCamera color="#F4F6F1" size="25px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyKkosoonnaeImg;
