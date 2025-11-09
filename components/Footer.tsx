export function Footer() {
  return (
    <footer className="bg-espresso text-parchment">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-xl">La Fiamma Pizzeria</p>
        <div className="text-xs uppercase tracking-[0.3em] text-parchment/60">
          © {new Date().getFullYear()} La Fiamma Hospitality Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
