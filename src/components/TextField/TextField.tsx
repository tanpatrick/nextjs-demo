import { TextField as MuiTextField } from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "~/components/Form";

interface TextFieldProps {
  label?: string;
  name: string;
  type?: React.InputHTMLAttributes<unknown>["type"];
  required?: boolean;
}

export default function TextField(props: TextFieldProps) {
  const form = useForm();
  const defaultValue = form?.initialValues && form?.initialValues[props.name];

  useEffect(() => {
    form?.mode === "edit" && form?.setValue(props.name, defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <Controller
      name={props.name}
      control={form?.control}
      defaultValue=""
      render={({ field }) => (
        <MuiTextField
          fullWidth
          label={props.label}
          name={field.name}
          onBlur={field.onBlur}
          onChange={field.onChange}
          ref={field.ref}
          required={props.required}
          size="medium"
          type={props.type}
          value={field.value}
        />
      )}
    />
  );
}
