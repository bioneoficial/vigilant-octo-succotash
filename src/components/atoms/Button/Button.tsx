import { buttonProps } from "@/types/types";
import Image from "next/image";

export const Button: React.FC<buttonProps> = ({
  onClick,
  title,
  icon = { src: "", alt: "" },
  status,
  grayIcon = { src: "", alt: "" },
  id,
  className = [],
}: buttonProps) => {
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  if (status) {
    return (
      <button
        id={id}
        onClick={onClick}
        disabled={false}
        className={classNames(...className)}
      >
        {icon.src && <Image src={icon.src} alt={icon.alt} />}
        {title}
      </button>
    );
  } else {
    return (
      <button id={id} onClick={onClick} disabled={true}>
        {grayIcon.src && <Image src={grayIcon.src} alt={grayIcon.alt} />}
        {title}
      </button>
    );
  }
};
