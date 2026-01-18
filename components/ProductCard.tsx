import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        slug: string;
        price: number;
        category: string;
        image: string;
        description: string;
        badge?: string;
    };
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-all hover:bg-white/[0.08] hover:border-white/20">
            <Link href={`/producto/${product.slug}`} className="relative aspect-[4/5] overflow-hidden">
                {product.image && (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}
                {product.badge && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                        {product.badge}
                    </div>
                )}
            </Link>
            <div className="flex flex-1 flex-col p-6 text-left">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        {product.category}
                    </span>
                    <span className="text-lg font-black text-white">{product.price.toFixed(2)}€</span>
                </div>
                <Link href={`/producto/${product.slug}`} className="mt-1 block">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                </Link>
                <p className="mt-2 line-clamp-2 text-xs text-gray-500 flex-grow">
                    {product.description}
                </p>
            </div>
        </div>
    );
}
