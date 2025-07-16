# Processador de CSV

Este repositório contém um script Node.js para processar arquivos CSV, com foco em validação de colunas e leitura de dados.

## Funcionalidades

- Leitura de arquivos CSV com delimitador customizado (ponto e vírgula).
- Validação das colunas esperadas no arquivo.
- Decodificação de arquivos com a codificação `windows-1252`.
- Processamento de cada linha do CSV.

## Colunas Esperadas

O arquivo CSV de entrada deve conter as seguintes colunas:

- `CPF`
- `Nome`
- `Data_Cadastro`
- `Pergunta3`
- `Grupo`
- `Origem`
- `Cidade`
- `Email`
- `Data de Nascimento`
- `Telefone_Ajustado`

## Uso

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Prepare o arquivo CSV:**
    - Crie um arquivo chamado `dados.csv` na raiz do projeto.
    - Certifique-se de que o arquivo esteja codificado em `windows-1252`.
    - O delimitador de colunas deve ser ponto e vírgula (`;`).
3.  **Execute o script:**
    ```bash
    node index.js
    ```

## Dependências

- `csv-parser`: Para fazer o parse do CSV.
- `iconv-lite`: Para decodificar o arquivo de `windows-1252` para `utf8`.

## Exemplo de Saída

Para cada linha do CSV, o script irá imprimir um objeto formatado no console:

```json
{
  "cpf": "123.456.789-00",
  "nome": "Fulano de Tal",
  "cadastro": "2023-01-10",
  "pergunta": "Resposta da pergunta 3",
  "grupo": "Grupo A",
  "origem": "Origem X",
  "cidade": "São Paulo",
  "email": "fulano@example.com",
  "nascimento": "1990-05-15",
  "telefone": "11987654321"
}
```

## Tratamento de Erros

- Se alguma das colunas esperadas não for encontrada no arquivo CSV, o script irá lançar um erro e parar a execução.
- Outros erros de leitura ou processamento também serão exibidos no console.
