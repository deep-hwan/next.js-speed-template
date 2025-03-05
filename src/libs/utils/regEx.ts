/**
 *
 * @param {*} email 이메일 형식 정규식
 * @param {*} password 비밀번호 8자리 이상 숫자,영문,특수문자 조합 정규식
 * @param {*} phoneNumber 연락처 010-1234-5678 형태 입력
 * @param {*} number 0~9까지 01012345678형태 입력
 */

export const regEx = {
  email: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
  phoneNumber: /^010-\d{3,4}-\d{4}$/,
  number: /^[0-9]*$/,
};
