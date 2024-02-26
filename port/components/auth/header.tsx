import { Lora } from "next/font/google";
import { cn } from "@/lib/utils"

const font = Lora({
    subsets: ["latin"],
    weight: ["500"]
});

interface HeaderProps{
    authLabel: string;
    label: string;
}

export const Header = ({
    authLabel,
    label,
}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className={cn("text-3xl font-semibold", font.className)}>
                {authLabel}
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}