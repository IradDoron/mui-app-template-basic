// types
import { ImageListProps } from 'shared/core/layout/ImageList/ImageList.types';

// styles
import { StyledImageList } from 'shared/core/layout/ImageList/ImageList.styles';

export const ImageList = (props: ImageListProps) => {
	return <StyledImageList {...props} />;
};
