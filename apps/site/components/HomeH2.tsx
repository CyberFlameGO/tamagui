import { H2, H3, styled } from 'tamagui'

export const HomeH2 = styled(H2, {
  name: 'HomeH2',
  ta: 'center',
  als: 'center',
  size: '$11',
  maw: 720,
  mt: '$-2',
  $sm: {
    size: '$10',
  },
  $xs: {
    size: '$9',
  },
})

export const HomeH3 = styled(H3, {
  fontFamily: '$body',
  name: 'HomeH3',
  ta: 'center',
  theme: 'alt1',
  als: 'center',
  fow: '400',
  px: 20,
  size: '$8',
  ls: -0.15,
  maw: 690,

  $sm: {
    fow: '400',
    size: '$6',
    color: '$color',
    textTransform: 'none',
  },
})
