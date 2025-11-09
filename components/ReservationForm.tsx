"use client";

import { useState } from "react";

const timeSlots = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM"
];

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="reservation" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-brand-dark">Reservations</p>
            <h2 className="font-display text-4xl text-espresso">Secure a seat by the hearth.</h2>
            <p className="text-base text-espresso/80">
              We release reservations two weeks in advance. Walk-ins are welcome for bar seating, but
              the chef&apos;s counter and patio fill quickly. Let us know if you&apos;re celebrating a special
              occasion — we love surprises.
            </p>
            <div className="rounded-3xl border border-brand/20 bg-parchment/60 p-6">
              <h3 className="font-display text-xl text-espresso">Private Events</h3>
              <p className="mt-3 text-sm text-espresso/70">
                Our mezzanine hosts up to 24 guests for coursed tasting menus. Email{" "}
                <a href="mailto:events@lafiamma.com" className="font-semibold text-brand">
                  events@lafiamma.com
                </a>{" "}
                to start planning.
              </p>
            </div>
          </div>
          <form
            className="rounded-3xl border border-espresso/10 bg-parchment p-8 shadow-lg"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-brand-dark">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="mt-2 w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-brand-dark">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-brand-dark">Phone</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="mt-2 w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-brand-dark">Date</label>
                  <input
                    required
                    type="date"
                    name="date"
                    className="mt-2 w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-brand-dark">Time</label>
                  <select
                    required
                    name="time"
                    className="mt-2 w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                  >
                    <option value="">Select...</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-brand-dark">Guests</label>
                <input
                  required
                  min={1}
                  max={12}
                  type="number"
                  name="guests"
                  className="mt-2 w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-brand-dark">
                  Celebrations or Requests
                </label>
                <textarea
                  rows={4}
                  name="notes"
                  className="mt-2 w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg"
              >
                Request Reservation
              </button>
              {submitted && (
                <p className="text-xs text-brand-dark">
                  Grazie! Our hosts will reach out within the hour to confirm your reservation.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
