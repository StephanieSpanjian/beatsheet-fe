'use client'
import { forwardRef, ReactElement } from 'react'
import Slide, { SlideProps } from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { SlideDirection } from './enums/transitions'

export type CustomTransitionProps = TransitionProps & {
  children: ReactElement<any, any>
}

const Transition = forwardRef(function Transition(
  props: CustomTransitionProps,
  ref: React.Ref<unknown>
) {
  // const { direction = SlideDirection.DOWN } = props
  // const slideProps = { ...props, slideDirection: undefined }

  // const bob : TransitionProps = {
  //   direction
  // }
  // const { enter, dire} = props

  // const bobbbb : SlideProps = {
  //   direction
  // }

  return (
    <Slide
      // direction={direction}
      ref={ref}
      // {...slideProps}
      {...props}
    />
  )
})

export default Transition
