import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logoGoldenVision from "@/assets/logo-golden-vision.png";
import footerLogo from "@/assets/footer-logo.png";

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoGoldenVision} alt="Golden Vision Logo" className="h-12 w-auto" />
          </Link>
          <Link to="/">
            <Button variant="outline">Zurück zur Startseite</Button>
          </Link>
        </div>
      </header>

      <div className="container px-4 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        {/* Kontaktinformationen */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Kontaktinformationen</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-lg mb-4">Marlene Holzner</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Arthur Schnitzler Straße 29</p>
                    <p>3300 Amstetten</p>
                    <p>Österreich</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+436503477726" className="hover:text-primary transition-colors">
                    +43 6503477726
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:Marlene.Holzner@dvag.at" className="hover:text-primary transition-colors">
                    Marlene.Holzner@dvag.at
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="https://www.dvag.at/Marlene.Holzner" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    www.dvag.at/Marlene.Holzner
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="h-[300px] rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.8!2d14.8717!3d48.1222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4771415e9c9d9f8b%3A0x5c4b5c0b5c0b5c0b!2sArthur-Schnitzler-Stra%C3%9Fe%2029%2C%203300%20Amstetten!5e0!3m2!1sde!2sat!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Golden Vision"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Rechtliche Informationen */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Rechtliche Hinweise</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Zahlungshinweis</h3>
              <p>
                Die Vermögensberater nehmen keine Kundengelder entgegen. Zahlungen erfolgen direkt von den Kunden an die jeweiligen Produktpartner.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Haftungshinweis</h3>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </div>
        </div>

        {/* Gewerbescheinverweise */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Gewerbescheinverweise</h2>
          
          <div className="space-y-4 text-muted-foreground text-sm">
            <p>
              <strong className="text-foreground">Versicherungsagent</strong><br />
              im Auftrag der Deutschen Vermögensberatung Bank AG für die Generali Versicherung AG<br />
              GISA-Zahl: 35583578
            </p>

            <p>
              <strong className="text-foreground">Vermögensberater gemäß § 94 Z 75 GewO</strong><br />
              mit der Berechtigung zur Vermittlung von Lebens- und Unfallversicherungen im Auftrag der Deutschen Vermögensberatung Bank AG als Versicherungsagent der Generali Versicherung AG<br />
              GISA-Zahl: 36720170
            </p>

            <p>
              <strong className="text-foreground">Ungebundener Kreditvermittler</strong><br />
              ausschließlich für die Produktpartner (siehe <a href="https://www.dvag.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dvag.at</a>) der Deutsche Vermögensberatung Bank Aktiengesellschaft
            </p>

            <p>
              <strong className="text-foreground">Mitgliedschaft:</strong> Wirtschaftskammer Österreich
            </p>
          </div>
        </div>

        {/* Berufsrechtliche Vorschriften */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Wesentliche gewerbe- und berufsrechtliche Vorschriften</h2>
          
          <div className="space-y-4 text-muted-foreground text-sm">
            <p>
              Wertpapieraufsichtsgesetz, Gewerbeordnung, Handelsvertretergesetz, Konsumentenschutzgesetz, 
              Telekommunikationsgesetz, Versicherungsvertragsgesetz, Verbraucherkreditgesetz, 
              Hypothekar- und Immobilienkreditgesetz
            </p>

            <p>
              Die jeweils aktuelle Version der Rechtsvorschriften ist über die kostenlos zugängliche Website 
              des RIS des Bundeskanzleramtes{" "}
              <a 
                href="http://www.ris.bka.gv.at" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                http://www.ris.bka.gv.at
              </a>{" "}
              abrufbar.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 mt-12">
        <div className="container px-4">
          <div className="flex justify-center mb-4">
            <img src={footerLogo} alt="Golden Vision Logo" className="h-10 w-auto" />
          </div>
          <p className="text-background/60 text-center">&copy; 2025 Golden Vision. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
