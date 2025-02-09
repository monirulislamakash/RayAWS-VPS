'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import {updateSection } from "@/utils/api";
import Response from "@/components/common/Response";

import { z } from "zod";
import { useState } from "react";
import useStore from "@/lib/store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Faqs___Form({ faqs }: { faqs: any }) {
    
    const [isLoading, setIsLoading] = useState(false);
    const { setSelected } = useStore();

 

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
            defaultValue: faqs?.question,
        },
        {
            id: 2,
            type: "textarea",
            name: "answer",
            label: "Answer",
            placeholder: "Enter your answer",
            validation: z.any().optional(),
            defaultValue: faqs?.answer,
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
                    const {  updateError } = await updateSection({ data: faqsData, sectionName: "faqs_section", id: faqs?.id });
                    // console.log(createdData, createError, 'createdData, createError');

                    if(updateError) {
                        Response({
                            title: 'Error Updating Faq',
                            description: updateError?.message,
                        })
                        setIsLoading(false);
                    } else {
                        Response({
                            title: 'Faq Updated',
                            description: 'Faq Updated',
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
            <FormX pending={isLoading} submittionLabel="Update Faq" structure={faqsFormStructure}  />
            
        </div>
    )
}