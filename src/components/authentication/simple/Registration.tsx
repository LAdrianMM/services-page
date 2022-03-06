import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import { RegistrationForm } from '@components'

const Registration = () => (
  <>
    <Row className="align-items-center mb-2">
      <Col>
        <h5 id="modalLabel">Register</h5>
      </Col>
      <Col xs="auto">
        <p className="fs--1 text-600 mb-0">
          Have an account?{' '}
          <Link href="">
            <a>Login</a>
          </Link>
        </p>
      </Col>
    </Row>
    <RegistrationForm />
  </>
)

export default Registration
