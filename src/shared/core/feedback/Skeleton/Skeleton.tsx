// types
import { SkeletonProps } from 'shared/core/feedback/Skeleton/Skeleton.types';

// styles
import { StyledSkeleton } from 'shared/core/feedback/Skeleton/Skeleton.styles';

export const Skeleton = (props: SkeletonProps) => {
	return <StyledSkeleton {...props} />;
};
