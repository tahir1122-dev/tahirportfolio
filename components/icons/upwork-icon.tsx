import Image from "next/image"
import { HTMLAttributes } from "react"

export function UpworkIcon({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`relative ${className}`} {...props}>
            <Image
                src="/assests/upwork.png"
                alt="Upwork"
                fill
                className="object-contain dark:invert"
                sizes="24px"
            />
        </div>
    )
}
