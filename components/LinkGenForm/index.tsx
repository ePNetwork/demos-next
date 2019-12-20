import * as React from 'react'
import { Form, Input, Button, message, Modal } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import * as TrackingRotations from 'tracking-rotations-util'
import { getClickLink, getImpressionLink, EPNChannelClickOptions, EPNChannelImpressionOptions, MarketingChannel, AdType, MarketingEventType } from 'chocolate-convertor'
import LinkClipboard from '../LinkClipboard'
import * as TrackingURL from 'tracking-url-util'
import './style.scss'

interface LinkGenFormProps extends FormComponentProps {
}

interface LinkGenFormState {
    clickURL: string;
    impressionURL: string;
    showModal: boolean
}

interface FormValues {
    url?: string;
    campid?: number;
    customid?: string;
}


class LinkGenForm extends React.PureComponent<LinkGenFormProps, LinkGenFormState> {
    constructor(props) {
        super(props)
        this.state = {
            clickURL: '',
            impressionURL: '',
            showModal: false,
        }
    }

    render() {
        return (
            <div className='link-gen-form'>
                <h1 className='link-gen-form__title'>
                    Chocolate Link Generator
                </h1>
                <Form className='link-gen-form__form' onSubmit={this.onSubmit}>
                    <Form.Item label='eBay URL'>
                        {this.props.form.getFieldDecorator('url', {
                            rules: [{
                                required: true,
                                validator: (_rule, value, cb) => {
                                    const msg = 'Please enter a valid eBay domain'
                                    if (!value) {
                                        return cb(msg)
                                    }
                                    if (!TrackingURL.isProtocolPresent(value)) {
                                        value = TrackingURL.withProtocol(value, TrackingURL.Protocols.HTTPS)
                                    }
                                    if (!TrackingURL.isValidProtocol(value)) {
                                        return cb(msg)
                                    }
                                    if (!TrackingRotations.isValidRotationURL(value)) {
                                        return cb('Please enter a valid eBay domain')
                                    }
                                    cb()
                                }
                            }]
                        })(
                            <Input autoFocus={true} placeholder='eBay URL (eg. www.ebay.com)' size='large'/>
                        )}
                    </Form.Item>

                    <Form.Item label='Campaign ID'>
                        {this.props.form.getFieldDecorator('campid', {
                            rules: [{
                                required: true, message: 'Campaign ID is required'
                            }]
                        })(
                            <Input placeholder='Campaign ID' type='number' size='large'/>
                        )}
                    </Form.Item>

                    <Form.Item label='Custom ID'>
                        {this.props.form.getFieldDecorator('customid', {
                            rules: [{
                                required: false
                            }]
                        })(
                            <Input placeholder='Custom ID' size='large'/>
                        )}
                    </Form.Item>

                    <Button size='large' type='primary' htmlType='submit'>
                        Generate
                    </Button>
                </Form>

                <Modal
                    cancelButtonProps={{style: {display: 'none'}}}
                    okText='Done'
                    onCancel={this.onCloseModal}
                    onOk={this.onCloseModal}
                    visible={this.state.showModal}
                >
                    <LinkClipboard
                        clickURL={this.state.clickURL}
                        impressionURL={this.state.impressionURL}
                    />
                </Modal>
            </div>
        )
    }

    private onCloseModal = () => {
        this.setState({showModal: false})
    }

    private onSubmit = (event: React.FormEvent) => {
        this.setState({clickURL: '', impressionURL: ''})
        event.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values: FormValues) => {
            if (err) {
                console.warn(JSON.stringify(err))
                return
            }
            if (!values.url) {
                return message.error('Please enter a valid eBay URL')
            }
            if (!values.campid) {
                return message.error('Please enter a campaign ID')
            }

            if (!TrackingURL.isProtocolPresent(values.url)) {
                values.url = TrackingURL.withProtocol(values.url, TrackingURL.Protocols.HTTPS)
            }

            const rotation = TrackingRotations.getRotationByURL(values.url)
            if (!rotation) {
                return message.error('No rotation found for your eBay URL')
            }
            const clickOpts: EPNChannelClickOptions = {
                mkcid: MarketingChannel.EPN,
                mkrid: rotation.id,
                siteid: rotation.siteId,
                campid: values.campid.toString(),
                customid: values.customid,
                toolid: '10001',
            }
            const clickURL = getClickLink(values.url, clickOpts)
            const impOpts: EPNChannelImpressionOptions = {
                mkcid: MarketingChannel.EPN,
                mkrid: rotation.id,
                siteid: rotation.siteId,
                mkevt: MarketingEventType.Impression,
                ad_type: AdType.Tracer,
                campid: values.campid.toString(),
                toolid: '10001',
            }
            const impressionURL = getImpressionLink(impOpts)
            this.setState({
                clickURL,
                impressionURL,
                showModal: true,
            })
        })
    }
}

export default Form.create()(LinkGenForm)
