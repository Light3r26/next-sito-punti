"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  companyLogo?: string;
  quote: string;
  authorName: string;
  authorPosition: string;
  authorImage?: string;
  highlightedText?: string;
}

export const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({
    className,
    companyLogo,
    quote,
    authorName,
    authorPosition,
    authorImage,
    highlightedText,
    ...props
  }, ref) => {
    const formattedQuote = highlightedText
      ? quote.replace(
        highlightedText,
        `<strong class="font-semibold">${highlightedText}</strong>`
      )
      : quote;

    return (
      <div
        ref={ref}
        className={cn("py-16", className)}
        {...props}
      >
        <div className="max-md:max-w-80 max-w-7xl mx-auto px-4 lg:px-8 max-md:px-0">
          <div className="flex flex-col items-center">
            {companyLogo && (
              <div className="mb-7 relative h-8 w-32">
                <Image
                  src={companyLogo}
                  alt="Company logo"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <p
              className="max-w-xl text-balance text-center text-xl sm:text-2xl text-foreground"
              dangerouslySetInnerHTML={{ __html: `"${formattedQuote}"` }}
            />
            <div className="max-md:mt-2 mt-5 flex items-center gap-4">
              {authorImage && (
                <div className="relative size-12 rounded-full overflow-hidden bg-muted shrink-0 shadow-sm">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col items-start">
                <h5 className="font-semibold text-foreground leading-none">
                  {authorName}
                </h5>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground leading-none">
                  {authorPosition}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
);

Testimonial.displayName = "Testimonial";