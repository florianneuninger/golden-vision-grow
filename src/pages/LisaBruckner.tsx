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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.vorname || !formData.nachname || !formData.telefon || !formData.email) {
      toast({
        title: "Fehler",
        description: "Bitte fülle alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }
    try {
      await supabase.functions.invoke("send-lisa-contact", { body: formData });
      navigate("/lisabruckner/success");
    } catch (error) {
      console.error(error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden.",
        variant: "destructive",
      });
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

  // Vimeo Embed URL (best quality, autoplay)
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">
            Interesse geweckt?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vorname">Vorname *</Label>
                <Input
                  id="vorname"
                  name="vorname"
                  value={formData.vorname}
                  onChange={handleInputChange}
                  required
                  placeholder="Max"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nachname">Nachname *</Label>
                <Input
                  id="nachname"
                  name="nachname"
                  value={formData.nachname}
                  onChange={handleInputChange}
                  required
                  placeholder="Mustermann"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefon">Telefonnummer *</Label>
              <Input
                id="telefon"
                name="telefon"
                type="tel"
                value={formData.telefon}
                onChange={handleInputChange}
                required
                placeholder="+43 660 1234567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-Mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="max@beispiel.at"
              />
            </div>

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

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Wird gesendet..." : "Absenden"}
            </Button>
          
          </form>
        </div>
      </section>
    </div>
  );
};

export default LisaBruckner;

            
