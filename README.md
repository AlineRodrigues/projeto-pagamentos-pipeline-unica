# Projeto Pagamentos - Integração Contínua com GitHub Actions - Pipeline única

## Objetivo

Este projeto tem como objetivo demonstrar a implementação de uma pipeline de Integração Contínua (Continuous Integration - CI) utilizando GitHub Actions para execução automatizada de testes de software.

A solução foi desenvolvida para atender aos requisitos da atividade prática da disciplina de Integração Contínua para Automação de Testes, contemplando diferentes formas de execução da pipeline, geração de relatórios de testes e publicação dos resultados.

Neste projeto foi implementada uma única pipeline de Integração Contínua utilizando GitHub Actions. A solução consolida em um único workflow os três gatilhos de execução exigidos pela atividade: execução por Push, execução Manual (Workflow Dispatch) e execução Agendada (Schedule).

---

# Tecnologias Utilizadas

* Git
* GitHub
* GitHub Actions
* Node.js
* Mocha
* Mochawesome

---

# Conceitos Aplicados

## Integração Contínua (CI)

Integração Contínua é uma prática de desenvolvimento de software que consiste em integrar alterações de código frequentemente ao repositório principal, permitindo que validações automáticas sejam executadas a cada modificação realizada.

O objetivo é identificar problemas rapidamente, reduzir riscos e fornecer feedback contínuo para a equipe.

## Pipeline

Uma pipeline é um fluxo automatizado de etapas executadas após um evento específico.

Neste projeto, a pipeline realiza:

1. Download do código-fonte.
2. Configuração do ambiente de execução.
3. Instalação das dependências.
4. Execução dos testes automatizados.
5. Geração do relatório de testes.
6. Publicação dos artefatos gerados.

## Pipeline as Code

A pipeline foi implementada através de um arquivo YAML armazenado no próprio repositório, seguindo o conceito de Pipeline as Code.

---

# Estrutura do Projeto

```text
projeto-pagamentos-pipeline-unica
│
├── .github/
│   └── workflows/
│       └── ci-exec.yaml
│
├── evidencias/
│
├── reports/
│   ├── resultado.html
│   └── resultado.json
│
├── src/
│   └── ServicoDePagamento.js
│
├── test/
│   └── ServicoDePagamento.test.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# Testes Automatizados

Os testes automatizados foram desenvolvidos utilizando o framework Mocha.

Os cenários implementados validam:

* Pagamento categoria cara.
* Pagamento categoria padrão.
* Consulta do último pagamento realizado.

Durante as execuções da pipeline foram obtidos os seguintes resultados:

* Total de testes: 3
* Sucesso: 3
* Falhas: 0
* Taxa de sucesso: 100%

---

# Geração de Relatórios

Para geração dos relatórios foi utilizado o Mochawesome.

Após a execução dos testes são gerados os seguintes arquivos:

```text
reports/
├── resultado.html
└── resultado.json
```

O arquivo HTML apresenta uma visualização amigável dos resultados dos testes e o arquivo JSON contém os dados estruturados da execução.

---

# # Formas de Execução da Pipeline

## 1. Execução por Push

Arquivo:

```text
.github/workflows/ci-exec.yaml
```

A pipeline é executada automaticamente sempre que alterações são enviadas para a branch principal do repositório.

Objetivo:

* Garantir validação contínua do código.
* Detectar problemas rapidamente.
* Fornecer feedback imediato.

---

## 2. Execução Manual

Arquivo:

```text
.github/workflows/ci-exec.yaml
```

A execução ocorre manualmente através da interface do GitHub Actions utilizando o recurso Workflow Dispatch.

Objetivo:

* Permitir execução sob demanda.
* Validar alterações específicas.
* Realizar execuções controladas.

---

## 3. Execução Agendada

Arquivo:

```text
.github/workflows/ci-exec.yaml
```

A pipeline é executada automaticamente através de agendamento utilizando expressões Cron.

Objetivo:

* Realizar validações periódicas.
* Detectar problemas em execuções recorrentes.
* Garantir monitoramento contínuo da solução.

---

# Publicação de Artefatos

Após a execução dos testes, os relatórios são armazenados como Artifacts do GitHub Actions.

Os artefatos podem ser baixados diretamente pela interface do GitHub e contêm:

* resultado.html
* resultado.json

Essa abordagem permite armazenar e consultar os resultados das execuções sem necessidade de acesso ao ambiente de execução da pipeline.

---

# Evidências de Execução

Esta seção apresenta as evidências coletadas durante a validação da pipeline de Integração Contínua desenvolvida com GitHub Actions.

Os registros demonstram o correto funcionamento dos diferentes gatilhos configurados (Push, Manual e Schedule), bem como a execução dos testes automatizados, a geração dos relatórios e a publicação dos artefatos produzidos pela pipeline.

As evidências foram obtidas diretamente da interface do GitHub Actions e dos relatórios gerados durante as execuções, permitindo comprovar o atendimento dos requisitos propostos para a atividade.

Os resultados apresentados confirmam:

Execução automática da pipeline por meio de Push;
Execução manual utilizando Workflow Dispatch;
Configuração da execução agendada utilizando Schedule (Cron);
Execução bem-sucedida dos testes automatizados;
Geração dos relatórios HTML e JSON;
Publicação e armazenamento dos relatórios como Artifacts;
Disponibilização dos resultados para consulta e download.

As imagens apresentadas a seguir documentam cada etapa do processo e servem como comprovação da implementação da solução proposta.

## Evidências Da Execução Da Pipeline Através DO GitHub

### 1. Execução por Push

<p align="center">
  <img src="./evidencias/execucao-push-1.png" width="45%">
  <img src="./evidencias/execucao-push-2.png" width="45%">
</p>

### 2. Execução Manual

<p align="center">
  <img src="./evidencias/execucao-manual-1.png" width="45%">
  <img src="./evidencias/execucao-manual-2.png" width="45%">
</p>

### 3. Execução Agendada

<p align="center">
  <img src="./evidencias/execucao-agendada-1.png" width="45%">
  <img src="./evidencias/execucao-agendada-2.png" width="45%">
</p>

---
# Publicação do Relatório

Após a execução dos testes automatizados, os relatórios gerados pelo Mochawesome são publicados automaticamente como Artifacts do GitHub Actions.

Os Artifacts permitem armazenar os resultados da execução da pipeline, possibilitando o download e a análise posterior dos relatórios sem a necessidade de acessar diretamente o ambiente de execução.

Durante as execuções da pipeline implementada neste projeto, os relatórios foram armazenados com sucesso, contendo os seguintes arquivos:

resultado.html
resultado.json

A utilização de Artifacts garante rastreabilidade, preservação dos resultados e maior visibilidade sobre a qualidade da aplicação durante o processo de Integração Contínua.

## Evidências do Artifacts

### 1. Artifacts - Execução por Push
<p align="center">
  <img src="./evidencias/artifacts-push-1.png" width="45%">
  <img src="./evidencias/artifacts-push-2.png" width="45%">
</p>

### 2. Artifacts - Execução Manual

<p align="center">
  <img src="./evidencias/artifacts-manual-1.png" width="45%">
  <img src="./evidencias/artifacts-manual-2.png" width="45%">
</p>

### 3. Artifacts - Execução Agendada

<p align="center">
  <img src="./evidencias/artifacts-agendada-1.png" width="45%">
  <img src="./evidencias/artifacts-agendada-2.png" width="45%">
</p>

---
# Relatório HTML

Após a execução dos testes automatizados, o Mochawesome gera um relatório em formato HTML contendo informações detalhadas sobre os cenários executados.

O relatório apresenta uma visão consolidada da execução, incluindo quantidade de testes realizados, testes aprovados, falhas identificadas, tempo de execução e detalhes de cada caso de teste executado.

A utilização de relatórios HTML facilita a análise dos resultados, proporcionando maior visibilidade sobre a qualidade da aplicação e permitindo a rápida identificação de possíveis problemas durante o processo de Integração Contínua.

## Evidências Dos Relatórios HTML

### 1. Relatório HTML - Execução por Push

<p align="center">
  <img src="./evidencias/relatorio-html-push-1.png" width="900">
</p>

<p align="center">
  <img src="./evidencias/relatorio-html-push-2.png" width="900">
</p>

<p align="center">
  <img src="./evidencias/relatorio-html-push-3.png" width="900">
</p>

### 2. Relatório HTML - Execução Manual

<p align="center">
  <img src="./evidencias/relatorio-html-manual-1.png" width="900">
</p>

<p align="center">
  <img src="./evidencias/relatorio-html-manual-2.png" width="900">
</p>

<p align="center">
  <img src="./evidencias/relatorio-html-manual-3.png" width="900">
</p>

### 3. Relatório HTML - Execução Agendada

<p align="center">
  <img src="./evidencias/relatorio-html-agendada-1.png" width="900">
</p>

<p align="center">
  <img src="./evidencias/relatorio-html-agendada-2.png" width="900">
</p>

<p align="center">
  <img src="./evidencias/relatorio-html-agendada-3.png" width="900">
</p>

---

# Relatório JSON

Além do relatório em formato HTML, a pipeline também gera automaticamente um relatório em formato JSON, contendo os resultados da execução dos testes de forma estruturada.

Esse formato é amplamente utilizado em processos de Integração Contínua, pois permite que outras ferramentas realizem análises automatizadas, consolidação de métricas, geração de dashboards e integração com sistemas de monitoramento e qualidade.

O arquivo gerado registra informações detalhadas da execução, incluindo estatísticas dos testes, duração da execução, quantidade de cenários executados, percentual de sucesso e o resultado individual de cada caso de teste.

## Evidências do Relatório JSON

### 1. Relatório JSON - Execução por Push

<p align="center">
  <img src="./evidencias/relatorio-json-push.png" width="900">
</p>

### 2. Relatório JSON - Execução Manual

<p align="center">
  <img src="./evidencias/relatorio-json-manual.png" width="900">
</p>

### 3. Relatório JSON - Execução Agendada

<p align="center">
  <img src="./evidencias/relatorio-json-agendada.png" width="900">
</p>

---

# Resultados Obtidos

A implementação atendeu integralmente aos requisitos propostos:

* Utilização do GitHub Actions.
* Execução por Push.
* Execução Manual.
* Execução Agendada.
* Pipeline executando com sucesso.
* Testes automatizados executando com sucesso.
* Geração de relatório de testes.
* Publicação e armazenamento dos relatórios.
* Aplicação dos conceitos de Integração Contínua.
* Utilização adequada das ferramentas escolhidas.

---

# Conclusão

A solução desenvolvida demonstra a aplicação prática dos conceitos de Integração Contínua utilizando GitHub Actions. A implementação possibilita a execução automatizada dos testes em diferentes cenários de disparo, garantindo feedback rápido, rastreabilidade dos resultados e maior confiabilidade no processo de desenvolvimento de software.

A utilização de relatórios automatizados e armazenamento de artefatos complementa a estratégia de qualidade adotada, permitindo análise e acompanhamento das execuções realizadas.

---

# Repositório do Projeto

O código-fonte, as pipelines de Integração Contínua, os testes automatizados e a documentação desta atividade estão disponíveis no repositório GitHub abaixo:

URL do Repositório:

https://github.com/AlineRodrigues/projeto-pagamentos-pipeline-unica

O repositório contém:

Código-fonte da aplicação;
Testes automatizados utilizando Mocha;
Relatórios gerados pelo Mochawesome;
Workflows do GitHub Actions;
Evidências das execuções realizadas;
Documentação completa da solução implementada.
