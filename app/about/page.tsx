export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic mb-12">
                    Minimalism <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">Reimagined.</span>
                </h1>

                <div className="space-y-12 text-left mt-24">
                    <section className="glass p-12 rounded-[40px] border border-white/5">
                        <h2 className="text-2xl font-black text-white uppercase italic mb-6 tracking-tight">The Philosophy</h2>
                        <p className="text-gray-400 text-lg leading-relaxed italic">
                            At LAJOIA, we believe that your most essential device deserves more than just "protection." It deserves an extension of your identity. We combine military-grade engineering with a high-fashion aesthetic to create cases that feel as good as they look.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="glass p-10 rounded-[40px] border border-white/5">
                            <h2 className="text-xl font-black text-white uppercase italic mb-4 tracking-tight">Craftsmanship</h2>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Every LAJOIA case undergoes 48 hours of stress testing and is hand-inspected for microscopic defects. We use premium polymers and aerospace-grade alloys.
                            </p>
                        </section>
                        <section className="glass p-10 rounded-[40px] border border-white/5">
                            <h2 className="text-xl font-black text-white uppercase italic mb-4 tracking-tight">Sustainability</h2>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our commitment to the future means using 100% recycled packaging and carbon-neutral shipping methods. We design for longevity, not disposability.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
