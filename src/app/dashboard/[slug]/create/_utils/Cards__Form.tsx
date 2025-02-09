'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { createData } from "@/utils/api";
import Response from "@/components/common/Response";
import useStore from "@/lib/store";
import { z } from "zod";
import { useState } from "react";



export default function Cards___Form() {
    const { setSelected } = useStore();
    const [isLoading, setIsLoading] = useState(false);

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
        },
        {
            id: 2,
            type: "text",
            name: "sub_title",
            label: "Sub Title",
            placeholder: "Enter your sub title",
            validation: z.string().optional(),
        },
        {
            id: 3,
            type: "image",
            name: "icon",
            label: "Icon",
            placeholder: "Upload your icon",
            validation: z.any().optional(),
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
        },
        {
            id: 5,
            type: "multi-input",
            name: "featured_items",
            label: "Featured Items",
            placeholder: "Enter your featured items",
            validation: z.any().optional(),
        },
        {
            id: 6,
            type: "text",
            name: "link",
            label: "Link",
            placeholder: "Enter your link",
            validation: z.string().optional(),
        },
        {
            id: 7,
            type: "text",
            name: "call_now",
            label: "Number for Call Now",
            placeholder: "Enter your number for call now",
            validation: z.string().optional(),
        },
        {
            id: 8,
            type: "editor",
            name: "description",
            label: "Description",
            placeholder: "Enter your description",
            validation: z.string().optional(),
        }
    ]

    const cardsFormStructure: FormX__TYPE_Structure = {
        fields: cardsFormFields,
        submission: {
            toast: true,
            submitHandler: async (data: { title: string, sub_title: string, icon: File[], link: string, call_now: string, description: string, image:File[], section: string; featured_items: string[] }) => {
                try {
                    setIsLoading(true);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const image: any = data?.image ? data?.image[0] : null

                    // console.log(uploadedData, uploadError, 'uploadedData, uploadError');

                    const cardData  = {
                        title: data?.title,
                        sub_title: data?.sub_title,
                        icon: image?.publicUrl,
                        button_link: data?.link,
                        call_now: data?.call_now,
                        description: data?.description,
                        section: data?.section,
                        lists: data?.featured_items?.map((item: any) => ({ name: item }))
                    }
                    const { createError } = await createData({ data: cardData, tableName: "cards" });
            

                    if(createError) {
                        Response({
                            title: 'Error Creating Card',
                            description: 'Error Creating Card',
                        })
                        setIsLoading(false);
                    } else {
                        Response({
                            title: 'Card Created',
                            description: 'Card Created',
                        })  
                        setIsLoading(false);
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


    return(
        <div className="p-4 shadow-xl rounded-lg border bg-white max-w-[800px] mx-auto w-full">
            <FormX pending={isLoading} submittionLabel="Create Card" structure={cardsFormStructure}  />
        </div>
    )
}