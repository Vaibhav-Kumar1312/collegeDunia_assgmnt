import { styled } from "@mui/system";
import TableHeadings from "./TableHeadings.jsx";
import CollegeList from "./CollegeList.jsx";
import DUMMY_DATA from "../../DUMMY_JSON.js";
import { useState } from "react";

let AllCollgData = [];

const Wrapper = styled("table")({
  width: "100%",
  border: "1px solid blue",
  borderCollapse: "collapse",
});

const Input = styled("input")({
  width: "500px",
  height: "30px",
  padding: "6px 20px",
  margin: "40px auto",
  borderRadius: "20px",
  outline: "none",
  border: "0.5px solid lightgrey",
  fontSize: "18px",
  color: "dimgrey",
});

export default function AllColleges() {
  const [searchValue, setSearchValue] = useState("");
  function handleChange(event) {
    setSearchValue(event.target.value);
    AllCollgData = DUMMY_DATA.filter((item) => {
      console.log(item.collegeName.includes(searchValue));
      return item.collegeName.includes(searchValue);
    });
    console.log(AllCollgData);
  }
  // function searchCollege(){
  //   const filteredData = DUMMY_DATA.filter((item)=>item.collegeName.includes(searchValue))
  // }

  return (
    <>
      <Input
        onChange={handleChange}
        type="text"
        placeholder="Serach By College name......"
        value={searchValue}
      />
      <Wrapper>
        <TableHeadings />
        <CollegeList allCllgData={AllCollgData} />
      </Wrapper>
    </>
  );
}
