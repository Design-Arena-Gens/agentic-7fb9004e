const milestones = [
  {
    year: "2009",
    title: "Roots in Napoli",
    description:
      "Chef Lucia apprentices under maître pizzaiolo Gabriele Ciro, mastering the balance of heat and hydration."
  },
  {
    year: "2014",
    title: "Oven Built by Hand",
    description:
      "Our Stefano Ferrara oven is assembled brick by brick in the dining room before opening night."
  },
  {
    year: "2021",
    title: "Farm Collaborations",
    description:
      "We partner with local farms for seasonal produce, ensuring every topping is peak fresh."
  }
];

export function StorySection() {
  return (
    <section id="story" className="bg-parchment py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-brand-dark">Our Story</p>
            <h2 className="font-display text-4xl text-espresso">
              A love letter to Napoli, baked on Californian soil.
            </h2>
            <p className="text-base text-espresso/80">
              La Fiamma began as a pop-up where Chef Lucia replicated her family&apos;s recipes using
              California&apos;s vibrant produce. The response was electric, and the vision for a permanent
              hearth was born. Today, our kitchen honors those roots while embracing the creativity of our
              farmers and team.
            </p>
            <blockquote className="rounded-3xl border border-brand/20 bg-white p-6 text-sm text-espresso/80 shadow-md">
              “Every pizza tells a conversation between regions — the grain from the Central Valley,
              the tomatoes from Campania, the hands that stretch the dough with care. La Fiamma is our
              way of sharing that story.”
              <cite className="mt-4 block text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">
                — Chef Lucia Romano
              </cite>
            </blockquote>
          </div>
          <div className="space-y-6">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="flex flex-col gap-3 rounded-3xl border border-espresso/10 bg-white p-6 shadow-md md:flex-row md:items-center md:gap-6"
              >
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-brand text-lg font-semibold text-white shadow-inner">
                  {item.year}
                </div>
                <div>
                  <h3 className="font-display text-xl text-espresso">{item.title}</h3>
                  <p className="text-sm text-espresso/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
