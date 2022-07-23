import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import SaveIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import type { NextPage } from 'next';
import Link from 'next/link';

import Page from '~/components/Page';
import UserTable from '~/modules/User/components/UserTable';

const Home: NextPage = () => {
  return (
    <Page title="Welcome, nextjs app!">
      <Link href="/user/new">
        <Button href="#" color="info" size="medium" startIcon={<SaveIcon />} variant="outlined">
          New
        </Button>
      </Link>
      <UserTable />
    </Page>
  );
};

export default withPageAuthRequired(Home);
