import CircleIcon from "@mui/icons-material/Circle";
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
export default function UserReviews({ userRating, totalUserReviews }) {
  return (
    <Div>
      <Typography variant="subtitle1">
        <CircleIcon
          sx={{
            fontSize: "8px",
            paddingLeft: "6px",
            color: "orange",
            paddingRight: "6px",
          }}
        />
        {userRating}/10
      </Typography>
      <Typography sx={{ paddingLeft: "6px" }} variant="caption">
        Based on {totalUserReviews} User
        <br />
        Reviews
      </Typography>
    </Div>
  );
}
