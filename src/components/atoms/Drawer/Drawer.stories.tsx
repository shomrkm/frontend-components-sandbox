import { Meta, StoryObj } from '@storybook/react';
import React, { ComponentProps, useRef, useState } from 'react';

import { Button } from '@/components/atoms';

import { Drawer } from './Drawer';

/**
 * ## Drawer Component
 *
 * - Drawer の表示位置(top)は、props.container に指定した要素と同じになります
 */
export default {
  title: 'components/Atoms/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  args: {
    isOpen: false,
    onClose: () => {},
    container: document.body,
    isModal: true,
    style: {},
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof Drawer>;

type Story = StoryObj<typeof Drawer>;

const DrawerWrapper = (args: ComponentProps<typeof Drawer>) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <div
        style={{
          font: 'bold',
          height: '25px',
          padding: '0.5rem',
          borderBottom: 'solid 1px lightgray',
        }}
      >
        Header
      </div>
      <main ref={ref}>
        <Button size="sm" onClick={() => setIsOpen((prev) => !prev)} style={{ margin: '0.5rem' }}>
          Open / Close
        </Button>
        <Drawer
          {...args}
          isOpen={isOpen}
          container={ref.current}
          style={{ backgroundColor: 'white' }}
        >
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              height: '100%',
              boxSizing: 'border-box',
              width: '250px',
            }}
          >
            <h2 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Drawer Title</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                flex: 1,
                fontSize: '0.75rem',
                padding: '1rem 0',
                color: 'gray',
              }}
            >
              <p>Drawer Content</p>
              <p>Drawer Content</p>
            </div>
            <Button size="sm" variant="primary" onClick={() => setIsOpen(false)}>
              Apply
            </Button>
          </section>
        </Drawer>
      </main>
    </>
  );
};

/**
 * モードレスな Drawer
 */
export const ModelessDrawer: Story = {
  args: {
    isModal: false,
  },
  render: (args) => <DrawerWrapper {...args} />,
};

/**
 * モーダルな Drawer
 */
export const ModalDrawer: Story = {
  args: {
    isModal: true,
  },
  render: (args) => <DrawerWrapper {...args} />,
};
