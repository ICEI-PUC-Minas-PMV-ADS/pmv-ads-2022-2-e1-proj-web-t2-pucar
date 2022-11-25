# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

● Site publicado na Internet

● Navegador da Internet - Chrome, Firefox ou Edge

● Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

# Home Page

| Caso de testes | CT – 01 – Home page – Conheça o Projeto |
|---|---|
| Requisitos associados | RF-01 - O site deve apresentar na página principal um direcionamento completo de como se conseguir caronas utilizando o site. | 
| Objetivo do teste | Testar o dropdown “Conheça o Projeto” |
| Passos | 1-	Abrir a página principal; 2-	Mover o mouse para cima do Dropdown “Conheça o Projeto”; 3-	Clicar em “Como utilizar” |
| Critérios de Êxito | A página vai se mover para baixo, apresentando como utilizar a pesquisa de caronas. |

| Caso de testes | CT- 02 - Home page – Navegabilidade - Cadastro |
|---|---|
| Requisitos associados | RF-02 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Verificar se o botão de “cadastro” está conectado a tela de cadastro |
| Passos | 1-	Abrir a página principal; 2-	Clicar no botão de cadastro. |
| Critérios de Êxito | A página de cadastro é aberta. |

| Caso de testes | CT- 03 – Home page - Navegabilidade -Login |
|---|---|
| Requisitos associados | RF-02 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Verificar se o botão de “Login” está conectado a tela de Login. |
| Passos | 1-	Abrir a página principal; 2-	Clicar no botão de Login. |
| Critérios de Êxito | A página de Login é aberta. |

| Caso de testes | CT- 04 - Home page - Navegabilidade -  Fale Conosco  |
|---|---|
| Requisitos associados | RF-12 - O site deve apresentar uma parte para entrar em contato com os desenvolvedores. |
| Objetivo do teste | Verificar se o botão “Fale Conosco” leva o usuário até os contatos dos desenvolvedores. |
| Passos | 1-	Abrir página principal; 2-	Clicar no botão “Fale Conosco” |
| Critérios de Êxito | A página vai se mover para baixo até seu final, mostrando os contatos dos desenvolvedores. |
 
| Caso de testes | CT- 05 – Home page - Responsividade  |
|---|---|
| Requisitos associados | RF-11 - O site deve apresentar telas responsivas para pc e celular. |
| Objetivo do teste | Avaliar a responsividade da página principal em dispositivos móveis. |
| Passos | 1-	Abrir página principal; 2-	Clicar com botão direito do mouse na página; 3-	Clicar em “inspecionar elemento” 4-	Clicar no botão de dispositivo móvel no canto superior direito. 5-	Clicar em dimensões de tela; 6-	Selecionar o dispositivo móvel “Iphone Se”. |
| Critérios de Êxito | A tela se organizará para uma resolução menor e ficará responsiva para dispositivos móveis. |

| Caso de testes | CT- 06 – Home page – Filtro de pesquisa - Passageiros  |
|---|---|
| Requisitos associados | RF-06 O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Testar o filtro na barra de pesquisa. |
| Passos | 1-	Abrir página principal; 2-	Escrever seu bairro no campo de pesquisa;3-	Alterar o filtro para passageiros |
| Critérios de Êxito | A pesquisa deve mostrar apenas contas de passageiros no bairro digitado. |

| Caso de testes | CT- 07 – Home page – Filtro de pesquisa - Motorista  |
|---|---|
| Requisitos associados | RF-06 O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Testar o filtro na barra de pesquisa. |
| Passos | 1-	Abrir página principal; 2-	Escrever seu bairro no campo de pesquisa; 3-	Alterar o filtro para motoristas. |
| Critérios de Êxito | A pesquisa deve mostrar apenas contas de motoristas no bairro digitado. |

| Caso de testes | CT- 08 – Home page – Pesquisa – Teste de Campo  |
|---|---|
| Requisitos associados | RF-06 O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Fazer a verificação no campo de pesquisa, a pesquisa só deve receber letras e não números. |
| Passos | 1-	Abrir a tela principal; 2-	Escrever o nome do bairro com somente letras.|
| Critérios de Êxito | Foi apenas escrito com letras, deve aparecer os usuários do bairro. |

| Caso de testes | CT- 09 – Home page – Navegabilidade - Perfil  |
|---|---|
| Requisitos associados | RF-02 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o botão de “perfil” após o login. |
| Passos | 1-	Abrir a página principal; 2-	Cadastrar um usuário qualquer; 3-	Apertar o botão “perfil” no cabeçalho da página principal; |
| Critérios de Êxito | O botão deve levar o usuário a página de perfil. |

| Caso de testes | CT- 10 – Home page – Navegabilidade - Sair  |
|---|---|
| Requisitos associados | RF-02 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o botão “Sair” na página principal após o Login. |
| Passos | 1-	Abrir a página principal; 2-	Cadastrar um usuário qualquer; 3-	Apertar o botão “Sair” |
| Critérios de Êxito | O usuário sairá da sua conta cadastrada. |


## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
