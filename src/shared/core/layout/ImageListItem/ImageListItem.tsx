// types
import { ImageListItemProps } from 'shared/core/layout/ImageListItem/ImageListItem.types';

// styles
import { StyledImageListItem } from 'shared/core/layout/ImageListItem/ImageListItem.styles';

export const ImageListItem = (props: ImageListItemProps) => {
	return <StyledImageListItem {...props} />;
};
