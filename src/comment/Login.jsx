import React from 'react'
import {Button,Form,Input} from 'semantic-ui-react'
import './Login.css'
class Login extends React.Component{
  render(){
    return(
      <div className= 'login_container'>
          <div className = 'login_head'>登录</div>
          <div className = 'login_form'>
              <Form >
                  <Form.Field>
                  <Input type="text" icon = 'user' iconPosition = 'left' placeholder="请输入用户名..."/>
                  </Form.Field>
                  <Form.Field>
                  <Input type="text" icon = 'lock' iconPosition= 'left' placeholder="请输入密码..."/>
                  </Form.Field>
                <Button type='submit' positive fluid>登录</Button>
              </Form>
          </div>
      </div>
    );
  }
}
export default Login