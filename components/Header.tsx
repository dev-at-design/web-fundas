"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-12">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white uppercase italic">
            LAJOIA
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/fundas" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all hover:text-glow">Shop</Link>
            <Link href="/collections" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all hover:text-glow">Collections</Link>
            <Link href="/about" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all hover:text-glow">About</Link>
            <Link href="/contacto" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all hover:text-glow">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2.5 text-gray-400 hover:text-white transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/carrito" className="flex items-center gap-2 px-4 py-2 bg-white rounded-full hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all group">
            <ShoppingCart className="h-4 w-4 text-black" />
            <span className="text-xs font-bold text-black uppercase tracking-tight">Cart</span>
            <span className="ml-1 h-4 w-4 flex items-center justify-center rounded-full bg-black text-[10px] font-black text-white">0</span>
          </Link>
          <button className="p-2.5 md:hidden text-gray-400">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
