import React from 'react';

export function Typography({ variant, children, className = '' }) {
    switch (variant) {
        case 'h1':
            return (
                <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}>
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
                    {children}
                </h3>
            );
        case 'h4':
            return (
                <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
                    {children}
                </h4>
            );
        case 'p':
            return (
                <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
                    {children}
                </p>
            );
        case 'blockquote':
            return (
                <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
                    {children}
                </blockquote>
            );
        case 'lead':
            return (
                <p className={`text-xl text-muted-foreground ${className}`}>
                    {children}
                </p>
            );
        default:
            return <p className={className}>{children}</p>;
    }
}
