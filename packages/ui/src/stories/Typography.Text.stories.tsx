import React from 'react'
import get from 'lodash/get'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Typography } from '@open-condo/ui/src'
import type { TypographyTextProps } from '@open-condo/ui/src'
import { styled } from '@storybook/theming'
import { colors } from '../colors'

// TODO(DOMA-4682): Move to UI-kit
import { Space } from 'antd'
import 'antd/lib/space/style/index.less'

const isVowel = (str?: string) => {
    if (!str) return false
    const firstChar = str.at(0)
    if (!firstChar) return false
    return Boolean(firstChar.match('a|e|i|o|u/i'))
}

const AVAILABLE_TYPES: Array<TypographyTextProps['type']> = [
    'default',
    'secondary',
    'inverted',
    'danger',
    'warning',
    'info',
    'success',
]

const AVAILABLE_MODES = [
    'disabled',
    'code',
    'strong',
    'italic',
    'underline',
    'delete',
]


const InvertedBackground = styled.span`
  background: ${colors.black};
`

export default {
    title: 'Components/Typography',
    component: Typography.Text,
    argTypes: {
        children: { type: 'string' },
        size: {
            defaultValue: 'lg',
            options: ['lg', 'md', 'sm'],
            control: 'select',
        },
    },
} as ComponentMeta<typeof Typography.Text>

const Template: ComponentStory<typeof Typography.Text> = (args) => {

    return (
        <Space direction='vertical' size={20} prefixCls='condo-space'>
            {AVAILABLE_TYPES.map(type => {
                const article = isVowel(type) ? 'an' : 'a'
                const text = get(args, 'children') || `This is an example of ${article} ${type} text.`
                const props = {
                    ...args,
                    children: text,
                    type,
                }
                if (type === 'inverted') {
                    return (
                        <InvertedBackground>
                            <Typography.Text {...props}/>
                        </InvertedBackground>
                    )
                }
                return (
                    <Typography.Text key={type} {...props}/>
                )
            })}
            <hr/>
            {AVAILABLE_MODES.map(mode => {
                const article = isVowel(mode) ? 'an' : 'a'
                const text = get(args, 'children') || `This is an example of ${article} ${mode} text.`
                const props = {
                    ...args,
                    [mode]: true,
                    children: text,
                }
                return (
                    <Typography.Text key={mode} {...props}/>
                )
            })}
        </Space>
    )
}

export const Text = Template.bind({})