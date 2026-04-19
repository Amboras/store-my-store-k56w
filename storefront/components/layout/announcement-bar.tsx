'use client'

import { useState } from 'react'
import { X, Truck, Zap, Sparkles } from 'lucide-react'

const MARQUEE_ITEMS = [
  { icon: Truck, text: 'FREE US SHIPPING OVER $75' },
  { icon: Zap, text: 'NEW DROP — COSMIC STATIC V2 LIVE NOW' },
  { icon: Sparkles, text: 'BUY 2 TEES, GET 1 FREE — AUTO-APPLIED' },
  { icon: Truck, text: 'PRINTED IN LA — SHIPPED WORLDWIDE' },
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  // Duplicate the list so the CSS marquee animation can loop seamlessly
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="relative bg-foreground text-primary-foreground overflow-hidden">
      <div className="flex items-center py-2.5 text-[11px] tracking-[0.2em] font-semibold">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <span key={idx} className="flex items-center px-6 gap-2">
                <Icon className="h-3 w-3 text-accent" strokeWidth={2.5} />
                {item.text}
                <span className="text-accent ml-6">◆</span>
              </span>
            )
          })}
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity bg-foreground"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
