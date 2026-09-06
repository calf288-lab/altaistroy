import { Phone, MessageSquare, Send, Calculator } from 'lucide-react';
import { CONTACT_INFO } from '../data/altaiData';

export default function FloatingMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#101612]/95 backdrop-blur-md border-t border-[#29392c] p-2 sm:hidden shadow-[0_-8px_20px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        
        {/* Direct Call */}
        <a
          href={CONTACT_INFO.telLink}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#b68249] text-[#121614] font-bold text-[10px] tracking-tight active:scale-95 transition-all shadow-md"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Позвонить</span>
        </a>

        {/* MAX Messenger */}
        <a
          href={CONTACT_INFO.maxMessengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#1a2c40] border border-[#2d4b70] text-[#6cb8ff] font-semibold text-[10px] active:scale-95 transition-all"
        >
          <Send className="w-4 h-4 mb-0.5 rotate-[-20deg]" />
          <span>MAX</span>
        </a>

        {/* WhatsApp */}
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#142d1f] border border-[#255c3c] text-[#4ade80] font-semibold text-[10px] active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Calculator */}
        <a
          href="#calculator"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#1d2720] border border-[#304033] text-[#d6ded8] font-semibold text-[10px] active:scale-95 transition-all"
        >
          <Calculator className="w-4 h-4 mb-0.5 text-[#d3a168]" />
          <span>Смета</span>
        </a>

      </div>
    </div>
  );
}
