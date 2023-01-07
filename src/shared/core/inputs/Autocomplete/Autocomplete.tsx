import { AutocompleteProps } from 'shared/core//inputs/Autocomplete/Autocomplete.types';

import { StyledAutocomplete } from 'shared/core/inputs/Autocomplete/Autocomplete.styles';

export const Autocomplete = (props: AutocompleteProps) => {
	return <StyledAutocomplete {...props} />;
};
