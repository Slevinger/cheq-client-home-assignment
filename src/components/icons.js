import React from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styled from "styled-components";

const TableIcon = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: inline;
  padding: 6px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const TableXMLIcon = props => {
  return (
    <TableIcon {...props}>
      <NavigateBeforeIcon style={{ verticalAlign: "bottom" }} />
      <span>Xml</span>
      <NavigateNextIcon style={{ verticalAlign: "bottom" }} />
    </TableIcon>
  );
};
