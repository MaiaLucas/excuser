import { Box } from "@mui/material";
import React from "react";
import IExcuses from "../interfaces/Excuses";
import Card from "./Card";

interface Props {
  list: IExcuses[];
}

const ListOfExcuses: React.FC<Props> = ({ list }) => {
  return (
    <Box>
      {list?.map((el: IExcuses, idx: number) => {
        return <Card {...el} key={el.id || idx} />;
      })}
    </Box>
  );
};

export default ListOfExcuses;
