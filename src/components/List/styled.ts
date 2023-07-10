import { styled } from 'styled-components'

export const ListContainer = styled.section`
  width: 73.6rem;
  margin: -10px auto 0;
`

export const FormContainer = styled.form`
  display: flex;
  gap: 0.8rem;

  label {
    width: 1px;
    height: 1px;
    opacity: 0;
    position: absolute;
  }
`

export const InputTask = styled.input`
  flex: 1;
  width: 100%;
  padding: 1.6rem;
  border-radius: 8px;
  ${(props) => `color: ${props.theme['gray-100']}`};
  ${(props) => `border: 1px solid ${props.theme['gray-700']}`};
  ${(props) => `background-color: ${props.theme['gray-500']}`};

  &::placeholder {
    ${(props) => `color: ${props.theme['gray-300']}`};
  }
`

export const ButtonTask = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 1.6rem;
  font-weight: bold;
  font-size: 1.4rem;
  border-radius: 8px;
  ${(props) => `color: ${props.theme['gray-100']}`};

  ${(props) => `border: 1px solid ${props.theme['gray-700']}`};
  ${(props) => `background-color: ${props.theme['blue-dark']}`};
`

export const ContainerInfoTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 6.4rem;

  span {
    padding: 0.2rem 0.8rem;
    border-radius: 50%;
    ${(props) => `color: ${props.theme['gray-200']}`};
    ${(props) => `background-color: ${props.theme['gray-400']}`};
  }
`

export const CreateTask = styled.p`
  ${(props) => `color: ${props.theme.blue}`};
`

export const CompletedTask = styled.p`
  ${(props) => `color: ${props.theme.purple}`};
`

export const ListTask = styled.ul`
  margin-top: 2.4rem;

  li {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    font-size: 1.4rem;
    padding: 1.6rem;
    border-radius: 8px;

    ${(props) => `border: 1px solid ${props.theme['gray-400']}`};
    ${(props) => `color: ${props.theme['gray-100']}`};
    ${(props) => `background-color: ${props.theme['gray-500']}`};
  }
`
