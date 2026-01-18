import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
    {
        title: "Neon Series",
        description: "Vibrant accents for the bold minimalist.",
        image: "/lajoia_hero_case_1768754145275.png",
        slug: "neon"
    },
    {
        title: "Titanium Edition",
        description: "Indestructible protection with a frosted finish.",
        image: "/lajoia_hero_case_1768754145275.png",
        slug: "titanium"
    },
    {
        title: "Glass Collection",
        description: "Ultra-slim transparency that defies logic.",
        image: "/lajoia_hero_case_1768754145275.png",
        slug: "glass"
    }
];

export default function CollectionsPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-12">
            <h1 className="text-6xl font-black tracking-tighter text-white uppercase italic mb-16">
                Our Collections
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collections.map((collection) => (
                    <Link
                        key={collection.slug}
                        href="/fundas"
                        className="group relative aspect-[4/5] overflow-hidden rounded-[40px] glass border border-white/5 transition-all hover:border-white/50"
                    >
                        <Image
                            src={collection.image}
                            alt={collection.title}
                            fill
                            className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                        <div className="absolute bottom-10 left-10 right-10 text-left">
                            <h2 className="text-3xl font-black text-white uppercase italic mb-2 tracking-tighter">
                                {collection.title}
                            </h2>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {collection.description}
                            </p>
                            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-white/80 transition-colors">
                                Explore <ArrowRight className="h-4 w-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
