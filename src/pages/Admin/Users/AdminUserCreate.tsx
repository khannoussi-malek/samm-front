import {Heading } from "@chakra-ui/react";
import { Page, PageContent } from "../../../components/Page";
import { UserForm } from "./UserForm";

const AdminUserCreate = () => {
    return (
        <Page containerSize="xl" >
            <PageContent  >
                <Heading>Create User</Heading>
                <UserForm />
            </PageContent>
        </Page>
    );
}
export default AdminUserCreate;