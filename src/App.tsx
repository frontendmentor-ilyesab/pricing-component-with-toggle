import { useState } from "react";
import TogglePricing from "./togglePricing.tsx";
import Card from "./card.tsx";

type timeSpan = "monthly" | "yearly";

function App() {
  const [timeSpan, setTimeSpan] = useState<timeSpan>("monthly");

  function handleToggle() {
    setTimeSpan((timeSpan) => (timeSpan === "yearly" ? "monthly" : "yearly"));
  }

  return (
    <main>
      <header className="site-heading">
        <h1>Our Pricing</h1>
        <TogglePricing timeSpan={timeSpan} onToggle={handleToggle} />
      </header>
      <section className="pricing">
        <Card cardType="basic" timeSpan={timeSpan} />
        <Card cardType="professional" timeSpan={timeSpan} />
        <Card cardType="master" timeSpan={timeSpan} />
      </section>
    </main>
  );
}

export default App;
