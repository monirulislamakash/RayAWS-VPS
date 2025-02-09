'use client'
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {registerUser } from "@/utils/api"
import { z } from "zod"
import Response from "@/components/common/Response";
import { useState } from "react"

export default function Create__Popover() {

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formFileds: FormX__TYPE_Field[] = [
    {
      id: 1,
      type: "text",
      name: "full_name",
      label: "Full Name",
      placeholder: "Enter your full name",
      validation: z.string().min(3, {
        message: "Full name must be at least 3 characters.",
      }),
    },  
    {
      id: 2,
      type: "text",
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      validation: z.string().email({
        message: "Email must be a valid email address.",
      }),
    },

    {
      id: 3,
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      validation: z.string().min(8, {
        message: "Password must be at least 8 characters.",
      }),
    },

  ]


  const formStructure: FormX__TYPE_Structure = {
    fields: formFileds,
    submission: {
      toast: true,
      submitHandler: async (data) => {
        try {
          setIsLoading(true);
          // console.log(data);
        //   register user
        const { userError } = await registerUser({ email: data.email, password: data.password, full_name: data.full_name });    

          if (userError) {
            Response({
              title: "Error Creating User",
              description: userError.message,
            })
            setIsLoading(false);
          } else {
            Response({
              title: "User Created",
              description: "User Created Successfully",
            })
            setIsOpen(false); 
            setIsLoading(false);
          }

        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }
    },
  }


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add new user</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="h-full">
        <FormX submittionLabel="Create A New User"  pending={isLoading} structure={formStructure} className="p-4 shadow-xl rounded-lg border bg-white" />
        </div>

      </DialogContent>
    </Dialog>
  )
}
