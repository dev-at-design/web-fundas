import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "@/components/Button";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <div className="text-left">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic mb-8">
                            Get In <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">Touch.</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-12 max-w-md italic">
                            Have a question about our collections or need support with your order? Our artisans are here to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-white border border-white/10 group-hover:border-white/50 transition-all">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Us</p>
                                    <p className="text-white font-bold">support@lajoia.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-white border border-white/10 group-hover:border-white/50 transition-all">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Call Us</p>
                                    <p className="text-white font-bold">+1 (555) 000-LAJOIA</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-white border border-white/10 group-hover:border-white/50 transition-all">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Visit Studio</p>
                                    <p className="text-white font-bold">123 Minimalist Way, New York, NY</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass p-10 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -translate-y-1/2 opacity-30" />

                        <form className="relative space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-white/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-white/50 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help?"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-white/50 transition-all resize-none"
                                />
                            </div>
                            <Button variant="primary" className="w-full py-5 gap-3" type="button">
                                <Send className="h-4 w-4" /> Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
