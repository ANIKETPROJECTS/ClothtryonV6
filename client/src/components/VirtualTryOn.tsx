// Simplified Virtual Try-On without AI dependencies
import { useState } from "react";
import { Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VirtualTryOnProps {
  onClose: () => void;
  productImage: string;
}

export function VirtualTryOn({ onClose }: VirtualTryOnProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-white font-mono text-xs uppercase tracking-widest">Live Feed</span>
        </div>
        <button onClick={onClose} className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-all">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="relative w-full h-full flex items-center justify-center bg-neutral-900 overflow-hidden">
        <div className="text-center space-y-4 max-w-md px-6 text-white">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-xl font-display font-bold">Camera Try-On</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Experience ONYU in real-time. Use your device camera to virtually try on our premium collection.
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold h-12 rounded-full">
            Open Camera
          </Button>
        </div>
      </div>
    </div>
  );
}
