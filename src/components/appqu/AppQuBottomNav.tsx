import React from 'react';
import {
  Users,
  Store,
  MapPin,
  ShieldAlert,
  MessageSquare,
  ShoppingBag,
} from 'lucide-react';

interface AppQuBottomNavProps {
  activeModule:
    | 'paguyuban'
    | 'warga'
    | 'usaha'
    | 'area'
    | 'siaga'
    | 'arsitektur'
    | 'chat'
    | 'setting'
    | 'muamalah';
  onSelectModule: (
    module:
      | 'paguyuban'
      | 'warga'
      | 'usaha'
      | 'area'
      | 'siaga'
      | 'arsitektur'
      | 'chat'
      | 'setting'
      | 'muamalah'
  ) => void;
  onOpenHierarchy?: () => void;
  onOpenRoleModal?: () => void;
  onOpenSettingsDrawer?: () => void;
  unreadChatCount?: number;
  pendingApprovalsCount?: number;
  activeEmergencyCount?: number;
  witnessCount?: number;
}

export const AppQuBottomNav: React.FC<AppQuBottomNavProps> = ({
  activeModule,
  onSelectModule,
  unreadChatCount = 0,
  pendingApprovalsCount = 0,
  activeEmergencyCount = 0,
}) => {
  const triggerHaptic = () => {
    if (typeof window !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(15);
      } catch {}
    }
  };

  return (
    <nav
      className="w-full bg-stone-900/98 backdrop-blur-md border-t border-stone-800/90 text-stone-400 px-1 pt-1 flex items-center justify-between shrink-0 z-30 shadow-2xl select-none sticky bottom-0 transition-all"
      style={{
        paddingBottom: 'calc(max(env(safe-area-inset-bottom, 0px), 0.5rem) + 0.25rem)',
        minHeight: 'calc(3.5rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      {/* 1. PAGUYUBAN (Kas & Agenda Sosial RT) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('paguyuban');
        }}
        title="PaguyubanQu (Sosial & Kas RT)"
        aria-label="Paguyuban"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-0.5 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'paguyuban'
            ? 'text-emerald-400 font-bold bg-stone-800/90 shadow-sm'
            : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/30'
        }`}
      >
        {activeModule === 'paguyuban' && (
          <span className="absolute -top-1 w-5 h-0.5 bg-emerald-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <Users
            className={`w-5 h-5 transition-transform duration-150 ${
              activeModule === 'paguyuban' ? 'scale-105 text-emerald-400' : ''
            }`}
          />
          {pendingApprovalsCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-amber-500 text-stone-950 text-[8.5px] font-black min-w-3.5 h-3.5 px-1 rounded-full flex items-center justify-center ring-2 ring-stone-900 shadow-xs">
              {pendingApprovalsCount}
            </span>
          )}
        </div>
        <span
          className={`text-[8px] xs:text-[8.5px] font-bold tracking-tight px-1.5 py-0.5 rounded-full mt-0.5 leading-none transition-all truncate max-w-full ${
            activeModule === 'paguyuban'
              ? 'text-emerald-300 bg-emerald-950 border border-emerald-500/40 shadow-2xs font-extrabold'
              : 'text-stone-400 bg-stone-800/40 border border-stone-800/60'
          }`}
        >
          Paguyuban
        </span>
      </button>

      {/* 2. MUAMALAHQU (Pasar Warga & Titip Jual Konsinyasi - Navbar Bawah) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('muamalah');
        }}
        title="MuamalahQu (Pasar Warga & Titip Jual Konsinyasi)"
        aria-label="MuamalahQu"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-0.5 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'muamalah'
            ? 'text-emerald-400 font-bold bg-stone-800/90 shadow-sm'
            : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/30'
        }`}
      >
        {activeModule === 'muamalah' && (
          <span className="absolute -top-1 w-5 h-0.5 bg-emerald-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <ShoppingBag
            className={`w-5 h-5 transition-transform duration-150 ${
              activeModule === 'muamalah' ? 'scale-105 text-emerald-400' : ''
            }`}
          />
          <span className="absolute -bottom-0.5 -right-1 text-[7.5px] bg-emerald-600 text-white font-black px-1 rounded-full leading-none">
            C2C
          </span>
        </div>
        <span
          className={`text-[8px] xs:text-[8.5px] font-bold tracking-tight px-1.5 py-0.5 rounded-full mt-0.5 leading-none transition-all truncate max-w-full ${
            activeModule === 'muamalah'
              ? 'text-emerald-300 bg-emerald-950 border border-emerald-500/40 shadow-2xs font-extrabold'
              : 'text-stone-400 bg-stone-800/40 border border-stone-800/60'
          }`}
        >
          Muamalah
        </span>
      </button>

      {/* 3. USAHAQU (Lapak UMKM & POS) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('usaha');
        }}
        title="UsahaQu (Lapak UMKM & POS Kasir)"
        aria-label="Usaha"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-0.5 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'usaha'
            ? 'text-amber-400 font-bold bg-stone-800/90 shadow-sm'
            : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/30'
        }`}
      >
        {activeModule === 'usaha' && (
          <span className="absolute -top-1 w-5 h-0.5 bg-amber-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <Store
            className={`w-5 h-5 transition-transform duration-150 ${
              activeModule === 'usaha' ? 'scale-105 text-amber-400' : ''
            }`}
          />
        </div>
        <span
          className={`text-[8px] xs:text-[8.5px] font-bold tracking-tight px-1.5 py-0.5 rounded-full mt-0.5 leading-none transition-all truncate max-w-full ${
            activeModule === 'usaha'
              ? 'text-amber-300 bg-amber-950 border border-amber-500/40 shadow-2xs font-extrabold'
              : 'text-stone-400 bg-stone-800/40 border border-stone-800/60'
          }`}
        >
          UsahaQu
        </span>
      </button>

      {/* 4. AREAQU (Peta & Zonasi GPS) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('area');
        }}
        title="AreaQu (Peta Wilayah & GPS)"
        aria-label="Area"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-0.5 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'area'
            ? 'text-teal-400 font-bold bg-stone-800/90 shadow-sm'
            : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/30'
        }`}
      >
        {activeModule === 'area' && (
          <span className="absolute -top-1 w-5 h-0.5 bg-teal-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <MapPin
            className={`w-5 h-5 transition-transform duration-150 ${
              activeModule === 'area' ? 'scale-105 text-teal-400' : ''
            }`}
          />
        </div>
        <span
          className={`text-[8px] xs:text-[8.5px] font-bold tracking-tight px-1.5 py-0.5 rounded-full mt-0.5 leading-none transition-all truncate max-w-full ${
            activeModule === 'area'
              ? 'text-teal-300 bg-teal-950 border border-teal-500/40 shadow-2xs font-extrabold'
              : 'text-stone-400 bg-stone-800/40 border border-stone-800/60'
          }`}
        >
          AreaQu
        </span>
      </button>

      {/* 5. SIAGAQU (Tombol Darurat SOS & Keamanan) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('siaga');
        }}
        title="SiagaQu (Tombol Darurat SOS & Ronda)"
        aria-label="Siaga"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-0.5 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'siaga'
            ? 'text-red-400 font-bold bg-stone-800/90 shadow-sm'
            : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/30'
        }`}
      >
        {activeModule === 'siaga' && (
          <span className="absolute -top-1 w-5 h-0.5 bg-red-500 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <ShieldAlert
            className={`w-5 h-5 transition-transform duration-150 ${
              activeModule === 'siaga' || activeEmergencyCount > 0
                ? 'scale-105 text-red-500 animate-pulse'
                : 'text-red-400'
            }`}
          />
          {activeEmergencyCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[8.5px] font-black min-w-3.5 h-3.5 px-1 rounded-full flex items-center justify-center ring-2 ring-stone-900 animate-bounce shadow-xs">
              {activeEmergencyCount}
            </span>
          )}
        </div>
        <span
          className={`text-[8px] xs:text-[8.5px] font-bold tracking-tight px-1.5 py-0.5 rounded-full mt-0.5 leading-none transition-all truncate max-w-full ${
            activeModule === 'siaga' || activeEmergencyCount > 0
              ? 'text-red-300 bg-red-950 border border-red-500/50 shadow-2xs font-black animate-pulse'
              : 'text-stone-400 bg-stone-800/40 border border-stone-800/60'
          }`}
        >
          SiagaQu
        </span>
      </button>

      {/* 6. CHATQU (Percakapan Warga & Pesan) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('chat');
        }}
        title="ChatQu (Percakapan & Notifikasi Warga)"
        aria-label="Chat"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-0.5 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'chat'
            ? 'text-emerald-400 font-bold bg-stone-800/90 shadow-sm'
            : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/30'
        }`}
      >
        {activeModule === 'chat' && (
          <span className="absolute -top-1 w-5 h-0.5 bg-emerald-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <MessageSquare
            className={`w-5 h-5 transition-transform duration-150 ${
              activeModule === 'chat' ? 'scale-105 text-emerald-400' : ''
            }`}
          />
          {unreadChatCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-emerald-500 text-stone-950 text-[8.5px] font-black min-w-3.5 h-3.5 px-1 rounded-full flex items-center justify-center ring-2 ring-stone-900 shadow-xs">
              {unreadChatCount}
            </span>
          )}
        </div>
        <span
          className={`text-[8px] xs:text-[8.5px] font-bold tracking-tight px-1.5 py-0.5 rounded-full mt-0.5 leading-none transition-all truncate max-w-full ${
            activeModule === 'chat'
              ? 'text-emerald-300 bg-emerald-950 border border-emerald-500/40 shadow-2xs font-extrabold'
              : 'text-stone-400 bg-stone-800/40 border border-stone-800/60'
          }`}
        >
          ChatQu
        </span>
      </button>
    </nav>
  );
};
