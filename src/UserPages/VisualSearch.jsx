import React from "react";

const VisualSearch = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src="https://yasorna-visualsearch.streamlit.app/"
        title="Visual Search"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default VisualSearch;
