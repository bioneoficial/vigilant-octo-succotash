import { openModal } from "@/Redux/Reducers/modalSlice";
import { Button } from "@/components/atoms/Button";
import { CouponItem } from "@/components/molecules/CoupounItem";
import { cuponsMock } from "@/utils/const";
import { HEAD_TABLE_COUPONS, modalTypeEnum } from "@/utils/enums";
import { useId } from "react";
import { useDispatch } from "react-redux";

export default function Selos(): JSX.Element {
  const dispatch = useDispatch();
  const uuidCupom = useId();
  return (
    <div className=" ml-6 flex flex-col justify-center items-center w-full ">
      <h2 className=" mt-6 ml-6 mb-4 text-2xl font-semibold">Cupons</h2>
      <Button
        title="+ Novo Cupom"
        status={true}
        className={[
          "flex items-center py-2 px-2 ml-6 mb-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]",
        ]}
        onClick={(): void => {
          dispatch(openModal(modalTypeEnum.CREATE_COUPON));
        }}
      />
      <table className="table-auto border-collapse text-center">
        <thead className="border-collapse border border-slate-500">
          <tr>
            {Object.values(HEAD_TABLE_COUPONS).map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cuponsMock.map((cupom) => (
            <CouponItem {...cupom} key={uuidCupom + cupom.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
