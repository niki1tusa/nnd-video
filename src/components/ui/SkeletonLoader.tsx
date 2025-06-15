import type { CSSProperties } from "react"
import {twMerge} from 'tailwind-merge'
interface Props {
    count?: number
    style?: CSSProperties
    className?: string
}

export function SkeletonLoader({count = 1, style,  className = ''
}: Props) {
    return <>
    {Array.from({length: count}).map((_, index)=>(
        <div key={index} style={style} className={twMerge('bg-gray-400 rounded-sm h-10 mb-2.5 animate-pulse', className)}/>
    ))}
    </>
}
