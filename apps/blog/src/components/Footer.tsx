import { FC } from 'react'

export interface FooterProps {
  copyright?: string
}

export const Footer: FC<FooterProps> = ({ copyright, ...props }) => {
  return (
    <footer py="8|10|12" {...props}>
      <div variant="container.md">
        {copyright && (
          <p variant="text.sm" textAlign="center" my="0">
            {copyright}
          </p>
        )}
      </div>
    </footer>
  )
}
