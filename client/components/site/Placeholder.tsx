import { Link } from "react-router-dom";

export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="py-24">
      <div className="container text-center max-w-2xl">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-muted-foreground">
          This page is a placeholder. Tell me what content you want here and I’ll build it to match your brand.
        </p>
        <div className="mt-8">
          <Link to="/" className="text-primary underline underline-offset-4">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
