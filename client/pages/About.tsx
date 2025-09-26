import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-20">
      <div className="container grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">About Alvin Maupin & Associates</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Founded on principles of integrity and excellence, Alvin Maupin & Associates has represented individuals and businesses with distinction for over three decades. Our firm combines deep legal experience with a modern, client-focused approach to deliver results.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" />Our team brings together seasoned litigators and transactional lawyers.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" />We prioritize clear communication, ethical representation, and strategic thinking.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" />Locally rooted with national experience across industries.</li>
          </ul>

          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">Contact our team</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-10 shadow-sm">
          <h3 className="font-semibold">Our Approach</h3>
          <p className="mt-3 text-sm text-muted-foreground">We tailor legal strategies to each client's goals, balancing creativity with disciplined analysis. Whether in negotiation or the courtroom, our priority is achieving the best possible outcome.</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-muted p-4 text-center">
              <div className="text-xl font-semibold">30+</div>
              <div className="text-xs text-muted-foreground">Years Practice</div>
            </div>
            <div className="rounded-xl bg-muted p-4 text-center">
              <div className="text-xl font-semibold">12</div>
              <div className="text-xs text-muted-foreground">Attorneys</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
