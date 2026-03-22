export default function NewsPage() {
  const news = [
    {
      id: "1",
      title: "JERU Team Wins 1st Place — Municipal Olympics 2025",
      excerpt: "Our student-athletes brought home the gold from the Municipal Olympics 2025.",
      date: "March 2025",
      tags: "sports,olympics",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-[var(--sanhs-green)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl font-bold">News & Updates</h1>
          <p className="text-white/80 mt-1">Latest news from SANHS Annex</p>
        </div>
      </section>
      <section className="py-12 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {news.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <span className="text-4xl">📰</span>
              <p className="mt-2">No news posts yet.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {news.map((item) => (
                <div key={item.id} className="border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-xs font-medium text-[var(--sanhs-gold-dark)] mb-2">
                    {item.date} · {item.tags}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.excerpt}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
