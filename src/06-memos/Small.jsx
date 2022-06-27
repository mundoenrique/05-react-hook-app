import { memo } from 'react';

export default memo(function Small({ value }) {
	console.log('aquí voy');
	return <small>{value}</small>;
});
