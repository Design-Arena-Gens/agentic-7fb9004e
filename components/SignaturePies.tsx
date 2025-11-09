const pizzas = [
  {
    name: "Classica Margherita",
    description: "San Marzano DOP tomatoes, fior di latte, basil, cold-pressed olive oil.",
    price: "$17"
  },
  {
    name: "Truffle Funghi",
    description: "Wild mushrooms, taleggio cream, thyme, truffle pecorino, charred scallion.",
    price: "$22"
  },
  {
    name: "Sicilian Heatwave",
    description: "Nduja, calabrian chili honey, roasted peppers, smoked provolone.",
    price: "$21"
  },
  {
    name: "Verde Primavera",
    description: "Pistachio pesto, burrata, grilled zucchini ribbons, marinated artichoke.",
    price: "$20"
  }
];

export function SignaturePies() {
  return (
    <section id="menu" className="bg-parchment py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-dark">Signature Pies</p>
          <h2 className="mt-4 font-display text-4xl text-espresso">
            Wood-fired pizzas that make Napoli proud.
          </h2>
          <p className="mt-4 text-base text-espresso/80">
            Each pie is fired in our hand-built oven at 900°F, balancing a blistered crust with
            delicate toppings that let the ingredients shine.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {pizzas.map((pizza) => (
            <article
              key={pizza.name}
              className="group relative overflow-hidden rounded-3xl border border-espresso/10 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-espresso">{pizza.name}</h3>
                  <span className="rounded-full bg-brand/10 px-4 py-1 text-sm font-semibold text-brand-dark">
                    {pizza.price}
                  </span>
                </div>
                <p className="text-sm text-espresso/80">{pizza.description}</p>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-brand/70">
                  <span>Fire Kissed</span>
                  <span className="h-px w-6 bg-brand/40" />
                  <span>12.5&quot;</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
