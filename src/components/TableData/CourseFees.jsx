import { Typography } from "@mui/material";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import { styled } from "@mui/system";
import CompareArrowsSharpIcon from "@mui/icons-material/CompareArrowsSharp";

const Div = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "150px",
  //   alignItems: "flex-start",
  justifyContent: "flex-start",
});

// eslint-disable-next-line react/prop-types
export default function CourseFees({ courseFee }) {
  return (
    <Div>
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        variant="subtitle1"
      >
        <CurrencyRupeeRoundedIcon sx={{ fontSize: "18px" }} />
        {courseFee}
      </Typography>
      <Typography sx={{ paddingLeft: "6px" }} variant="caption">
        B.E/B.Tech
      </Typography>
      <Typography sx={{ paddingLeft: "6px" }} variant="caption">
        -1st year fees
      </Typography>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "6px",
          marginTop: "10px",
        }}
        variant="caption"
      >
        <CompareArrowsSharpIcon sx={{ fontSize: "18px" }} />
        Compare Fees
      </Typography>
    </Div>
  );
}
