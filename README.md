# Win22: MSSQL + IIS + Node.js Practice

Windows Server 2022에서 IIS, MSSQL, Node.js(Express/Next)를 통합 실습하는 레포입니다.

## What I Learned
- MSSQL ODBC 드라이버 설치 및 연결(`mssql`, `msnodesqlv8`)
- 방화벽 1433 오픈 및 서비스 확인
- IIS 리버스 프록시로 Node.js 앱 노출(선택적으로 iisnode/ARR)
- Next.js 프런트엔드 + Express 백엔드 + Sequelize(or mssql) 연동

## Repository Layout
```bash
win22-mssql-iis-node-practice/
├─ apps/
│  ├─ frontend/      # 기존 win22-frontend
│  └─ backend/       # 기존 win22-backend (Express, Sequelize)
├─ examples/
│  └─ bikestore/     # 기존 win22-mssql-iis-node/bikestore (Next + mssql 샘플)
├─ infra/
│  ├─ iis/           # web.config, 리버스프록시 규칙
│  ├─ mssql/         # 연결 테스트 스크립트, schema/seed
│  └─ scripts/       # ODBC 설치, 방화벽 1433 오픈, 서비스 등록
├─ docs/
│  ├─ install_mssql.md
│  ├─ iis_reverse_proxy.md
│  └─ odbc_driver.md
└─ README.md
```

## Quickstart
1) MSSQL 설치/ODBC 드라이버
    - ODBC 64bit 설치(서버의 Node 비트와 일치)
    - `docs/install_mssql.md` 참고
3) DB 준비
    ```bash
    # .env
    DB_HOST=localhost
    DB_PORT=1433
    DB_USER=sa
    DB_PASS=****
    DB_NAME=BikeStore
    ```
4) 백엔드
    ```bash
    cd apps/backend
    npm i
    npm run dev
    ```
5) 프런트엔드
    ```bash
    cd apps/frontend
    npm i
    npm run dec
    # BACKEND_URL=.env로 주입, axios 호출
    ```
6) IIS 연동
    - `infra/iis/web.config` 예제 적용
    - 프록시로 Node 포트(예: 3000/4000) 노출

## Notes
- Windows 방화벽 인바운드 1433 허용
- SQL Server 인증 모드/SA 계정 확인
- React 19 RC <-> Next 15 조합은 안정 버전으로 맞추는 것을 권장


## Memo
```
## MS-SQL Server 구축

# MS-SQL Server 방화벽 설정
firewall.cpl > 인바운드 정책 > 정책 추가 > 포트 추가 > 1433, 모든 사용자 > MSSQL 이름으로 추가

---
## MS-SQL x IIS 연동 (1) next.js 기반 웹 애플리케이션 작성

nextjs로 MS-SQL 데이터베이스에 연동하는 코드를 작성하려면 아래의 패키지가 필수적으로 필요합니다.

# mssql, msnodesqlv8(드라이버 연결)
https://github.com/tediousjs/node-mssql

# Microsoft ODBC 드라이버 설치(64bit)
설치 시 주의할 점은 node.js와 odbc의 비트(64bit)가 동일해야 한다는 것이다.
https://goni9071.tistory.com/479
https://learn.microsoft.com/ko-kr/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16
https://chakhani.tistory.com/185
```
