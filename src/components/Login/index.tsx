import { Button, Col, Form, Input, Row, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";


/*
{
    "token": "QpwL5tke4Pnpja7X4"
}
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
*/


export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    async function onFinish(values:{email: string, password: string}) {
        try {
            await auth.authenticate(values.email, values.password)
            navigate('/profile')
        } catch (error) {
            message.error('Invalid email or password!')
        }
    }

    return(
        <>
            <Row
                justify='center'
                align='middle'
                style={{height: '100vh'}}
            >
                <Col span={12}>
                    <Form
                        name="basic"
                        labelCol={{span: 8}}
                        wrapperCol={{ span: 16}}
                        onFinish={onFinish}
                    >
                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Password' name='password'>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{offset: 8, span:16}}>
                            <Button type="primary" htmlType="submit">
                                Sign in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}