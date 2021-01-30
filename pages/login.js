import Head from "next/head"
import styled from "styled-components"

const PageContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  @media (min-width: 800px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const LoginHeader = styled.h2`
  margin-bottom: 0.6rem;
  width: 11rem;
  user-select: none;
`
const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.2rem;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  user-select: none;
`
const InputContainer = styled.span`
  display: inline-flex;
  flex-direction: column;
  &:first-child {
    margin-bottom: 0.6rem;
  }
`
const InputLabel = styled.label`
  font-size: 11px;
  margin-bottom: 3px;
`
const InputBase = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
`
const EmailInput = styled(InputBase)``
const PasswordInput = styled(InputBase)``

const LoginButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 3px;
  background: transparent;
  font-size: 10px;
  border: 1px solid rgb(230, 230, 250);
  border-radius: 6px;
  outline: none;
  cursor: pointer;
`
const ForgotPasswordLink = styled.a`
  margin-top: 0.6rem;
  font-size: 10px;
  cursor: pointer;
  user-select: none;
`
export default function Login() {
  return (
    <PageContainer>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginHeader>Login</LoginHeader>
      <LoginCard>
        <InputContainer>
          <InputLabel>Email</InputLabel>
          <EmailInput />
        </InputContainer>
        <InputContainer>
          <InputLabel>Password</InputLabel>
          <PasswordInput />
        </InputContainer>
        <LoginButton>LOGIN</LoginButton>
      </LoginCard>
      <ForgotPasswordLink>Forgot your password?</ForgotPasswordLink>
    </PageContainer>
  )
}
