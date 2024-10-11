GUIA PARA INSTALAÇÃO E EXECUÇÃO
(Pode ser utilizado tanto o android studio quanto o vscode)

1. Clone o repositório na sua máquina: git clone https://github.com/RubensPS/amigurumi-app.git
2. Instale as dependências do projeto: npm install
3. Instale o EAS client: npm install -g eas-cli
4. Inicialize o EAS no projeto: eas build:configure
5. Realize a autenticação: eas login
6. Crie o build: eas build --platform android --profile production --clear-cache
7. Aguarde a execução. Se desejar, acompanhe a mesmo pelo expo.io com a conta que realizou a autenticação
8. Faça o download do arquivo .apk no seu celular
9. Faça a instalação do aplicativo. Verifique nas configurações que a opção para permitir instalação de aplicativos de fontes desconhecidas está habilitada
10. Após a instalação, abra o aplicativo

Teste a vontade (:

