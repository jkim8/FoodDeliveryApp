import React, {useCallback, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);
  const onSubmit = useCallback(() => {
    Alert.alert('알림', '안녕');
  }, []);

  const canGoNext = email && password;

  return (
    <View>
      <View>
        <Text>이메일</Text>
        <TextInput
          placeholder="이메일을 입력해 주세요."
          onChange={onChangeEmail}
        />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력해 주세요."
          onChange={onChangePassword}
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          style={
            !canGoNext
              ? styles.loginButton
              : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
          }
          onPress={onSubmit}
          disabled={!canGoNext}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable>
          <Text>회원가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {color: 'white'},
  buttonZone: {alignItems: 'center'},
});

export default SignIn;
