export const openXmlInNewTab = xmlStr => {
  let blob = new Blob([xmlStr], { type: "text/xml" });
  let url = URL.createObjectURL(blob);
  window.open(url);
  URL.revokeObjectURL(url);
};
