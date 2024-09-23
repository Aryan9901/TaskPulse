import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Typography } from '@/components/ui/Typography';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { useTheme } from "@/context/ThemeProvider";
import React from 'react';

export default function ProjectFilter() {
    const { theme } = useTheme();

    // State to hold filter options
    const [filters, setFilters] = useState([
        {
            name: 'Category',
            options: [
                { label: 'All', value: 'all' },
                { label: 'Full Stack', value: 'fullstack' },
                { label: 'Frontend', value: 'frontend' },
                { label: 'Backend', value: 'backend' },
                { label: 'Dev Ops', value: 'devops' },
                { label: 'Cloud', value: 'cloud' },
                { label: 'AI/ML', value: 'aiml' }
            ]
        },
        {
            name: 'Tags',
            options: [
                { label: 'All', value: 'all' },
                { label: 'React Js', value: 'react' },
                { label: 'Next Js', value: 'nextjs' },
                { label: 'Spring Boot', value: 'springboot' },
                { label: 'Mongo Db', value: 'mongodb' },
                { label: 'My SQL', value: 'mysql' },
                { label: 'Angular', value: 'angular' },
                { label: 'Python', value: 'python' },
                { label: 'Flask', value: 'flask' },
                { label: 'Django', value: 'django' },
            ]
        }
    ]);

    // Handler for filter change
    const handleFilterChange = (filterName, value) => {
        console.log(`Filter: ${filterName}, Value: ${value}`);
        // You can update the state or handle filtering logic here
    };

    return (
        <section className='w-[17rem]'>
            <Card className={`p-5 pb-0 sticky top-10 rounded-none ${theme == "dark" ? "bg-gray-900" : "bg-secondary"}`}>
                <CardHeader className='flex-row items-center p-0 justify-between '>
                    <Typography variant="h3">Filters</Typography>
                    <Button size="icon" variant="ghost">
                        <MixerHorizontalIcon className='h-5 w-5' />
                    </Button>
                </CardHeader>
                <CardContent className="px-0 py-0 no-scrollbar">
                    <ScrollArea className="mt-4 h-[80vh] no-scrollbar overflow-auto">
                        {filters.map((filter, index) => (
                            <div key={index} className='mb-4'>
                                <Typography variant="h4" className='pb-3 dark:text-gray-400 border-b'>
                                    {filter.name}
                                </Typography>
                                <div className='pt-5'>
                                    <RadioGroup defaultValue={filter.options[0].value} className="pl-4" onValueChange={(value) => handleFilterChange(filter.name, value)}>
                                        {filter.options.map((option, idx) => (
                                            <div key={idx} className="flex items-center space-x-2 first:-mt-1 mt-2">
                                                <RadioGroupItem value={option.value} id={`${filter.name}-${idx}`} />
                                                <Label className="cursor-pointer" htmlFor={`${filter.name}-${idx}`}>
                                                    {option.label}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                </CardContent>
            </Card>
        </section>
    );
}
