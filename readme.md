# SSG Open API REST Client for NodeJS

SSG open api rest client for nodejs

## Installation
```
npm install @catchfashion/ssg-rest-client
```

## Limitation
[SSG Open API](https://eapi.ssgadm.com/info/apiGuide.ssg) 문서의 `종합몰 상품 API > 온라인 상품등록/수정`만 구현되어있습니다.

다른 api가 필요한 경우 Pull Request 또는 Fork 후 custom 하여 사용해주세요.

## How to
1. API 문서와 관련된 JSON 파일을 generator/api-sepecs에 추가합니다.
2. ```npm run generate```
3. 변경된 파일들을 semantic release에 맞춰서 커밋
4. master 머지 시 새 버전 배포
