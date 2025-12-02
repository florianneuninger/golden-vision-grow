import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const LisaBrucknerSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fire confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#D4AF37", "#FFD700", "#F5F5F5", "#FFFFFF"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#D4AF37", "#FFD700", "#F5F5F5", "#FFFFFF"],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Danke für deine Nachricht!
          </h1>
          <p className="text-lg text-muted-foreground">
            Ich werde mich zeitnah bei dir telefonisch melden.
          </p>
        </div>

        <Button
          onClick={() => navigate("/")}
          size="lg"
          className="w-full sm:w-auto"
        >
          Zurück zur Startseite
        </Button>
      </div>
    </div>
  );
};

export default LisaBrucknerSuccess;
