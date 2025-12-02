import { Sidebar } from './Sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, CalendarDays, Fan } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Leads & Clientes', path: '/leads' },
    { icon: CalendarDays, label: 'Agendamentos', path: '/schedule' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 text-white sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <Fan className="h-6 w-6 text-blue-400" />
          <span className="font-bold">ClimaTech</span>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-slate-900 text-white border-slate-800 p-0">
            <div className="p-6 flex items-center gap-2 border-b border-slate-800">
              <Fan className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">ClimaTech</span>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
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
          </SheetContent>
        </Sheet>
      </div>

      <main className="md:ml-64 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
