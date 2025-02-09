/* eslint-disable react/jsx-key */
import React from 'react'
import { Card, Paragraph, SizableText, Text, XStack, YStack } from 'tamagui'

import { ContainerLarge } from '../Container.server'
import { CheckCircle } from '../icons/CheckCircle.server'
import { HomeH2 } from './HomeHeading.server'

export const HeroProps = () => {
  return (
    <ContainerLarge position="relative">
      <YStack ai="center">
        <HomeH2>
          <span className="rainbow clip-text">More powerful</span> props on every component.
        </HomeH2>
      </YStack>

      <XStack px="$6" pt="$8" space="$4" $sm={{ flexDirection: 'column', px: 0 }}>
        <YStack w="50%" $sm={{ w: '100%' }}>
          <Features
            space="$4"
            items={[
              <FeatureItem label="Press & hover events">
                onHoverIn, onHoverOut, onPressIn, and onPressOut.
              </FeatureItem>,
              <FeatureItem label="Pseudo styles">
                Style hover, press, and focus, in combination with media queries.
              </FeatureItem>,
              <FeatureItem label="Media queries">For every style/variant.</FeatureItem>,
            ]}
          />
        </YStack>
        <YStack w="50%" $sm={{ w: `100%` }}>
          <Features
            space="$4"
            items={[
              <FeatureItem label="Themes">Change theme on any component.</FeatureItem>,
              <FeatureItem label="Animations">
                Animate every component, enter and exit styling, works with pseudo states.
              </FeatureItem>,
              <FeatureItem label="DOM escape hatches">
                Support for className and other HTML attributes.
              </FeatureItem>,
            ]}
          />
        </YStack>
      </XStack>
    </ContainerLarge>
  )
}

const FeatureItem = ({ label, children }) => {
  return (
    <SizableText>
      <SizableText size="$4" fow="800">
        {label}
      </SizableText>
      &nbsp;&nbsp;-&nbsp;&nbsp;
      <SizableText size="$4" tag="span" theme="alt2">
        {children}
      </SizableText>
    </SizableText>
  )
}

const Features = ({ items, ...props }: any) => {
  return (
    <YStack space {...props}>
      {items.map((feature, i) => (
        <Card key={i} p="$6" elevation="$1" $sm={{ p: '$4' }}>
          <XStack tag="li">
            <Text color="$green9">
              <CheckCircle />
            </Text>
            <Paragraph color="$gray11">{feature}</Paragraph>
          </XStack>
        </Card>
      ))}
    </YStack>
  )
}
