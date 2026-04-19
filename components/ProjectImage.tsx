"use client";

import { useState } from 'react';
import Image from 'next/image';

/**
 * ProjectImage - shared image component with error fallback
 *
 * Renders a Next.js Image when `src` is provided and loads successfully.
 * Falls back to a gradient background with the first character of `alt`
 * when `src` is absent or the image fails to load (onError).
 *
 * "use client" directive: harmless in Pages Router (ignored), included
 * for forward compatibility with App Router migration.
 */

export interface ProjectImageProps {
    /** Image source URL. Shows gradient fallback when undefined/null */
    src?: string;
    /** Image alt text. First character used in gradient fallback */
    alt: string;
    /** Container height Tailwind class (e.g. "h-52", "h-64") */
    heightClass: string;
    /** Gradient fallback letter size Tailwind class */
    letterSizeClass?: string;
    /** Additional className for the Image component (e.g. hover effects) */
    imageClassName?: string;
}

export default function ProjectImage({
    src,
    alt,
    heightClass,
    letterSizeClass = "text-4xl",
    imageClassName = "",
}: ProjectImageProps) {
    const [hasError, setHasError] = useState(false);

    if (!src || hasError) {
        return (
            <div className={`w-full ${heightClass} bg-gradient-to-br from-blue-400 to-purple-500
                             flex items-center justify-center`}>
                <span className={`text-white ${letterSizeClass} font-bold opacity-50`}>
                    {alt.charAt(0)}
                </span>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={800}
            height={400}
            className={`w-full ${heightClass} object-cover ${imageClassName}`}
            onError={() => setHasError(true)}
        />
    );
}
