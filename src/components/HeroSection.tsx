"use client";

import { motion } from "framer-motion";
import { Circle, Check, MessageCircle } from "lucide-react";
import { Button } from "./ui/enhanced-button";

import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-accent-cyan/20",
                        "shadow-[0_8px_32px_0_hsl(var(--accent-cyan)/0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent-cyan)/0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.05] via-transparent to-accent-orange/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-accent-cyan/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-accent-orange/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-accent-green/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-primary/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-accent-cyan/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/[0.1] border border-accent-cyan/[0.2] mb-4 md:mb-6"
                        >
                            <Circle className="h-2 w-2 fill-accent-orange/80" />
                            <span className="text-xs md:text-sm text-accent-cyan font-semibold tracking-wider uppercase">
                                Forex • Copy Trader PricePro
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-3 md:mb-4 lg:mb-6 leading-tight px-2">
                                Tenha lucros consistentes no Forex{" "}
                                <span className="text-gradient">copiando minhas operações</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            <p className="text-text-muted text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 leading-relaxed px-2">
                                Copie automaticamente minhas entradas, saídas e gestão de risco com o Copy Trader PricePro. 
                                Você controla o risco, o capital fica na sua corretora e pode pausar quando quiser.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.1 }}
                            className="space-y-2 md:space-y-3 mb-4 md:mb-6 lg:mb-8 px-4"
                        >
                            {[
                                "Configuração em ~5 minutos",
                                "Capital 100% no seu nome",
                                "Risco por lote / fator / drawdown",
                                "Resultados ao vivo e histórico auditável",
                                "Suporte humano para onboarding"
                            ].map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                    className="flex items-center gap-2 md:gap-3 justify-center md:justify-start"
                                >
                                    <Check className="w-4 h-4 md:w-5 md:h-5 text-accent-green flex-shrink-0" />
                                    <span className="text-text-primary text-xs sm:text-sm md:text-base">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="flex flex-col gap-3 md:gap-4 px-4 md:px-0 sm:flex-row sm:justify-center"
                        >
                            <Button variant="primary" size="lg" className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6" asChild>
                                <a href="https://forms.fillout.com/t/xjHcxRDUMAus">Quero copiar as operações agora</a>
                            </Button>
                            <Button variant="soft" size="lg" className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6" asChild>
                                <a href="https://t.me/priceprocopytrader" className="flex items-center gap-2 justify-center">
                                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                                    Telegram
                                </a>
                            </Button>
                            <p className="text-text-muted text-xs sm:text-sm mt-2 col-span-full text-center">
                                acesso imediato • passo a passo incluso
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
        </section>
    );
};