const experiences = [
  {
    title: "Open Flame Kitchen",
    description:
      "Watch our pizzaioli stretch dough, layer ingredients, and launch pies into the roaring oven. The choreography of heat is part of the show."
  },
  {
    title: "Aperitivo Hour",
    description:
      "From 4–6pm, enjoy cicchetti plates and spritz pairings inspired by Venice&apos;s iconic bars."
  },
  {
    title: "Chef&apos;s Counter",
    description:
      "Reserve the five-seat counter to sample off-menu pies and seasonal experiments guided by Chef Lucia."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-espresso text-parchment">
      <div className="absolute inset-0 bg-grainy-texture opacity-10" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center">
        <div className="space-y-6 md:w-1/2">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-light">
            The La Fiamma Experience
          </p>
          <h2 className="font-display text-4xl text-white md:text-5xl">
            More than dinner — it&apos;s theatre, tradition, and celebration.
          </h2>
          <p className="text-base text-parchment/80">
            Our dining room glows with the warmth of the oven, the hum of conversation, and playlists
            curated from Italian vinyl. Whether you&apos;re gathering with friends or celebrating a milestone,
            La Fiamma sets the stage for unforgettable evenings.
          </p>
        </div>
        <div className="grid flex-1 gap-6 md:grid-cols-1">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur"
            >
              <h3 className="font-display text-2xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-parchment/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
