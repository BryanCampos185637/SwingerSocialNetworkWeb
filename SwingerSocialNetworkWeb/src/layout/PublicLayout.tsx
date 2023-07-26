import { ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
}

export const PublicLayout = ({
  children,
  className = "publicLayout",
}: Props) => {
  return <section className={className}>{children}</section>;
};
