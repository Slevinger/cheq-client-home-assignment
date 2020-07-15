import React, { useContext, useEffect, useCallback, useMemo } from "react";
import MaterialTable from "material-table";
import { Context as VastsContext } from "../context/VastsContext";
import { callGetVastXmlApi } from "../api/vastsApi";
import { TableXMLIcon, tableIcons } from "./icons";
import { openXmlInNewTab } from "../utils/XML";

const positionValues = [
  "top_left",
  "top_middle",
  "top_right",
  "middle_left",
  "middle_right",
  "middle_middle",
  "bottom_left",
  "bottom_middle",
  "bottom_right"
];

export default () => {
  const {
    state: { vasts },
    ...actions
  } = useContext(VastsContext);
  const { fetchVasts, addVast, updateVast, removeVast } = actions;
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
        {
          title: "Position",
          field: "position",
          lookup: positionValues.reduce(
            (acc, position) => ({ ...acc, [position]: position }),
            {}
          )
        },
        { title: "Width", field: "width", type: "numeric" },
        { title: "Height", field: "height", type: "numeric" },
        {
          title: "More...",
          align: "center",
          readOnly: true,

          render: ({ id, ...rest }) => {
            debugger;
            return <TableXMLIcon onClick={() => xmlClicked(id)} id={id} />;
          }
        }
      ]
    }),
    []
  );

  return (
    <MaterialTable
      title={"Vasts Table"}
      columns={state.columns}
      data={Object.values(vasts)}
      icons={tableIcons}
      editable={{
        onRowAdd: async newData => {
          console.log("addRow", newData);
          debugger;
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
