import React from "react"
import { Transition } from "react-transition-group"
import { TransitionProps } from "react-transition-group/Transition"

const defaultStyle = (duration: number) => ({
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
})

const transitionStyles: Record<string, Record<"opacity", number>> = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

interface Props {
  visible: boolean
  duration?: number
}

const Opacity: React.FC<Props & Partial<TransitionProps>> = ({
  visible,
  children,
  duration = 300,
  appear = true,
  mountOnEnter = true,
  unmountOnExit = true,
  ...props
}) => {
  return (
    <Transition in={visible} timeout={duration!} {...props}>
      {state => (
        <div
          style={{
            ...defaultStyle(duration),
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default Opacity
