import { FC } from "react";
import { Icon } from "reflexjs";

export type SearchFormProps = React.InputHTMLAttributes<HTMLInputElement>;

export const SearchForm: FC<SearchFormProps> = ({ ...props }) => {
  return (
    <div rounded="lg" position="relative">
      <input
        placeholder="Type to search..."
        variant="input"
        pr="12"
        {...props}
      />
      <div
        display="flex"
        position="absolute"
        top="0"
        right="0"
        px="4"
        bottom="0"
        alignItems="center"
        justifyContent="center"
        opacity="0.5"
      >
        <Icon name="search" size="6" />
      </div>
    </div>
  );
};
