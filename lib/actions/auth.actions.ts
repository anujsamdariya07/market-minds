'use server';

import { headers } from 'next/headers';
import { auth } from '../better-auth/auth';
import { inngest } from '../inngest/client';

export const signUpWithEmail = async ({
  email,
  password,
  fullName,
  country,
  investmentGoals,
  riskTolerance,
  preferredIndustry,
}: SignUpFormData) => {
  try {
    const response = await auth.api.signUpEmail({
      body: { email: email, password: password, name: fullName },
    });

    if (response) {
      await inngest.send({
        name: 'app/user.created',
        data: {
          email: email,
          name: fullName,
          country: country,
          investmentGoals: investmentGoals,
          riskTolerance: riskTolerance,
          preferredIndustry: preferredIndustry,
        },
      });
    }

    return { success: true, data: response };
  } catch (error) {
    console.log('Sign Up Failed!', error);
    return { success: false };
  }
};

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
  try {
    const response = await auth.api.signInEmail({
      body: { email: email, password: password },
    });

    return { success: true, data: response };
  } catch (error) {
    console.log('Sign In Failed!', error);
    return { success: false, error: 'Sign In Failed!' };
  }
};

export const signOut = async () => {
  try {
    await auth.api.signOut({ headers: await headers() });
  } catch (error) {
    console.log('Sign out failed!', error);
    return { success: true, error: 'Sign out failed!' };
  }
};
