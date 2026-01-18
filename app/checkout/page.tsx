import Button from "@/components/Button";
import { CreditCard, Truck, Lock, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-12">
            <div className="flex items-center justify-between mb-16">
                <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">Checkout</h1>
                <Link href="/carrito" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Return to Cart
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                {/* Checkout Form */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-black">1</div>
                            <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic">Shipping Information</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <input type="text" placeholder="First Name" className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-white/50 transition-all" />
                            <input type="text" placeholder="Last Name" className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand/50 transition-all" />
                            <input type="email" placeholder="Email Address" className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand/50 transition-all md:col-span-2" />
                            <input type="text" placeholder="Shipping Address" className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand/50 transition-all md:col-span-2" />
                            <input type="text" placeholder="City" className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand/50 transition-all" />
                            <input type="text" placeholder="Postal Code" className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand/50 transition-all" />
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-black">2</div>
                            <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic">Payment Method</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="flex items-center justify-between rounded-3xl border-2 border-white bg-white/5 p-6 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <CreditCard className="h-5 w-5 text-white" />
                                    <span className="font-bold text-white uppercase tracking-widest text-[10px]">Stripe / Card</span>
                                </div>
                                <div className="h-4 w-4 rounded-full border-4 border-white bg-black" />
                            </label>
                            <label className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-6 cursor-pointer hover:border-white/20 transition-all">
                                <div className="flex items-center gap-4">
                                    <span className="font-black text-white italic tracking-tighter text-lg underline underline-offset-4">PayPal</span>
                                </div>
                                <div className="h-4 w-4 rounded-full border border-white/20" />
                            </label>
                        </div>
                    </section>
                </div>

                {/* Order Summary */}
                <div className="h-fit space-y-8">
                    <div className="glass p-8 rounded-[40px] border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-brand/5 blur-3xl rounded-full translate-y-1/2 opacity-30" />

                        <h2 className="relative text-xl font-black text-white uppercase italic mb-8 tracking-tighter">Order Summary</h2>
                        <div className="relative space-y-4 border-b border-white/5 pb-6">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                <span className="text-gray-500">Subtotal</span>
                                <span className="text-white">0.00€</span>
                            </div>
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                <span className="text-gray-500">Shipping</span>
                                <span className="text-white">Free</span>
                            </div>
                        </div>
                        <div className="relative flex justify-between py-8 text-3xl font-black text-white italic tracking-tighter uppercase">
                            <span>Total</span>
                            <span>0.00€</span>
                        </div>
                        <Button variant="primary" className="w-full py-5 gap-3" onClick={() => alert("Pago no procesado. Esta es una demostración.")}>
                            <Lock className="h-4 w-4" /> Secure Payment
                        </Button>
                        <p className="relative text-[8px] text-gray-500 mt-6 text-center flex items-center justify-center gap-2 uppercase tracking-[0.2em] font-black">
                            <ShieldCheck className="h-3 w-3 text-white" /> SSL Encrypted Transaction
                        </p>
                    </div>

                    <div className="glass p-6 rounded-3xl border border-white/5 flex items-center gap-4 bg-white/5">
                        <Truck className="h-5 w-5 text-white" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-white leading-tight">
                            Free Express Shipping <br />
                            <span className="text-gray-500 font-medium">Standard on all orders.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
