export const formatValue = {
  price: (price: number) => new Intl.NumberFormat('ko-KR').format(price), // 500,000
  phoneNumberOnlyNumber: (tel: string) => tel?.replace(/-/g, ''), // 01012345678
  phoneNumber: (tel: string) =>
    tel.replace(/^(0\d{1,2})(\d{3,4})(\d{4})$/, (_, areaCode, middle, last) => `${areaCode}-${middle}-${last}`), // 010-1234-5678
};
