'use client'
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x"
import { SectionData } from "@/types/sectionData"
import { updateSection, uploadFile } from "@/utils/api";
import { z } from "zod";
import Response from "@/components/common/Response"
import { createSection } from "@/utils/api";



export default function Two_Side_Form_Item({ item, idx, cards }: { item: SectionData, idx: number, cards: {id: number, title: string, sub_title: string, icon: string, button_link: string,  }[] }) {



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
            defaultValue: item?.heading || ""
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
            defaultValue: item?.location || ""
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
            defaultValue: item?.date_range || ""
        },
        {
            id: 2,
            type: "textarea",
            name: "description",
            label: "Description",
            placeholder: "Enter your description",
            defaultValue: item?.description || ""
        },

        {
            id: 3,
            type: "select",
            name: "select_page",
            label: "Show Section on",
            placeholder: "Select a page",
            options: ["about", "service", 'events'].map((page) => ({ label: page, value: page })),
            validation: z.enum(["about", "service", 'events']).optional(),
            defaultValue: item?.page || "about"
        },
        {
            id: 11,
            type: "image",
            name: "images",
            label: "Images",
            placeholder: "Enter your images",
            multiple: true,
            validation: z.any(),
            defaultValue: item?.images || []
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
            defaultValue: item?.heading || ""
        },
        {
            id: 2,
            type: "textarea",
            name: "description",
            label: "Description",
            placeholder: "Enter your description",
            defaultValue: item?.description || ""
        },

        {
            id: 3,
            type: "select",
            name: "select_page",
            label: "Show Section on",
            placeholder: "Select a page",
            options: ["about", "service", 'events'].map((page) => ({ label: page, value: page })),
            validation: z.enum(["about", "service", 'events']).optional(),
            defaultValue: item?.page || "about"
        },
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
            defaultValue: item?.heading || ""
        },
        {
            id: 2,
            type: "textarea",
            name: "description",
            label: "Description",
            placeholder: "Enter your description",
            defaultValue: item?.description || ""
        },

        {
            id: 3,
            type: "select",
            name: "select_page",
            label: "Show Section on",
            placeholder: "Select a page",
            options: ["about", "service", 'events'].map((page) => ({ label: page, value: page })),
            validation: z.enum(["about", "service", 'events']).optional(),
            defaultValue: item?.page || "about"
        },
        {
            id: 9,
            type: "image",
            name: "image",
            label: "Image",
            placeholder: "Enter your image",
            validation: z.instanceof(File).optional(),
            defaultValue: item?.image
        }



    ]


    const dynamicFields: FormX__TYPE_Field[] = item?.page === 'events' ? eventsFields : item?.page === 'service' ? serviceFields : aboutFields;

    const FormFields = dynamicFields;


    const FormStructure: FormX__TYPE_Structure = {
        // I have multiple section in database so i need to map through the sectionDataTwoSide and return the FormFields
        fields: FormFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
                try {
                    if (item?.page === 'events') {
                        const results = await uploadFile({ files: data?.images, multiple: true });
                        
                        // console.log(results, 'results');
                        // 

                    const newEntry = {
                        heading: data?.heading,
                        description: data?.description,
                        page: data?.select_page,
                        images: results,
                        location: data?.location,
                        date_range: data?.date_range
                    }

                    if (item) {
                        const { updateError } = await updateSection({ id: item.id, sectionName: 'two_side_section', data: newEntry })

                        if (updateError) {
                            Response({
                                title: 'Error Updating Two Side Section',
                                description: 'Error Updating Two Side Section',
                            })
                        } else {
                            Response({
                                title: 'Two Side Section Updated',
                                description: 'Two Side Section Updated Successfully'

                            })
                        }


                    } else {
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
                    }

                    } else {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const { publicUrl, uploadError }: any = await uploadFile({ file: data?.image });
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
                        image: publicUrl?.publicUrl,
                    }

                    if (item) {
                        const { updateError } = await updateSection({ id: item.id, sectionName: 'two_side_section', data: newEntry })

                        if (updateError) {
                            Response({
                                title: 'Error Updating Two Side Section',
                                description: 'Error Updating Two Side Section',
                            })
                        } else {
                            Response({
                                title: 'Two Side Section Updated',
                                description: 'Two Side Section Updated Successfully'

                            })
                        }


                    } else {
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
                    }

                    }





                } catch (error) {
                    console.log(error);
                }
            }
        },
    };

    return (
        <div className="space-y-4 pt-5" key={idx}>
            <div className="flex justify-between items-center">
                <h4 className="text-3xl font-bold capitalize ">Two Side Section {item.page} page</h4>
                <div className="flex items-center gap-2">
                </div>
            </div>
            <FormX submittionLabel="Save Section" structure={FormStructure} className="p-4 shadow-xl rounded-lg border bg-white" />
        </div>
    )
}