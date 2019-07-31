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
                <div className="ui big field fluid input">
                  <Input type="text" icon= 'user' iconPosition = 'left' placeholder="请输入用户名..."/>
                </div>
                <div className="ui big field fluid input">
                  <Input type="text" icon= 'lock' iconPosition = 'left' placeholder="请输入密码..."/>
                </div>
                <Button type='submit' className='positive big fluid ui button' >登录</Button>
              </Form>
          </div>
      </div>
    );
  }
}
export default Login