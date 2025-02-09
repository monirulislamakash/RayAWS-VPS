"use client"

import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input"
import { InputX___Type_InputTypes } from "./input-x"
import { TYPE__SelectOption } from "./input-x"
import { useState, useEffect } from "react";

export default function MultiInput({
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
    defaultValues,
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
    defaultValues?: string[];
}) {

    const [values, setValues] = useState<string[]>(defaultValues || []);
    // const [inputs, setInputs] = useState<number[]>([0]);

    const handleAdd = () => {
        setValues([...values, '']);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValue = [...values];
        newValue[index] = e.target.value;
        setValues(newValue);
    }

    const handleRemove = (index: number) => {
        const newValue = [...values];
        newValue.splice(index, 1);
        setValues(newValue);
    }

    useEffect(() => {
        form.setValue(name, values);
    }, [values]);


    return (    
        <div className="p-5 border border-gray-200 rounded-md">
           {
            Array.from({ length: values.length }, (_, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                    <Input
                        type="text"
                        placeholder="Enter your text"
                        className="w-full "
                        name={`${name}[${index}]`}
                        value={values[index]}
                        onChange={(e) => handleChange(e, index)}
                    />
                    <Button type="button" onClick={() => handleRemove(index)} className=" hover:bg-red-500 hover:text-white bg-red-500 text-white flex items-center gap-2">
                        <MinusIcon className="w-4 h-4" />
                    </Button>
                </div>
            ))
           }
            <Button type="button" onClick={handleAdd} className=" hover:bg-primary flex items-center gap-2">
                <PlusIcon className="w-4 h-4" />
                <span>Add</span>
            </Button>
        </div>
    )
}