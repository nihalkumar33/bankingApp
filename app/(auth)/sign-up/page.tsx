import AuthForm from '@/components/AuthForm'
import React from 'react'
import { getLoggedInUser } from '@/lib/actions/user.actions';

export const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser)
  return (
    <section className="flex flex-center size-full max-sm:px-6">
        <AuthForm type="sign-up"/>
    </section>
  )
}

export default SignUp
