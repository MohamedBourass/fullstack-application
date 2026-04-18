#!/bin/bash
cd "$(dirname "$0")"
echo "======================================"
echo "Compiling backend..."
echo "======================================"
mvn clean compile -q

echo ""
echo "======================================"
echo "Running Cucumber E2E Tests..."
echo "======================================"
mvn test -Dtest=CucumberTest -DfailIfNoTests=false

echo ""
echo "======================================"
echo "Tests completed!"
echo "======================================"

