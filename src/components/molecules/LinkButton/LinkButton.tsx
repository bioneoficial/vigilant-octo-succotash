import { Button } from "@/components/atoms/Button";
import Link from "next/link";

interface LinkButtonProp {
  href: string;
  title: string;
  className: string;
  isBlock?: boolean;
  id?: string;
}
export const LinkButton: React.FC<LinkButtonProp> = ({
  href,
  title,
  className,
  isBlock,
  id = "LinkButton",
}): JSX.Element => (
  <Link href={href}>
    <Button
      title={title}
      status={true}
      className={[
        className,
        "font-medium",
        "text-[#8b00d1]",
        "uppercase",
        "hover:bg-purple-500",
        "hover:text-white",
        isBlock ? "block" : "",
      ]}
      id={id}
    />
  </Link>
);
