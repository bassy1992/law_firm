import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { title: "Corporate & Commercial", desc: "Entity formation, contracts, M&A, governance." },
  { title: "Real Estate", desc: "Acquisitions, leasing, financing, and disputes." },
  { title: "Injury & Liability", desc: "Advocacy for accident and negligence claims." },
  { title: "Family Law", desc: "Divorce, custody, and estate planning with care." },
  { title: "Litigation", desc: "Strategic representation in complex disputes." },
  { title: "Employment", desc: "Compliance, disputes, and workplace advisory." },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Our Services</h1>
          <p className="mt-3 text-muted-foreground">We provide a broad range of legal services with a focus on practical, results-driven counsel.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4">
                <Button asChild size="sm">
                  <Link to="/contact">Get Help</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
