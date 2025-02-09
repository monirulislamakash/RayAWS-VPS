'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { createData } from "@/utils/api";
import Response from "@/components/common/Response";
import useStore from "@/lib/store"; 
import { z } from "zod";
import { useState } from "react";



export default function Faqs___Form() {
    const { setSelected } = useStore();
    const [isLoading, setIsLoading] = useState(false);

    const faqsFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "question",
            label: "Question",
            placeholder: "Enter your question",
            validation: z.string().min(2, {
                message: "Question must be at least 2 characters.",
            }),
        },
        {
            id: 2,
            type: "textarea",
            name: "answer",
            label: "Answer",
            placeholder: "Enter your answer",
            validation: z.any().optional(),
        },
        
    ]

    const faqsFormStructure: FormX__TYPE_Structure = {
        fields: faqsFormFields,
        submission: {
            toast: true,
            submitHandler: async (data: { question: string, answer: string }) => {
                try {
                    setIsLoading(true);

                    const faqsData  = {
                        question: data?.question,
                        answer: data?.answer,
                    }
                    const {  createError } = await createData({ data: faqsData, tableName: "faqs_section" });
                    // console.log(createdData, createError, 'createdData, createError');

                    if(createError) {
                        Response({
                            title: 'Error Creating Faq',
                            description: createError?.message,
                        })
                        setIsLoading(false);
                    } else {
                        Response({
                            title: 'Faq Created',
                            description: 'Faq Created',
                        })  
                        setIsLoading(false);
                    }
                    setSelected([])
                } catch (error) {
                    console.log(error, 'error');
                    Response({
                        title: 'Error Creating Faq',
                        description: 'Error Creating Faq',
                    })
                    setIsLoading(false);
                    setSelected([])
                }
            }
        },
    }


    return(
        <div className="p-4 shadow-xl rounded-lg border bg-white max-w-[800px] mx-auto w-full">
            <FormX pending={isLoading} submittionLabel="Create Faq" structure={faqsFormStructure}  />
            
        </div>
    )
}