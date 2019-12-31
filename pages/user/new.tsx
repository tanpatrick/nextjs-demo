import { NextPage } from "next";
import Page from "~/components/Page";
import UserForm from "~/modules/User/components/UserForm";

const User: NextPage = () => {
  return (
    <Page title="New user">
      <UserForm />
    </Page>
  );
};

export default User;
