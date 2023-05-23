<p align="center">
    <img src="https://github.com/rodrigo-b-silva/time-capsule-nlw12/blob/main/.github/banner-nlw.png" width="1100"/>
</p>

## :computer: Projeto
Time Capsule é um projeto focado em registro de lembranças, com ele é possível fazer cadastros de momentos marcantes da vida, podendo o usuário compartilhar ou não estas memórias através de demarcações públicas, fazendo uma espécie de blog e/ou agenda secreta.


## :rocket: Funcionalidades
* Cadastro de lembranças incluindo textos, fotos e vídeos
* Consulta e listagem de lembranças salvas
* Autenticação Github com protocolo OAuth2


## :hammer: Tecnologias utilizadas
* **Front-end**: React, Nextjs, Typescript, TailwindCSS
* **Back-end**: NodeJS, Typescript, Fastify, Prisma, SQLite
* **Mobile**: React Native, Expo, Typescript, Nativewind


## :fire: Instalação e execução
```
# Clone este repositório
$ git clone git@github.com:rodrigo-b-silva/time-capsule-nlw12.git

# Navegue em cada pasta: backend / web / mobile e instale as depedências:
$ npm install

# Navegue até a pasta backend e informe as variáveis de ambiente:
$ cp .env_model .env

GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# Ainda na pasta backend, execute o Prisma para criar as tabelas:
$ npx prisma migrate dev

# Execute a API do backend:
$ npm run dev

# Navegue até a pasta web e altere a variável de ambiente no .env.local:
NEXT_PUBLIC_GUTHUB_CLIENT_ID=""

# Ainda na pasta web, execute o NextJS:
$ npm run dev

# E finalmente, navegue até a pasta mobile, altere o CLIENT_ID do arquivo /app/index.tsx e execute o Expo:
$ npm start

# Observações:
- Não esqueça de mudar a baseURL no arquivo api.ts das pastas web e mobile para o host da API
```

## :art: Layout
Para visualizar detalhes dos layouts utilizados no projeto é necessário ter um conta [Figma](https://www.figma.com/).
* [Layout Web e Mobile](https://www.figma.com/community/file/1240071097028170811)


## 🧠 Desafio
Funcionalides para a versão TimeCapsule 2.0 estão listadas abaixo:
* Edição de memória na Web e no Mobile
* Novos campos no cadastro de memórias: localização, pessoas envolvidas e tags
* Filtro de memórias na listagem por palavra-chave, data/hora, localização e pessoas envolvidas 
* Pesquisar memorias públicas por Github username
* Compartilhar de memória por link ou aplicativo terceiros (Whatsapp, Facebook e Instagram)
* Layout responsivo no Web
* Novas autenticações OAuth2 (Google, LinkedIn, Facebook e Twitter)


## :memo: Licença
Este projeto está sob a licença MIT. Veja mais detalhes em [LICENSE](https://github.com/rodrigo-b-silva/time-capsule-nlw12/blob/main/LICENSE) 


### Feito com :heart: by [Rodrigo Silva](https://www.linkedin.com/in/rodrigobarbosa1993)
