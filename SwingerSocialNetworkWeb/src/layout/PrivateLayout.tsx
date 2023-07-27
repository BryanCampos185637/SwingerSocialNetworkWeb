import { ReactElement } from "react";

import { Menu } from "../components";

interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
}

const PrivateLayout = ({ className = "privateLayout", children }: Props) => {
  return (
    <>
      <Menu />
      <section className={`${className}`}>
        {children}
      </section>
    </>
  );
};

export default PrivateLayout;
