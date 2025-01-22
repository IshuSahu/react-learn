import React from "react";
import Card from "../components/Card";
import "../index.css";

function CardPage() {
  return (
    // Displaying card while all children elements

    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <h2>Another Card</h2>
        <p>This card has different content!</p>
      </Card>
    </div>
  );
}

export default CardPage;
