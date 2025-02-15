'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import {updateSection } from "@/utils/api";
import Response from "@/components/common/Response";
import useStore from "@/lib/store";

import { z } from "zod";
import { useState } from "react";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Cards___Form({ cards: { sectionData } }: { cards: any }) {
    const [isLoading, setIsLoading] = useState(false);
    const { setSelected } = useStore();

    const cardsFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "title",
            label: "Title",
            placeholder: "Enter your title",
            validation: z.string().min(2, {
                message: "Title must be at least 2 characters.",
            }),
            defaultValue: sectionData?.title
        },
        {
            id: 2,
            type: "text",
            name: "sub_title",
            label: "Sub Title",
            placeholder: "Enter your sub title",
            validation: z.string().optional(),
            defaultValue: sectionData?.sub_title
        },
        {
            id: 3,
            type: "image",
            name: "icon",
            label: "Icon",
            placeholder: "Upload your icon",
            validation: z.any().optional(),
            defaultValue: sectionData?.icon
        },
        // {
        //     id: 4,
        //     type: "multi-select",
        //     name: "categories",
        //     label: "Categories",
        //     placeholder: "Select your categories",
        //     options: categories.map((category) => ({
        //         value: category.id,
        //         label: category.name,
        //     })),
        //     validation: z.any().optional(),
        // },
        {
            id: 4,
            type: "select",
            name: "section",
            label: "Select Section",
            placeholder: "Select your section",
            options: [
                { value: "whatwedo", label: "What We Do" },
                { value: "ProudlySoponsoring", label: "Proudly Sponsoring" },
            ],
            validation: z.string().optional(),
            defaultValue: sectionData?.section
        },
        {
            id: 5,
            type: "text",
            name: "button_link",
            label: "Button Link",
            placeholder: "Enter your button link",
            validation: z.string().optional(),
            defaultValue: sectionData?.button_link
        },
        {
            id: 6,
            type: "text",
            name: "call_now",
            label: "Number for Call Now",
            placeholder: "Enter your number for call now",
            validation: z.string().optional(),
            defaultValue: sectionData?.call_now
        },
        {
            id: 7,
            type: "editor",
            name: "content",
            label: "Description",
            placeholder: "Enter your description",
            validation: z.string().optional(),
            defaultValue: sectionData?.description
        }
    ]

    const cardsFormStructure: FormX__TYPE_Structure = {
        fields: cardsFormFields,
        submission: {
            toast: true,
            submitHandler: async (data: { title: string, sub_title: string, icon: File[], button_link: string, call_now: string, content: string, image: File, section: string }) => {
                try {
                    setIsLoading(true);
                    if (data?.icon) {

                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const image: any = data?.icon ? data?.icon[0] : null

                        const cardData = {
                            title: data?.title,
                            sub_title: data?.sub_title,
                            button_link: data?.button_link,
                            icon: image?.publicUrl,
                            call_now: data?.call_now,
                            description: data?.content,
                            section: data?.section
                        }
                        // const { createdData, createError } = await createData({ data: cardData, tableName: "cards" });
                        // console.log(createdData, createError, 'createdData, createError');

                        // update data
                        const { updatedData, updateError } = await updateSection({ data: cardData, sectionName: "cards", id: sectionData?.id });
                        console.log(updatedData, updateError, 'updatedData, updateError');

                        if (updateError) {
                            Response({
                                title: 'Error Updating Card',
                                description: 'Error Updating Card',
                            })
                            setIsLoading(false);
                        } else {
                            Response({
                                title: 'Card Updated',
                                description: 'Card Updated',
                            })
                            setIsLoading(false);
                        }
                    } else {

                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        // const uploadedData: any = await uploadFile({ file: data?.image })
                        // console.log(uploadedData, uploadError, 'uploadedData, uploadError');

                        const cardData = {
                            title: data?.title,
                            sub_title: data?.sub_title,
                            button_link: data?.button_link,
                            call_now: data?.call_now,
                            description: data?.content,
                            section: data?.section
                        }

                        // update data
                        const { updatedData, updateError } = await updateSection({ data: cardData, sectionName: "cards", id: sectionData?.id });
                        console.log(updatedData, updateError, 'updatedData, updateError');

                        if (updateError) {
                            Response({
                                title: 'Error Updating Card',
                                description: 'Error Updating Card',
                            })
                            setIsLoading(false);
                        } else {
                            Response({
                                title: 'Card Updated',
                                description: 'Card Updated',
                            })
                            setIsLoading(false);
                        }
                    }
                    setSelected([])

                } catch (error) {
                    console.log(error, 'error');
                    setIsLoading(false);
                    setSelected([])
                }
            }
        },
    }


    return (
        <div className="p-4 shadow-xl rounded-lg border bg-white max-w-[800px] mx-auto w-full">
            <FormX pending={isLoading} submittionLabel="Update Card" structure={cardsFormStructure} />
        </div>
    )
}