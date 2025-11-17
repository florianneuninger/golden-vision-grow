import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import teamHero from "@/assets/team-hero.jpg";
import logoGoldenVision from "@/assets/logo-golden-vision.png";
import footerLogo from "@/assets/footer-logo.png";

const TaggboxWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.taggbox.com/embed.min.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="taggbox"
      style={{ width: "100%", height: "600px", overflow: "auto" }}
      data-widget-id="307655"
      data-website="1"
    ></div>
  );
};

const Index = () => {
  const scrollToCalendly = () => {
    document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src={logoGoldenVision} alt="Golden Vision Logo" className="h-12 w-auto" />
          </div>
          <Button onClick={scrollToCalendly} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Kostenloses Erstgespräch
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 lg:py-32">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Vertrauen Sie auf Erfahrung, die <span className="text-primary">Werte schafft</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Golden Vision - Ihr persönliches Expertenteam für finanzielle Sicherheit und Wachstum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToCalendly} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg">
                  Jetzt Termin vereinbaren
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border-4 border-primary shadow-2xl">
                <img
                  src={teamHero}
                  alt="Golden Vision Team - Ihr Expertenteam für Vermögensberatung"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Warum <span className="text-primary">Golden Vision</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Ihre Vorteile auf einen Blick
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sicherheit & Vertrauen</h3>
                <p className="text-muted-foreground">
                  Seit Jahren ihre verlässlichen Partner für sichere Finanzentscheidungen
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Individuelle Beratung</h3>
                <p className="text-muted-foreground">
                  Maßgeschneiderte Lösungen für Ihre persönlichen Wünsche und Ziele
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparenz & Nachvollziehbarkeit</h3>
                <p className="text-muted-foreground">
                  Klare, verständliche Beratung ohne Fachchinesisch.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Kooperationspartner</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Weiterempfehlungsrate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-muted-foreground">
              Umfassende Vermögensberatung für Ihre Ziele
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Finanz-Check & Optimierung",
              "Vermögensaufbau & Altersvorsorge",
              "Steueroptimierte Anlagestrategien",
              "Finanzierungslösungen für Ihr Eigenheim",
              "Sicherheitsstrategien & Vermögensschutz"
            ].map((service) => (
              <div key={service} className="flex items-start gap-3 bg-background p-6 rounded-lg border border-border">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Das sagen unsere <span className="text-primary">Kunden</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Erfahrungen von Menschen, die uns vertrauen
            </p>
          </div>
          
          <div className="w-full">
            <TaggboxWidget />
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="calendly" className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Vereinbaren Sie Ihr <span className="text-primary">kostenloses</span> Erstgespräch
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Lassen Sie uns gemeinsam Ihre finanzielle Zukunft planen
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-background rounded-lg border-2 border-primary p-8 shadow-xl">
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://calendly.com/your-calendly-link"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Terminbuchung"
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Bitte ersetzen Sie den Calendly-Link mit Ihrem persönlichen Link
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={footerLogo} alt="Golden Vision Logo" className="h-10 w-auto" />
              </div>
              <p className="text-background/80 mb-4">
                Golden Vision - Ihr persönliches Expertenteam für finanzielle Sicherheit und Wachstum.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-primary">Kontakt</h3>
              <div className="space-y-2 text-background/80">
                <p>Marlene Holzner</p>
                <p>Tel: +43 6503477726</p>
                <p>Email: Marlene.Holzner@dvag.at</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-background/20 text-center">
            <Link to="/impressum" className="text-primary hover:underline font-semibold">
              Impressum
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-background/20 text-center text-background/60">
            <p>&copy; 2025 Golden Vision. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
