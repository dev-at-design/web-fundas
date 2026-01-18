import Link from "next/link";
import Button from "@/components/Button";
import { ArrowLeft, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
    // Static placeholder for an empty cart
    return (
        <div className="container mx-auto px-4 py-16 md:px-8">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Tu Carrito</h1>

            {/* Placeholder for Empty State */}
            <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-3xl bg-gray-50">
                <div className="rounded-full bg-blue-100 p-6 text-blue-600 mb-6">
                    <ShoppingBag className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Tu carrito está vacío</h2>
                <p className="mt-2 text-gray-500 max-w-xs">
                    Parece que aún no has añadido ninguna funda a tu colección.
                </p>
                <Link href="/fundas" className="mt-8">
                    <Button variant="primary" className="px-8 py-4">
                        Empezar a comprar
                    </Button>
                </Link>
            </div>

            {/* For demonstration, a "pseudo-filled" state could be here but we'll stick to a clean placeholder */}
        </div>
    );
}
