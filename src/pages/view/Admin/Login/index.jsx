import { Button, Carousel, Col, Divider, Form, Input, notification, Row, Spin } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as loginAction from '../../../../redux/Action/loginAction'
import "./index.css";
const Login = ({ loginAct, isLogin }) => {
  const islogin = localStorage.getItem('islogin');
  const onFinish = (values) => {
    const { login } = loginAct
    login({ username: values.username, password: values.password })
    // console.log()
  };

  console.log(isLogin)
  if (isLogin.isError !== '') {
    notification['error']({
      message: 'Thông báo',
      description:
        'Kiểm tra lại user và passwork',
    });

  }
  if (islogin) {
    alert('Đăng nhập thành công')
    return <Redirect to="/admin/" />
  }


  return (
    <>
      <Row className='container-Login'>
        <Col xs={0} md={8}>
          <Carousel className='slide-login' autoplay effect="scrollx">
            <div>
              <h3 className='contentStyle '>1</h3>
            </div>
            <div>
              <h3 className='contentStyle '>2</h3>
            </div>
            <div>
              <h3 className='contentStyle '>3</h3>
            </div>

          </Carousel>
        </Col>
        <Col xs={24} md={16} className='col-formLogin'>
          <Col xs={24} md={18} style={{ padding: '20px' }}>
            <div className='logo'></div>
            <h4 style={{ fontWeight: 400 }}>
              <div style={{ fontSize: '2rem' }}>Welcome back,</div>
              <span style={{ fontSize: '1.5rem' }} >
                Please sign in to your account.
              </span>
            </h4>
            <Divider />
            <div>
              <Form layout={'vertical'} onFinish={onFinish}>
                <Row>
                  <Col xs={24} md={12} className='col-input-form-login'>
                    <Form.Item name='username' label='Email'>
                      <Input className='input-login ' placeholder='Email here...' />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} className='col-input-form-login'>
                    <Form.Item name='password' label='Password'>
                      <Input.Password value='' className='input-login' placeholder='Password here...' />

                    </Form.Item>
                  </Col>

                </Row>
                <Row>
                  <Divider style={{ margin: '0 0 10px 0' }} />
                </Row>
                <Row >
                  <Form.Item>
                    <Button type='primary' htmlType='submit' style={{ fontSize: '15px', fontWeight: 500, borderRadius: '3px', background: '#545cd8' }}>Login
                    {isLogin.isloading === true ? (<Spin animation="border" variant="primary" />) : (<></>)}</Button>
                  </Form.Item>

                </Row>
              </Form>
            </div>
          </Col>

        </Col>
      </Row>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isLogin: state.loginData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAct: bindActionCreators(loginAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
