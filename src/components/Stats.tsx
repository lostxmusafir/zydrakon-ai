export default function Stats() {
  const statsList = [
    { value: '2024', label: 'Founded', delay: '0s' },
    { value: '3', label: 'AI Products', delay: '0.1s' },
    { value: '12+', label: 'Open Source Repos', delay: '0.2s' },
    { value: '100%', label: 'Founder-Led', delay: '0.3s' },
  ];

  return (
    <section className="py-16 border-y border-white/5 bg-surface/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsList.map((stat, i) => (
            <div
              key={i}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: stat.delay }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-text-primary to-text-muted bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-text-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
