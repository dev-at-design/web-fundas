import { notFound } from "next/navigation";
import Image from "next/image";
import products from "@/data/products.json";
import Button from "@/components/Button";
import { ShieldCheck, Truck, ArrowLeft, Star, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-16 md:px-12">
            <Link href="/fundas" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white mb-12 transition-all">
                <ArrowLeft className="h-4 w-4" /> Back to Catalog
            </Link>

            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                {/* Product Gallery */}
                <div className="space-y-6">
                    <div className="aspect-square rounded-[40px] glass overflow-hidden relative group">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square rounded-2xl glass cursor-pointer border-white/5 hover:border-white transition-all opacity-50 hover:opacity-100 overflow-hidden relative">
                                <Image src={product.image} alt={product.name} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col pt-4 text-left">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-white/10 px-3 py-1 rounded-full">
                            {product.category}
                        </span>
                        {product.badge && (
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-white/10 px-3 py-1 rounded-full">
                                {product.badge}
                            </span>
                        )}
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight uppercase italic">
                        {product.name}
                    </h1>

                    <div className="mt-6 flex items-center gap-4">
                        <div className="flex items-center text-white">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">12 Reviews</span>
                    </div>

                    <p className="mt-10 text-5xl font-black text-white">{product.price.toFixed(2)}€</p>

                    <div className="mt-12 space-y-6 border-b border-white/10 pb-12">
                        <div>
                            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Description</h3>
                            <p className="text-gray-400 leading-relaxed italic text-lg tracking-tight">
                                "{product.description}"
                            </p>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium">
                            Crafted from high-grade materials, {product.name} offers unparalleled protection without compromising on style. The precision-engineered design ensures a perfect fit for your device.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col gap-4">
                        <Button
                            className="w-full py-6 text-xs gap-3"
                            variant="primary"
                            onClick={() => alert("Función 'Añadir al carrito' no implementada en esta demostración.")}
                        >
                            <ShoppingCart className="h-5 w-5" /> Add to Cart
                        </Button>
                        <Button
                            className="w-full py-4 text-xs"
                            variant="outline"
                            onClick={() => alert("Función 'Comprar ahora' no implementada en esta demostración.")}
                        >
                            Buy Now
                        </Button>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-12 sm:grid-cols-2">
                        <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/[0.02] border border-white/5">
                            <Truck className="h-5 w-5 text-white mt-1" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white">Express Delivery</p>
                                <p className="text-[10px] text-gray-500 mt-1">24/48h Worldwide Shipping</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/[0.02] border border-white/5">
                            <ShieldCheck className="h-5 w-5 text-white mt-1" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white">Lifetime Warranty</p>
                                <p className="text-[10px] text-gray-500 mt-1">Guaranteed against any defects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
