import React, {
  useContext,
  useEffect,
  useCallback,
  useState,
  useMemo
} from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

import { Context as VastsContext } from "../context/VastsContext";
import { callGetVastXmlApi } from "../api/vastsApi";
import { TableXMLIcon, tableIcons } from "./icons";
import { openXmlInNewTab } from "../utils/XML";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default () => {
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
    const xml = await callGetVastXmlApi(id);
    openXmlInNewTab(xml);
  }, []);

  const state = useMemo(
    () => ({
      columns: [
        { title: "Vast Url", field: "vastUrl" },
        { title: "Position", field: "position" },
        { title: "Width", field: "width", type: "numeric" },
        { title: "Height", field: "height", type: "numeric" },
        {
          title: "Actions",
          align: "right",
          readOnly: true,

          render: (rowData, ...args) => {
            return (
              <TableXMLIcon
                onClick={() => xmlClicked(rowData.id)}
                id={rowData.id}
              />
            );
          }
        }
      ]
    }),
    []
  );

  return (
    <MaterialTable
      title={
        <div style={{ display: "flex" }}>
          <span style={{ flex: 1, fontSize: "2rem" }}>Vasts Table</span>
          {error && (
            <div
              style={{
                marginLeft: "30px",
                color: "red",
                alignSelf: "flex-end"
              }}
            >
              ({error.message})
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
          await addVast(newData);
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
};
