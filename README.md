### Página de Acesso ✔️

- Campo **CNPJ**, com máscara de CNPJ ao digitar, e deverá ser um CNPJ válido. ✔️ 
   - CNPJ VALIDO = 91.526.551/0001-49, 77.955.732/0001-60, 13.571.303/0001-06 

- botão “Acessar” ✔️

Ao clicar no botão “Acessar”, o sistema deverá:

1. Validar se o CNPJ informador é válido; ✔️
   - Caso seja, ir para 2. ✔️
   - Caso não seja, enviar mensagem ao usuário: “CNPJ inválido”. ✔️
2. Realizar uma pesquisa em um array **users**, através de uma função **login**, utilizando como parâmetro o CNPJ informado. ✔️
   - Caso a consulta retorne os dados do CNPJ, abrir a tela `Contratos Vinculados`. ✔️
   - Caso a consulta não retorne os dados do CNPJ, enviar mensagem ao usuário: “CNPJ sem contratos ativos.” ❌
   
   ### **Página Contratos Vinculados**

O sistema deverá apresentar as seguintes informações para o usuário:

- Consultar um array **contracts**, através da função **cnpjIsExists** passando como parâmetro o CNPJ informado na tela da consulta. Carregar os dados retornados da consultas conforme abaixo: ✔️
- Tela de Seleção de Contratos Vinculados ✔️
  - Header com as seguintes informações:
    - Razão Social, texto informativo, não permitido alteração; ✔️
    - CNPJ, texto informativo, não permitido alteração; ✔️
    - Nome Fantasia, texto informativo, não permitido alteração; ✔️
  - Lista dos Contratos Vinculados ao CNPJ contendo: 
    - Campo tipo checkbox com opção de selecionar;  ❌
    - Nome do Contrato, texto informativo, não permitindo alteração; ✔️
    - Código do Contrato, texto informativo, não permitido alteração; ✔️
    - Percentual da Retenção Técnica, texto informativo, não permitido alteração; ✔️
    - Botão “Detalhes”, tipo botão, permitindo ação de click; ✔️❌
      - (Colocar as infos do modal) ❌
  - Botão “Anterior”, tipo botão, permitindo click: ✔️
    - Ao clicar, o sistema deverá retornar a página de `acesso`. ❌
  - Botão “Próxima”, tipo botão, permitindo click:
    - Ao clicar, o sistema deverá validar; ❌
      - Se apenas uma linha foi selecionada, ir para a tela `Dados da Nota Fiscal` ❌
      - Se for selecionada mais de uma linha, retorna mensagem para o usuário: “Somente um Contrato deverá ser selecionado” ❌
      - Se não houve linha selecionada, retornar mensagem para o usuário: “Ao menos um Contrato deverá ser selecionado” ❌
      
      ### Página Dados da Nota Fiscal ❌
