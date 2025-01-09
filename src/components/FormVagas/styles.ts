import styled from 'styled-components'
import colors from '../../colors'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${colors.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Input = styled.input`
  padding: 0 16px;
  outline-color: ${colors.primaria};
`

export const BtnPesquisar = styled.button`
  background-color: ${colors.primaria};
  border: 1px solid ${colors.primaria};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${colors.secundaria};
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: darken(${colors.primaria}, 10%);
  }
`
