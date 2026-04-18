/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Smartphone, 
  Clock, 
  Zap, 
  Users, 
  Target, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Phone,
  Mail,
  ArrowUpRight,
  Store,
  Stethoscope,
  Scissors,
  Dumbbell,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Soluções', href: '#servicos' },
    { name: 'Para Quem', href: '#como-funciona' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header>
      <nav 
        aria-label="Navegação principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-deep/95 backdrop-blur-md py-4 border-b border-theme' : 'bg-transparent py-8'}`}
      >
        <div className="container mx-auto px-10 lg:px-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold tracking-[2px] text-brand-gold uppercase">
              PrimeFlow
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[13px] font-medium text-white/80 uppercase tracking-widest hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-deep"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5516997609082"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-brand-gold text-brand-deep rounded-[2px] text-[13px] font-bold uppercase tracking-widest hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-gold"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-deep border-b border-theme overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-sm font-medium text-white/70 uppercase tracking-wider hover:text-brand-gold p-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="https://wa.me/5516997609082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-6 py-3 bg-brand-gold text-brand-deep rounded-[2px] text-sm font-bold uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Fale Conosco
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5516997609082"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco no WhatsApp agora"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    className="fixed bottom-8 right-8 z-[60] flex items-center gap-3 bg-[#25D366] py-3 px-6 rounded-full shadow-2xl shadow-black/40 text-white font-bold group focus:outline-none focus:ring-4 focus:ring-white/50"
  >
    <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
      👉 Fale conosco agora
    </span>
    <span className="md:hidden" aria-hidden="true">👉 Fale conosco agora</span>
    <Phone className="w-6 h-6 fill-current" aria-hidden="true" />
  </motion.a>
);

const Hero = () => (
  <section id="inicio" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-brand-deep border-b border-theme">
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img 
        src="https://picsum.photos/seed/digital-automation-bg/1920/1080?blur=10" 
        className="w-full h-full object-cover opacity-10 grayscale" 
        alt="" 
        aria-hidden="true"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="container mx-auto px-10 lg:px-16 relative z-10">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-[64px] font-serif font-light leading-[1.1] mb-8 text-white">
            Automatize seu WhatsApp <span className="text-brand-gold block italic">e nunca mais perca clientes</span>
          </h1>
          <p className="text-xl text-brand-muted mb-10 max-w-xl leading-[1.6]">
            Responda clientes na hora, organize seu atendimento e aumente suas vendas todos os dias.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/5516997609082"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-gold text-brand-deep font-bold rounded-[2px] text-[14px] uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Fale conosco
            </motion.a>
            <motion.a 
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              href="https://wa.me/5516997609082"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-brand-gold text-brand-gold font-bold rounded-[2px] text-[14px] uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Solicitar demonstração
            </motion.a>
          </div>

          <div className="grid grid-cols-2 gap-8 p-10 bg-brand-green border border-theme">
            <div className="stat-item border-r border-theme last:border-0 pr-8">
              <h3 className="text-4xl font-serif text-brand-gold mb-2">3x Mais</h3>
              <p className="text-[12px] text-brand-muted uppercase tracking-widest leading-[1.4]">Chances de fechar vendas ao responder em 5min</p>
            </div>
            <div className="stat-item pl-4">
              <h3 className="text-4xl font-serif text-brand-gold mb-2">24/7</h3>
              <p className="text-[12px] text-brand-muted uppercase tracking-widest leading-[1.4]">Sua empresa atendendo até enquanto você dorme</p>
            </div>
          </div>
        </motion.div>

        <div className="features-sidebar flex flex-col gap-6">
          {[
            { title: "Atendimento Automático", desc: "Sistemas que respondem rapidamente e organizam o fluxo de entrada." },
            { title: "Respostas Automáticas", desc: "Inteligência para responder as dúvidas mais comuns na hora." },
            { title: "Agendamento Automatizado", desc: "Deixe que seus clientes marquem horários sem intervenção humana." },
            { title: "Fluxo de Atendimento", desc: "Organização completa para que você nunca mais se perca em mensagens." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border-l-[3px] border-brand-gold hover:bg-white/[0.08] transition-all group"
            >
              <h4 className="text-[16px] font-bold text-brand-gold mb-2 uppercase tracking-wide">{item.title}</h4>
              <p className="text-[14px] text-brand-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-24 bg-brand-deep relative overflow-hidden border-b border-theme">
    <div className="container mx-auto px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/modern-office-business/800/600" 
            alt="Ambiente de trabalho moderno demonstrando foco e tecnologia" 
            className="relative z-10 border border-theme grayscale opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="lg:w-1/2">
        <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-4 block">Quem somos</span>
        <h2 className="text-4xl lg:text-5xl font-serif font-light mb-8 leading-tight">
          Sua ponte para uma <span className="text-brand-gold italic">automação inteligente</span>
        </h2>
        <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
          <p>
            A PrimeFlow nasceu com um objetivo claro: ajudar empresas a crescer utilizando automação inteligente no WhatsApp.
          </p>
          <p>
            Hoje, grande parte dos clientes entra em contato por mensagem, mas muitas empresas ainda perdem oportunidades por demora ou falta de organização no atendimento.
          </p>
          <p>
            Nosso foco é transformar esse cenário com soluções simples, eficientes e que realmente fazem diferença no dia a dia.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="problemas" className="py-24 bg-brand-deep border-b border-theme">
    <div className="container mx-auto px-10 lg:px-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-serif font-light mb-6 uppercase tracking-wider text-brand-gold">O problema é real</h2>
        <p className="text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Oportunidades que escapam pelas mãos devido a gargalos operacionais.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          { icon: Clock, title: "Demora para responder clientes", desc: "A espera mata o desejo de compra instantâneo." },
          { icon: MessageSquare, title: "Mensagens acumuladas", desc: "Conversas perdidas no mar de notificações." },
          { icon: Target, title: "Falta de organização", desc: "Não saber quem foi atendido ou qual o próximo passo." },
          { icon: Users, title: "Oportunidades perdidas", desc: "Vendas que vão para o concorrente que respondeu primeiro." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-brand-green border border-theme hover:border-brand-gold transition-all group"
          >
            <div className="w-14 h-14 bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
              <item.icon className="text-brand-gold w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-[13px] font-bold mb-4 uppercase tracking-widest">{item.title}</h3>
            <p className="text-brand-muted text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="p-10 border border-theme bg-white/[0.02] text-center">
        <p className="text-2xl font-serif font-light text-brand-gold italic">
          "Clientes não esperam. Quem responde primeiro, vende mais."
        </p>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicos" className="py-24 bg-brand-deep border-b border-theme">
    <div className="container mx-auto px-10 lg:px-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-serif font-light mb-6 uppercase tracking-wider">Nossos Serviços</h2>
        <p className="text-brand-muted">Soluções diretas para problemas complexos de atendimento.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {[
          { title: "Automação de atendimento no WhatsApp", desc: "Fluxos inteligentes que qualificam e atendem seus leads sozinhos." },
          { title: "Respostas automáticas inteligentes", desc: "Agilidade absoluta para as dúvidas recorrentes da sua operação." },
          { title: "Agendamento automatizado", desc: "Sua agenda ocupada sem você precisar abrir um chat sequer." },
          { title: "Organização do fluxo de atendimento", desc: "Processo estruturado para que cada cliente tenha a melhor experiência." }
        ].map((item, i) => (
          <div key={i} className="p-8 border border-theme bg-brand-green/30 hover:bg-brand-green/50 transition-all group">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-widest text-brand-gold">{item.title}</h3>
            <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="como-funciona" className="py-24 bg-brand-deep border-b border-theme">
    <div className="container mx-auto px-10 lg:px-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-serif font-light mb-6 uppercase tracking-wider">Como funciona</h2>
        <p className="text-brand-muted uppercase tracking-[2px] text-sm">Simplicidade e sofisticação em cada passo.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8 relative">
        {[
          { step: "01", title: "O cliente entra em contato", desc: "Início automático da jornada pelo WhatsApp." },
          { step: "02", title: "O sistema responde na hora", desc: "Fim da espera e frustração do lead." },
          { step: "03", title: "O cliente escolhe o que precisa", desc: "Autonomia para resolver dúvidas ou agendar." },
          { step: "04", title: "Atendimento ágil e organizado", desc: "Conversão maximizada e equipe liberada." }
        ].map((item, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center p-8 bg-brand-green/20 border border-theme">
            <div className="w-10 h-10 border border-brand-gold text-brand-gold font-bold flex items-center justify-center mb-6 uppercase">
              {item.step}
            </div>
            <h3 className="text-[11px] font-bold mb-3 uppercase tracking-[2px]">{item.title}</h3>
            <p className="text-[13px] text-brand-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 bg-brand-deep border-b border-theme">
    <div className="container mx-auto px-10 lg:px-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-serif font-light mb-6 uppercase tracking-wider text-brand-gold">Benefícios</h2>
        <p className="text-brand-muted">Vantagens competitivas para o seu negócio.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Atendimento 24 horas por dia",
          "Respostas instantâneas",
          "Mais agilidade no atendimento",
          "Redução de tarefas repetitivas",
          "Melhor experiência para o cliente",
          "Escalabilidade real sem contratar mais"
        ].map((benefit, i) => (
          <div key={i} className="flex items-center gap-4 p-6 border border-theme bg-white/[0.02]">
            <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm uppercase tracking-widest text-white/80">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-24 bg-brand-deep border-b border-theme overflow-hidden">
    <div className="container mx-auto px-10 lg:px-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-serif font-light mb-6 uppercase tracking-wider text-brand-gold">Dados e Resultados</h2>
        <p className="text-brand-muted uppercase tracking-[2px] text-sm">A ciência por trás da nossa eficiência.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { label: "Mias Chances", value: "3x Mais", desc: "Empresas que respondem em até 5 minutos fecham mais vendas." },
          { label: "Agilidade Crítica", value: "70%+", desc: "Dos clientes escolhem quem responde primeiro." },
          { label: "Conversão", value: "Alta", desc: "O atendimento imediato aumenta significativamente a conversão." }
        ].map((item, i) => (
          <div key={i} className="text-center group border-r last:border-0 border-theme">
            <div className="text-6xl font-serif text-brand-gold mb-4 uppercase">
              {item.value}
            </div>
            <h4 className="text-[11px] font-bold mb-2 uppercase tracking-[3px] text-white/80">{item.label}</h4>
            <p className="text-[12px] text-brand-muted max-w-[200px] mx-auto uppercase tracking-wider leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ForWho = () => (
  <section className="py-24 bg-brand-deep border-b border-theme">
    <div className="container mx-auto px-10 lg:px-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-serif font-light mb-6 uppercase tracking-wider">Para quem é</h2>
        <p className="text-brand-muted uppercase tracking-[2px] text-sm">Negócios que utilizam WhatsApp diariamente.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          { icon: Scissors, label: "Barbearias" },
          { icon: Stethoscope, label: "Clínicas" },
          { icon: Dumbbell, label: "Academias" },
          { icon: Store, label: "Lojas" },
          { icon: Briefcase, label: "Sua Empresa" }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-brand-green/20 border border-theme hover:border-brand-gold transition-all text-center group">
            <item.icon className="w-8 h-8 text-brand-gold mx-auto mb-4 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" aria-hidden="true" />
            <span className="text-[13px] font-bold uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Differentials = () => (
  <section className="py-24 bg-brand-deep border-b border-theme">
    <div className="container mx-auto px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-left">
          <span className="text-brand-gold font-bold uppercase tracking-[3px] text-xs mb-4 block">Diferenciais</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-8 leading-tight">Excelência que <span className="text-brand-gold italic">Gera Confiança</span></h2>
          <div className="space-y-4">
            {[
              "Atendimento personalizado",
              "Soluções adaptadas para cada negócio",
              "Implementação rápida",
              "Fácil de usar",
              "Suporte próximo e humanizado"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-white/[0.03] border-l border-brand-gold">
                <ShieldCheck className="text-brand-gold w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm uppercase tracking-widest text-white/80">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="border border-theme p-4 scale-95 grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://picsum.photos/seed/mobile-chat-app/800/600" 
              className="w-full opacity-60" 
              alt="Interface de aplicativo mobile focada em conversas e automação" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contato" className="bg-brand-green/50 pt-20 pb-10 border-t border-theme">
    <div className="container mx-auto px-10 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[12px] text-brand-muted uppercase tracking-[1px]">
        <div>primeflooww@gmail.com</div>
        <div>+55 16 99760-9082</div>
        <div>© 2024 PrimeFlow. Todos os direitos reservados.</div>
      </div>
    </div>
  </footer>
);

const CTA = () => (
    <section className="py-32 relative overflow-hidden bg-brand-deep">
        <div className="container mx-auto px-10 lg:px-16 relative z-10">
            <div className="bg-brand-green/30 border border-theme p-12 lg:p-24 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-6xl font-serif font-light mb-8 leading-tight max-w-4xl mx-auto uppercase tracking-wide">
                        Pare de perder clientes por <span className="text-brand-gold italic">demora no atendimento.</span>
                    </h2>
                    <p className="text-[13px] text-brand-muted mb-12 max-w-xl mx-auto uppercase tracking-[3px] leading-relaxed">
                        Automatize seu WhatsApp hoje mesmo e leve seu negócio para o próximo nível.
                    </p>
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/5516997609082"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-brand-gold text-brand-deep font-bold rounded-[2px] text-[13px] uppercase tracking-[3px] shadow-2xl shadow-black/40"
                    >
                        Fale com a PrimeFlow
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden font-sans">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-brand-gold focus:text-brand-deep focus:font-bold focus:uppercase focus:tracking-widest"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Features />
        <Services />
        <HowItWorks />
        <Benefits />
        <Stats />
        <ForWho />
        <Differentials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
