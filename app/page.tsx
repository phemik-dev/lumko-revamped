import Button from "./components/Button";
import Footer from "./components/Footer";
import HeroVisual from "./components/HeroVisual";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

const oldReality = [
  ["server", "Fragmented systems", "Data is trapped across institutions and technologies."],
  ["lock", "Risk in sharing", "Identity exposure increases legal, ethical, and operational risk."],
  ["clock", "Delayed insight", "Access is slow, manual, and often too late to matter."]
] satisfies [string, string, string][];

const processSteps = [
  ["server-check", "Data stays at the source", "Patient identity remains inside the originating system."],
  ["document-lock", "Data is structured and pseudonymised", "Only necessary clinical data enters the LumkoMDX layer."],
  ["chart-check", "Insight flows back", "Only aggregated, compliant intelligence is returned to authorised users."]
] satisfies [string, string, string][];

const platformModules = [
  ["people-search", "Cohort Browser", "Explore patient groups without exposing identity."],
  ["chat-spark", "Insight Studio", "Ask clinical questions in natural language."],
  ["database-lock", "Federation Layer", "Query across systems without moving data."],
  ["shield-check", "Audit & Consent", "Full traceability and compliance by design."]
] satisfies [string, string, string][];

const trustPoints = [
  ["shield-user", "Identity never enters the platform.", "All patient identity remains outside the platform by design."],
  ["unlock-off", "Certain breaches are structurally impossible.", "Our architecture makes unauthorised re-identification mathematically infeasible."],
  ["clipboard-check", "Compliance is continuous, not enforced later.", "Policy, audit, and monitoring are embedded at every layer of the system."]
] satisfies [string, string, string][];

const roles = [
  ["stethoscope", "Clinicians", ["Identify cohorts faster", "Collaborate across systems", "Make decisions with broader insight"]],
  ["microscope", "Researchers", ["Compliant access to population insights", "Real-world data for clinical studies", "Federated queries across institutions"]],
  ["chart-up", "Executives", ["System-wide visibility without risk", "Data-driven strategic decisions", "Compliance without operational burden"]]
] satisfies [string, string, string[]][];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span aria-hidden className={`lumko-icon lumko-icon-${name} ${className}`} />;
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="relative overflow-hidden bg-white">
          <div className="dot-field left-0 top-0" />
          <div className="dot-field right-0 top-20 hidden lg:block" />
          <div className="wave-field" />
          <div className="relative mx-auto grid w-full max-w-[1320px] gap-14 px-6 py-24 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-28">
            <div>
              <div className="mb-8 flex items-center gap-3 text-xl font-black text-ink">
                <Icon name="shield-check" className="h-11 w-11 text-blue" />
                LumkoMDX
              </div>
              <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-normal text-ink sm:text-6xl lg:text-[74px]">
                A platform for safe, real-time clinical collaboration
              </h1>
              <div className="mt-9 h-1 w-16 rounded-full bg-blue-gradient" />
              <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">
                Bring healthcare data together without exposing patient identity, moving files, or weakening compliance.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-7">
                <Button href="#demo" variant="primary">
                  Request demo
                </Button>
                <Button href="#roles" variant="link">
                  Access sample cohort
                </Button>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Section
          title="Healthcare data has always required a tradeoff."
          subtitle="LumkoMDX removes it."
          className="border-t border-line"
        >
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_190px_1.12fr]">
            <div className="rounded-xl border border-line bg-white p-8 shadow-card lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-muted">The old reality</p>
              <div className="mt-12 space-y-8">
                {oldReality.map(([icon, title, body], index) => (
                  <div className={`${index > 0 ? "border-t border-line pt-8" : ""} grid grid-cols-[74px_1fr] gap-6`} key={title}>
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-white shadow-soft">
                      <Icon name={icon} className="h-8 w-8 text-muted" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-black text-ink">{title}</h3>
                      <p className="mt-2 text-lg leading-7 text-muted">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden items-center justify-center lg:flex">
              <div className="absolute inset-y-4 left-1/2 w-px bg-line" />
              <div className="relative flex h-[600px] w-full items-center justify-center border-x border-line bg-[linear-gradient(90deg,transparent,#f6faff,transparent)]">
                <div className="flex flex-col items-center gap-6 text-center text-lg font-bold text-blue">
                  <span className="h-28 w-px bg-blue/45" />
                  <span className="h-12 w-12 rounded-full border-[6px] border-dotted border-blue/85" />
                  Tradeoff<br />removed
                  <span className="h-28 w-px bg-blue/45" />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-blue/35 bg-white p-8 shadow-card lg:p-14">
              <div className="dot-field right-3 top-3" />
              <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">The new reality</p>
              <div className="mt-9 h-0.5 w-14 bg-blue-gradient" />
              <h3 className="mt-10 max-w-md text-4xl font-black leading-[1.18] text-ink sm:text-5xl">
                Data can be used where it exists.
              </h3>
              <div className="my-11 h-px w-14 bg-blue/35" />
              <p className="max-w-md text-4xl font-black leading-[1.18] text-ink sm:text-5xl">
                Identity never enters the system.
              </p>
              <div className="my-11 h-px w-14 bg-blue/35" />
              <p className="max-w-sm text-xl leading-8 text-muted">Access and compliance now coexist by design.</p>
            </div>
          </div>
        </Section>

        <Section
          id="how-it-works"
          eyebrow="Our process"
          title="How LumkoMDX works"
          subtitle="A secure, federated approach that keeps patient identity in place while enabling trusted, real-time clinical insight."
          tone="soft"
        >
          <div className="relative">
            <div className="process-line hidden lg:block" />
            <div className="grid gap-8 lg:grid-cols-3">
              {processSteps.map(([icon, title, body], index) => (
                <article className="relative rounded-xl border border-line bg-white p-9 text-center shadow-card" key={title}>
                  <span className="absolute -top-12 left-1/2 hidden h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-[12px] border-[#d9ecff] bg-blue-gradient text-3xl font-black text-white shadow-soft lg:flex">
                    {index + 1}
                  </span>
                  <span className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-line bg-white shadow-soft">
                    <Icon name={icon} className="h-14 w-14 text-blue" />
                  </span>
                  <h3 className="mx-auto mt-8 max-w-sm text-3xl font-black leading-tight text-ink">{title}</h3>
                  <div className="mx-auto mt-7 h-0.5 w-14 bg-blue-gradient" />
                  <p className="mx-auto mt-7 max-w-sm text-xl leading-8 text-muted">{body}</p>
                </article>
              ))}
            </div>
            <div className="mx-auto mt-12 flex max-w-[760px] items-center justify-center gap-6 border-t border-dashed border-blue/30 pt-8 text-sm font-black uppercase tracking-[0.2em] text-blue">
              <Icon name="shield-check" className="h-16 w-16" />
              Secure by design
            </div>
          </div>
        </Section>

        <Section title="A platform for safe, real-time clinical collaboration">
          <div className="mx-auto h-1 w-16 rounded-full bg-blue-gradient" />
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformModules.map(([icon, title, body]) => (
              <article className="rounded-xl border border-line bg-white p-8 shadow-card" key={title}>
                <span className="flex h-24 w-24 items-center justify-center rounded-2xl border border-line bg-[#f3f8ff]">
                  <Icon name={icon} className="h-12 w-12 text-blue" />
                </span>
                <h3 className="mt-10 text-3xl font-black text-ink">{title}</h3>
                <div className="mt-6 h-0.5 w-12 bg-blue-gradient" />
                <p className="mt-7 text-xl leading-8 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
          <div className="dark-wave-field" />
          <div className="relative mx-auto grid w-full max-w-[1320px] gap-16 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.45fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-blue px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-blue-light">
                <Icon name="shield-check" className="h-6 w-6" />
                Built on trust
              </div>
              <h2 className="mt-9 max-w-lg text-5xl font-black leading-[1.08] tracking-normal lg:text-[68px]">
                Privacy is not a feature. It is a property of the system.
              </h2>
              <div className="mt-9 h-1 w-20 rounded-full bg-blue-gradient" />
              <p className="mt-8 max-w-lg text-2xl leading-9 text-white/72">
                LumkoMDX is engineered so trust is infrastructure, not an afterthought.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {trustPoints.map(([icon, title, body], index) => (
                <article className="border-white/18 text-center lg:border-l lg:px-10" key={title}>
                  <span className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-blue-light/35 bg-white/6">
                    <Icon name={icon} className="h-14 w-14 text-blue-light" />
                  </span>
                  <span className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-blue-gradient text-2xl font-black shadow-soft">
                    {index + 1}
                  </span>
                  <h3 className="mx-auto mt-7 max-w-xs text-2xl font-black leading-tight">{title}</h3>
                  <div className="mx-auto mt-7 h-0.5 w-12 bg-blue-gradient" />
                  <p className="mx-auto mt-7 max-w-xs text-lg leading-8 text-white/72">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Section id="roles" title="Built for every role across the healthcare ecosystem" tone="soft">
          <div className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-6">
              {roles.map(([icon, title, items]) => (
                <article className="grid gap-6 rounded-xl border border-line border-l-[6px] border-l-blue bg-white p-7 shadow-card sm:grid-cols-[120px_1fr]" key={title}>
                  <span className="flex h-24 w-24 items-center justify-center rounded-full border border-line bg-white shadow-soft">
                  <Icon name={icon} className="h-12 w-12 text-blue" />
                  </span>
                  <div>
                    <h3 className="text-3xl font-black text-ink">{title}</h3>
                    <ul className="mt-5 space-y-3 text-lg text-muted">
                      {items.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue text-blue">
                            <span className="shield-icon h-3 w-3" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="rounded-xl border border-line bg-white p-6 shadow-card lg:p-8">
              <HeroVisual />
              <div className="mt-10 text-center">
                <h3 className="text-4xl font-black text-ink">See your data - safely - in minutes.</h3>
                <p className="mt-5 text-xl text-muted">You are entering a working environment.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-7">
                  <Button href="#demo" variant="primary">
                    Request demo
                  </Button>
                  <Button href="#demo" variant="link">
                    Access sample cohort
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <section className="relative overflow-hidden bg-white" id="demo">
          <div className="dot-field left-0 top-0" />
          <div className="dot-field right-0 top-24 hidden lg:block" />
          <div className="wave-field" />
          <div className="relative mx-auto max-w-[1320px] px-6 py-24 text-center sm:px-8 lg:py-28">
            <h2 className="mx-auto max-w-4xl text-balance text-5xl font-black leading-[1.1] tracking-normal text-ink lg:text-[64px]">
              Bring your data together - without giving it away.
            </h2>
            <div className="mt-12 flex justify-center">
              <Button href="mailto:hello@lumkomdx.com" variant="primary" className="min-w-[330px]">
                Request demo
              </Button>
            </div>
            <p className="mt-8 text-2xl text-muted">No files. No identity transfer.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
