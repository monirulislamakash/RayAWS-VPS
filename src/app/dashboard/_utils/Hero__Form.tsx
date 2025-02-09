'use client'
import { FormX, FormX__TYPE_Structure, FormX__TYPE_Field } from "@/components/form-x/form-x";
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useEffect, useState } from "react";
import { createSection, updateSection } from "@/utils/api";
import Response from "@/components/common/Response";


type HeroData = {
    id: string,
    title: string,
    sub_title: string,
    page: string,
    button_label_1: string,
    button_link_1: string,
    button_label_2: string,
    button_link_2: string,
    campaign_number: string,
    affiliate_number: string,
    sponsor_number: string,
    image: string,
}

type dataTypes = { heroDataHome: HeroData, sectionDataAbout: HeroData, sectionDataContact: HeroData, sectionDataService: HeroData, sectionDataCareer: HeroData, sectionDataEvents: HeroData, sectionDataBlog: HeroData, sectionDataJoin: HeroData, sectionDataTeam: HeroData }

// "home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team'
export default function Hero__Form({
    heroDataHome,
    sectionDataAbout,
    // sectionDataContact,
    // sectionDataService,
    // sectionDataCareer,
    // sectionDataEvents,
    // sectionDataBlog,
    // sectionDataJoin,
    // sectionDataTeam,
}: dataTypes) {

    const HomeFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "title",
            label: "Title",
            placeholder: "Enter your title",
            validation: z.string().min(2, {
                message: "Title must be at least 2 characters.",
            }),
            defaultValue: heroDataHome?.title || ""
        },

        {
            id: 3,
            type: "select",
            name: "select_page",
            label: "Show Section on",
            placeholder: "Select a page",
            options: ["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team'].map((page) => ({ label: page, value: page })),
            validation: z.enum(["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team']).optional(),
            defaultValue: heroDataHome?.page || "home"
        },
        {
            id: 4,
            type: "text",
            name: "button_label_1",
            label: "Button Label",
            placeholder: "Enter your button label",
            validation: z.string().optional(),
            defaultValue: heroDataHome?.button_label_1 || ""
        },
        {
            id: 5,
            type: "text",
            name: "button_link_1",
            label: "Button Link",
            placeholder: "Enter your button link",
            validation: z.string().optional(),
            defaultValue: heroDataHome?.button_link_1 || ""
        },

        {
            id: 6,
            type: "text",
            name: "button_label_2",
            label: "Button Label",
            placeholder: "Enter your button label",
            validation: z.string().optional(),
            defaultValue: heroDataHome?.button_label_2 || ""
        },
        {
            id: 7,
            type: "text",
            name: "button_link_2",
            label: "Button Link",
            placeholder: "Enter your button link",
            validation: z.string().optional(),
            defaultValue: heroDataHome?.button_link_2 || ""
        },
        // {
        //     id: 8,
        //     type: "image",
        //     name: "background_image",
        //     label: "Background Image",
        //     defaultValue: "https://via.placeholder.com/150",
        //     validation: z.instanceof(File).optional()
        // },
        {
            id: 9,
            type: "text",
            name: "campaign_number",
            label: "Campaign Number",
            placeholder: "Enter your campaign number",
            validation: z.string().optional(),
            defaultValue: heroDataHome?.campaign_number || ""
        },
        {
            id: 10,
            type: "text",
            name: "affiliate_number",
            label: "Affiliate Number",
            placeholder: "Enter your affiliate number",
            validation: z.string().optional(),
            defaultValue: heroDataHome?.affiliate_number || ""
        },
        {
            id: 11,
            type: "text",
            name: "sponsor_number",
            label: "Sponsor Number",
            placeholder: "Enter your sponsor number",
            validation: z.string().optional(),
            defaultValue: heroDataHome?.sponsor_number || ""
        },
        // {
        //   id: 5,
        //   type: "image",
        //   name: "images",
        //   label: "Images",
        //   multiple: true,
        //   defaultValue: [],
        //   validation: z.array(z.instanceof(File))
        // },

    ]
    const AboutFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "title",
            label: "Title",
            placeholder: "Enter your title",
            validation: z.string().min(2, {
                message: "Title must be at least 2 characters.",
            }),
            defaultValue: sectionDataAbout?.title || ""
        },

        {
            id: 2,
            type: "text",
            name: "sub_title",
            label: "Sub Title (optional)",
            placeholder: "Enter your sub title",
            validation: z.string().optional(),
            defaultValue: sectionDataAbout?.sub_title || ""
        },
        {
            id: 3,
            type: "select",
            name: "select_page",
            label: "Show Section on",
            placeholder: "Select a page",
            options: ["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team'].map((page) => ({ label: page, value: page })),
            validation: z.enum(["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team']).optional(),
            defaultValue: sectionDataAbout?.page || "about"
        },
        {
            id: 4,
            type: "image",
            name: "background_image",
            label: "Background Image",
            defaultValue: sectionDataAbout?.image || "https://via.placeholder.com/150",
            // validation: z.instanceof(File).optional()
        },

    ]

    // const ContactFormFields: FormX__TYPE_Field[] = [
    //     {
    //         id: 1,
    //         type: "text",
    //         name: "title",
    //         label: "Title",
    //         placeholder: "Enter your title",
    //         validation: z.string().min(2, {
    //             message: "Title must be at least 2 characters.",
    //         }),
    //         defaultValue: sectionDataContact?.title || ""
    //     },

    //     {
    //         id: 2,
    //         type: "text",
    //         name: "sub_title",
    //         label: "Sub Title (optional)",
    //         placeholder: "Enter your sub title",
    //         validation: z.string().optional(),
    //         defaultValue: sectionDataContact?.sub_title || ""
    //     },
    //     {
    //         id: 3,
    //         type: "select",
    //         name: "select_page",
    //         label: "Show Section on",
    //         placeholder: "Select a page",
    //         options: ["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team'].map((page) => ({ label: page, value: page })),
    //         validation: z.enum(["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team']).optional(),
    //         defaultValue: sectionDataContact?.page || "contact"
    //     },
    //     {
    //         id: 8,
    //         type: "image",
    //         name: "background_image",
    //         label: "Background Image",
    //         defaultValue: sectionDataContact?.image || "https://via.placeholder.com/150",
    //         // validation: z.instanceof(File).optional()
    //     },

    // ]

    // const ServiceFormFields: FormX__TYPE_Field[] = [
    //     {
    //         id: 1,
    //         type: "text",
    //         name: "title",
    //         label: "Title",
    //         placeholder: "Enter your title",
    //         validation: z.string().min(2, {
    //             message: "Title must be at least 2 characters.",
    //         }),
    //         defaultValue: sectionDataService?.title || ""
    //     },

    //     {
    //         id: 2,
    //         type: "text",
    //         name: "sub_title",
    //         label: "Sub Title (optional)",
    //         placeholder: "Enter your sub title",
    //         validation: z.string().optional(),
    //         defaultValue: sectionDataService?.sub_title || ""
    //     },
    //     {
    //         id: 3,
    //         type: "select",
    //         name: "select_page",
    //         label: "Show Section on",
    //         placeholder: "Select a page",
    //         options: ["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team'].map((page) => ({ label: page, value: page })),
    //         validation: z.enum(["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team']).optional(),
    //         defaultValue: sectionDataService?.page || "service"
    //     },
    //     {
    //         id: 8,
    //         type: "image",
    //         name: "background_image",
    //         label: "Background Image",
    //         defaultValue: sectionDataService?.image || "https://via.placeholder.com/150",
    //         // validation: z.instanceof(File).optional()
    //     },

    // ]

    // const CareerFormFields: FormX__TYPE_Field[] = [
    //     {
    //         id: 1,
    //         type: "text",
    //         name: "title",
    //         label: "Title",
    //         placeholder: "Enter your title",
    //         validation: z.string().min(2, {
    //             message: "Title must be at least 2 characters.",
    //         }),
    //         defaultValue: sectionDataCareer?.title || ""
    //     },

    //     {
    //         id: 2,
    //         type: "text",
    //         name: "sub_title",
    //         label: "Sub Title (optional)",
    //         placeholder: "Enter your sub title",
    //         validation: z.string().optional(),
    //         defaultValue: sectionDataCareer?.sub_title || ""
    //     },
    //     {
    //         id: 3,
    //         type: "select",
    //         name: "select_page",
    //         label: "Show Section on",
    //         placeholder: "Select a page",
    //         options: ["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team'].map((page) => ({ label: page, value: page })),
    //         validation: z.enum(["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team']).optional(),
    //         defaultValue: sectionDataCareer?.page || "career"
    //     },
    //     {
    //         id: 8,
    //         type: "image",
    //         name: "background_image",
    //         label: "Background Image",
    //         defaultValue: sectionDataCareer?.image || "https://via.placeholder.com/150",
    //         // validation: z.instanceof(File).optional()
    //     },

    // ]

    // const EventsFormFields: FormX__TYPE_Field[] = [
    //     {
    //         id: 1,
    //         type: "text",
    //         name: "title",
    //         label: "Title",
    //         placeholder: "Enter your title",
    //         validation: z.string().min(2, {
    //             message: "Title must be at least 2 characters.",
    //         }),
    //         defaultValue: sectionDataEvents?.title || ""
    //     },

    //     {
    //         id: 2,
    //         type: "text",
    //         name: "sub_title",
    //         label: "Sub Title (optional)",
    //         placeholder: "Enter your sub title",
    //         validation: z.string().optional(),
    //         defaultValue: sectionDataEvents?.sub_title || ""
    //     },
    //     {
    //         id: 3,
    //         type: "select",
    //         name: "select_page",
    //         label: "Show Section on",
    //         placeholder: "Select a page",
    //         options: ["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team'].map((page) => ({ label: page, value: page })),
    //         validation: z.enum(["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team']).optional(),
    //         defaultValue: sectionDataEvents?.page || "events"
    //     },
    //     {
    //         id: 8,
    //         type: "image",
    //         name: "background_image",
    //         label: "Background Image",
    //         defaultValue: sectionDataEvents?.image || "https://via.placeholder.com/150",
    //         // validation: z.instanceof(File).optional()
    //     },

    // ]
    // const BlogFormFields: FormX__TYPE_Field[] = [
    //     {
    //         id: 1,
    //         type: "text",
    //         name: "title",
    //         label: "Title",
    //         placeholder: "Enter your title",
    //         validation: z.string().min(2, {
    //             message: "Title must be at least 2 characters.",
    //         }),
    //         defaultValue: sectionDataBlog?.title || ""
    //     },

    //     {
    //         id: 2,
    //         type: "text",
    //         name: "sub_title",
    //         label: "Sub Title (optional)",
    //         placeholder: "Enter your sub title",
    //         validation: z.string().optional(),
    //         defaultValue: sectionDataBlog?.sub_title || ""
    //     },
    //     {
    //         id: 3,
    //         type: "select",
    //         name: "select_page",
    //         label: "Show Section on",
    //         placeholder: "Select a page",
    //         options: ["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team'].map((page) => ({ label: page, value: page })),
    //         validation: z.enum(["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team']).optional(),
    //         defaultValue: sectionDataBlog?.page || "blog"
    //     },
    //     {
    //         id: 8,
    //         type: "image",
    //         name: "background_image",
    //         label: "Background Image",
    //         defaultValue: sectionDataBlog?.image || "https://via.placeholder.com/150",
    //         // validation: z.instanceof(File).optional()
    //     },

    // ]

    // const JoinFormFields: FormX__TYPE_Field[] = [
    //     {
    //         id: 1,
    //         type: "text",
    //         name: "title",
    //         label: "Title",
    //         placeholder: "Enter your title",
    //         validation: z.string().min(2, {
    //             message: "Title must be at least 2 characters.",
    //         }),
    //         defaultValue: sectionDataJoin?.title || ""
    //     },

    //     {
    //         id: 2,
    //         type: "text",
    //         name: "sub_title",
    //         label: "Sub Title (optional)",
    //         placeholder: "Enter your sub title",
    //         validation: z.string().optional(),
    //         defaultValue: sectionDataJoin?.sub_title || ""
    //     },
    //     {
    //         id: 3,
    //         type: "select",
    //         name: "select_page",
    //         label: "Show Section on",
    //         placeholder: "Select a page",
    //         options: ["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team'].map((page) => ({ label: page, value: page })),
    //         validation: z.enum(["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team']).optional(),
    //         defaultValue: sectionDataJoin?.page || "join"
    //     },
    //     {
    //         id: 8,
    //         type: "image",
    //         name: "background_image",
    //         label: "Background Image",
    //         defaultValue: sectionDataJoin?.image || "https://via.placeholder.com/150",
    //         // validation: z.instanceof(File).optional()
    //     },

    // ]

    // const TeamFormFields: FormX__TYPE_Field[] = [
    //     {
    //         id: 1,
    //         type: "text",
    //         name: "title",
    //         label: "Title",
    //         placeholder: "Enter your title",
    //         validation: z.string().min(2, {
    //             message: "Title must be at least 2 characters.",
    //         }),
    //         defaultValue: sectionDataTeam?.title || ""
    //     },

    //     {
    //         id: 2,
    //         type: "text",
    //         name: "sub_title",
    //         label: "Sub Title (optional)",
    //         placeholder: "Enter your sub title",
    //         validation: z.string().optional(),
    //         defaultValue: sectionDataTeam?.sub_title || ""
    //     },
    //     {
    //         id: 3,
    //         type: "select",
    //         name: "select_page",
    //         label: "Show Section on",
    //         placeholder: "Select a page",
    //         options: ["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team'].map((page) => ({ label: page, value: page })),
    //         validation: z.enum(["home", "about", "contact", "service", "career", 'events', 'blog', 'join', 'team']).optional(),
    //         defaultValue: sectionDataTeam?.page || "team"
    //     },
    //     {
    //         id: 8,
    //         type: "image",
    //         name: "background_image",
    //         label: "Background Image",
    //         defaultValue: sectionDataTeam?.image || "https://via.placeholder.com/150",
    //         // validation: z.instanceof(File).optional()
    //     },

    // ]

    // Form Structures

    const HomeFormStructure: FormX__TYPE_Structure = {
        fields: HomeFormFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {

                const newEntry = {
                    title: data.title,
                    button_label_1: data?.button_label_1,
                    button_label_2: data?.button_label_2,
                    button_link_1: data?.button_link_1,
                    button_link_2: data?.button_link_2,
                    campaign_number: data?.campaign_number,
                    affiliate_number: data?.affiliate_number,
                    sponsor_number: data?.sponsor_number,
                    page: data?.select_page,

                }

                try {
                    if (heroDataHome) {
                        const { updateError } = await updateSection({ id: heroDataHome.id, sectionName: 'hero_section', data: newEntry })

                        if (updateError) {
                            Response({
                                title: 'Error Updating Home Hero Section',
                                description: 'Error Updating Home Hero Section',
                            })
                        } else {
                            Response({
                                title: 'Home Hero Section Updated',
                                description: 'Home Hero Section Updated Successfully'
                            })
                        }

                    } else {
                        const { createError } = await createSection({ sectionName: 'hero_section', data: newEntry })
                        if (createError) {
                            Response({
                                title: 'Error Creating Home Hero Section',
                                description: 'Error Creating Home Hero Section',
                            })
                        } else {
                            Response({
                                title: 'Home Hero Section Created',
                                description: 'Home Hero Section Created Successfully'
                            })
                        }
                    }
                } catch (error) {
                    console.log(error);
                }

            }
        },
    };
    const AboutFormStructure: FormX__TYPE_Structure = {
        fields: AboutFormFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
                try {

                    // const { uploadedData, uploadError } = await uploadFile({ file: data?.background_image, path: `hero_section/about/${data?.background_image?.name}` })

                    // console.log(uploadedData, uploadError, 'uploadedData, uploadError');

                    const newEntry = {
                        title: data.title,
                        sub_title: data?.sub_title,
                        page: data?.select_page,
                    }

                    if (sectionDataAbout) {
                        const { updateError } = await updateSection({ id: sectionDataAbout.id, sectionName: 'hero_section', data: newEntry })

                        if (updateError) {
                            Response({
                                title: 'Error Updating About Hero Section',
                                description: 'Error Updating About Hero Section',
                            })
                        } else {
                            Response({
                                title: 'About Hero Section Updated',
                                description: 'About Hero Section Updated Successfully'

                            })
                        }


                    } else {
                        const { createError } = await createSection({ sectionName: 'hero_section', data: newEntry })

                        if (createError) {
                            Response({
                                title: 'Error Creating About Hero Section',
                                description: createError.message,
                            })
                        } else {
                            Response({
                                title: 'About Hero Section Created',
                                description: 'About Hero Section Created Successfully'

                            })
                        }


                    }
                } catch (error) {
                    console.log(error);
                }
            }
        },
    };
    // const ContactFormStructure: FormX__TYPE_Structure = {
    //     fields: ContactFormFields,
    //     submission: {
    //         toast: true,
    //         submitHandler: async (data) => {
    //             try {

    //                 const newEntry = {
    //                     title: data.title,
    //                     sub_title: data?.sub_title,
    //                     page: data?.select_page,
    //                 }

    //                 if (sectionDataContact) {
    //                     const { updateError } = await updateSection({ id: sectionDataContact.id, sectionName: 'hero_section', data: newEntry })

    //                     if (updateError) {
    //                         Response({
    //                             title: 'Error Updating Contact Hero Section',
    //                             description: 'Error Updating Contact Hero Section',
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Contact Hero Section Updated',
    //                             description: 'Contact Hero Section Updated Successfully'

    //                         })
    //                     }


    //                 } else {
    //                     const { createError } = await createSection({ sectionName: 'hero_section', data: newEntry })

    //                     if (createError) {
    //                         Response({
    //                             title: 'Error Creating Contact Hero Section',
    //                             description: createError.message,
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Contact Hero Section Created',
    //                             description: 'Contact Hero Section Created Successfully'

    //                         })
    //                     }


    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     },
    // };

    // const ServiceFormStructure: FormX__TYPE_Structure = {
    //     fields: ServiceFormFields,
    //     submission: {
    //         toast: true,
    //         submitHandler: async (data) => {
    //             try {

    //                 const newEntry = {
    //                     title: data.title,
    //                     sub_title: data?.sub_title,
    //                     page: data?.select_page,
    //                 }

    //                 if (sectionDataService) {
    //                     const { updateError } = await updateSection({ id: sectionDataService.id, sectionName: 'hero_section', data: newEntry })

    //                     if (updateError) {
    //                         Response({
    //                             title: 'Error Updating Service Hero Section',
    //                             description: 'Error Updating Service Hero Section',
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Service Hero Section Updated',
    //                             description: 'Service Hero Section Updated Successfully'

    //                         })
    //                     }


    //                 } else {
    //                     const { createError } = await createSection({ sectionName: 'hero_section', data: newEntry })

    //                     if (createError) {
    //                         Response({
    //                             title: 'Error Creating Service Hero Section',
    //                             description: createError.message,
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Service Hero Section Created',
    //                             description: 'Service Hero Section Created Successfully'

    //                         })
    //                     }


    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     },
    // };

    // const CareerFormStructure: FormX__TYPE_Structure = {
    //     fields: CareerFormFields,
    //     submission: {
    //         toast: true,
    //         submitHandler: async (data) => {
    //             try {

    //                 const newEntry = {
    //                     title: data.title,
    //                     sub_title: data?.sub_title,
    //                     page: data?.select_page,
    //                 }

    //                 if (sectionDataCareer) {
    //                     const { updateError } = await updateSection({ id: sectionDataCareer.id, sectionName: 'hero_section', data: newEntry })

    //                     if (updateError) {
    //                         Response({
    //                             title: 'Error Updating Career Hero Section',
    //                             description: 'Error Updating Career Hero Section',
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Career Hero Section Updated',
    //                             description: 'Career Hero Section Updated Successfully'

    //                         })
    //                     }


    //                 } else {
    //                     const { createError } = await createSection({ sectionName: 'hero_section', data: newEntry })

    //                     if (createError) {
    //                         Response({
    //                             title: 'Error Creating Career Hero Section',
    //                             description: createError.message,
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Career Hero Section Created',
    //                             description: 'Career Hero Section Created Successfully'

    //                         })
    //                     }


    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     },
    // };

    // const EventsFormStructure: FormX__TYPE_Structure = {
    //     fields: EventsFormFields,
    //     submission: {
    //         toast: true,
    //         submitHandler: async (data) => {
    //             try {

    //                 const newEntry = {
    //                     title: data.title,
    //                     sub_title: data?.sub_title,
    //                     page: data?.select_page,
    //                 }

    //                 if (sectionDataEvents) {
    //                     const { updateError } = await updateSection({ id: sectionDataEvents.id, sectionName: 'hero_section', data: newEntry })

    //                     if (updateError) {
    //                         Response({
    //                             title: 'Error Updating Events Hero Section',
    //                             description: 'Error Updating Events Hero Section',
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Events Hero Section Updated',
    //                             description: 'Events Hero Section Updated Successfully'

    //                         })
    //                     }


    //                 } else {
    //                     const { createError } = await createSection({ sectionName: 'hero_section', data: newEntry })

    //                     if (createError) {
    //                         Response({
    //                             title: 'Error Creating Events Hero Section',
    //                             description: createError.message,
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Events Hero Section Created',
    //                             description: 'Events Hero Section Created Successfully'

    //                         })
    //                     }


    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     },
    // };

    // const BlogFormStructure: FormX__TYPE_Structure = {
    //     fields: BlogFormFields,
    //     submission: {
    //         toast: true,
    //         submitHandler: async (data) => {
    //             try {

    //                 const newEntry = {
    //                     title: data.title,
    //                     sub_title: data?.sub_title,
    //                     page: data?.select_page,
    //                 }

    //                 if (sectionDataBlog) {
    //                     const { updateError } = await updateSection({ id: sectionDataBlog.id, sectionName: 'hero_section', data: newEntry })

    //                     if (updateError) {
    //                         Response({
    //                             title: 'Error Updating Blog Hero Section',
    //                             description: 'Error Updating Blog Hero Section',
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Blog Hero Section Updated',
    //                             description: 'Blog Hero Section Updated Successfully'

    //                         })
    //                     }


    //                 } else {
    //                     const { createError } = await createSection({ sectionName: 'hero_section', data: newEntry })

    //                     if (createError) {
    //                         Response({
    //                             title: 'Error Creating Blog Hero Section',
    //                             description: createError.message,
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Blog Hero Section Created',
    //                             description: 'Blog Hero Section Created Successfully'

    //                         })
    //                     }


    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     },
    // };

    // const JoinFormStructure: FormX__TYPE_Structure = {
    //     fields: JoinFormFields,
    //     submission: {
    //         toast: true,
    //         submitHandler: async (data) => {
    //             try {

    //                 const newEntry = {
    //                     title: data.title,
    //                     sub_title: data?.sub_title,
    //                     page: data?.select_page,
    //                 }

    //                 if (sectionDataJoin) {
    //                     const { updateError } = await updateSection({ id: sectionDataJoin.id, sectionName: 'hero_section', data: newEntry })

    //                     if (updateError) {
    //                         Response({
    //                             title: 'Error Updating Join Hero Section',
    //                             description: 'Error Updating Join Hero Section',
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Join Hero Section Updated',
    //                             description: 'Join Hero Section Updated Successfully'

    //                         })
    //                     }


    //                 } else {
    //                     const { createError } = await createSection({ sectionName: 'hero_section', data: newEntry })

    //                     if (createError) {
    //                         Response({
    //                             title: 'Error Creating Join Hero Section',
    //                             description: createError.message,
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Join Hero Section Created',
    //                             description: 'Join Hero Section Created Successfully'

    //                         })
    //                     }


    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     },
    // };

    // const TeamFormStructure: FormX__TYPE_Structure = {
    //     fields: TeamFormFields,
    //     submission: {
    //         toast: true,
    //         submitHandler: async (data) => {
    //             try {

    //                 const newEntry = {
    //                     title: data.title,
    //                     sub_title: data?.sub_title,
    //                     page: data?.select_page,
    //                 }

    //                 if (sectionDataTeam) {
    //                     const { updateError } = await updateSection({ id: sectionDataTeam.id, sectionName: 'hero_section', data: newEntry })

    //                     if (updateError) {
    //                         Response({
    //                             title: 'Error Updating Team Hero Section',
    //                             description: 'Error Updating Team Hero Section',
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Team Hero Section Updated',
    //                             description: 'Team Hero Section Updated Successfully'

    //                         })
    //                     }


    //                 } else {
    //                     const { createError } = await createSection({ sectionName: 'hero_section', data: newEntry })

    //                     if (createError) {
    //                         Response({
    //                             title: 'Error Creating Team Hero Section',
    //                             description: createError.message,
    //                         })
    //                     } else {
    //                         Response({
    //                             title: 'Team Hero Section Created',
    //                             description: 'Team Hero Section Created Successfully'

    //                         })
    //                     }


    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     },
    // };


    // const PAGES = [
    //     {
    //         name: "home",
    //         formStructure: HomeFormStructure
    //     },
    //     {
    //         name: "about",
    //         formStructure: AboutFormStructure
    //     },
    //     {
    //         name: "contact",
    //         formStructure: ContactFormStructure
    //     },
    //     {
    //         name: "service",
    //         formStructure: ServiceFormStructure
    //     },
    //     {
    //         name: "career",
    //         formStructure: CareerFormStructure
    //     },
    //     {
    //         name: "events",
    //         formStructure: EventsFormStructure
    //     },
    //     {
    //         name: "blog",
    //         formStructure: BlogFormStructure
    //     },
    //     {
    //         name: "join",
    //         formStructure: JoinFormStructure
    //     },
    //     {
    //         name: "team",
    //         formStructure: TeamFormStructure
    //     },
    // ];


    const [selectedPage, setSelectedPage] = useState<{ name: string; formStructure: FormX__TYPE_Structure }[]>([
        {
            name: "home",
            formStructure: HomeFormStructure
        }
    ]);

    // if there is already a section in the hero section, add that section to the selectedPage array
    useEffect(() => {
        if (sectionDataAbout) {
            setSelectedPage([...selectedPage, { name: 'about', formStructure: AboutFormStructure }])
        }
    }, [])

    // add a new section based on the selected page
    // const addSection = (page: { name: string; formStructure: FormX__TYPE_Structure }) => {
    //     // check if the page is already in the selectedPage array
    //     if (selectedPage.some((p) => p.name === page.name)) {
    //         return;
    //     }
    //     setSelectedPage([...selectedPage, page]);
    // }

    const removeSection = (page: { name: string; formStructure: FormX__TYPE_Structure }) => {
        setSelectedPage(selectedPage.filter((p) => p.name !== page.name));
    }



    return (
        <>
            {selectedPage.map((page, idx) => (
                <div key={idx} className="space-y-4 pt-5">
                    <div className="flex justify-between items-center">
                        <h4 className="text-3xl font-bold capitalize ">Hero Section {page.name} </h4>
                        <div className="flex items-center gap-2">

                            {/* don't show remove button if it is default section */}
                            {idx !== 0 && (
                                <Button onClick={() => removeSection(page)} className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2">
                                    <TrashIcon className="w-4 h-4  text-white" />
                                    <span className="sr-only">Remove</span>
                                </Button>
                            )}
                        </div>
                    </div>
                    <FormX submittionLabel="Save Section" structure={page.formStructure} className="p-4 shadow-xl rounded-lg border bg-white" />

                    {/* <Button onClick={() => addSection(PAGES[idx + 1])} className="w-full bg-primary hover:bg-primary text-white flex items-center gap-2 capitalize">
                        <PlusIcon className="w-4 h-4  text-white" />
                        <span>Add {PAGES[idx + 1].name} Page</span>
                    </Button> */}
                </div>
            ))}
        </>
    )
}