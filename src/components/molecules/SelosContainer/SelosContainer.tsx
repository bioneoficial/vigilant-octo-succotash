import { setStamp } from "@/Redux/Reducers/stampSlice";
import { Button } from "@/components/atoms/Button";
import { SelosItemProps, Stamps } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const SelosContainer: React.FC<SelosItemProps> = ({ Selos }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleEdit = (stamp: Stamps): void => {
    console.log(stamp);
    dispatch(setStamp(stamp));
    router.push(`/dashboard/selos/${stamp.id}`);
  };
  return (
    <div className="flex gap-4 flex-wrap flex-shrink">
      {Selos.map((selo: Stamps) => (
        <div
          className="border border-black shadow-lg  shadow-black flex flex-col "
          key={selo.name + selo.image}
        >
          <Button
            title=""
            status={true}
            onClick={(): void => handleEdit(selo)}
            className={["absolute self-end"]}
            icon={{ src: "/images/editPencil.svg", alt: "edit-pencil" }}
          />
          {selo.name}
          <Image src={selo.image} alt={selo.name} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default SelosContainer;
