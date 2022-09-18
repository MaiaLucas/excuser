import MoodIcon from "@mui/icons-material/Mood";
import { Box, ButtonBase, SelectChangeEvent } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useState } from "react";
import IExcuses from "../interfaces/Excuses";
import InputSelect from "./InputSelect";
import ListOfExcuses from "./List";

interface Props {
  excuses: IExcuses[];
}

const Body: React.FC<Props> = ({ excuses }) => {
  const [list, setList] = useState<IExcuses[]>(excuses);
  const [category, setCategory] = useState<string | undefined>("All");
  const handleChange = async ({
    target: { value },
  }: SelectChangeEvent<typeof category>) => {
    const reqValue = value === "all" ? "" : `${value}/`;
    const res = await fetch(`${process.env.baseUrl}/excuse/${reqValue}100`);
    const data = await res.json();
    setCategory(value);
    setList(data);
  };

  const handleFeelingLucky = async () => {
    const res = await fetch(`${process.env.baseUrl}/excuse`);
    const data = await res.json();
    setList(data);
    setCategory(data[0].category);
  };

  return (
    <Box
      pt={2}
      px={1}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <InputSelect handleChange={handleChange} category={category} />
      <ButtonBase
        sx={{
          p: 2,
          background: green[500],
          maxWidth: 350,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          borderRadius: 2,
          color: "white",
        }}
        onClick={handleFeelingLucky}
      >
        I`m feeling lucky today <MoodIcon sx={{ ml: 1 }} />
      </ButtonBase>
      <ListOfExcuses list={list} />
    </Box>
  );
};

export default Body;
