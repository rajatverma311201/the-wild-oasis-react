/* eslint-disable  */

import { FileInput, Form, FormRow, Input } from "@/components/form";
import { Button } from "@/components/ui";
import { useUpdateUser, useUser } from "@/hooks/authentication";
import { User } from "@supabase/supabase-js";
import { useState } from "react";

function UpdateUserDataForm() {
    // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
    const { user } = useUser();

    const {
        user_metadata: { fullName: currentFullName },
        email,
    } = user as User;

    const { updateUser, isUpdating } = useUpdateUser();

    const [fullName, setFullName] = useState(currentFullName);
    const [avatar, setAvatar] = useState(null);

    function handleSubmit(e: any) {
        e.preventDefault();
        if (!fullName) return;
        updateUser(
            { fullName, avatar },
            {
                onSuccess: () => {
                    setAvatar(null);
                    e.target.reset();
                },
            },
        );
    }

    function handleCancel() {
        setFullName(currentFullName);
        setAvatar(null);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRow label="Email address">
                <Input value={email} disabled />
            </FormRow>

            <FormRow label="Full name">
                <Input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    id="fullName"
                    disabled={isUpdating}
                />
            </FormRow>

            <FormRow label="Avatar image">
                <FileInput
                    id="avatar"
                    accept="image/*"
                    onChange={(e: any) => setAvatar(e.target.files[0])}
                    disabled={isUpdating}
                />
            </FormRow>

            <FormRow>
                <>
                    <Button
                        type="reset"
                        variant="secondary"
                        disabled={isUpdating}
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button disabled={isUpdating}>Update account</Button>
                </>
            </FormRow>
        </Form>
    );
}

export default UpdateUserDataForm;
