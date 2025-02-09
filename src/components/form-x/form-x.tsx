"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
} from "@/components/ui/form"
// import { toast } from "sonner"
import SubmitX from "./submit-x"
import InputX, { InputX___Type_InputTypes, TYPE__SelectOption } from "./input-x"
import CheckboxX from "./checkbox-x"
// import ImageUploadX from "./image-upload-x"
import ImageUpload from "./image-upload"
import React, { Fragment, useEffect } from "react"
import { cn } from "@/lib/utils"
import RichTextEditor from "../common/wysiwyg-editor"
import MultiSelect from "./multi-select"
import ImageUploadX from "./image-upload-x"
import MultiInput from "./multi-input"

export type FormX__TYPE_Field = {
  id?: number;
  type: InputX___Type_InputTypes | "checkbox" | "image" | "images" | "group" | "slug" | "editor";
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validation?: z.ZodType<any, z.ZodTypeDef, any>;
  defaultValue?: object | string | boolean | Date | undefined | null | string[];
  multiple?: boolean;
  fields?: FormX__TYPE_Field[];
  options?: TYPE__SelectOption[];
  location?: string;
  date_range?: string;
  images?: File[];
  image?: File;
  disabled?: boolean;
  relatedTo?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: any[];

}
export type FormX__TYPE_Structure = {
  fields: FormX__TYPE_Field[],
  className?: string;
  submission: {
    toast: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    submitHandler: (data: any) => void;
  }
}

// should be called from the parent component
export const FormXStructure_DEMO: FormX__TYPE_Structure = {
  fields: [
    {
      id: 1,
      type: "text",
      name: "username",
      label: "Username",
      placeholder: "Enter your username",
      description: "This is your public display name.",
      validation: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
      defaultValue: "John Doe"
    },
  ],
  submission: {
    toast: true,
    submitHandler: (data) => { console.log(data) }
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormX__SchemaBuilder = (fields: FormX__TYPE_Field[]): [z.ZodType<any, z.ZodTypeDef, any>, Record<string, any>, any] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buildSchemaAndDefaults = (fields: FormX__TYPE_Field[]): [Record<string, any>, Record<string, any>] => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const schemaObject: Record<string, any> = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const defaultValues: Record<string, any> = {};

    fields.forEach((field) => {
      if (field.type === "group" && field.fields) {
        const [nestedSchema, nestedDefaults] = buildSchemaAndDefaults(field.fields);

        schemaObject[field.name] = z.object(nestedSchema);

        defaultValues[field.name] = nestedDefaults;
      } else {
        schemaObject[field.name] = field.validation || z.string().min(1, "Required");
        defaultValues[field.name] = field.defaultValue ?? "";
      }
    });

    return [schemaObject, defaultValues];
  };

  const [schemaObject, defaultValues] = buildSchemaAndDefaults(fields);
  const schema = z.object(schemaObject);

  return [schema, defaultValues, schema];
}

export function FormX({ structure = FormXStructure_DEMO, className = "", submittionLabel = "Submit", setPage, pending = false }: { structure?: FormX__TYPE_Structure, className?: string, submittionLabel?: string, setPage?: (page: string) => void, pending?: boolean }) {
  const [FormSchema, defaultValues] = FormX__SchemaBuilder(structure.fields);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    structure?.submission?.submitHandler(data);
  }

  useEffect(() => {
    console.log("Form errors:", form.formState.errors);
    // console.log("Form values:", form.getValues());

    setPage?.(form.watch("select_page") || form.getValues()?.select_page);

  }, [form.formState]);



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn(className, "w-full space-y-6")}>
        {renderFields(structure?.fields, form)}
        <SubmitX pending={form.formState.isSubmitting || pending} text={submittionLabel} className="w-full hover:bg-primary h-[50px]" />
      </form>
    </Form>
  )
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderFields(fields: FormX__TYPE_Field[], form: any, parentName?: string) {
  return fields.map((fieldDetails, idx) => {
    const { name, label, placeholder, description, type, fields: nestedFields, options, defaultValue, defaultValues, disabled, relatedTo } = fieldDetails;
    const fullName = parentName ? `${parentName}.${name}` : name;

    return (
      <Fragment key={idx}>
        {type === "group" && nestedFields ? (
          <div className="space-y-4">
            {label && <h3 className="font-medium">{label}</h3>}
            {description && <p className="text-sm text-gray-500">{description}</p>}
            <div className="pl-4 border-l space-y-6">
              {renderFields(nestedFields, form, fullName)}
            </div>
          </div>
        ) : type === "editor" ? (
          <RichTextEditor defaultValue={defaultValue as string} />
        ) : (
          ["text", "password", "textarea", "select", "date", "number", "slug", 'editor', 'multi-select', 'multi-input'].includes(type) ? (
            <InputX
              form={form}
              name={fullName}
              label={label}
              placeholder={placeholder}
              description={description}
              type={type as InputX___Type_InputTypes}
              options={options}
              disabled={disabled}
              relatedTo={relatedTo}
              defaultValue={defaultValue as string}
            />
          ) : type === "checkbox" ? (
            <CheckboxX
              form={form}
              name={fullName}
              label={label}
              description={description}
            />
          ) : type === "images" ? (
            <ImageUploadX
              form={form}
              name={fullName}
              label={label}
              description={description}
              multiple={true}
              defaultValue={`${defaultValue || ""}`}
              defaultValues={defaultValues || []}
            />
          )
            : type === "image" ? (
              <ImageUpload
                label={label || ""}
                form={form}
                name={fullName}
                defaultValue={defaultValue}
                defaultValues={defaultValues || []} />

            ) : type === "multi-select" ? (
              <MultiSelect
                name={fullName}
                options={options || []}
                defaultValues={defaultValues || []}
              />
            ) : type === "multi-input" ? (
              <MultiInput
                form={form}
                name={fullName}
                label={label}
                placeholder={placeholder}
                description={description}
                options={options || []}
                defaultValues={defaultValues || []}
              />
            ) : null
        )}
      </Fragment>
    );
  });
}



