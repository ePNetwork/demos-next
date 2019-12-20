import * as React from 'react'
import { Input, Button, Form, message } from 'antd'
import './style.scss'

interface LinkClipboardProps {
    clickURL: string;
    impressionURL: string;
}

export default class LinkClipboard extends React.PureComponent<LinkClipboardProps> {
    private clickInput?: Input;
    private impressionInput?: Input;

    private refClickInput = (input: Input) => {
        this.clickInput = input
    }

    private refImpressionInput = (input: Input) => {
        this.impressionInput = input;
    }

    private onCopyClick = () => {
        if (this.clickInput) {
            this.clickInput.select()
            document.execCommand('copy')
            message.success('Copied', 2)
        }
    }

    private onCopyImpression = () => {
        if (this.impressionInput) {
            this.impressionInput.select()
            document.execCommand('copy')
            message.success('Copied', 2)
        }
    }

    render() {
        const clickBtn = (
            <Button onClick={this.onCopyClick} type='primary' icon='copy'>Copy</Button>
        )

        const impressionBtn = (
            <Button onClick={this.onCopyImpression} type='primary' icon='copy'>Copy</Button>
        )


        return (
            <div className='link-clipboard'>
                <Form.Item label='Click URL'>
                    <Input
                        ref={this.refClickInput}
                        className='link-clipboard__input'
                        size='large'
                        value={this.props.clickURL}
                        suffix={clickBtn}
                    />
                </Form.Item>

                <Form.Item label='Impression URL'>
                    <Input
                        ref={this.refImpressionInput}
                        className='link-clipboard__input'
                        size='large'
                        value={this.props.impressionURL}
                        suffix={impressionBtn}
                    />
                </Form.Item>
            </div>
        )
    }
}
