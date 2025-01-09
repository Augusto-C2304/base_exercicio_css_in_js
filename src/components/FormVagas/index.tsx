import { FormEvent, useState } from 'react'

import { Formulario, Input, BtnPesquisar } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario>
      <Input
        placeholder="Font-and, Fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar>Pesquisar</BtnPesquisar>
    </Formulario>
  )

  // return (
  //   <form className={styles.form} onSubmit={aoEnviarForm}>
  //     <input
  //       className={styles.campo}
  //       placeholder="Front-end, fullstack, node, design"
  //       onChange={(e) => setTermo(e.target.value)}
  //       type="search"
  //     />
  //     <button className={styles.btnPesquisar} type="submit">
  //       Pesquisar
  //     </button>
  //   </form>
  // )
}
export default FormVagas
