import React from "react";
import "../index.css";
import Collapsible from "../components/Colapsiable";
function CollapsiblePage() {
  return (
    <div>
      <Collapsible title="Section 1">
        <p>This is the content of section 1.</p>
      </Collapsible>
      <Collapsible title="Section 2">
        <p>This is the content of section 2.</p>
      </Collapsible>
    </div>
  );
}

export default CollapsiblePage;
