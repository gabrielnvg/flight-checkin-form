export type FormStep = number;

export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

export type HandleSubmit = (event: FormSubmitEvent, values: any) => void;
