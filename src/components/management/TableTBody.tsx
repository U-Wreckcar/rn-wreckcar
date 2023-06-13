import React, { FC } from "react";
import Tooltip from "@mui/material/Tooltip";

type TBody = {
  title: string;
};

export const TableTBody: FC<TBody> = ({ title }) => {
  return (
    <Tooltip title={title}>
      <td>{title}</td>
    </Tooltip>
  );
};
