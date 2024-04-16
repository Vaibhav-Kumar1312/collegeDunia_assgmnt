/* eslint-disable react/prop-types */
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";

const Div1 = styled("div")({
  display: "flex",
});

const Div2 = styled("div")({
  borderLeft: "2px solid orangered",
  backgroundColor: "#FFD580",
  paddingLeft: "4px",
  marginTop: "8px",
  maxWidth: "fit-content",
});

const Div3 = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const IconContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function College({
  collegeName,
  address,
  collegeLogo,
  approvedBy,
  jeeCutoff,
}) {
  return (
    <>
      <Div1>
        <img
          style={{
            height: "34px",
            width: "34px",
            border: "1px solid black",
            margin: "4px",
          }}
          src={collegeLogo}
          alt="Logo"
        />
        <div>
          <Typography sx={{ color: "blue" }} variant="subtitle1">
            {collegeName}
          </Typography>
          <Typography variant="subtitle2">
            {address}
            {approvedBy ? ` | ${approvedBy} Approved` : ""}
          </Typography>
          {jeeCutoff !== "" && (
            <Div2>
              <Typography
                sx={{ color: "orangered", height: "22px" }}
                variant="overline"
                display="block"
              >
                B.Tech Computer Science Engineering
              </Typography>
              <Typography variant="caption">
                JEE-Advanced 2023 Cutoff : {jeeCutoff}
              </Typography>
            </Div2>
          )}
        </div>
      </Div1>
      <Div3>
        <IconContainer>
          <ArrowForwardIcon sx={{ fontSize: "18px" }} />
          <span>Apply Now</span>
        </IconContainer>
        <IconContainer>
          <DownloadIcon sx={{ fontSize: "18px" }} />
          <span>Download Brochure</span>
        </IconContainer>
        <IconContainer>
          <FormControlLabel label="Add to compare" control={<Checkbox />} />
        </IconContainer>
      </Div3>
    </>
  );
}
