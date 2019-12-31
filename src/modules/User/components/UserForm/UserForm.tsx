import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from "@mui/material";
import Router from "next/router";
import { useState } from "react";
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

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (formMode === "edit") {
      alert("Not yet implemented");
      return;
    }

    try {
      setLoading(true);
      const body = { firstName, lastName, email };
      await fetch(`/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/");
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
              fullWidth
              label="First name"
              size="small"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <TextField
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
            Save
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
