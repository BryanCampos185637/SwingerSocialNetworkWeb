import { ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
}

export const PublicLayout = ({
  children,
  className = "publicLayout",
}: Props) => {
  return <div className={className}>{children}</div>;
};
