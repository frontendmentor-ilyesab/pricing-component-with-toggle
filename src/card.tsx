interface CardProps {
  cardType: "basic" | "professional" | "master";
  timeSpan: "monthly" | "yearly";
}

const cards = {
  basic: {
    type: "Basic",
    price: {
      monthly: "19.99",
      yearly: "199.99",
    },
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  professional: {
    type: "Professional",
    price: {
      monthly: "24.99",
      yearly: "249.99",
    },
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  master: {
    type: "Master",
    price: {
      monthly: "39.99",
      yearly: "399.99",
    },
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
};

export default function Card({ cardType, timeSpan }: CardProps) {
  const card = cards[cardType];
  const cardClassName =
    cardType === "professional" ? "card card--recommended" : "card";

  return (
    <section className={cardClassName}>
      <header className="card__header">
        <p className="card__type">{card.type}</p>
        <h2 className="card__title">
          <span className="card__currency">$</span>
          <span className="card__price">{card.price[timeSpan]}</span>
        </h2>
      </header>
      <div className="card__content">
        <ul className="card__info">
          {card.features.map((feat, index) => (
            <li className="card__info-item " key={index}>
              {feat}
            </li>
          ))}
        </ul>
        <button className="card__button">Learn More</button>
      </div>
    </section>
  );
}
