@echo off
title Push Psychiatry Assessment Tool to GitHub & Vercel
echo ========================================================
echo Pushing updated Psychiatry Assessment Tool to GitHub...
echo ========================================================
cd /d "C:\Projects\my-web-app"
git push origin main
echo.
echo ========================================================
echo If successful, Vercel will update https://psychiatry-assessment-tool.vercel.app/ in ~30s!
echo ========================================================
pause
