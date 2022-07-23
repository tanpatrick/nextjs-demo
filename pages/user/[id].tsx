import Page from '~/components/Page';
import UserForm from '~/modules/User/components/UserForm';

const User = () => {
  return (
    <Page title="Edit user">
      <UserForm mode="edit" />
    </Page>
  );
};

export default User;
