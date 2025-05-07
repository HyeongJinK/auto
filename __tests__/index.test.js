 const request = require('supertest');
 const app = require('../src/index'); // Express 앱 인스턴스를 가져옵니다.
 
 describe('GET /', () => {
  it('응답 상태 코드는 200이어야 합니다.', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
 
  it('응답 헤더의 Content-Type은 text/html이어야 합니다.', async () => {
    const response = await request(app).get('/');
    expect(response.headers['content-type']).toContain('text/html');
  });
 
  // 필요하다면 다른 테스트 케이스를 추가할 수 있습니다.
  // 예를 들어, 응답 본문에 특정 문자열이 포함되어 있는지 확인할 수 있습니다.
  // it('응답 본문에 "n8n 클론 프로젝트"가 포함되어야 합니다.', async () => {
  //   const response = await request(app).get('/');
  //   expect(response.text).toContain('n8n 클론 프로젝트');
  // });
 });