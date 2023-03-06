@echo off

cd "%~dp0"
REM for /f "tokens=5" %%a in ('netstat -aon ^| find "8000"') do taskkill /f /pid %a
netstat -a -o -n
taskkill /F /PID 8000
taskkill /F /PID 4000
taskkill /F /PID 19006
taskkill /F /IM node.exe
echo ALL PROCESSES KILLED ...

cd %SETUP_DIR%
echo DONE!