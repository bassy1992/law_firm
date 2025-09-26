import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 reveal">
      <div className="container max-w-3xl">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold">Contact Us</h1>
        <p className="mt-3 text-muted-foreground">Send us a message or schedule a consultation — we respond within one business day.</p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 reveal">
            <div>
              <label className="block text-sm font-medium">Full name</label>
              <input required name="name" className="mt-2 w-full rounded-md border px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required type="email" name="email" className="mt-2 w-full rounded-md border px-3 py-2" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Message</label>
              <textarea required name="message" rows={6} className="mt-2 w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <Button type="submit" size="lg" className="">
                {status === "sending" ? "Sending…" : status === "sent" ? "Sent" : "Send Message"}
              </Button>
            </div>

            {status === "sent" && <div className="text-sm text-primary">Thanks — your message was sent.</div>}
          </form>

          <aside className="rounded-2xl border bg-card p-6 reveal">
            <h3 className="font-semibold">Office</h3>
            <p className="mt-2 text-sm text-muted-foreground">9009 Oak Alley Blvd #234<br/>Webster, FL 33597</p>
            <p className="mt-4 text-sm"><a href="tel:+17857011139" className="text-primary">(785) 701-1139</a></p>

            <div className="mt-6">
              <h4 className="font-semibold">Hours</h4>
              <p className="mt-2 text-sm text-muted-foreground">Mon–Fri: 8:30am – 6:00pm<br/>Sat: By appointment</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
