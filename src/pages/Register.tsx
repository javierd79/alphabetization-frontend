import axios from 'axios'
import '../styles/Login.css'
import { API_URL } from '../utils/Constants'
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Button, Checkbox, Input, Select } from '@mantine/core';
import { Link } from 'react-router-dom';

interface IRegisterForm { 
  name: string;
  phone: string;
  email: string;
  password: string;
  password_confirmation: string;
  profession: string;
  level: string;
  terms: boolean
}

const studiesData = [
  {
    value: 'no studies',
    label: 'No posee estudios'
  },
  {
    value: 'primary school',
    label: 'Estudios primarios'
  },
  {
    value: 'highschool',
    label: 'Estudios secundarios'
  },
  {
    value: 'degree',
    label: 'Estudios universitarios'
  },
  {
    value: 'magister',
    label: 'Estudios post-universitarios (magister)'
  },
]

function Register() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const form = useForm<IRegisterForm>({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      password_confirmation: '',
      profession: '',
      level: '',
      terms: false
    },

    validate: {
      name: (value) => value.length > 5 ? null : 'Invalid name',
      phone: (value) => Number(value) ? null : 'Invalid phone number', 
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => value.length >= 8 ?  null : 'Invalid password',
      password_confirmation: (value, values) => value === values.password ?  null : 'Invalid password',
      profession: (value) => value.length > 1 ? null : 'Invalid profession',
      level: (value) => value.length > 5 ? null : 'Invalid level',
      terms: (value) => value ? null : 'Accept terms to proceed.'
    }
  });

  const handleSubmit = () => {
    axios.post(API_URL + '/users', {
      user: form.getValues()
    }).then((res) => {
      console.log(res)
      setIsError(false)
      setIsSuccess(true)
    }).catch((err) => {
      console.log(err)
      setIsError(true)
    })
  }


  return (
    <div className="w-users-userformpagewrap full-page-wrapper">
      <a href="./index.html" className="form-page-logo-link w-inline-block">
        <img src="/img/ADlogonew2.png" loading="lazy" alt="Memberbase Logo" className="form-page-logo" />
      </a>
      <div className="w-users-usersignupformwrapper admin-form-card">
        <div tabIndex={-1} className="w-users-userformsuccessstate verification-box w-form-success">
          <div className="w-users-userformheader">
            <img src="https://assets.website-files.com/62aee78456e4207786ac4d18/62b24da7bf2f4792b17375a8_Tick%20Circle%20Icon.svg" alt="" className="icon" />
            <h2>Account activated</h2>
          </div>
          <p>Your account was created successfully. You can now log in by navigating to the link below.</p>
          <a href="/login" className="button w-button">Go to login</a>
        </div>
        <form>
          <div className="w-users-userformheader form-card-header">
            <h2 className="heading h3">Crea tu cuenta</h2>
          </div>

          <Input 
            type="email" 
            id="wf-sign-up-email" 
            placeholder="Correo" 
            maxLength={256} 
            name="email" 
            mb={10}
            py={2}
            className="text-field w-input" 
            required 
            variant="unstyled"
            error={form.errors.email}
            disabled={isSuccess}
            {...form.getInputProps('email')}
          />
          <Input 
            type="text" 
            className="text-field w-input" 
            maxLength={256} 
            name="fullname" 
            mb={10}
            py={2}
            data-name="fullname" 
            placeholder="Nombre Completo" 
            id="wf-sign-up-fullname" 
            required 
            variant="unstyled"
            error={form.errors.name}
            disabled={isSuccess}
            {...form.getInputProps('name')}
          />
          <Input 
            type="text" 
            className="text-field w-input" 
            maxLength={256} 
            mb={10}
            py={2}
            name="phone" 
            data-name="phone" 
            placeholder="Número de Teléfono" 
            id="wf-sign-up-phone" 
            required 
            variant="unstyled"
            error={form.errors.phone}
            disabled={isSuccess}
            {...form.getInputProps('phone')}
          />
          <Input 
            type="password" 
            id="wf-sign-up-password" 
            placeholder="Contraseña" 
            maxLength={256} 
            mb={10}
            py={2}
            name="password" 
            className="text-field w-input" 
            required 
            variant="unstyled"
            error={form.errors.password}
            disabled={isSuccess}
            {...form.getInputProps('password')}
          />
          <Input 
            type="password" 
            id="wf-sign-up-confirm-password" 
            placeholder="Confirmar Contraseña" 
            maxLength={256} 
            mb={10}
            py={2}
            name="confirm_password" 
            className="text-field w-input" 
            required 
            variant="unstyled"
            error={form.errors.password_confirmation}
            disabled={isSuccess}
            {...form.getInputProps('password_confirmation')}
          />

          <Input 
            type="text" 
            className="text-field w-input" 
            maxLength={256} 
            mb={10}
            py={2}
            name="occupation" 
            data-name="occupation" 
            placeholder="A qué te dedicas" 
            id="wf-sign-up-occupation" 
            required 
            variant="unstyled"
            error={form.errors.profession}
            disabled={isSuccess}
            {...form.getInputProps('profession')}
          />

          <Select 
            className="text-field w-input" 
            name="education_level" 
            id="wf-sign-up-education-level" 
            required
            variant='unstyled'
            py={2}
            data={studiesData}
            error={form.errors.level}
            disabled={isSuccess}
            {...form.getInputProps('level')}
          />

          <label className="w-checkbox checkbox-field">
            <Checkbox 
              type="checkbox" 
              mr={20} 
              name="accept_privacy" 
              id="wf-sign-up-accept-privacy" 
              data-name="accept_privacy" 
              required 
              className="w-checkbox-input check-box" 
              error={form.errors.terms}
              disabled={isSuccess}
              {...form.getInputProps('terms')}
            />
            <span className="checkbox-label w-form-label">
              Acepto la política de privacidad y los términos de servicio de Cevaz
            </span>
          </label>

          <Button
            color="black"
            className="w-users-userformbutton button w-button" 
            onClick={handleSubmit}
            fullWidth
            disabled={!form.isValid()}
          >
            Crear Cuenta
          </Button>

          <div className="w-users-userformfooter form-card-footer">
            <span>¿Ya tienes cuenta?</span>
            <Link to="/login">Inicia sesión aquí</Link>
          </div>
        </form>

        <div style={{ display: isError ? "block" : "none" }} data-wf-user-form-error="true" className="w-users-userformerrorstate w-form-fail">
          <div className="user-form-error-msg" wf-signup-form-general-error-error="There was an error signing you up. Please try again, or contact us if you continue to have problems." wf-signup-form-not-allowed-error="You&#x27;re not allowed to access this site, please contact the admin for support." wf-signup-form-invalid-email-error="Make sure your email exists and is properly formatted (e.g., user@domain.com)." wf-signup-form-email-already_exist-error="An account with this email address already exists. Log in or reset your password." wf-signup-form-use-invite_email-error="Use the same email address your invitation was sent to." wf-signup-form-invalid-password-error="Your password must be at least 8 characters." wf-signup-form-not-verified-error="We couldn&#x27;t verify your account. Please try again, or contact us if you continue to have problems." wf-signup-form-expired-token-error="This verification link has expired. A new verification link has been sent to your email. Please try again, or contact us if you continue to have problems.">There was an error signing you up. Please try again, or contact us if you continue to have problems.</div>
        </div>
        <div tabIndex={-1} className="w-users-usersignupverificationmessage verification-box w-form-verification" data-wf-user-form-verification="true">
          <div className="w-users-userformheader">
            <img src="https://assets.website-files.com/62aee78456e4207786ac4d18/62b24cdfc31a372da2f5e1c1_Email%20Sent%20Icon.svg" alt="" className="icon" />
            <h2>Verification Required</h2>
          </div>
          <p>Account verification required. Please check your email to find your unique verification link.</p>
        </div>
      </div>
    </div>
  )
}

export default Register