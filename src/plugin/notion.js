 const { Client } = require('@notionhq/client');
 
 // Notion 클라이언트 초기화
 const notion = new Client({
  auth: process.env.NOTION_TOKEN, // 환경 변수에서 Notion API 키를 가져옵니다.
 });
 
 // 페이지 생성 함수
 async function createNotionPage(databaseId, properties) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: properties,
    });
    console.log('페이지 생성 성공:', response);
    return response;
  } catch (error) {
    console.error('페이지 생성 실패:', error);
    return null;
  }
 }
 
 // 데이터베이스 쿼리 함수
 async function queryNotionDatabase(databaseId, filter, sorts) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: filter,
      sorts: sorts,
    });
    console.log('데이터베이스 쿼리 성공:', response);
    return response.results;
  } catch (error) {
    console.error('데이터베이스 쿼리 실패:', error);
    return null;
  }
 }
 
 // 페이지 업데이트 함수
 async function updateNotionPage(pageId, properties) {
  try {
    const response = await notion.pages.update({
      page_id: pageId,
      properties: properties,
    });
    console.log('페이지 업데이트 성공:', response);
    return response;
  } catch (error) {
    console.error('페이지 업데이트 실패:', error);
    return null;
  }
 }
 
 // 함수들을 모듈로 내보냅니다.
 module.exports = {
  createNotionPage,
  queryNotionDatabase,
  updateNotionPage,
 };