/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

import { authTokenVar, isLoggedInVar } from '@/lib/apollo';
import { LOCALSTORAGE_TOKEN } from '@/lib/env';

import { Button, Input, Link, Typography } from '@/components';

import { LoginInput, useLoginMutation } from '@/__generated__/graphql';
import { SvgAuthLoginArrow } from '@/ui/icons/icons';

export default function Login() {
  const router = useRouter();
  const [loginMutation] = useLoginMutation({
    onCompleted: (data) => {
      const {
        login: { ok, token },
      } = data;

      if (ok && token && LOCALSTORAGE_TOKEN) {
        localStorage.setItem(LOCALSTORAGE_TOKEN, token);
        authTokenVar(token);
        isLoggedInVar(true);
        router.push('/');
      }
    },
  });

  const { register, getValues, handleSubmit, formState } = useForm<LoginInput>({
    mode: 'onChange',
  });

  function onSubmit() {
    const { email, password } = getValues();
    loginMutation({
      variables: {
        loginInput: { email, password }, // admin@email.compassword: password, // password },
      },
    });
  }

  return (
    <div id='wrapper' className='flex flex-col'>
      <div className='flex min-h-[70px] items-center bg-black px-9'> Logo </div>
      <div className='flex h-full'>
        <div className='m-auto flex h-auto w-[432px] flex-col px-9 pt-6'>
          <div className='box-border flex h-full pt-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography as='h1' className='font-normal'>
                What's your username and password?
              </Typography>
              <div className='flex flex-col pt-4'>
                <div className='flex flex-row items-center leading-6'>
                  <div className='mr-4 w-full bg-gray-50 p-3'>
                    <Input
                      variant='input1'
                      name='email'
                      type='email'
                      placeholder='Email'
                      register={register}
                    />
                  </div>
                  <div
                    id='phone-number-or-email-input-container'
                    className='w-full bg-gray-50 p-3'
                  >
                    <Input
                      variant='input1'
                      name='password'
                      type='password'
                      placeholder='Password'
                      register={register}
                    />
                  </div>
                </div>
                <Typography
                  as='p'
                  variant='small'
                  className='pt-5 text-gray-300'
                >
                  By proceeding, you consent to get calls, WhatsApp or SMS
                  messages, including by automated means, from Uber and its
                  affiliates to the number provided.
                </Typography>
              </div>
              <div className='flex flex-row justify-between pb-12 pt-[50px]'>
                <div />
                <Button
                  variant='btnLg2'
                  roundType='round1'
                  size='base'
                  type='submit'
                  disabled={!formState.isValid}
                >
                  <div className='flex items-center'>
                    <div>Login</div>
                    <div>
                      <SvgAuthLoginArrow />
                    </div>
                  </div>
                </Button>
              </div>
            </form>
          </div>

          <div className='flex justify-center pb-5 text-center'>
            <Typography as='p' variant='xs' className='m-0'>
              This site is protected by reCAPTCHA and the Google{' '}
              <Link
                className='text-gray-400'
                href='https://policies.google.com/privacy'
              >
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link
                className='text-gray-400'
                href='https://policies.google.com/terms/new'
              >
                Terms of Service
              </Link>{' '}
              apply.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
