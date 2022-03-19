export type FormControl = {
  type: string;
  label: string;
  defaultValue?: string;
};

export type FormBuilderConfig = Record<string, FormControl>;

export type FormValues = Record<string, string>;
