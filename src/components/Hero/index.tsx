import styled from 'styled-components'
import { FormContainer, FormularioHero, TituloHero } from './styled'
// import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
      <FormularioHero>
        <FormContainer>
          <TituloHero>
            As melhores vagas para tecnologia, design e artes visuais.
          </TituloHero>
        </FormContainer>
      </FormularioHero>
    </>
  )
}

// const Hero = () => (
//   <form className={styles.form}>
//     <div className="container">
//       <h2 className={styles.heroTitle}>
//         As melhores vagas para tecnologia, design e artes visuais.
//       </h2>
//     </div>
//   </form>
// )

export default Hero
