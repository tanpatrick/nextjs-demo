import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";
import Link from "next/link";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import { DeepPartial, SubmitHandler, useForm as useReactForm, UseFormReturn } from "react-hook-form";
import SaveIcon from "@mui/icons-material/Save";

export type FormMode = "new" | "edit";

interface FormProps<T> {
  children: ReactNode;
  initialValues?: DeepPartial<T>;
  mode?: FormMode;
  onSubmit: (data: T) => void;
  title?: string;
}

interface FormContextProps extends UseFormReturn<any, any> {
  mode: FormMode;
  initialValues?: any;
}

const FormContext = createContext<FormContextProps | null>(null);

export const useForm = () => {
  return useContext(FormContext);
};

export default function Form<T>(props: FormProps<T>) {
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<T> = (data) => {
    setLoading(true);
    props.onSubmit(data);
  };

  const reactForm = useReactForm<T, any>({ defaultValues: props.initialValues });

  return (
    <FormContext.Provider
      value={{
        ...reactForm,
        mode: props.mode || "new",
        initialValues: props.initialValues,
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            marginBottom: 2,
            marginTop: 2,
          },
          "& .MuiButton-root": {
            marginLeft: 1,
            marginBottom: 1,
            marginTop: 1,
          },
        }}
        autoComplete="off"
        onSubmit={reactForm.handleSubmit(onSubmit)}
      >
        <Card sx={{ maxWidth: 375, margin: "auto" }}>
          <CardHeader title={props.title} />
          <CardContent>{props.children}</CardContent>
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
            <Link href="/">
              <Button href="#" color="info" size="medium" variant="outlined">
                Cancel
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </FormContext.Provider>
  );
}
