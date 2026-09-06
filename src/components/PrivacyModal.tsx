import { X, Shield } from 'lucide-react';
import { CONTACT_INFO } from '../data/altaiData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#141b16] border border-[#2d3e31] rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl animate-in zoom-in-95">
        
        {/* Header */}
        <div className="p-5 border-b border-[#243327] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#d3a168]" />
            <h3 className="text-base font-bold text-white font-heading">
              Политика конфиденциальности (152-ФЗ РФ)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#202c23] text-[#a4b5a8] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#b5c5ba] leading-relaxed">
          <p>
            Настоящая Политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и действует в отношении всех данных, которые оператор ({CONTACT_INFO.legal.ip}, ОГРНИП {CONTACT_INFO.legal.ogrnip}) может получить о пользователе во время использования сайта артели <strong className="text-white">«СтройАлтай»</strong>.
          </p>

          <h4 className="text-sm font-bold text-white font-heading pt-2">
            1. Цели сбора персональной информации
          </h4>
          <p>
            Оператор собирает и хранит только те персональные данные (имя, номер телефона, адрес/локация предполагаемого строительства, пожелания по смете), которые необходимы для:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Связи с клиентом для консультации, расчета сметы и согласования выезда замерщика;</li>
            <li>Подготовки коммерческого предложения и заключения официального договора подряда;</li>
            <li>Отправки сообщений через мессенджеры WhatsApp и MAX по запросу пользователя.</li>
          </ul>

          <h4 className="text-sm font-bold text-white font-heading pt-2">
            2. Условия обработки и передача третьим лицам
          </h4>
          <p>
            В отношении персональной информации пользователя сохраняется ее полная конфиденциальность. Оператор ни при каких условиях не передает персональные данные пользователя третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства Российской Федерации.
          </p>

          <h4 className="text-sm font-bold text-white font-heading pt-2">
            3. Сроки хранения и отзыв согласия
          </h4>
          <p>
            Обработка персональных данных осуществляется без ограничения срока, любым законным способом. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив оператору уведомление по телефону <strong>{CONTACT_INFO.phoneDisplay}</strong> или в мессенджере.
          </p>

          <div className="pt-3 border-t border-[#243327] text-xs text-[#899c8e]">
            Реквизиты оператора: {CONTACT_INFO.legal.ip} · {CONTACT_INFO.legal.inn} · {CONTACT_INFO.legal.ogrnip}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#243327] bg-[#101612] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#b68249] text-[#121614] font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-[#cb9559] transition-colors"
          >
            Понятно, закрыть
          </button>
        </div>

      </div>
    </div>
  );
}
