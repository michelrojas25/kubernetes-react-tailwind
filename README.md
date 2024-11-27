## Pasos del proyecto arquietctura kuberntes

1. Instalar nvm
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
2. Reiniciar la terminal o ejecutar
```bash
source ~/.bashrc
```

3. Especificamos la version que vamos a usar
```bash
nvm install 18
```

4. Usar la versión instalada
```bash
nvm use 18
```

4. Verificar las versiones instaladas

```bash
node --version  # Debería mostrar algo como v18.x.x
npm --version   # Debería mostrar algo como 9.x.x
```    
5. Instalamos las dependencias del proyecto.
```bash
cd kubernetes-architecture
npm install
```    

6. Iniciamos el proyecto
```bash
npm start
```     
7. Verificar el proyecto en el navegador
```bash
http://localhost:3000
```
8. Para finalizar el proyecto
```bash
npm run build
```     
9. Seguimos con el proyecto generamos la arquitectura.
```bash
npm install reactflow
```


