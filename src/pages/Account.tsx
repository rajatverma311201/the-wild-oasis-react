import { Column } from "@/components/layout";
import { Heading } from "@/components/typography";
import UpdatePasswordForm from "@/features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "@/features/authentication/UpdateUserDataForm";

function Account() {
    return (
        <Column>
            <Heading as="h1">Update your account</Heading>

            <Column>
                <Heading as="h3">Update user data</Heading>
                <UpdateUserDataForm />
            </Column>

            <Column>
                <Heading as="h3">Update password</Heading>
                <UpdatePasswordForm />
            </Column>
        </Column>
    );
}

export default Account;
