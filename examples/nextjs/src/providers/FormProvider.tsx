import { FormspreeProvider } from '@formspree/react'
import { FC } from 'react'

const FormProvider: FC = ({ children }) => {
  return (
    <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID as string}>
      {children}
    </FormspreeProvider>
  )
}

export default FormProvider
