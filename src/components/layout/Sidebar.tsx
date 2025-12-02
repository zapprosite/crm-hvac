import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Settings,
  Fan,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Leads & Clientes', path: '/leads' },
  { icon: CalendarDays, label: 'Agendamentos', path: '/schedule' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-slate-900 text-white fixed left-0 top-0 z-10">
      <div className="p-6 flex items-center gap-2 border-b border-slate-800">
        <Fan className="h-8 w-8 text-blue-400" />
        <div>
          <h1 className="text-xl font-bold">ClimaTech</h1>
          <p className="text-xs text-slate-400">Gestão de Climatização</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-2">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
          <Settings className="h-5 w-5" />
          <span>Configurações</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-red-900/20 rounded-lg transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
}
