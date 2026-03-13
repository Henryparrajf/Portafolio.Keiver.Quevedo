@echo off
echo ========================================
echo Instalacion del Portafolio Keiver Quevedo
echo ========================================
echo.

echo [1/4] Verificando Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js no esta instalado
    echo Descarga Node.js desde: https://nodejs.org
    pause
    exit /b 1
)
node --version
echo.

echo [2/4] Verificando npm...
npm --version
echo.

echo [3/4] Limpiando instalaciones previas...
if exist node_modules (
    echo Eliminando node_modules...
    rmdir /s /q node_modules
)
if exist package-lock.json (
    echo Eliminando package-lock.json...
    del package-lock.json
)
echo.

echo [4/4] Instalando dependencias...
echo Esto puede tomar varios minutos...
npm install
if errorlevel 1 (
    echo.
    echo ERROR: Fallo la instalacion de dependencias
    echo Revisa los errores arriba
    pause
    exit /b 1
)
echo.

echo ========================================
echo INSTALACION COMPLETADA CON EXITO!
echo ========================================
echo.
echo Comandos disponibles:
echo   npm run dev     - Iniciar servidor de desarrollo
echo   npm run build   - Crear build de produccion
echo   npm run preview - Ver preview del build
echo.
echo Para iniciar el servidor de desarrollo:
echo   npm run dev
echo.
pause
