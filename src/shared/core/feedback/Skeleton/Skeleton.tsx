import { StyledSkeleton } from 'shared/core/feedback/Skeleton/Skeleton.styles';
import { SkeletonProps } from 'shared/core/feedback/Skeleton/Skeleton.types';

export const Skeleton = (props: SkeletonProps) => {
	return <StyledSkeleton {...props} />;
};
