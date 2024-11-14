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