import React from 'react';
import { UtensilsCrossed, Boxes, TrendingUp, FileText, Settings } from 'lucide-react';

interface BottomNavBarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  occupiedCount?: number;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onSelectTab,
  occupiedCount = 0,
}) => {
  const tabs = [
    { id: 'kasir', label: 'Kasir', icon: UtensilsCrossed, badge: occupiedCount > 0 ? occupiedCount : null },
    { id: 'bahan', label: 'Modal', icon: Boxes, badge: null },
    { id: 'omset', label: 'Omset', icon: TrendingUp, badge: null },
    { id: 'laporan', label: 'Laporan', icon: FileText, badge: null },
    { id: 'setting', label: 'Setting', icon: Settings, badge: null },
  ];

  return (
    <nav
      className="w-full bg-stone-900/98 backdrop-blur-md border-t border-stone-800 text-stone-400 px-2 pt-1 flex items-center justify-around shrink-0 z-30 shadow-lg select-none sticky bottom-0 transition-all"
      style={{
        paddingBottom: 'calc(max(env(safe-area-inset-bottom, 0px), 0.5rem) + 0.25rem)',
        minHeight: 'calc(3.5rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            title={tab.label}
            aria-label={tab.label}
            onClick={() => {
              if (navigator.vibrate) {
                try {
                  navigator.vibrate(20);
                } catch {}
              }
              onSelectTab(tab.id);
            }}
            className={`relative flex-1 flex flex-col items-center justify-center h-full py-0.5 px-0.5 rounded-xl transition-all duration-150 active:scale-95 cursor-pointer ${
              isActive
                ? 'text-amber-400 font-bold bg-stone-800/80 shadow-xs'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/30'
            }`}
          >
            {/* Active Pill Accent */}
            {isActive && (
              <span className="absolute -top-1 w-5 h-0.5 bg-amber-500 rounded-full" />
            )}

            <div className="relative flex items-center justify-center">
              <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-105 text-amber-400' : ''}`} />
              {tab.badge !== null && (
                <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[8.5px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center ring-2 ring-stone-900 animate-pulse shadow-xs">
                  {tab.badge}
                </span>
              )}
            </div>
            <span
              className={`text-[8.5px] font-bold tracking-tight px-1.5 py-0.5 rounded-full mt-0.5 leading-none transition-all truncate max-w-full ${
                isActive
                  ? 'text-amber-300 bg-amber-950 border border-amber-500/40 font-extrabold shadow-2xs'
                  : 'text-stone-400 bg-stone-800/40 border border-stone-800/60'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
