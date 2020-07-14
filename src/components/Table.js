import React, { useContext, useEffect, useState, useCallback } from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { TableXMLIcon } from "./icons";

import { Context as VastsContext } from "../context/VastsContext";
import { getVastXmlApiCall } from "../api/vastsApi";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function MaterialTableDemo() {
  const {
    state: { vasts, error },
    fetchVasts,
    addVast,
    updateVast,
    removeVast
  } = useContext(VastsContext);

  useEffect(() => {
    if (vasts.length === 0) {
      fetchVasts();
    }
  }, []);

  const xmlClicked = useCallback(async id => {
    const xml = await getVastXmlApiCall(id);
    let blob = new Blob([xml], { type: "text/xml" });
    let url = URL.createObjectURL(blob);
    window.open(url);
    URL.revokeObjectURL(url); //Releases the resources
  }, []);

  const [state, setState] = React.useState({
    columns: [
      { title: "Vast Url", field: "vastUrl" },
      { title: "Position", field: "position" },
      { title: "Width", field: "width", type: "numeric" },
      { title: "Height", field: "height", type: "numeric" },
      {
        title: "Actions",
        align: "right",
        readOnly: true,

        render: rowData => {
          return (
            <TableXMLIcon
              onClick={() => xmlClicked(rowData.id)}
              id={rowData.id}
            />
          );
        }
      }
    ]
  });

  return (
    <MaterialTable
      title={
        <div style={{ display: "flex" }}>
          <span style={{ flex: 1 }}>Vasts Table</span>
          {error && (
            <div style={{ marginLeft: "30px", color: "red" }}>
              {error.message}
            </div>
          )}
        </div>
      }
      columns={state.columns}
      data={Object.values(vasts)}
      icons={tableIcons}
      editable={{
        onRowAdd: async newData => {
          console.log("addRow", newData);
          const res = await addVast(newData);
        },
        onRowUpdate: async (newData, oldData) => {
          console.log("addRow", oldData.id, newData);

          await updateVast({ vastId: oldData.id, ...newData });
        },
        onRowDelete: async oldData => {
          console.log("removeRow", oldData.id);
          await removeVast(oldData.id);
        }
      }}
    />
  );
}
