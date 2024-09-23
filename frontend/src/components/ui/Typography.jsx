import React from 'react';

function mergeClasses(defaultClasses, customClasses) {
    const defaultClassList = defaultClasses.split(' ');
    const customClassList = customClasses.split(' ');

    // Create a map of default classes for easy lookup
    const defaultClassMap = {};
    defaultClassList.forEach(cls => {
        const baseClass = cls.split('-')[0]; // Splitting to handle utility classes like 'text-xl', 'text-2xl'
        defaultClassMap[baseClass] = cls;
    });

    // Replace or append custom classes
    customClassList.forEach(customCls => {
        const baseClass = customCls.split('-')[0];
        if (defaultClassMap[baseClass]) {
            // If there's a match, replace the default
            defaultClassMap[baseClass] = customCls;
        } else {
            // If not, append the custom class
            defaultClassList.push(customCls);
        }
    });

    // Return the final class list
    return [...new Set(Object.values(defaultClassMap)), ...customClassList.filter(cls => !defaultClassMap[cls.split('-')[0]])].join(' ');
}

export function Typography({ variant, children, className = '' }) {
    const baseClasses = {
        h1: `scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`,
        h2: `scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0`,
        h3: `scroll-m-20 text-2xl font-semibold tracking-tight`,
        h4: `scroll-m-20 text-xl font-semibold tracking-tight`,
        p: `leading-7 [&:not(:first-child)]:mt-6`,
        blockquote: `mt-6 border-l-2 pl-6 italic`,
        lead: `text-xl text-muted-foreground`,
    };

    // Get default classes based on variant
    const defaultClass = baseClasses[variant] || '';

    // Merge default and custom classes
    const mergedClassName = mergeClasses(defaultClass, className);

    // Determine the HTML tag to use
    const ComponentTag = variant === 'p' ? 'p' : variant;

    return (
        <ComponentTag className={mergedClassName}>
            {children}
        </ComponentTag>
    );
}
