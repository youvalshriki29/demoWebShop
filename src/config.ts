export const BASE_URL = `https://demowebshop.tricentis.com/`;
export const TEST_USER = {
    gender: 'female' as const,
    firstName: 'yuval',
    lastName: 'tester',
    email: `yuval${Date.now()}@test.com`,
    password: `${Date.now()}check`
  };