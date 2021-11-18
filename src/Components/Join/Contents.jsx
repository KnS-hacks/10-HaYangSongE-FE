import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Common/Button';
import Inputs, { InputNum } from '../Common/Inputs';

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  margin: 0 auto;

  &:nth-child(1) > div {
    height: 65%;
    padding: 50px;
  }

  // 접종 여부, 접종일 묶기
  &:nth-child(1) > div > div {
    display: flex;
  }

  button {
    margin-top: 20px;
  }
`;

const Title = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  padding: 50px 30px 40px 30px;
`;

const Contents = () => {
  // useHistory 사용
  const history = useHistory();
  // input 관련 로직
  const [inputs, setinputs] = useState({});

  const handleInputs = e => {
    // const { name, value } = e.target;
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  // join 로직 후 login으로 이동
  const join = () => {
    console.log({ inputs });
    history.push('/');
  };
  return (
    <Container>
      <Title>회원가입</Title>
      <div>
        <Inputs
          inputName="userName"
          inputChange={handleInputs}
          inputPlaceholder="이름을 입력해주세요."
          inputContent="이름"
          inputValue={inputs.userName}
        />
        <Inputs
          inputName="userId"
          inputChange={handleInputs}
          inputPlaceholder="아이디를 입력해주세요."
          inputContent="아이디"
          inputValue={inputs.userId}
        />
        <Inputs
          inputName="pw1"
          inputChange={handleInputs}
          inputType="password"
          inputPlaceholder="비밀번호를 입력해주세요."
          inputContent="비밀번호"
          inputValue={inputs.pw1}
        />
        <Inputs
          inputName="pw2"
          inputChange={handleInputs}
          inputType="password"
          inputPlaceholder="비밀번호를 다시 한 번 입력해주세요."
          inputContent="비밀번호 확인"
          inputValue={inputs.pw2}
        />
        <Inputs
          inputName="phoneNum"
          inputChange={handleInputs}
          inputPlaceholder="휴대폰 번호를 입력해주세요."
          inputContent="휴대폰 번호"
          inputValue={inputs.phoneNum}
        />
        <div>
          <InputNum
            inputName="step"
            inputChange={handleInputs}
            inputContent="백신 접종 여부"
            inputValue={inputs.step}
          />
          <Inputs
            inputName="lastDate"
            inputChange={handleInputs}
            inputWidth="200px"
            inputContent="마지막 접종일"
            inputType="date"
            inputValue={inputs.lastDate}
          />
        </div>
        <Button
          Width="590px"
          Height="70px"
          Content="회원가입"
          ClickFunc={join}
        />
      </div>
    </Container>
  );
};

export default Contents;
