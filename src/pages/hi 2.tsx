import Footer from '@/lib/core/Footer';
import { colors } from '@/lib/theme/colors';
import { Column, Padding, Wrap } from '@/lib/widgets/_index';
import React from 'react';

export default function Hi() {
  return (
    <>
      <Padding all={30} margin={{ top: 30 }}>
        <Column gap={16}>
          <Wrap backgroundColor={colors.blueBg} borderRadius={18} padding={{ all: 20 }}>
            131 sadad
          </Wrap>

          <Wrap backgroundColor={colors.blueBg} borderRadius={18} padding={{ all: 20 }}>
            sadaddasd13123
          </Wrap>

          <Wrap backgroundColor={colors.blueBg} borderRadius={18} padding={{ all: 20 }}>
            sadad
          </Wrap>
        </Column>
      </Padding>
      <Footer />
    </>
  );
}
