"use client";
import { useState } from "react";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CalendarIcon, Eye, EyeOff } from "lucide-react";
import clsx from "clsx";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import TooltipX from "./tooltip-x";
import InputSlug from "./input-slug";
import MultiSelect from "./multi-select";
import MultiInput from "./multi-input";

export type InputX___Type_InputTypes =
    | "text"
    | "password"
    | "textarea"
    | "select"
    | "date"
    | "number"
    | "slug"
    | "multi-select"
    | "multi-input";
export type TYPE__SelectOption = {
    label: string;
    value: string;
}

const InputX = ({
    form,
    name = "input",
    type = "text",
    label = "Input Field",
    placeholder = "",
    options = [],
    maxValue = 9999999999,
    minValue = 0,
    readOnly = false,
    disabled = false,
    className = "",
    tooltip = "",
    description,
    relatedTo,
    defaultValue,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: any;
    name: string;
    type?: InputX___Type_InputTypes;
    label?: string;
    placeholder?: string;
    options?: TYPE__SelectOption[];
    maxValue?: number;
    minValue?: number;
    readOnly?: boolean;
    disabled?: boolean;
    className?: string;
    tooltip?: string;
    description?: string;
    relatedTo?: string;
    defaultValue?: string;
}) => {
    /**
     * State to manage showing password fields input as text or, password
     */
    const [showPass, setShowPass] = useState(false);

    /**
     * All Input fields in an Object Scaffold
     */
    // disable eslint for this line
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inputFields: Record<Exclude<InputX___Type_InputTypes, 'date' | 'slug'>, (field: any) => JSX.Element> = {
        text: (field) => (
            <Input
                placeholder={placeholder}
                {...field}
                type={type}
                readOnly={readOnly}
                disabled={disabled || readOnly}
                className={className}
            />
        ),
        number: (field) => (
            <Input
                step="any"
                placeholder={placeholder}
                value={parseFloat(field.value || "0")}
                onChange={(e) => {
                    field.onChange(e.target.value ? parseFloat(e.target.value) : 0);
                }}
                type={type}
                max={maxValue}
                min={minValue}
                readOnly={readOnly}
                disabled={disabled || readOnly}
                className={className}
            />
        ),
        textarea: (field) => (
            <Textarea
                placeholder={placeholder}
                {...field}
                type={type}
                rows="4"
                readOnly={readOnly}
                disabled={disabled || readOnly}
            />
        ),
        password: (field) => (
            <div className="relative">
                <Input
                    placeholder={placeholder}
                    {...field}
                    type={!showPass ? type : "text"}
                    readOnly={readOnly}
                    disabled={disabled || readOnly}
                    className={className}
                />
                <div
                    className="inline-flex w-8 h-8 items-center justify-center absolute top-[2px] right-2"
                    role="button"
                    onClick={() => setShowPass(!showPass)}
                >
                    <Eye
                        className={clsx(
                            "h-4 text-gray-400 dark:text-gray-500 transition-all duration-300",
                            {
                                "opacity-100 w-4": showPass,
                                "opacity-0 w-0": !showPass,
                            }
                        )}
                    />
                    <EyeOff
                        className={clsx(
                            "h-4 text-gray-400 dark:text-gray-500 transition-all duration-300",
                            {
                                "opacity-100 w-4": !showPass,
                                "opacity-0 w-0": showPass,
                            }
                        )}
                    />
                </div>
            </div>
        ),
        select: (field) => (
            <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={disabled || readOnly}
            >
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {options?.length
                        ? options?.map((option: TYPE__SelectOption) => {
                            const { value, label } = option;
                            return (
                                <SelectItem key={value} value={value}>
                                    {label}
                                </SelectItem>
                            );
                        })
                        : null}
                </SelectContent>
            </Select>
        ),
        "multi-select": (field) => (
            <MultiSelect
                options={options || []}
                {...field}
            />
        ),
        "multi-input": (field) => (
            <MultiInput 
                defaultValues={defaultValue}
                {...field}
                form={form}
            />
        ),
    };



    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-2">
                    <FormLabel className="flex items-center justify-between gap-4">{label} {tooltip && <TooltipX content={tooltip} />}</FormLabel>
                    <FormControl>
                        {type === "date" ? (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                {disabled || readOnly ? null : (
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={(value) => {
                                                field.onChange(value ? new Date(value) : null);
                                            }}
                                            disabled={(date: Date) =>
                                                date < new Date() && date > new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                )}
                            </Popover>
                        ) 
                        : type === "slug" ? (
                            <InputSlug relatedTo={relatedTo || ''} {...field} form={form} defaultValue={defaultValue} />
                        ) : (
                            inputFields[type](field)
                        )}
                    </FormControl>
                    {description ? <FormDescription>{description}</FormDescription> : null}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default InputX;