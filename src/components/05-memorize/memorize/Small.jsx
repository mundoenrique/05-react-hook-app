import { memo } from 'react';

export const Small = memo(function ({ value }) {
	return <small>{value}</small>;
});
