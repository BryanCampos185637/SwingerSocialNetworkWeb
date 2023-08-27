import React, { ReactElement } from "react";

interface Props {
  title: string;
  children: ReactElement | ReactElement[];
}

export const CardAccount = ({ title, children }: Props) => {
  return (
    <div className="card card_local">
      <div className="card-body">
        <h3 className="text-center">{title}</h3>
        {children}
      </div>
    </div>
  );
};
