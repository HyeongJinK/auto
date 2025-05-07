- [제미나이](https://ai.google.dev/gemini-api/docs/text-generation?hl=ko&authuser=1&_gl=1*191tagv*_up*MQ..*_ga*ODE5NTc2MzYuMTc0NjYwMjc3MA..*_ga_P1DBVKWT6V*czE3NDY2MDI3NjkkbzEkZzAkdDE3NDY2MDI3NjkkajAkbDAkaDExODMxMjU4NDY.)
- [노션](https://developers.notion.com/)
- [suno](https://docs.sunoapi.org/)

### Prisma 설정 및 사용법

1. Prisma 설치:
   ```bash
   npm install prisma --save-dev
   npm install @prisma/client
   ```
npx prisma init
npx prisma migrate dev --name init
import { addUser, getUsers } from "./src/plugin/userService.js";

await addUser("홍길동", "hong@example.com");
const users = await getUsers();
console.log(users);


---

이제 Prisma가 프로젝트에 설정되었습니다. [index.js](http://_vscodecontentref_/2)를 실행하여 데이터베이스가 제대로 동작하는지 확인하세요.