import Button from "@/components/Button";
import { CreditCard, Truck, Lock, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Checkout Form */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight mb-6">Información de envío</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <input type="text" placeholder="Nombre" className="rounded-lg border-gray-200 p-3 text-sm focus:border-blue-600 focus:ring-0" />
                            <input type="text" placeholder="Apellidos" className="rounded-lg border-gray-200 p-3 text-sm focus:border-blue-600 focus:ring-0" />
                            <input type="email" placeholder="Email" className="rounded-lg border-gray-200 p-3 text-sm focus:border-blue-600 focus:ring-0 sm:col-span-2" />
                            <input type="text" placeholder="Dirección" className="rounded-lg border-gray-200 p-3 text-sm focus:border-blue-600 focus:ring-0 sm:col-span-2" />
                            <input type="text" placeholder="Ciudad" className="rounded-lg border-gray-200 p-3 text-sm focus:border-blue-600 focus:ring-0" />
                            <input type="text" placeholder="Código Postal" className="rounded-lg border-gray-200 p-3 text-sm focus:border-blue-600 focus:ring-0" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold tracking-tight mb-6">Método de pago</h2>
                        <div className="flex flex-col gap-3">
                            <label className="flex items-center justify-between rounded-xl border-2 border-blue-600 bg-blue-50 p-4 cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <CreditCard className="h-5 w-5 text-blue-600" />
                                    <span className="font-bold">Stripe (Tarjeta)</span>
                                </div>
                                <div className="h-4 w-4 rounded-full border-4 border-blue-600 bg-white" />
                            </label>
                            <label className="flex items-center justify-between rounded-xl border-2 border-gray-100 p-4 cursor-pointer hover:border-gray-200">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-blue-900 italic">PayPal</span>
                                </div>
                                <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="rounded-3xl bg-gray-50 p-8 h-fit">
                    <h2 className="text-xl font-bold mb-6">Resumen del pedido</h2>
                    <div className="space-y-4 border-b pb-6">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Subtotal</span>
                            <span className="font-bold">0.00€</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Envío</span>
                            <span className="text-green-600 font-bold">Gratis</span>
                        </div>
                    </div>
                    <div className="flex justify-between py-6 text-xl font-black">
                        <span>Total</span>
                        <span>0.00€</span>
                    </div>
                    <Button variant="primary" className="w-full py-4 gap-2">
                        <Lock className="h-4 w-4" /> Pagar ahora
                    </Button>
                    <p className="text-[10px] text-gray-400 mt-4 text-center flex items-center justify-center gap-1 uppercase tracking-widest font-bold">
                        <ShieldCheck className="h-3 w-3" /> Transacción segura SSL
                    </p>
                </div>
            </div>
        </div>
    );
}
