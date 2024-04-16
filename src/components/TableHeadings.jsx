/* eslint-disable react/prop-types */
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const Heading = styled("th")({
  backgroundColor: "cyan",
  border: "1px solid blue",
});

export default function TableHeadings({ toSort }) {
  return (
    <thead>
      <tr>
        <Heading onClick={() => toSort("cdRank")}>
          <Typography variant="h6">CD Rank</Typography>
        </Heading>
        <Heading>
          <Typography variant="h6">Colleges</Typography>
        </Heading>
        <Heading onClick={() => toSort("courseFees")}>
          <Typography variant="h6">Course Fees</Typography>
        </Heading>
        <Heading>
          <Typography variant="h6">Placement</Typography>
        </Heading>
        <Heading onClick={() => toSort("userReviewRating")}>
          <Typography variant="h6">User Reviews</Typography>
        </Heading>
        <Heading>
          <Typography variant="h6">Ranking</Typography>
        </Heading>
      </tr>
    </thead>
  );
}
