import { Suspense } from "react";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";
import { SlidersHorizontal } from "lucide-react";

export default function FundasPage({
    searchParams,
}: {
    searchParams: { category?: string };
}) {
    const category = searchParams.category;

    const filteredProducts = category && category !== "all"
        ? products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
        : products;

    return (
        <div className="container mx-auto px-4 py-16 md:px-12">
            <div className="flex flex-col gap-12 md:flex-row">
                {/* Sidebar / Filters */}
                <aside className="w-full md:w-64 shrink-0">
                    <div className="sticky top-28 glass p-8 rounded-[32px]">
                        <div className="flex items-center gap-2 mb-8 md:mb-10">
                            <SlidersHorizontal className="h-4 w-4 text-white" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Filters</span>
                        </div>
                        <Suspense fallback={<div className="text-[10px] text-gray-500 uppercase tracking-widest">Loading...</div>}>
                            <Filters />
                        </Suspense>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="flex-1">
                    <div className="flex items-baseline justify-between mb-12 border-b border-white/5 pb-6">
                        <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">
                            {category && category !== "all" ? category : "All Products"}
                        </h1>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                            {filteredProducts.length} items
                        </span>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 glass rounded-[40px]">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">No products found in this category.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
