import { styled } from "@mui/system";
import TableHeadings from "./TableHeadings.jsx";
import CollegeList from "./CollegeList.jsx";
import DUMMY_DATA from "../../DUMMY_JSON.js";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

// import InfiniteScroll from "react-infinite-scroll-component";

// let allCllgs = [...DUMMY_DATA];

const Wrapper = styled("table")({
  width: "100%",
  border: "1px solid blue",
  borderCollapse: "collapse",
});

const Input = styled("input")({
  width: "50vw",
  height: "30px",
  padding: "6px 20px",
  margin: " 20px auto",
  borderRadius: "20px",
  outline: "none",
  border: "0.5px solid lightgrey",
  fontSize: "18px",
  color: "dimgrey",
});

export default function AllColleges() {
  const [allClgs, setAllClgs] = useState([...DUMMY_DATA]);
  const [searchValue, setSearchValue] = useState("");
  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  function searchCollege() {
    setAllClgs([]);
    let arr = [];
    DUMMY_DATA.forEach((item) => {
      if (
        item.collegeName.toLocaleLowerCase().includes(searchValue.toLowerCase())
      ) {
        arr.push(item);
      }
    });
    setAllClgs(arr);
  }

  function handleSort(identifier) {
    let data = [...allClgs];
    data.sort((a, b) => {
      let fa = a[identifier];
      let fb = b[identifier];
      if (fa > fb) {
        return 1;
      }
      if (fa < fb) {
        return -1;
      }
    });
    setAllClgs(data);
  }

  // const [hasMore, setHasMore] = useState(true);

  // const fetchMoreData = () => {
  //   setTimeout(() => {
  //     setAllClgs((prevValue) => {
  //       return prevValue.concat(DUMMY_DATA);
  //     });
  //     setHasMore(true);
  //   }, 1000);
  // };

  return (
    <>
      <Input
        onChange={handleChange}
        type="text"
        placeholder="Serach By College name......"
        value={searchValue}
      />
      <Button sx={{ borderRadius: "20px" }} onClick={searchCollege}>
        <SearchIcon sx={{ fontSize: "38px" }} />
      </Button>
      <Wrapper>
        <TableHeadings toSort={handleSort} />
        {/* <InfiniteScroll
          dataLength={allClgs.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h1>Loading....</h1>}
        > */}
        <CollegeList allCllgData={allClgs} />
        {/* </InfiniteScroll> */}
      </Wrapper>
    </>
  );
}
