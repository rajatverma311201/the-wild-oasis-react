import { Form, FormRow, Input } from "@/components/form";
import { Button } from "@/components/ui";
import { useUpdateUser } from "@/hooks/authentication";
import { useForm } from "react-hook-form";

function UpdatePasswordForm() {
    const { register, handleSubmit, formState, getValues, reset } = useForm();
    const { errors } = formState;

    const { updateUser, isUpdating } = useUpdateUser();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function onSubmit({ password }: any) {
        updateUser({ password }, { onSuccess: () => reset() });
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow
                label="New password (min 8 chars)"
                error={errors?.password?.message as string}
            >
                <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    disabled={isUpdating}
                    {...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 8,
                            message: "Password needs a minimum of 8 characters",
                        },
                    })}
                />
            </FormRow>

            <FormRow
                label="Confirm password"
                error={errors?.passwordConfirm?.message as string}
            >
                <Input
                    type="password"
                    autoComplete="new-password"
                    id="passwordConfirm"
                    disabled={isUpdating}
                    {...register("passwordConfirm", {
                        required: "This field is required",
                        validate: (value: string) =>
                            getValues().password === value ||
                            "Passwords need to match",
                    })}
                />
            </FormRow>
            <FormRow>
                <>
                    <Button onClick={reset} type="reset" variant="secondary">
                        Cancel
                    </Button>
                    <Button disabled={isUpdating}>Update password</Button>
                </>
            </FormRow>
        </Form>
    );
}

export default UpdatePasswordForm;
