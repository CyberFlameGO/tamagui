import { ReactComponentWithRef, isWeb, styled } from '@tamagui/core'
import { SizableText, SizableTextProps } from '@tamagui/text'
import React, { forwardRef } from 'react'
import { Linking, View } from 'react-native'

// bugfix esbuild strips react jsx: 'preserve'
React['keep']

export type AnchorProps = SizableTextProps & {
  href?: string
  target?: string
  rel?: string
}

const AnchorFrame = styled(SizableText, {
  name: 'Anchor',
  tag: 'a',
  accessibilityRole: 'link',
})

export const Anchor: ReactComponentWithRef<AnchorProps, HTMLAnchorElement | View> =
  AnchorFrame.extractable(
    forwardRef(({ href, target, ...props }, ref) => {
      return (
        <AnchorFrame
          {...props}
          {...(isWeb
            ? {
                href,
                target,
              }
            : {
                onPress: (event) => {
                  props.onPress?.(event)
                  if (href !== undefined) {
                    Linking.openURL(href)
                  }
                },
              })}
          ref={ref as any}
        />
      )
    })
  )
