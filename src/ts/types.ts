export type FetchStatus = {
  hasError: boolean;
  isLoading: boolean;
};

export type SetFetchStatus = (setFormStep: {
  hasError: boolean;
  isLoading: boolean;
}) => void;

export type SetFormStep = (
  setFormStep: number | ((formStep: number) => number),
) => void;
