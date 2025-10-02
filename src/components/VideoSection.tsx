import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Como começar a copiar minhas operações
            </h2>
            <p className="text-text-muted text-lg">
              3 passos simples para configurar seu Copy Trader
            </p>
          </div>
          
          <div className="relative aspect-video bg-background rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_yP-FbnN4vY?start=2"
              title="Copy Trader PricePro Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <p className="text-center text-text-muted text-sm mt-4">
            Resultados ilustrativos. Operações reais envolvem risco.
          </p>
        </div>
      </div>
    </section>
  );
};