import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Category } from "../interfaces/Category";

interface Props {
  category: string | undefined;
  handleChange: (event: any) => Promise<void>;
}

const InputSelect: React.FC<Props> = ({ handleChange, category }) => {
  return (
    <Box py={2} sx={{ maxWidth: 350, width: "100%" }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-multiple-name-label"
          sx={{
            textTransform: "capitalize",
          }}
          value={category}
          onChange={handleChange}
          variant="outlined"
          input={<OutlinedInput label="" />}
          renderValue={(selected) => {
            if (!selected) {
              return <em>Choose a category for your excuses</em>;
            }

            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>Choose a category for your excuses</em>
          </MenuItem>
          <MenuItem value="all">All</MenuItem>
          {Object.keys(Category).map((cat, idx: number) => (
            <MenuItem
              key={idx}
              value={cat}
              sx={{
                py: 2,
                textTransform: "capitalize",
              }}
            >
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default InputSelect;
