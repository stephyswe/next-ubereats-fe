import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
export const PrimaryHook = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
};

/*
 * Rename stories:
 * You can rename any particular story you need. For instance,
 * to give it a more accurate name. Here's how you can change
 *  the name of the Primary story:
 */

export const PrimaryRename = () => <Button primary label='Button' />;
Primary.storyName = 'I am the primary';

/*
 * How to write stories:
 * A story is a function that describes how to render a component. You can have multiple
 * stories per component, and the simplest way to create stories is to render a component
 *  with different arguments multiple times.
 */

export const PrimaryLine = () => (
  <Button backgroundColor='#ff0' label='Button' />
);
export const SecondaryLine = () => (
  <Button backgroundColor='#ff0' label='😄👍😍💯' />
);

export const TertiaryLine = Template.bind({});
TertiaryLine.args = { ...Primary.args, label: '📚📕📈🤓' };

/** With Layout */
/* 
const withLayout = (Story: any) => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: '0 0 240px', marginRight: 16 }}>{Story()}</div>
    <div style={{ display: 'flex', flex: '1 1 auto' }}>children</div>
  </div>
);

export default {
  title: 'Component/Button',
  component: UnStyledButton,
  //decorators: [withLayout],
} */
