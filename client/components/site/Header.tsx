import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scale, Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-primary text-primary-foreground">
            <Scale className="h-5 w-5" />
          </div>
          <div className="font-serif text-xl font-semibold tracking-wide">Alvin Maupin & Associates</div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link key={item.href} to={item.href} className="text-sm font-medium text-foreground/80 hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+17857011139" className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground">
            <Phone className="h-4 w-4" /> (785) 701-1139
          </a>
          <Button asChild className="font-medium">
            <Link to="/contact">Free Consultation</Link>
          </Button>
        </div>

        <button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen((s) => !s)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div className={cn("md:hidden border-t bg-background", open ? "block" : "hidden")}> 
        <div className="container py-4 space-y-4">
          {nav.map((item) => (
            <Link key={item.href} to={item.href} className="block text-base" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>Free Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
