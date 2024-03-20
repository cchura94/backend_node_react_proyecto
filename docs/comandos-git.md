# Comandos GIT
## Preparación
- Instalar GIT en su equipo
- Enlace de Descargar: https://git-scm.com/download/win
- Crear una cuenta en (Github, Bitbucket, GitLab)
- en este caso: https://github.com/
---
## Comandos Iniciales
- presentarse con GIT en su equipo local
```
git config --global user.name "Nombre"
git config --global user.email "cchura.cpc@gmail.com"
```
## Comandos de configuración repositorio (Local-remoto)
- Comandos de configuración para subir su nuevo proyecto al repositorio remoto 

- Crear una reposotorio remoto en (GITHUB)
- inicializar un reposotorio local
```
git init
```
- referenciar el repositorio local con el repositorio remoto
```
git remote add origin https://github.com/cchura94/backend_node_react_proyecto.git
```
## Comandos necesarios para subir cambios
```
git add .
git commit -m "proyecto base de node"
git push origin master
```




