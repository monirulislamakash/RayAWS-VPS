'use client'
import { Button } from "@/components/ui/button"
import Two_Side_Form_Item from "./Two_Side_Form_Item"
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x"
import { uploadFile } from "@/utils/api";
import Response from "@/components/common/Response"
import { createSection } from "@/utils/api";
import { useForm } from "react-hook-form";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { z } from "zod";

type TwoSideFormData = {
    id: string,
    heading: string,
    image: string,
    description: string,
    images: File[],
    page: string,
    services: string,
}

type TwoSideFormProps = {
    sectionDataTwoSide: TwoSideFormData[]
    cards: {id: number, title: string, sub_title: string, icon: string, button_link: string,  }[]
}

// [about, service, events]



export default function Two_side_Form({ sectionDataTwoSide, cards }: TwoSideFormProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState("about");
    const form = useForm();



    const eventsFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "heading",
            label: "Heading",
            placeholder: "Enter your heading",
            validation: z.string().min(2, {
                message: "Heading must be at least 2 characters.",
            }),
        },
        {
            id: 10,
            type: "text",
            name: "location",
            label: "Location",
            placeholder: "Enter your location",
            validation: z.string().min(2, {
                message: "Location must be at least 2 characters.",
            }),
        },
        {
            id: 12,
            type: "text",
            name: "date_range",
            label: "Date",
            placeholder: "Enter your date",
            validation: z.string().min(2, {
                message: "Date must be at least 2 characters.",
            }),
        },
        {
            id: 2,
            type: "textarea",
            name: "description",
            label: "Description",
            placeholder: "Enter your description",
        },
        {
            id: 3,
            type: "select",
            name: "select_page",
            label: "Show Section on",
            placeholder: "Select a page",
            options: ["about", "service", 'events'].map((page) => ({ label: page, value: page })),
            validation: z.enum(["about", "service", 'events']).optional(),
        },
        {
            id: 11,
            type: "image",
            name: "images",
            label: "Images",
            placeholder: "Enter your images",
            multiple: true,
            validation: z.any(),
        } 



    ]

    const serviceFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "heading",
            label: "Heading",
            placeholder: "Enter your heading",
            validation: z.string().min(2, {
                message: "Heading must be at least 2 characters.",
            }),
        },
        {
            id: 2,
            type: "textarea",
            name: "description",
            label: "Description",
            placeholder: "Enter your description",
            },

        {
            id: 3,
            type: "select",
            name: "select_page",
            label: "Show Section on",
            placeholder: "Select a page",
            options: ["about", "service", 'events'].map((page) => ({ label: page, value: page })),
            validation: z.enum(["about", "service", 'events']).optional(),
        },
        // {
        //     id: 10,
        //     type: "text",
        //     name: "service",
        //     label: "Service",
        //     placeholder: "Enter your service",
        //     validation: z.string().min(2, {
        //         message: "Service must be at least 2 characters.",
        //     }),
        // }
        {
            id: 4,
            type: "multi-select",
            name: "service",
            label: "Service",
            placeholder: "Select your service",
            // multipleValues: recentNews?.blogs,
            options: cards?.map((card) => ({
                value: card.id.toString(),
                label: card.title,
            })),
            validation: z.any().optional(),
        },



    ]

    const aboutFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "heading",
            label: "Heading",
            placeholder: "Enter your heading",
            validation: z.string().min(2, {
                message: "Heading must be at least 2 characters.",
            }),
        },
        {
            id: 2,
            type: "textarea",
            name: "description",
            label: "Description",
            placeholder: "Enter your description",
        },

        {
            id: 3,
            type: "select",
            name: "select_page",
            label: "Show Section on",
            placeholder: "Select a page",
            options: ["about", "service", 'events'].map((page) => ({ label: page, value: page })),
            validation: z.enum(["about", "service", 'events']).optional(),
        },
        {
            id: 9,
            type: "image",
            name: "image",
            label: "Image",
            placeholder: "Enter your image",
            validation: z.instanceof(File).optional(),
        }

    ]
    

    const dynamicFields: FormX__TYPE_Field[] = page === 'events' ? eventsFields : page === 'service' ? serviceFields : aboutFields;

    const FormFields = dynamicFields;

    const FormStructure: FormX__TYPE_Structure = {
        fields: FormFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
                try {

                    if (page === 'about') {
                        
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const { publicUrl, uploadError }: any = await uploadFile({ file: data?.image })

                        if (uploadError) {
                            Response({
                                title: 'Error Uploading Image',
                                description: uploadError.message,
                            })
                        }
                        const newEntry = {
                            heading: data?.heading,
                            description: data?.description,
                            page: data?.select_page,
                            image: publicUrl?.publicUrl
                        }
                        const { createError } = await createSection({ sectionName: 'two_side_section', data: newEntry })
                        if (createError) {
                            Response({
                                title: 'Error Creating Two Side Section',
                                description: createError.message,
                            })
                        } else {
                            Response({
                                title: 'Two Side Section Created',
                                description: 'Two Side Section Created Successfully'

                            })
                        }


                    } else if (page === 'events') {

                  
                        
                        const results = await uploadFile({ files: data?.images, multiple: true })


                        const newEntry = {
                            heading: data?.heading,
                            description: data?.description,
                            page: data?.select_page,
                            location: data?.location,
                            date: data?.date_range,
                            images: results
                        }

                        const { createError } = await createSection({ sectionName: 'two_side_section', data: newEntry })
                        if (createError) {
                            Response({
                                title: 'Error Creating Two Side Section',
                                description: createError.message,
                            })
                        } else {
                            Response({
                                title: 'Two Side Section Created',
                                description: 'Two Side Section Created Successfully'

                            })
                        }
                    } else if (page === 'service') {

                        const newEntry = {
                            heading: data?.heading,
                            description: data?.description,
                            page: data?.select_page,
                            service: data?.service
                        }
                        const { createError } = await createSection({ sectionName: 'two_side_section', data: newEntry })
                        if (createError) {
                            Response({
                                title: 'Error Creating Two Side Section',
                                description: createError.message,
                            })
                        } else {
                            Response({
                                title: 'Two Side Section Created',
                                description: 'Two Side Section Created Successfully'

                            })
                        }
                    } else {
                        Response({
                            title: 'Invalid Page',
                            description: 'Invalid Page',
                        })
                    }






                    form.reset();    

                } catch (error) {
                    console.log(error);
                }
            }
        },
    };




    return (
        <div >
            <div className="flex justify-between items-center space-x-4 space-y-4">
                <h1 className="text-2xl font-bold"></h1>
                <Button className="flex items-center gap-2 bg-primary hover:bg-primary text-white" onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? <MinusIcon className="w-4 h-4 text-white" /> : <PlusIcon className="w-4 h-4 text-white" />
                    }
                </Button>
            </div>
            {
                isOpen && (
                    <div className="space-y-4 pt-5">
                        <div className="flex justify-between items-center">
                            <h4 className="text-3xl font-bold capitalize ">Create Two Side Section</h4>
                            <div className="flex items-center gap-2">
                                
                            </div>
                        </div>
                        <FormX submittionLabel="Create Section" structure={FormStructure} className="p-4 shadow-xl rounded-lg border bg-white" setPage={setPage} />
                    </div>
                )
            }

            {
                sectionDataTwoSide?.map((item, idx) => (
                    <Two_Side_Form_Item key={idx} idx={idx} item={item} cards={cards} />
                ))
            }

        </div>
    )
}