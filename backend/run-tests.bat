@echo off
cd /d "%~dp0"
echo.
echo ======================================
echo Compiling backend...
echo ======================================
call mvn clean compile -q

echo.
echo ======================================
echo Running Cucumber E2E Tests...
echo ======================================
call mvn test -Dtest=CucumberTest -DfailIfNoTests=false

echo.
echo ======================================
echo Tests completed!
echo ======================================
pause

