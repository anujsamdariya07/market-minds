'use client';

import { CountrySelectField } from '@/components/forms/CountrySelectField';
import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';
import { Button } from '@/components/ui/button';
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from '@/lib/constants';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'IN',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology',
    },
    mode: 'onBlur',
  });
  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className='form-title'>Sign Up & Personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        {/* INPUTS */}
        <InputField
          name='fullName'
          label='Full Name'
          placeholder='John Doe'
          register={register}
          error={errors.fullName}
          validation={{ required: 'Full Name is required!', minLength: 2 }}
        />

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

        <CountrySelectField
          name='country'
          label='Country'
          control={control}
          required
          error={errors.country}
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

        <SelectField
          name='investmentGoals'
          label='Investment Goals'
          placeholder='Select your investment goal'
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
        />

        <SelectField
          name='rickTolerance'
          label='Risk Tolerance'
          placeholder='Select your risk level'
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
        />

        <SelectField
          name='preferredIndustry'
          label='Preferred Industry'
          placeholder='Select your preferred industry'
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
        />

        <Button
          type='submit'
          disabled={isSubmitting}
          className='yellow-btn w-full mt-5'
        >
          {isSubmitting ? 'Creating account' : 'Start Your Investing Journey'}
        </Button>

        <FooterLink
          text='Already have an account?'
          linkText='Sign In'
          href='/sign-in'
        />
      </form>
    </>
  );
};

export default SignUpPage;
