import * as React from "react"
import { cn } from "@/lib/utils"

interface WobblyCardProps extends React.HTMLAttributes<HTMLDivElement> {
    containerClassName?: string
    decoration?: "tape" | "tack" | "none"
    intensity?: "sm" | "md" | "lg"
    variant?: "default" | "postit"
}

const WobblyCard = React.forwardRef<HTMLDivElement, WobblyCardProps>(
    ({ className, containerClassName, decoration = "none", intensity = "md", variant = "default", children, ...props }, ref) => {

        // Configurable wobble intensity
        const wobbleClass = {
            sm: "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
            md: "rounded-[25px_225px_25px_255px/255px_25px_225px_25px]",
            lg: "rounded-[35px_185px_25px_195px/185px_25px_195px_35px]"
        }[intensity];

        // Variant styling
        const variantClass = variant === "postit"
            ? "bg-[#fff9c4]" // Yellow post-it color
            : "bg-card";

        return (
            <div className={cn("relative group", containerClassName)}>
                {/* Tape Decoration - semi-transparent, overlapping border */}
                {decoration === "tape" && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                        <div
                            className="w-24 h-6 bg-[#e8dfc4]/80 rotate-[-2deg] border border-[#d4c9a8]"
                            style={{
                                clipPath: "polygon(3% 0%, 97% 0%, 100% 20%, 97% 40%, 100% 60%, 97% 80%, 100% 100%, 3% 100%, 0% 80%, 3% 60%, 0% 40%, 3% 20%)"
                            }}
                        />
                    </div>
                )}

                {/* Tack Decoration - overlapping card border */}
                {decoration === "tack" && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-5 h-5 rounded-full bg-accent border-2 border-foreground shadow-md relative">
                            <div className="absolute top-1 left-1.5 w-1.5 h-1.5 bg-white/40 rounded-full" />
                        </div>
                    </div>
                )}

                <div
                    ref={ref}
                    className={cn(
                        "relative text-card-foreground border-[3px] border-border shadow-hard",
                        variantClass,
                        wobbleClass,
                        "p-6 md:p-8 transition-transform duration-200",
                        className
                    )}
                    {...props}
                >
                    {/* Extra top padding when decoration is present */}
                    {decoration !== "none" && <div className="h-2" />}
                    {children}
                </div>
            </div>
        )
    }
)
WobblyCard.displayName = "WobblyCard"

export { WobblyCard }
