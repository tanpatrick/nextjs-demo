import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TextField from "~/components/TextField";
import Form from "~/components/Form";
import { FormMode } from "~/components/Form";

type UserFormProps = {
  mode?: FormMode;
};

interface User {
  email: string;
  firstName: string;
  lastName: string;
}

export default function UserForm(props: UserFormProps) {
  const formMode = props.mode || "new";
  const [user, setUser] = useState<User>();

  const { push, query } = useRouter();
  useEffect(() => {
    if (formMode === "edit" && query.id) {
      (async () => {
        const response = await fetch(`/api/user/${query.id}`);
        setUser(await response.json());
      })();
    }
  }, [formMode, query]);

  const onSubmit = async (user: User) => {
    const prefix = formMode == "edit" ? `/${query.id}` : "";

    try {
      await fetch(`/api/user${prefix}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      await push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      mode={props.mode}
      initialValues={user}
      onSubmit={onSubmit}
      title={`${formMode === "edit" ? "Update" : "New"} user`}
    >
      <div>
        <TextField label="Email" name="email" type="email" required />
      </div>
      <div>
        <TextField label="First name" name="firstName" required />
      </div>
      <div>
        <TextField label="Last name" name="lastName" required />
      </div>
    </Form>
  );
}
