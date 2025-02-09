import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import MultiImageUploadX from "./multi-image-upload-x";
import SingleImageUploadX from "./single-image-upload-x";

const ImageUploadX = ({
    form,
    name,
    label = "Upload Images",
    defaultValues = [],
    size = 3,
    multiple = false,
    defaultValue,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: any;
    name: string;
    label?: string;
    defaultValues?: string[];
    size?: number;
    multiple?: boolean;
    description?: string;
    defaultValue?: string;
}) => {
    const { control, setValue } = form;

    // console.log(defaultValues, 'defaultValues uploadx' )
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem key={field.name + 1}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {multiple ? (
                            <MultiImageUploadX
                                defaultValues={defaultValues || []}
                                // defaultValue={defaultValue}
                                onChange={(value) => {
                                    setValue(field.name, value);
                                }}
                            />
                        ) : (
                            <SingleImageUploadX
                                defaultValue={`${defaultValue || ""}`}
                                onChange={(value) => {
                                    setValue(field.name, value);
                                }}
                            />
                            // <></>
                        )}
                    </FormControl>
                    <FormDescription>
                        Only images. Max size {size}MB each.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default ImageUploadX;