import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Volume2, VolumeX } from "lucide-react";

const LisaBruckner = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    telefon: "",
    email: "",
    nachricht: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    if (currentStep === 1) {
      return formData.vorname.trim() && formData.nachname.trim();
    } else if (currentStep === 2) {
      return (
        formData.telefon.trim() &&
        formData.email.trim() &&
        formData.email.includes("@")
      );
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) {
      toast({
        title: "Fehler",
        description: "Bitte fülle alle Pflichtfelder korrekt aus.",
        variant: "destructive",
      });
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await supabase.functions.invoke("send-lisa-contact", { body: formData });
      navigate("/lisabruckner/success");
    } catch (error) {
      console.error(error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMute = () => {
    if (!iframeRef.current) return;

    setIsMuted((prev) => {
      const newValue = !prev;
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          method: "setVolume",
          value: newValue ? 0 : 1,
        }),
        "*"
      );
      return newValue;
    });
  };

  const vimeoUrl = `https://player.vimeo.com/video/1142455584?autoplay=1&muted=1&loop=1&controls=0&transparent=0`;

  return (
    <div className="min-h-screen bg-background">
      {/* Video Section */}
      <section className="w-full">
        <div className="text-center pt-6 pb-4 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Ich bin Lisa Bruckner
          </h1>
        </div>

        <div className="relative w-full max-w-md mx-auto aspect-[9/16]">
          <iframe
            ref={iframeRef}
            src={vimeoUrl}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Lisa Bruckner Video"
          />

          {/* Mute Button */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <Button
              variant="secondary"
              size="icon"
              onClick={toggleMute}
              className="bg-background/80 hover:bg-background/90 backdrop-blur-sm"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto">
          {/* Social Proof + Knappheit */}
          <p className="text-sm text-muted-foreground mb-2">
            Über <strong>500 Anfragen</strong> wurden bereits erfolgreich bearbeitet!
          </p>
          <p className="text-sm text-red-500 mb-4">
            Schnell! Nur noch wenige Termine im Monat verfügbar.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">
            Interesse geweckt?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vorname">Vorname *</Label>
                    <Input
                      id="vorname"
                      name="vorname"
                      value={formData.vorname}
                      onChange={handleInputChange}
                      placeholder="Max"
                      autoFocus
                    />
                    {!formData.vorname.trim() && (
                      <p className="text-red-500 text-sm">Vorname ist Pflicht</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nachname">Nachname *</Label>
                    <Input
                      id="nachname"
                      name="nachname"
                      value={formData.nachname}
                      onChange={handleInputChange}
                      placeholder="Mustermann"
                    />
                    {!formData.nachname.trim() && (
                      <p className="text-red-500 text-sm">Nachname ist Pflicht</p>
                    )}
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Weiter
                </Button>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="telefon">Telefonnummer *</Label>
                  <Input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    value={formData.telefon}
                    onChange={handleInputChange}
                    placeholder="+43 660 1234567"
                  />
                  {!formData.telefon.trim() && (
                    <p className="text-red-500 text-sm">Telefon ist Pflicht</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="max@beispiel.at"
                  />
                  {(!formData.email.includes("@") || !formData.email.trim()) && (
                    <p className="text-red-500 text-sm">Bitte gib eine gültige E-Mail ein</p>
                  )}
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handlePrev}
                    className="w-1/2"
                  >
                    Zurück
                  </Button>

                  <Button
                    type="button"
                    onClick={handleNext}
                    className="w-1/2 ml-2 bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Weiter
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nachricht">Nachricht (optional)</Label>
                  <Textarea
                    id="nachricht"
                    name="nachricht"
                    value={formData.nachricht}
                    onChange={handleInputChange}
                    placeholder="Deine Nachricht..."
                    rows={4}
                  />
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handlePrev}
                    className="w-1/2"
                  >
                    Zurück
                  </Button>

                  <Button
                    type="submit"
                    className="w-1/2 ml-2 bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all duration-200 shadow-md hover:shadow-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Wird gesendet..." : "Jetzt Kontakt aufnehmen"}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default LisaBruckner;
