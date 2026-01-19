"use client";

import Button from "./Button";
import { Lock } from "lucide-react";

export default function CheckoutButton() {
    return (
        <Button 
            variant="primary" 
            className="w-full h-14 gap-3 text-base" 
            onClick={() => alert("Pago no procesado. Esta es una demostración.")}
        >
            <Lock className="h-4 w-4" /> Secure Payment
        </Button>
    );
}
