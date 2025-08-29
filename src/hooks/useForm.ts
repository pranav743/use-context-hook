import { useState } from 'react';
import type { FormValues } from '../types';

export function useForm(initialValues: FormValues) {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm
  };
}
