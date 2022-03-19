import { FormControl, FormValues } from "./types";

export function mapInitialValues(
  entries: Array<[string, FormControl]>
): FormValues {
  return entries.reduce(
    (result, [key, control]) => ({
      ...result,
      [key]: control.defaultValue ?? "",
    }),
    {}
  );
}

export function mapInputType(type: string): string {
  const lowered = type.toLowerCase();

  if (lowered.startsWith("input")) {
    return lowered.slice(5);
  }

  return type;
}
