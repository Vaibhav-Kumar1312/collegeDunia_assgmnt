import { Typography } from "@mui/material";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import { styled } from "@mui/system";
import CompareArrowsSharpIcon from "@mui/icons-material/CompareArrowsSharp";

const Div = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "150px",
  //   marginTop: -30,
  //   alignItems: "flex-start",
  justifyContent: "flex-start",
});

// eslint-disable-next-line react/prop-types
export default function Placement({ avgPackage, highPackage }) {
  return (
    <Div>
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        variant="subtitle1"
      >
        <CurrencyRupeeRoundedIcon sx={{ fontSize: "18px" }} />
        {avgPackage}
      </Typography>
      <Typography variant="caption">Average Package</Typography>
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        variant="subtitle1"
      >
        <CurrencyRupeeRoundedIcon sx={{ fontSize: "18px" }} />
        {highPackage}
      </Typography>
      <Typography variant="caption">Highest Package</Typography>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "6px",
          marginTop: "8px",
        }}
        variant="caption"
      >
        <CompareArrowsSharpIcon sx={{ fontSize: "18px" }} />
        Compare Placement
      </Typography>
    </Div>
  );
}
