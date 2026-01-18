import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, ShieldCheck, Truck, Zap, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lajoia_hero_case_1768754145275.png"
            alt="LAJOIA Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-12 text-left">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-black tracking-tighter sm:text-8xl leading-[0.9] text-white uppercase italic">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">Essentials.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-400 max-w-lg leading-relaxed">
              Premium protective cases crafted for the modern aesthetic. Experience the fusion of durability and luxury design.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <Button variant="primary">Shop Now</Button>
              <Button variant="outline">View Collection</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Bar */}
      <section className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-white/5">
          <div className="flex items-center gap-3 text-gray-500 group hover:text-white transition-colors">
            <ShieldCheck className="h-4 w-4 text-brand" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Military Grade Protection</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 group hover:text-white transition-colors">
            <Zap className="h-4 w-4 text-brand" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Sustainable Materials</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 group hover:text-white transition-colors">
            <Cpu className="h-4 w-4 text-brand" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Magsafe Compatible</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 group hover:text-white transition-colors">
            <Truck className="h-4 w-4 text-brand" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Free Worldwide Shipping</span>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="container mx-auto px-4 md:px-12">
        <div className="flex items-end justify-between mb-12">
          <div className="text-left">
            <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">Featured Collection</h2>
            <p className="mt-2 text-gray-500 font-medium tracking-tight">Curated designs for the season.</p>
          </div>
          <Link href="/fundas" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
            View all products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="container mx-auto px-4 md:px-12">
        <div className="relative overflow-hidden rounded-[40px] bg-white/[0.02] border border-white/5 py-24 px-8 text-center">
          <div className="absolute inset-0 bg-brand/5 blur-3xl rounded-full translate-y-1/2" />
          <h2 className="relative text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white uppercase italic">
            Designed for the Future
          </h2>
          <p className="relative text-gray-400 max-w-2xl mx-auto text-lg mb-12">
            Join over 50,000 minimalists who have upgraded their daily carry. Sign up for early access to new drops.
          </p>
          <div className="relative max-w-md mx-auto flex gap-2 p-2 glass rounded-full ring-1 ring-white/10">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-transparent border-none focus:ring-0 text-xs px-6 text-white placeholder:text-gray-600 outline-none"
            />
            <Button variant="primary" className="py-2.5 px-6">Join</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
