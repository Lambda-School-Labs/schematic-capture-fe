import React from "react"

import { useHistory, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { securityQuestions } from './SecurityQuestions.js'

import { dispatchers } from "../../../shared/actions/authActions"

import {
  FormContainer,
  FormRow,
  FormColumn,
  FormGroup,
  StyledField,
  StyledSelect,
  FieldError,
  Button,
  LineOr,
  Signin,
  Button1
} from "../../Styles/Auth/loginStyles"

const FirstLoginForm = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const { firstLogin } = dispatchers

  const onSubmit = (data) => {
    dispatch(firstLogin(data = {...data, token: props.match.params.userToken }, history))
  }

  return (
    <FormContainer>
      <form className="white" onSubmit={handleSubmit(onSubmit)}>
        <Signin className="signin">First Time Log-in</Signin>
        <FormGroup>
          <StyledField
            data-password
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="New Password"
            aria-label="New Password"
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby="error-password-required"
            ref={register({ required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <FieldError id="error-password-required">
              That's an incorrect password. Try again.
            </FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <StyledSelect
            name="Select Security Question" ref={register({ required: true })}>
            <option value="What was your childhood nickname?">What was your childhood nickname?</option>
            <option value=" In what city did you meet your spouse/significant other?"> In what city did you meet your spouse/significant other?</option>
            <option value=" What is the name of your favorite childhood friend?"> What is the name of your favorite childhood friend?</option>
            <option value="In what city or town was your first job?">In what city or town was your first job?</option>
          </StyledSelect>
        </FormGroup>
        <FormGroup>
          <StyledField
          // @TODO: Finish Field for security answer:
          name="answer"
          id="answer"
          placeholder="Answer to Security Question"
          aria-label="Answer to Security Question"
          />
        </FormGroup>
        <FormRow>
          <FormColumn>
            <Button data-button-continue variant="primary" type="submit">
              Continue
            </Button>
          </FormColumn>
          <FormColumn style={{ textAlign: "right" }}>
            <Link to="/forgotpassword">Forgot password?</Link>
          </FormColumn>
        </FormRow>
      </form>
    </FormContainer>
  )
}

export default FirstLoginForm
