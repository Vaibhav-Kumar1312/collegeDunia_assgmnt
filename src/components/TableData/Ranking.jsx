import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Div = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "150px",
  //   marginTop: -30,
  //   alignItems: "flex-start",
  justifyContent: "flex-start",
});

// eslint-disable-next-line react/prop-types
export default function Ranking({ ranking }) {
  return (
    <Div>
      <Typography sx={{ paddingLeft: "6px" }} variant="h6">
        # {ranking}
      </Typography>
    </Div>
  );
}
