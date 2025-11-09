const testimonials = [
  {
    quote:
      "A masterclass in balance. The crust is airy with a perfect char, and every topping feels intentional. Easily the best pizza experience in the city.",
    name: "Evelyn Cho",
    title: "Food Critic, City Eats"
  },
  {
    quote:
      "Their Chef’s Counter changed how I think about pizza — the seasonal pie with fennel pollen was unforgettable.",
    name: "Marcus Hale",
    title: "Sommelier"
  },
  {
    quote:
      "La Fiamma captures the warmth of southern Italy with a modern flourish. We bring every out-of-town guest here.",
    name: "Gianna Russo",
    title: "Regular"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-dark text-parchment">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">What Guests Say</p>
          <h2 className="mt-4 font-display text-4xl text-white">Celebrated by critics and regulars alike.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur"
            >
              <p className="text-sm text-parchment/80">“{item.quote}”</p>
              <figcaption className="mt-auto">
                <p className="font-semibold text-parchment">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-parchment/70">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
