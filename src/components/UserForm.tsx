import React from 'react';
import { useForm } from 'react-hook-form';
import type { UserFormData } from '../types/user';
import { FORM_VALIDATION } from '../utils/constants';

interface UserFormProps {
  onSubmit: (data: UserFormData) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

const UserForm: React.FC<UserFormProps> = React.memo(({ onSubmit, onCancel, isSubmitting = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>();

  const handleFormSubmit = (data: UserFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="user-form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', {
              required: FORM_VALIDATION.NAME.REQUIRED,
              minLength: {
                value: FORM_VALIDATION.NAME.MIN_LENGTH,
                message: FORM_VALIDATION.NAME.MIN_LENGTH_MESSAGE,
              },
            })}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: FORM_VALIDATION.EMAIL.REQUIRED,
              pattern: {
                value: FORM_VALIDATION.EMAIL.PATTERN,
                message: FORM_VALIDATION.EMAIL.PATTERN_MESSAGE,
              },
            })}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...register('username', {
              required: FORM_VALIDATION.USERNAME.REQUIRED,
              minLength: {
                value: FORM_VALIDATION.USERNAME.MIN_LENGTH,
                message: FORM_VALIDATION.USERNAME.MIN_LENGTH_MESSAGE,
              },
            })}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <span className="error-message">{errors.username.message}</span>}
        </div>

        <div className="form-actions">
          <button type="button" onClick={onCancel} className="btn-cancel">
            Cancel
          </button>
          <button type="submit" disabled={isSubmitting} className="btn-submit">
            {isSubmitting ? 'Adding...' : 'Add User'}
          </button>
        </div>
      </form>
    </div>
  );
});

UserForm.displayName = 'UserForm';

export default UserForm;
