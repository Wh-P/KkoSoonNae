import React from "react";
import { Link } from "react-router-dom";
import BtnSubmit from "../common/BtnSubmit";

const ReservationOk: React.FC = () => {
  return (
    <div>
      <div className="py-8 px-4 flex flex-col items-center">
        <img
          src="/img/common/icon-dog_star.svg"
          alt="꼬순내 로고 별"
          style={{ width: "80px" }}
        />
        <h2 className="text-xl mt-4">예약확인</h2>
        <p className=" text-black text-sm  mt-4 mb-8">예약이 완료 되었습니다</p>
        <Link to="/my_reservation" className="block w-full">
          <BtnSubmit value="예약내역" />
        </Link>
      </div>
    </div>
  );
};

export default ReservationOk;
