import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import Phone360Animation from "@/components/Phone360Animation";
import { ArrowRight, ShieldCheck, Truck, Zap, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Full-screen background animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Phone360Animation speed={30} />
        </div>

        {/* Subtle overlay to enhance text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black opacity-95 backdrop-grayscale" />

        <div className="container relative z-20 mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Premium Aesthetics</span>
            </div>

            <h1 className="text-8xl md:text-[12rem] lg:text-[15rem] font-black tracking-tighter leading-none text-white uppercase italic select-none mix-blend-difference drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
              LAJOIA
            </h1>

            <div className="max-w-2xl mx-auto mt-6">
              <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-[0.5em] leading-relaxed mb-12">
                Elevate Your Essentials
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/fundas">
                  <Button variant="primary" className="min-w-[200px] py-4">Explore Catalog</Button>
                </Link>
                <Link href="/collections" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors">
                  View Collections <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 animate-bounce">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Benefit Bar */}
      <section className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-white/5">
          <div className="flex items-center gap-3 text-gray-500 group hover:text-white transition-colors">
            <ShieldCheck className="h-4 w-4 text-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Military Grade Protection</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 group hover:text-white transition-colors">
            <Zap className="h-4 w-4 text-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Sustainable Materials</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 group hover:text-white transition-colors">
            <Cpu className="h-4 w-4 text-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Magsafe Compatible</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 group hover:text-white transition-colors">
            <Truck className="h-4 w-4 text-white" />
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
        <div className="relative overflow-hidden rounded-[40px] bg-white/[0.02] border border-white/5 py-32 px-8 text-center">
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full translate-y-1/2" />
          <h2 className="relative text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white uppercase italic">
            Designed for <br /> the Future
          </h2>
          <p className="relative text-gray-400 max-w-2xl mx-auto text-lg mb-16 uppercase tracking-widest text-[10px] font-black">
            Join over 50,000 minimalists who have upgraded their daily carry.
          </p>
          <div className="relative max-w-md mx-auto flex gap-2 p-2 glass rounded-full ring-1 ring-white/10">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-transparent border-none focus:ring-0 text-[10px] font-bold uppercase tracking-widest px-6 text-white placeholder:text-gray-600 outline-none"
            />
            <Button variant="primary" className="py-2.5 px-8">Join</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
