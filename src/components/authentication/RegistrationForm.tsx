import React, { useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { Divider } from '@components'
import SocialAuthButtons from './SocialAuthButtons'

interface Props {
  hasLabel?: boolean
}

const RegistrationForm: React.FC<Props> = ({ hasLabel }) => {
  // State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  })

  // Handler
  const handleSubmit = (e: any) => {
    e.preventDefault()
    toast.success(`Successfully registered as ${formData.name}`, {
      theme: 'colored',
    })
  }

  const handleFieldChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Name</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Name' : ''}
          value={formData.name}
          name="name"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Email address</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Email address' : ''}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Row className="g-2 mb-3">
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Password' : ''}
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Confirm Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Confirm Password' : ''}
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" id="acceptCheckbox" className="form-check">
          <Form.Check.Input
            type="checkbox"
            name="isAccepted"
            checked={formData.isAccepted}
            onChange={(e) =>
              setFormData({
                ...formData,
                isAccepted: e.target.checked,
              })
            }
          />
          <Form.Check.Label className="form-label">
            I accept the{' '}
            <Link href="">
              <a>terms</a>
            </Link>{' '}
            and{' '}
            <Link href="">
              <a>privacy policy</a>
            </Link>
          </Form.Check.Label>
        </Form.Check>
      </Form.Group>

      <Form.Group className="mb-4">
        <Button
          className="w-100"
          type="submit"
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.isAccepted
          }
        >
          Register
        </Button>
      </Form.Group>
      <Divider>or register with</Divider>

      <SocialAuthButtons />
    </Form>
  )
}

export default RegistrationForm
