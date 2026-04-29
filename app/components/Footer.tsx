const columns = [
  ["Product", "How it works", "Security by design", "Data model", "Compliance"],
  ["Solutions", "Health Systems", "Life Sciences", "Payers", "Public Health"],
  ["Developers", "API overview", "Documentation", "SDKs", "Sandbox"],
  ["Resources", "Blog", "Case studies", "Whitepapers", "Support"],
  ["Company", "About us", "Careers", "Newsroom", "Contact"]
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="dark-wave-field opacity-40" />
      <div className="relative mx-auto grid w-full max-w-[1320px] gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[280px_1fr]">
        <div>
          <p className="text-[42px] font-black tracking-normal">
            <span>Lumko</span>
            <span className="text-blue-light">MDX</span>
          </p>
          <p className="mt-5 text-xl text-white/58">Sovereign by design</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {columns.map(([title, ...items]) => (
            <div key={title}>
              <p className="font-black text-blue-light">{title}</p>
              <ul className="mt-5 space-y-4 text-base text-white/72">
                {items.map((item) => (
                  <li key={item}>
                    <a className="transition hover:text-white" href="#demo">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col gap-5 border-t border-white/18 px-6 py-8 text-base text-white/76 sm:px-8 md:flex-row md:items-center md:justify-center md:gap-10">
        <span className="shield-icon h-11 w-11 text-blue-light" />
        <span className="hidden h-8 w-px bg-white/18 md:block" />
        <a href="#demo">Privacy Policy</a>
        <span className="hidden md:inline">-</span>
        <a href="#demo">Terms of Use</a>
        <span className="hidden md:inline">-</span>
        <a href="#demo">Compliance</a>
      </div>
    </footer>
  );
}
