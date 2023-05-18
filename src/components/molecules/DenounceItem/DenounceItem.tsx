/* eslint-disable @typescript-eslint/no-unused-vars */
import { selectUser } from "@/Redux/Reducers/userSlice";
import { Button } from "@/components/atoms/Button";
import { DenounceItemProps } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export const DenounceItem: React.FC<DenounceItemProps> = ({
  id,
  denouncerId,
  denouncerName,
  denounceType,
  denounceDetails,
  episodeImage,
  episodeId = 0,
  SerieName,
  autorName,
  autorId,
  denouceData,
}) => {
  // essa tela tera que ser bem alterada.
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBtnClick = (id: number): void => {
    dispatch(selectUser(id));
    router.push(`/dashboard/usuarios/${id}`);
  };
  return (
    <tr
      className="border-collapse border  border-slate-300 hover:bg-gray-700 hover:text-white"
      key={id + denouncerId}
    >
      <td>
        <Button
          title={denouncerName}
          status={true}
          onClick={(): void => handleBtnClick(denouncerId)}
        />
      </td>
      <td className="bg-gray-500">{denounceType}</td>
      <td className="flex justify-center">
        <Image
          src={episodeImage}
          width={19}
          height={19}
          alt="episodeImage"
          className="h-16 w-16 rounded-sm"
          quality={100}
        />
      </td>
      <td>{denounceDetails}</td>
      <td>{SerieName}</td>
      <td>
        <Button
          title={autorName}
          status={true}
          onClick={(): void => handleBtnClick(autorId)}
        />
      </td>
      <td>{denouceData}</td>
    </tr>
  );
};
