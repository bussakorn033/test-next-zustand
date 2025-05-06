import React, { useState } from 'react'
import { DSBox } from '../Box'
import { DSTextStyle } from '../TextStyle'
import { DSIcon } from './Icon'
import {
  iconGeneral36,
  iconGeneral36Hero,
  iconGeneral36Error,
  iconGeneral24,
  iconGeneral24Solid,
  iconGeneral16,
  iconGeneral16Outline,
  iconVector56,
  iconVector48,
  iconGeneral36Solid,
  iconGeneral36ErrorCase,
  iconGeneral36Warning,
  iconGeneral36Success
} from './IconList'
import { ComponentStory } from '@storybook/react'
import { toCapitalize } from '../../shared/utils/toCapitalize'
import { optionColors } from '../../shared/utils/optionColors'
import { toKebabCase } from '../../shared/utils/toKebabCase'
import { Tooltip } from '@mui/material'

export default {
  title: 'Components/Icon',
  component: DSIcon,
  argTypes: {
    color: {
      control: 'select',
      options: optionColors()
    }
  }
}

const Template: ComponentStory<typeof DSIcon> = ({ ...args }) => {
  return <DSIcon {...args} />
}

const TemplateOverview: ComponentStory<typeof DSIcon> = ({
  component,
  size,
  variant
}) => {
  const [isCopy, setIsCopy] = useState(false)

  function copyText(textContent: string) {
    setIsCopy(true)
    let inp = document.createElement('input')
    document.body.appendChild(inp)
    inp.value = textContent
    inp.select()
    document.execCommand('copy', false)
    inp.remove()
  }
  return (
    <DSBox column={6} gap={12}>
      {Object.keys(component).map((icon: string) => {
        if (icon.includes(toCapitalize(size))) {
          let iconName = toKebabCase(
            icon.replace(toCapitalize(variant || ''), '').replace(toCapitalize(size), '')
          )
          return (
            <Tooltip
              onClose={() => setIsCopy(false)}
              title={isCopy ? 'Copied' : 'Click to copy name'}
            >
              <DSBox
                onClick={(e: any) => copyText(iconName)}
                key={icon}
                direction='column'
                alignItems='center'
                hover
                style={{ textAlign: 'center' }}
                mb={4}
              >
                <DSIcon icon={iconName} size={size} variant={variant} />
                <DSTextStyle variant='labelInput'>{iconName}</DSTextStyle>
              </DSBox>
            </Tooltip>
          )
        } else {
          return <></>
        }
      })}
    </DSBox>
  )
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'placeholder',
  size: 'medium',
  variant: 'outline'
}
export const Vector56 = TemplateOverview.bind({})
Vector56.args = {
  component: iconVector56,
  variant: 'vector',
  size: 'xxlarge'
}

Vector56.parameters = {
  version: {
    major: '1',
    minor: '4',
    patch: '1'
  }
}
export const Vector48Offering = TemplateOverview.bind({})
Vector48Offering.args = {
  component: iconVector48,
  size: 'xlarge',
  variant: 'vector'
}

export const General36 = TemplateOverview.bind({})
General36.args = {
  component: iconGeneral36,
  size: 'large'
}
export const General36Solid = TemplateOverview.bind({})
General36Solid.args = {
  component: iconGeneral36Solid,
  size: 'large',
  variant: 'solid'
}

export const General36Hero = TemplateOverview.bind({})
General36Hero.args = {
  component: iconGeneral36Hero,
  size: 'large',
  variant: 'hero'
}

export const General36Success = TemplateOverview.bind({})
General36Success.args = {
  component: iconGeneral36Success,
  size: 'large',
  variant:'success'
}

export const General36Warning = TemplateOverview.bind({})
General36Warning.args = {
  component: iconGeneral36Warning,
  size: 'large',
  variant:'warning'

}

export const General36Error = TemplateOverview.bind({})
General36Error.args = {
  component: iconGeneral36Error,
  size: 'large'
}

const General36ErrorCase = TemplateOverview.bind({})
General36ErrorCase.args = {
  component: iconGeneral36ErrorCase,
  size: 'large'
}

export const General24 = TemplateOverview.bind({})
General24.args = {
  component: iconGeneral24,
  size: 'medium'
}
export const General24Solid = TemplateOverview.bind({})
General24Solid.args = {
  component: iconGeneral24Solid,
  size: 'medium',
  variant: 'solid'
}
export const General16Solid = TemplateOverview.bind({})
General16Solid.args = {
  component: iconGeneral16,
  size: 'small'
}

export const General16 = TemplateOverview.bind({})
General16.args = {
  component: iconGeneral16Outline,
  size: 'small'
}
