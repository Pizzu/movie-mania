import Link from "next/link";
import { useRouter } from "next/router";
import { Medium } from "~/components/typography";
import { SvgHandler } from "~/components/ui";
import { useHover } from "~/hooks/useHover";

export interface ISidebarLink {
  title: string;
  href: string;
  icon:
    | "homeIcon"
    | "playIcon"
    | "signoutIcon"
    | "starIcon"
    | "ticketIcon"
    | "timeIcon"
    | "logoIcon";
  width?: string;
  height?: string;
}

const SidebarLink: React.FC<ISidebarLink> = ({
  title,
  icon,
  width,
  height,
  href,
}) => {
  const { ref, hover } = useHover();
  const { pathname } = useRouter();
  const isActive = pathname === href ? true : false;

  return (
    <Link href={href} passHref>
      <div
        ref={ref}
        className={`flex w-full items-center justify-start gap-3 rounded-full ${
          isActive || hover ? "bg-primary" : "bg-none"
        } px-8 py-4 transition-all`}
      >
        <SvgHandler
          icon={icon}
          width={width}
          height={height}
          isHighlighted={isActive || hover ? true : false}
        />
        <Medium>{title}</Medium>
      </div>
    </Link>
  );
};

export default SidebarLink;
