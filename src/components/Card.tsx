import { Box, Paper, Typography } from "@mui/material";
import { Category } from "../interfaces/Category";
import IExcuses from "../interfaces/Excuses";

type Props = Omit<IExcuses, "id">;

const Card: React.FC<Props> = ({ excuse, category }) => {
  return (
    <Paper
      variant="outlined"
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        my: 1,
        minHeight: 100,
        cursor: "pointer",
        maxWidth: 350,
        width: "100%",
      }}
    >
      <Typography variant="body1">{excuse}</Typography>
      <Typography variant="subtitle2" pt={2} textAlign="end">
        {Category[category]}
      </Typography>
    </Paper>
  );
};

export default Card;
