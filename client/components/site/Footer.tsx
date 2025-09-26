import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2Fc078b6e92f6f4db3a7183cf49a1f020f?format=webp&width=800" alt="Alvin Maupin & Associates logo" className="h-14 w-auto mb-3 object-contain" />
          <div className="font-serif text-xl font-semibold">Alvin Maupin & Associates</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Trusted legal counsel delivering results with integrity for over 30 years.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Office</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>9009 Oak Alley Blvd #234</li>
            <li>Webster, FL 33597</li>
            <li>United States</li>
            <li><a className="hover:text-foreground" href="tel:+17857011139">(785) 701-1139</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><RouterLink to="/about" className="hover:text-foreground">About</RouterLink></li>
            <li><RouterLink to="/services" className="hover:text-foreground">Services</RouterLink></li>
            <li><RouterLink to="/attorneys" className="hover:text-foreground">Attorneys</RouterLink></li>
            <li><RouterLink to="/contact" className="hover:text-foreground">Contact</RouterLink></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Hours</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Mon–Fri: 8:30am – 6:00pm</li>
            <li>Sat: By appointment</li>
            <li>24/7 emergency support</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Alvin Maupin & Associates. All rights reserved.</p>
          <p>Privacy Policy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
