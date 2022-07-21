import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import Link from "next/link";

type UserFormProps = {
  mode?: "new" | "edit";
};

export default function UserForm(props: UserFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const formMode = props.mode || "new";

  const { push, query } = useRouter();
  useEffect(() => {
    if (formMode === "edit") {
      (async () => {
        setLoading(true);

        const response = await fetch(`/api/user/${query.id}`);
        const json = await response.json();

        setLastName(json.lastName);
        setFirstName(json.firstName);
        setEmail(json.email);

        setLoading(false);
      })();
    }
  }, [formMode, query]);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const prefix = formMode == "edit" ? `/${query.id}` : "";

    try {
      setLoading(true);
      const body = { firstName, lastName, email };
      await fetch(`/api/user${prefix}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { marginBottom: 2 },
        "& .MuiButton-root": {
          marginLeft: 1,
          marginBottom: 2,
        },
      }}
      autoComplete="off"
      onSubmit={submitData}
    >
      <Card sx={{ maxWidth: 375, margin: "auto" }}>
        <CardHeader title={`${formMode === "edit" ? "Edit" : "New"} user`} />
        <Divider />
        <CardContent>
          <div>
            <TextField
              value={email}
              fullWidth
              label="Email"
              size="small"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              value={firstName}
              fullWidth
              label="First name"
              size="small"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              value={lastName}
              fullWidth
              label="Last name"
              size="small"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </CardContent>
        <CardActions>
          <LoadingButton
            type="submit"
            color="secondary"
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            {formMode == "edit" ? "Update" : "Save"}
          </LoadingButton>
          {!loading && (
            <Link href="/">
              <Button href="#" color="info" size="medium" variant="outlined">
                Cancel
              </Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
