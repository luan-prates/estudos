# Estudos
Esse é meu repositório pessoal de estudos.  

Um [tutorial de Markdown](https://www.w3schools.io/file/markdown-introduction/) pra ajudar quando eu precisar consultar.

Vou iniciar pelo FullCycle
###- Docker 
  #### Comandos 
  `docker run hello-world`
Roda uma imagem que imprime a mensaguem Hello from Docker!

  `docker ps`
Lista imagens em execução..

  `docker ps -a`
Lista todas as imagens que já executaram.


  `docker run -it ubuntu:latest bash`
Roda uma imagem ubuntu na ultima versão no modo iterativo e travando o bash. Para sair basta digitar `exit`.


  `docker run -it --rm ubuntu:latest bash`
Faz o mesmo do comando anterior mas não deixa historico.

  `docker run nginx`
Roda uma imagem com nginx

  `docker run -p 8080:80 nginx`
Roda uma imagem com nginx mapeando a porta 80 do container para a porta 8080 do host.

  `docker run -d -p 8080:80 nginx`
faz o mesmo só que desatachando o terminal. 

  `docker stop + id_container`
Para a execução do container.

  `docker start + id_container`
Executa o container.

  `docker rm + id_container`
Remove o container.

  `docker rm + id_container + -f`
Remove o container mesmo se estiver em execução.

  `docker run -d --name meu_nginx nginx`
Da um nome para o container.

  `docker exec -it meu-nginx bash`
Abre o bash no container que chamamos de meu-nginx.

`docker run --name meu-nginx -d -p 8080:80 -v "$(pwd)"/html:/usr/share/nginx/html nginx`
Cria um container mapeando um volume para a pasta local.

```
docker run -d \
  -it \
  -p 8080:80 \
  --name meu-nginx \
  --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html \
  nginx
```
Usando o mount para mapear o volume.

##### Volumes

`docker volume ls`
Lista os volumes existentes.

`docker volume create meuvolume`
Cria um volume.

`docker volume inspect meuvolume`
Inspeciona um volume.

```
docker run \
-d \
--name meu-nginx \
--mount type=volume,source=meuvolume,target=/app \
nginx 
```
Monta o volume criado.

```
docker run \                   
-d \
--name meu-nginx3 \
-v meuvolume:/app \                               
nginx
```
Também podemos usar o -v.

`docker volume prune`
Limpa os volumes que não estão sendo utilizados.

##### Criando Imagens

`docker build -t luanpartes/nginx-com-vim2:latest .`
Criando uma imagem.

`docker images`
Lista as imagens 

`docker run -it luanpartes/nginx-com-vim2 bash`
Acessando a imagem criada.

`docker rm $(docker ps -a -q) -f`
Deletar todos os containeres de uma vez.

`docker push luanpartes/nginx-vai`
Publicando uma imagem no docker hub.

##### Network

tipos:
- bridge (padrão)
- host (mescla a rede do docker com a do host.)
- overlay (comunica containeres de hosts diferentes, usado com swarm)
- none (sem rede)

`docker network ls`
Lista as redes

`docker network prune`
Remove todas as redes não usadas.


`docker network create --driver bridge minharede`
cria uma rede 

`docker network connect minharede ubuntu3`
adicina uma maquina a rede 

`docker run -dit --name nginx-local --network host nginx`
Adicina o nginx na rede host 


`curl http://host.docker.internal:8000`
Acessando um serviço na maquina host.

`docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash`
Usando o node do container pra codar.

`docker build -t luanpartes/node-app:latest . -f Dockerfile.prod`
Gerando o build a partir do dockerfile.prod

`docker build -t luanpartes/laravel-app:prod . -f Dockerfile.prod`
Gerando um build de prod Otimizado com Multistage Building

`docker build -t luanpartes/nginx:laravel . -f Dockerfile.laravel `

Trabalhando com docker compose
`docker compose up -d`
`docker compose up -d --build`
`docker compose ps `
`docker compose down`