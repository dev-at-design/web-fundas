"use client";

import categories from "@/data/categories.json";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Filters() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const currentCategory = searchParams.get("category") || "all";

    const handleFilter = (slug: string) => {
        const params = new URLSearchParams(searchParams);
        if (slug === "all") {
            params.delete("category");
        } else {
            params.set("category", slug);
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="text-left">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6">Collections</h3>
                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => handleFilter("all")}
                        className={`text-left text-[10px] uppercase font-bold tracking-widest transition-all hover:text-white ${currentCategory === "all" ? "text-brand" : "text-gray-400"}`}
                    >
                        All Items
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleFilter(cat.slug)}
                            className={`text-left text-[10px] uppercase font-bold tracking-widest transition-all hover:text-white ${currentCategory === cat.slug ? "text-brand" : "text-gray-400"}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-left">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6">Price Range</h3>
                <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 cursor-pointer group hover:text-white transition-colors">
                        <input type="checkbox" className="h-4 w-4 rounded border-white/10 bg-white/5 text-brand focus:ring-brand focus:ring-offset-0 ring-offset-background" />
                        0€ - 25€
                    </label>
                    <label className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 cursor-pointer group hover:text-white transition-colors">
                        <input type="checkbox" className="h-4 w-4 rounded border-white/10 bg-white/5 text-brand focus:ring-brand focus:ring-offset-0 ring-offset-background" />
                        25€ - 50€
                    </label>
                    <label className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 cursor-pointer group hover:text-white transition-colors">
                        <input type="checkbox" className="h-4 w-4 rounded border-white/10 bg-white/5 text-brand focus:ring-brand focus:ring-offset-0 ring-offset-background" />
                        Extra Premium
                    </label>
                </div>
            </div>
        </div>
    );
}
