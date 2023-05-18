/* eslint-disable @typescript-eslint/no-unused-vars */
import { DenounceItemProps } from "@/types/types";
import Image from "next/image";

export const DenounceItem: React.FC<DenounceItemProps> = ({
  id,
  denouncerId = 0,
  denouncerName,
  denounceType,
  denounceDetails,
  episodeImage,
  episodeId = 0,
  SerieName,
  autorName,
  autorId = 0,
  denouceData,
}) => {
  // essa tela tera que ser bem alterada.

  return (
    <tr
      className="border-collapse border  border-slate-300 hover:bg-gray-700 hover:text-white"
      key={id + denouncerId}
    >
      <td>{denouncerName}</td>
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
      <td>{autorName}</td>
      <td>{denouceData}</td>
    </tr>
  );
};
