import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scale, Briefcase, Building, CarFront, HeartPulse, Phone } from "lucide-react";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,hsl(var(--accent)/.25),transparent_70%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--background)))]" />
        <div className="container py-24 md:py-32 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/40 text-accent-foreground px-3 py-1 text-xs font-medium ring-1 ring-accent/40">
              Celebrating 30+ years of legal excellence
            </div>
            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl font-bold tracking-tight">
              Trusted counsel for life’s most important matters
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Alvin Maupin & Associates is a full-service law firm delivering ethical, results‑driven representation since 1995.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+17857011139" className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> Call (785) 701‑1139</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { kpi: "30+", label: "Years in Practice" },
                { kpi: "1,200+", label: "Cases Resolved" },
                { kpi: "24/7", label: "Client Support" },
              ].map((s) => (
                <div key={s.label} className="">
                  <div className="text-3xl font-semibold">{s.kpi}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto h-[420px] max-w-[520px] rounded-2xl border bg-card p-10 shadow-sm flex items-center justify-center">
              <Scale className="h-24 w-24 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">Practice Areas</h2>
            <p className="mt-3 text-muted-foreground">Comprehensive legal services delivered with care, discretion, and precision.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Briefcase className="h-6 w-6" />, title: "Corporate & Commercial", desc: "Entity formation, contracts, M&A, governance." },
              { icon: <Building className="h-6 w-6" />, title: "Real Estate", desc: "Acquisitions, leasing, financing, and disputes." },
              { icon: <CarFront className="h-6 w-6" />, title: "Injury & Liability", desc: "Advocacy for accident and negligence claims." },
              { icon: <HeartPulse className="h-6 w-6" />, title: "Family Law", desc: "Divorce, custody, and estate planning with care." },
              { icon: <Scale className="h-6 w-6" />, title: "Litigation", desc: "Strategic representation in complex disputes." },
              { icon: <Briefcase className="h-6 w-6" />, title: "Employment", desc: "Compliance, disputes, and workplace advisory." },
            ].map((c) => (
              <div key={c.title} className="group rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/40 text-foreground ring-1 ring-accent/30">
                  {c.icon}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-muted/30">
        <div className="container grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">A legacy of integrity since 1995</h2>
            <p className="mt-4 text-muted-foreground">Our firm was founded on the principles of diligence, discretion, and unwavering client advocacy. We combine seasoned expertise with modern strategy to secure the best outcomes.</p>
            <ul className="mt-6 grid gap-3 text-sm">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" />Personalized counsel tailored to your goals</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" />Transparent fees and clear communication</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" />Proven results across industries</li>
            </ul>
            <div className="mt-8">
              <Button asChild>
                <Link to="/about">Learn more</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-10 shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              {[
                { k: "95%", l: "Client satisfaction" },
                { k: "200+", l: "Business clients" },
                { k: "50+", l: "Awards & honors" },
                { k: "12", l: "Dedicated attorneys" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-muted p-6 text-center">
                  <div className="text-2xl font-semibold">{s.k}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container rounded-2xl border bg-card p-10 md:p-14 text-center shadow-sm">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">Ready to discuss your case?</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Schedule a free, confidential consultation with our team. We respond within one business day.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg"><Link to="/contact">Request Consultation</Link></Button>
            <Button asChild size="lg" variant="outline"><a href="tel:+17857011139" className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> Call Now</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
