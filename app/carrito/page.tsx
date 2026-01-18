import Link from "next/link";
import Button from "@/components/Button";
import { ArrowLeft, ShoppingBag, Zap } from "lucide-react";

export default function CartPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-12">
            <div className="flex items-center justify-between mb-16">
                <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">Your Cart</h1>
                <Link href="/fundas" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Continue Shopping
                </Link>
            </div>

            <div className="relative overflow-hidden rounded-[40px] bg-white/[0.02] border border-white/5 py-32 px-8 text-center flex flex-col items-center">
                <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full translate-y-1/2 opacity-30" />

                <div className="relative mb-10 w-24 h-24 rounded-full glass border border-white/10 flex items-center justify-center text-white">
                    <ShoppingBag className="h-10 w-10" />
                </div>

                <h2 className="relative text-3xl font-black tracking-tighter text-white uppercase italic mb-4">
                    Empty Sanctuary
                </h2>
                <p className="relative text-gray-500 max-w-sm mx-auto text-lg mb-12 italic">
                    Your collection is waiting for its first masterpiece. Elevate your carry now.
                </p>

                <Link href="/fundas" className="relative">
                    <Button variant="primary" className="px-12 py-5 gap-3">
                        <Zap className="h-4 w-4" /> Browse Catalog
                    </Button>
                </Link>

                <Link href="/checkout" className="mt-8 text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-white transition-colors">
                    Go to Checkout
                </Link>
            </div>
        </div>
    );
}
