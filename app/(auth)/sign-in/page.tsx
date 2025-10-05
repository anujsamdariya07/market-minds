'use client';

import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/InputField';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });
  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className='form-title'>Welcome Back</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField
          name='email'
          label='Email'
          placeholder='johndoe@gmail.com'
          register={register}
          error={errors.email}
          validation={{
            required: 'Email is required!',
            pattern: /^\w+@\w+\.\w+$/,
            message: 'Email address is required!',
          }}
        />

        <InputField
          name='password'
          label='Password'
          placeholder='*********'
          register={register}
          type='password'
          error={errors.password}
          validation={{ required: 'Password is required!', minLength: 8 }}
        />

        <Button
          type='submit'
          disabled={isSubmitting}
          className='yellow-btn w-full mt-5'
        >
          {isSubmitting ? 'Logging in' : 'Login'}
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText='Create an account'
          href='/sign-up'
        />
      </form>
    </>
  );
};

export default SignInPage;
