import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, TrendingUp, Shield, Users } from "lucide-react";
import marleneHero from "@/assets/marlene-hero.jpg";

const Index = () => {
  const scrollToCalendly = () => {
    document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Golden Vision</span>
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
                Ihr Vermögen in <span className="text-primary">goldenen Händen</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Marlene Holzer – Ihre persönliche Vermögensberaterin für eine sichere finanzielle Zukunft
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToCalendly} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg">
                  Jetzt Termin vereinbaren
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl border-4 border-primary shadow-2xl">
                <img
                  src={marleneHero}
                  alt="Marlene Holzer - Vermögensberaterin"
                  className="h-full w-full object-cover"
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
                  Über 15 Jahre Erfahrung in der Vermögensberatung mit höchsten Sicherheitsstandards
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
                  Maßgeschneiderte Lösungen für Ihre persönliche finanzielle Situation
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nachhaltige Rendite</h3>
                <p className="text-muted-foreground">
                  Durchschnittlich 8,5% Rendite pro Jahr durch kluge Anlagestrategien
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">€50M+</div>
              <div className="text-muted-foreground">Verwaltetes Vermögen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Jahre Erfahrung</div>
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
              "Ganzheitliche Finanzplanung",
              "Vermögensaufbau & Altersvorsorge",
              "Steueroptimierte Anlagestrategien",
              "Immobilieninvestments",
              "Risikomanagement & Absicherung",
              "Nachfolgeplanung"
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
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-border">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Frau Holzer hat mir geholfen, mein Vermögen optimal zu strukturieren. 
                    Die Beratung war professionell und sehr persönlich. Ich fühle mich endlich 
                    sicher für meine Zukunft."
                  </p>
                  <div className="font-semibold">Michael Schmidt</div>
                  <div className="text-sm text-muted-foreground">Unternehmer, München</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Die individuelle Betreuung und die transparenten Strategien haben mich 
                    überzeugt. Meine Rendite hat sich seit der Zusammenarbeit deutlich verbessert."
                  </p>
                  <div className="font-semibold">Sarah Weber</div>
                  <div className="text-sm text-muted-foreground">Ärztin, Stuttgart</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Kompetent, zuverlässig und immer erreichbar. Frau Holzer nimmt sich Zeit 
                    für ihre Kunden und findet immer die beste Lösung. Absolute Empfehlung!"
                  </p>
                  <div className="font-semibold">Thomas Müller</div>
                  <div className="text-sm text-muted-foreground">IT-Manager, Frankfurt</div>
                </div>
              </CardContent>
            </Card>
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
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">Golden Vision</span>
              </div>
              <p className="text-background/80">
                Ihre vertrauenswürdige Partnerin für Vermögensberatung
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-primary">Kontakt</h3>
              <div className="space-y-2 text-background/80">
                <p>Marlene Holzer</p>
                <p>Email: info@golden-vision.de</p>
                <p>Tel: +49 123 456789</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-primary">Rechtliches</h3>
              <div className="space-y-2 text-background/80">
                <p>Impressum</p>
                <p>Datenschutz</p>
                <p>AGB</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-background/20 text-center text-background/60">
            <p>&copy; 2024 Golden Vision. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
