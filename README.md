# Refazendo-a-Prova-do-primeiro-Bimestre

1-ConsumindoaAPIfornecida,realizeasseguintesoperações.
A) Trate os seguintes dados da API e crie um array de objetos, onde cada objeto representa um pokémoneparacadapokémonosseguintesdadosdevemserregistrados: -Nome -Tipo, -Status, -Numerodadex,(DeveserbuscadoonúmerodaversãoFIRERED) -Altura, -Peso -Eemmoves,salve4moves.
B)Apóscriarafunçãoqueirátratarosdados,crieumaROTAPOSTqueirárealizarduasoperações -Salvarospokémonstratadosemumarquivo.json -Salveessearraydeobjetosnobancodedadosutilizandoafunçãodomongoosechamadainsertmany (Essa função permite que você passe um array deobjetosecadaíndicedoarrayirásetornarumregistro nobanco).
Ponto Extra: Tente salvar os 4 moves da cada pokémondemaneiraaleatória,bastapercorreroarrayde movesepegarapenas4delesdemaneirarandômica.
2 - Mapeie o arquivo criado na questão 1ecrieumnovoarquivo.jsonquecontenhaumarraypara cada tipo de pokémon, e salve em cada array o pokémon que corresponde a esse tipo, ordenados pelo númerodadex.(Vocêpodeutilizarométodomapoureduce)
3 - Crie um CRUD para a criação de um timedepokémons.Cadatimedeveteronomedotreinador responsávelpelotime,eumarraydeObjetosquecontenhaonomedos6pokémonsdessetime.
EstruturadoTeamSchema:
trainerName:String, team:[{ name:String }]
a) Crie uma rota do tipo POST, onde você passe um objeto json que contenha o nome do treinador e um array de objetos com os nomes de 6 pokémons. Através dessa requisição, recebendo esses nomes, você deve buscar os pokémons emseubancodedadosecriaruma“tabela”chamadateam,quecontenha os6pokémonsesuasinformações.
b)CrieumarotadotipoGET,ondesejapossívelvisualizartodosostimescadastrados
c) Crie uma rota do GET, onde seja possível filtrar um time específico utilizandoonomedotreinador comoparâmetro.
d) Crie uma rota do tipoPUTondevocêpossaalterarasinformaçõesdeumtimeutilizandoonomedo treinadorcomoparâmetro
e) Crie uma rota do tipo DELETE onde você pode remover um time utilizando o nome do treinador comoparâmetro
4 - Crie uma rota do tipo GET que recebe como parâmetro o tipo do pokémon e retorne somente os pokémonsquecontémessetipo.
5-CrieumarotadotipoGETquefiltreopokémonporseunúmeronadexetragasuasinformações
6-CrieumarotadotipoGETquefiltreopokémonpelonomeetragasuasinformações
Fatoreslevadosemconsideração:Arquiteturaeorganizaçãodepastas,controllers,services,ePOO. Acomposiçãodeumprojetoestruturadocorretamenteserámaisbemavaliadadoqueumprojetoquenão siga boas práticas de programação apresentadas durante o decorrer das aulas. É de sua responsabilidade identificarcadadomíniodaaplicaçãoesepararcadafuncionalidadedemaneiracorreta.
