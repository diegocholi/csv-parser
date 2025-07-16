const fs = require("fs");
const csv = require("csv-parser");
const iconv = require("iconv-lite");

// Nome do arquivo
const caminhoArquivo = "dados.csv";

// Lista de colunas esperadas
const colunasEsperadas = [
  "CPF",
  "Nome",
  "Data_Cadastro",
  "Pergunta3",
  "Grupo",
  "Origem",
  "Cidade",
  "Email",
  "Data de Nascimento",
  "Telefone_Ajustado",
];

function validarColunas(header) {
  const faltando = colunasEsperadas.filter((c) => !header.includes(c));
  if (faltando.length > 0) {
    throw new Error(`Colunas ausentes no CSV: ${faltando.join(", ")}`);
  }
}

function processarLinha(linha) {
  // Exemplo: log de cada linha formatada
  console.log({
    cpf: linha["CPF"],
    nome: linha["Nome"],
    cadastro: linha["Data_Cadastro"],
    pergunta: linha["Pergunta3"],
    grupo: linha["Grupo"],
    origem: linha["Origem"],
    cidade: linha["Cidade"],
    email: linha["Email"],
    nascimento: linha["Data de Nascimento"],
    telefone: linha["Telefone_Ajustado"],
  });
}

// Leitura com stream (alta performance)
fs.createReadStream(caminhoArquivo)
  .pipe(iconv.decodeStream("windows-1252"))
  .pipe(csv({ separator: ";" }))
  .on("headers", validarColunas)
  .on("data", processarLinha)
  .on("end", () => {
    console.log("✅ Leitura concluída.");
  })
  .on("error", (err) => {
    console.error("❌ Erro ao processar CSV:", err.message);
  });
