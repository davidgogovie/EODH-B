@echo off

cd "%~dp0"
REM for /f "tokens=5" %%a in ('netstat -aon ^| find "8000"') do taskkill /f /pid %a
netstat -a -o -n
taskkill /F /PID 8000
taskkill /F /PID 4000
taskkill /F /PID 19006
taskkill /F /IM node.exe
echo STARTING all servers (json-server, backend, frontend) ...

REM call json-server --watch data/db.json --host 127.0.0.1 --port 8000
REM call npm start
REM call serve -s public

start cmd /k call json-server --watch data/db.json --host 127.0.0.1 --port 8000
start cmd /k call node server.js
start cmd /k call npm run client
REM start cmd /k call npm start

REM choice /t 10
timeout /t 10 >nul
REM timeout /t 10 /nobreak
set url="http://127.0.0.1:19006"
start chrome %url%
REM call npm run json-server
REM pause
cd %SETUP_DIR%
echo DONE!