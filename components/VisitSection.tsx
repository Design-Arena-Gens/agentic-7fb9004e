export function VisitSection() {
  return (
    <section id="contact" className="bg-parchment py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-brand-dark">Visit Us</p>
            <h2 className="font-display text-4xl text-espresso">
              Evenings glow brightest at 1426 Mission Street.
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-brand">Hours</h3>
                <p className="mt-3 text-sm text-espresso/80">
                  Tue–Thu: 5pm – 10pm
                  <br />
                  Fri–Sat: 5pm – 11pm
                  <br />
                  Sun: 4pm – 9pm
                  <br />
                  Mon: Closed
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-brand">Contact</h3>
                <p className="mt-3 text-sm text-espresso/80">
                  <a href="tel:+1234567890" className="block font-semibold text-brand">
                    (123) 456-7890
                  </a>
                  <a href="mailto:hello@lafiamma.com" className="block font-semibold text-brand">
                    hello@lafiamma.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-brand">Parking & Transit</h3>
              <p className="mt-3 text-sm text-espresso/80">
                Complimentary valet after 5pm. We&apos;re steps from the 16th St. BART station and the Mission
                &amp; 14th bus stop.
              </p>
            </div>
            <div className="rounded-3xl border border-brand/20 bg-white p-6 shadow-md">
              <h3 className="font-display text-xl text-espresso">Gift Cards</h3>
              <p className="mt-3 text-sm text-espresso/70">
                Share the La Fiamma experience. Digital cards available instantly, or pick up a wax-sealed
                envelope in person.
              </p>
              <a
                href="#"
                className="mt-4 inline-block rounded-full bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-dark"
              >
                Purchase Gift Card
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-espresso/10 shadow-xl">
            <iframe
              title="La Fiamma Location"
              className="h-[420px] w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019965613107!2d-122.4194155846815!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1707089600000!5m2!1sen!2sus"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
