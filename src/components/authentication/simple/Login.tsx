import React from 'react'
import { Flex, LoginForm } from '@components'
import Link from 'next/link'

const Login = () => (
  <>
    <Flex justifyContent="between" alignItems="center" className="mb-2">
      <h5>Log in</h5>
      <p className="fs--1 text-600 mb-0">
        or{' '}
        <Link href="/">
          <a>Create an account</a>
        </Link>
      </p>
    </Flex>
    <LoginForm />
  </>
)

export default Login
