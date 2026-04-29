const bars = [
  ["Hospital A", "9,842 (39.8%)", "w-[82%]"],
  ["Health System B", "8,126 (32.9%)", "w-[68%]"],
  ["Medical Center C", "6,763 (27.3%)", "w-[52%]"]
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[610px] rounded-2xl border border-line bg-white/90 p-5 shadow-panel backdrop-blur">
      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-line bg-white p-5 shadow-soft">
          <p className="font-bold text-ink">Federated query</p>
          <div className="mt-4 rounded-lg border border-line bg-[#fbfdff] p-4 text-sm leading-6 text-muted">
            Patients with type 2 diabetes aged 50-75 with A1C &gt; 8%
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue text-white">
              <span className="shield-icon h-3 w-3" />
            </span>
            Privacy-preserving
            <span className="text-line">-</span>
            No data leaves source
          </div>
          <div className="mt-5 rounded-xl border border-line bg-white p-4">
            <p className="text-sm font-bold text-ink">Query results</p>
            <div className="mt-4 flex items-baseline gap-4">
              <span className="text-3xl font-black text-blue">24,731</span>
              <span className="text-xs font-semibold text-muted">Patients matched</span>
            </div>
            <div className="mt-5 space-y-4">
              {bars.map(([label, value, width]) => (
                <div className="grid grid-cols-[95px_1fr_80px] items-center gap-3 text-xs" key={label}>
                  <span className="font-semibold text-blue">{label}</span>
                  <span className="h-1.5 rounded-full bg-[#edf4ff]">
                    <span className={`block h-full rounded-full bg-blue-gradient ${width}`} />
                  </span>
                  <span className="text-right text-muted">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e9f8ef] text-[#25a05a]">
              <span className="shield-icon h-3 w-3" />
            </span>
            All data remains behind institutional firewalls
          </div>
        </div>

        <div className="rounded-xl border border-line bg-white p-5 shadow-soft">
          <p className="font-bold text-ink">Cohort overview</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["24,731", "Total patients"],
              ["57.2", "Avg. age"],
              ["52%", "Female"],
              ["3", "Data sources"]
            ].map(([value, label]) => (
              <div className="rounded-lg border border-line bg-[#fbfdff] p-3" key={label}>
                <p className="text-lg font-black text-blue">{value}</p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-line bg-white p-4">
            <p className="text-sm font-bold text-ink">Age distribution</p>
            <div className="mt-6 flex h-32 items-end justify-between gap-3 border-b border-line px-2">
              {[44, 72, 92, 82, 58].map((height, index) => (
                <div className="flex flex-1 flex-col items-center gap-2" key={height}>
                  <span
                    className="w-full max-w-7 rounded-t bg-[linear-gradient(180deg,#69a9ff,#1f75dc)] shadow-[0_4px_12px_rgba(26,105,205,0.25)]"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[10px] font-semibold text-muted">{["50-54", "55-59", "60-64", "65-69", "70-75"][index]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eef6ff] text-blue">
              <span className="shield-icon h-3 w-3" />
            </span>
            Results are aggregated and de-identified
          </div>
        </div>
      </div>
    </div>
  );
}
