import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { Input, Form, FileInput, Textarea, FormRow } from "@/components/form";

import { Button } from "@/components";

import { useForm } from "react-hook-form";
import { createCabin } from "@/services/apiCabins";
import { Cabin } from "@/types";

function CreateCabinForm() {
    const { register, handleSubmit, reset, getValues, formState } =
        useForm<Cabin>();
    const { errors } = formState;

    const queryClient = useQueryClient();

    const { mutate, isLoading: isCreating } = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
            toast.success("New cabin successfully created");
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
            reset();
        },
        onError: (err: { message: string }) => toast.error(err.message),
    });

    function onSubmit(data: Cabin) {
        mutate({ ...data, image: data.image[0] });
    }

    function onError(errors: unknown) {
        console.log(errors);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormRow label="Cabin name" error={errors?.name?.message as string}>
                <Input
                    type="text"
                    id="name"
                    disabled={isCreating}
                    {...register("name", {
                        required: "This field is required",
                    })}
                />
            </FormRow>

            <FormRow
                label="Maximum capacity"
                error={errors?.maxCapacity?.message as string}
            >
                <Input
                    type="number"
                    id="maxCapacity"
                    disabled={isCreating}
                    {...register("maxCapacity", {
                        required: "This field is required",
                        min: {
                            value: 1,
                            message: "Capacity should be at least 1",
                        },
                    })}
                />
            </FormRow>

            <FormRow
                label="Regular price"
                error={errors?.regularPrice?.message as string}
            >
                <Input
                    type="number"
                    id="regularPrice"
                    disabled={isCreating}
                    {...register("regularPrice", {
                        required: "This field is required",
                        min: {
                            value: 1,
                            message: "Capacity should be at least 1",
                        },
                    })}
                />
            </FormRow>

            <FormRow
                label="Discount"
                error={errors?.discount?.message as string}
            >
                <Input
                    type="number"
                    id="discount"
                    disabled={isCreating}
                    defaultValue={0}
                    {...register("discount", {
                        required: "This field is required",
                        validate: (value) =>
                            value <= getValues().regularPrice ||
                            "Discount should be less than regular price",
                    })}
                />
            </FormRow>

            <FormRow
                label="Description for website"
                error={errors?.description?.message as string}
            >
                <Textarea
                    id="description"
                    defaultValue=""
                    disabled={isCreating}
                    {...register("description", {
                        required: "This field is required",
                    })}
                />
            </FormRow>

            <FormRow label="Cabin photo">
                <FileInput
                    id="image"
                    accept="image/*"
                    {...register("image", {
                        required: "This field is required",
                    })}
                />
            </FormRow>

            <FormRow>
                <>
                    <Button variant="secondary" type="reset">
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isCreating}>
                        Add cabin
                    </Button>
                </>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
