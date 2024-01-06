import { Box, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";

export default function Paginator() {
  return (
    <Box>
      <Stack justifyContent={"center"} direction={"row"}>
        <Pagination count={10} showFirstButton showLastButton />
      </Stack>
    </Box>
  );
}
