
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const phoneNumber = "917295074340";
  const message = encodeURIComponent("Hi Anish, I saw your portfolio and would like to discuss a project!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const telUrl = `tel:+${phoneNumber}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <footer id="contact" className="relative py-32 px-6 overflow-hidden scroll-mt-20">
      {/* Background radial lines effect */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-zinc-200"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-zinc-200"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-zinc-200"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-zinc-900 dark:text-zinc-100">
            Have an idea? <br />
            <span className="italic font-light">Let's build it together.</span>
          </h2>
          <p className="mt-8 text-gray-400 text-sm tracking-wide max-w-lg mx-auto leading-relaxed">
            I am currently available for freelance projects and open to full-time opportunities.
          </p>
        </motion.div>

        {/* Large Get In Touch Button - Links to WhatsApp */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-40 h-40 md:w-48 md:h-48 bg-[#1a1c23] dark:bg-white rounded-full flex flex-col items-center justify-center text-white dark:text-black group shadow-2xl mx-auto mb-24 transition-shadow hover:shadow-orange-200/20"
        >
          <span className="text-xs italic font-serif mb-1 group-hover:opacity-70 transition-opacity">Get in Touch</span>
          <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <ContactCard 
            icon={<Mail size={20} className="text-zinc-600" />}
            label="DROP ME AN EMAIL"
            value="info.anishkrlpu@gmail.com"
            onAction={() => copyToClipboard('info.anishkrlpu@gmail.com')}
          />
          <ContactCard 
            icon={<Phone size={20} className="text-zinc-600" />}
            label="CALL OR WHATSAPP"
            value="+91 729 507 4340"
            href={telUrl}
            subLabel="MON - FRI (CLICK TO CALL)"
          />
        </div>

        <div className="mt-24 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">© 2025 ANISH KUMAR</span>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            <a href="https://github.com/Anishkr0" target="_blank" rel="noopener" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/anish-kumar-63506326b/" target="_blank" rel="noopener" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactCard = ({ icon, label, value, onAction, subLabel, href }: { icon: React.ReactNode, label: string, value: string, onAction?: () => void, subLabel?: string, href?: string }) => {
  const CardContent = (
    <div className={`bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-100 dark:border-zinc-800 rounded-2xl p-8 text-center group transition-all duration-500 shadow-sm hover:shadow-md h-full ${href ? 'hover:bg-zinc-50 dark:hover:bg-zinc-800/60' : 'hover:bg-white dark:hover:bg-zinc-900'}`}>
      <div className="flex justify-center mb-6">{icon}</div>
      <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-3 block">{label}</span>
      <p className="font-serif text-lg text-zinc-800 dark:text-zinc-200 mb-4">{value}</p>
      {onAction ? (
        <button 
          onClick={(e) => { e.preventDefault(); onAction(); }}
          className="flex items-center gap-2 mx-auto text-[9px] uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <Copy size={12} /> COPY
        </button>
      ) : (
        <span className="text-[9px] uppercase tracking-widest text-gray-300 dark:text-zinc-600 font-bold">{subLabel}</span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default Footer;
