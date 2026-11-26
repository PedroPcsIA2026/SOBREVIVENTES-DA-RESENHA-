# Sobreviventes da Resenha: como gerar o .exe (PC) e o .apk (Android)

Os dois arquivos são gerados de graça pelo GitHub, sem instalar nada no seu PC.

## Passo a passo (uma vez só)
1. Crie uma conta em github.com (se ainda não tiver).
2. Clique em **New repository**, dê um nome (ex.: `sobreviventes`) e crie.
3. Na página do repositório, clique em **uploading an existing file** e arraste **todo o conteúdo desta pasta**, incluindo a pasta `.github`. Clique em **Commit changes**.
   - Dica: se o navegador não mostrar a pasta `.github` (ela começa com ponto), use o GitHub Desktop ou ative "mostrar arquivos ocultos".
4. Abra a aba **Actions**. O build "Build PC e Android" começa sozinho e leva de 5 a 10 minutos.
5. Quando ficar verde, clique nele e, lá embaixo em **Artifacts**, baixe:
   - **Sobreviventes-PC-Windows**: tem o `.exe` portátil (abre direto) e o instalador.
   - **Sobreviventes-Android-APK-beta**: tem o `app-debug.apk`.

## Instalando
- **PC:** abra o `.exe`. Se o Windows avisar "aplicativo desconhecido", clique em *Mais informações* e depois em *Executar assim mesmo* (o app não é assinado). F11 liga e desliga a tela cheia.
- **Android:** envie o `.apk` para o celular, abra e permita "instalar de fontes desconhecidas". O jogo abre sempre na horizontal.

## Atualizando o jogo
Troque o arquivo `www/index.html` pela versão nova e envie de novo (passo 3). O GitHub gera os arquivos novos sozinho.

## Observações (beta)
- O progresso (moedas e personagens) fica salvo no próprio aparelho.
- A fonte do título vem da internet; sem conexão, o jogo usa uma fonte parecida do sistema.
- O APK é de teste (debug). Para publicar na Play Store, ele precisa ser assinado; isso dá para fazer depois.
