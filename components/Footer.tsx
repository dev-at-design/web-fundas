import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t bg-gray-50 py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="text-lg font-bold">FUNDASWEB</Link>
                        <p className="text-sm text-gray-500">
                            Las mejores fundas para tu móvil con diseños exclusivos y protección máxima.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">Tienda</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-600">
                            <li><Link href="/fundas" className="hover:text-blue-600">Todas las fundas</Link></li>
                            <li><Link href="/ofertas" className="hover:text-blue-600">Ofertas</Link></li>
                            <li><Link href="/novedades" className="hover:text-blue-600">Novedades</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">Soporte</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-600">
                            <li><Link href="/contacto" className="hover:text-blue-600">Contacto</Link></li>
                            <li><Link href="/envios" className="hover:text-blue-600">Envíos y devoluciones</Link></li>
                            <li><Link href="/faq" className="hover:text-blue-600">Preguntas frecuentes</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">Legal</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-600">
                            <li><Link href="/privacidad" className="hover:text-blue-600">Privacidad</Link></li>
                            <li><Link href="/terminos" className="hover:text-blue-600">Términos y condiciones</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} FUNDASWEB. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
