export default function EventsPage() {
  const events = [
    { id: "1", title: "Intramurals 2025", date: "July 30, 2025", location: "SANHS Annex Grounds", type: "SPORTS", description: "Annual school sports festival featuring various athletic competitions." },
    { id: "2", title: "Grand Alumni Homecoming", date: "December 5, 2025", location: "SANHS Annex", type: "CULTURAL", description: "Alumni homecoming celebration and recognition." },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-[var(--sanhs-green)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl font-bold">School Events</h1>
          <p className="text-white/80 mt-1">Stay updated with upcoming activities at SANHS Annex</p>
        </div>
      </section>
      <section className="py-12 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {events.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <span className="text-4xl">📅</span>
              <p className="mt-2">No upcoming events at this time. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {events.map((event) => (
                <div key={event.id} className="border border-gray-100 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="text-center min-w-[60px]">
                      <div className="text-xs font-bold uppercase text-[var(--sanhs-gold-dark)]">
                        {event.date.split(" ")[0]}
                      </div>
                      <div className="text-2xl font-bold text-[var(--sanhs-green)]">
                        {event.date.split(" ")[1].replace(",", "")}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{event.title}</h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--sanhs-gold)]/10 text-[var(--sanhs-gold-dark)]">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">📍 {event.location}</p>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
