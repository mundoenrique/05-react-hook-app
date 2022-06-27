import { useState } from 'react';

export default function useForm(intialFormValues = {}) {
	const [formState, setFormState] = useState(intialFormValues);

	const onInputchange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = (intialFormValues) => {
		setFormState(intialFormValues);
	};

	return { ...formState, formState, onInputchange, onResetForm };
}
