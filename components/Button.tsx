import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-brand text-white hover:bg-opacity-90 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]",
        secondary: "bg-white text-black hover:bg-gray-100",
        outline: "border border-white/20 bg-transparent text-white hover:bg-white hover:text-black hover:border-white",
        ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
    };

    const variantStyles = variants[variant] || variants.primary;

    return (
        <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
            {children}
        </button>
    );
}
