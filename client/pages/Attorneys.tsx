import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DEFAULT_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2F475f0c56d1df4beb820c495040a735f3?format=webp&width=800";
const MARIAN_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2F691a83b26e4a4bf4bc255d1a69cb02a4?format=webp&width=800";
const KWESI_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2F8077f0c3f405457aaf025eba961d4613?format=webp&width=800";

const attorneys = [
  {
    name: "Alvin Maupin",
    title: "Senior Counsel",
    bio: "Expert in real estate and commercial transactions, focused on pragmatic solutions.",
    email: "alvin@alvinmaupinlaw.com",
    phone: "(785) 701-1139",
  },
  {
    name: "Marian Booker",
    title: "Partner, Family Law",
    bio: "Compassionate advocate for families, custody, and estate planning matters.",
    email: "marian@alvinmaupinlaw.com",
    phone: "(785) 701-1139",
    photo: MARIAN_IMG,
  },
  {
    name: "Bryn Decker",
    title: "Associate",
    bio: "Driven trial attorney handling personal injury and insurance disputes.",
    email: "bryn@alvinmaupinlaw.com",
    phone: "(785) 701-1139",
    photo: KWESI_IMG,
  },
];

export default function Attorneys() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Our Attorneys</h1>
          <p className="mt-3 text-muted-foreground">Meet the team—experienced advocates committed to your success.</p>
        </div>

        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-6xl mx-auto">
          {attorneys.map((a) => (
            <article key={a.email} className="w-full max-w-sm rounded-2xl border bg-card p-6 text-center shadow-sm">
              <img
                src={a.photo ?? DEFAULT_IMG}
                alt={a.name}
                className="mx-auto h-36 w-36 rounded-full object-cover border"
              />
              <h3 className="mt-4 text-lg font-semibold">{a.name}</h3>
              <div className="text-sm text-muted-foreground">{a.title}</div>
              <p className="mt-3 text-sm text-muted-foreground">{a.bio}</p>

              <div className="mt-4 flex flex-col gap-2">
                <a className="text-sm text-muted-foreground" href={`mailto:${a.email}`}>{a.email}</a>
                <a className="text-sm text-muted-foreground" href={`tel:${a.phone.replace(/[^0-9+]/g, "")}`}>{a.phone}</a>
              </div>

              <div className="mt-4">
                <Button asChild size="sm">
                  <Link to="/contact">Request Consultation</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
