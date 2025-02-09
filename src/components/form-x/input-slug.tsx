'use client';
import { UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function InputSlug({ form, relatedTo, defaultValue, ...field }: { form: UseFormReturn, relatedTo: string, [key: string]: any, defaultValue?: string }) {
    // Watch the title field for changes
    const name = form.watch(relatedTo);

    // stringify the date time
    const dateTime = new Date().getTime().toString();
    
    // Generate slug dynamically and add unique number
    const slug = defaultValue ? defaultValue : name?.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '') + '-' + dateTime;    

    // Update the slug value in the form state
    form.setValue('slug', slug);




    return (
        <Input
            {...form.register('slug')} // Register the slug field
            name="slug"
            {...field}
            value={slug} // Display the slug in the input
            readOnly // Make the input read-only
            disabled // Make the input disabled
            defaultValue={defaultValue}
            className="disabled:cursor-not-allowed disabled:opacity-100 text-text_color"
        />
    );
}
