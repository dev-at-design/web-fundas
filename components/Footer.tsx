import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-black py-20">
            <div className="container mx-auto px-4 lg:px-12">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-white uppercase italic">
                            LAJOIA
                        </Link>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 leading-loose">
                            Elevating daily essentials through minimalist design and premium protection.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white">Shop</h4>
                        <ul className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            <li><Link href="/fundas" className="hover:text-white transition-colors">Catalog</Link></li>
                            <li><Link href="/collections" className="hover:text-white transition-colors">Collections</Link></li>
                            <li><Link href="/novedades" className="hover:text-white transition-colors">New Arrivals</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white">Support</h4>
                        <ul className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            <li><Link href="/contacto" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/envios" className="hover:text-white transition-colors">Shipping</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white">Connect</h4>
                        <ul className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors text-glow">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-glow">TikTok</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                    <span>© {new Date().getFullYear()} LAJOIA. All rights reserved.</span>
                    <div className="flex gap-8">
                        <Link href="/privacidad" className="hover:text-gray-400">Privacy</Link>
                        <Link href="/terminos" className="hover:text-gray-400">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
