/* eslint-disable react/prop-types */
import { styled } from "@mui/system";
import CDrank from "./TableData/CDrank.jsx";
import College from "./TableData/College.jsx";
import CourseFees from "./TableData/CourseFees.jsx";
import Placement from "./TableData/Placement.jsx";
import UserReviews from "./TableData/UserReviews.jsx";
import Ranking from "./TableData/Ranking.jsx";

const TableData = styled("td")({
  border: "1px solid blue",
});

export default function CollegeList({ allCllgData }) {
  return (
    <tbody>
      {allCllgData.map((cllgData) => {
        return (
          <tr key={cllgData.id}>
            <TableData>
              <CDrank cdRank={cllgData.cdRank} />
            </TableData>
            <TableData>
              <College
                collegeName={cllgData.collegeName}
                address={cllgData.address}
                approvedBy={cllgData.approvedBy}
                jeeCutoff={cllgData.jeeCutoff}
                collegeLogo={cllgData.collegeLogo}
              />
            </TableData>
            <TableData>
              <CourseFees courseFee={cllgData.courseFees} />
            </TableData>
            <TableData>
              <Placement
                avgPackage={cllgData.placement.averagePackage}
                highPackage={cllgData.placement.highestPackage}
              />
            </TableData>
            <TableData>
              <UserReviews
                userRating={cllgData.userReviewRating}
                totalUserReviews={cllgData.totalUserReviews}
              />
            </TableData>
            <TableData>
              <Ranking ranking={cllgData.ranking} />
            </TableData>
          </tr>
        );
      })}
    </tbody>
  );
}
