interface TogglePricingProps {
  timeSpan: "monthly" | "yearly";
  onToggle: () => void;
}

export default function TogglePricing({
  timeSpan,
  onToggle,
}: TogglePricingProps) {
  const className =
    timeSpan === "yearly"
      ? "toggle-container toggle-container--yearly"
      : "toggle-container";

  function handleKeyDown({ key }: React.KeyboardEvent<HTMLDivElement>) {
    if (key === "Enter") {
      onToggle();
    }
  }

  return (
    <div className={className}>
      <span>Annually</span>
      <div
        className="toggle-container__background"
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Toggle Pricing between Monthly and Yearly"
        role="button"
      >
        <div className="toggle-container__circle"></div>
      </div>
      <span>Monthly</span>
    </div>
  );
}
