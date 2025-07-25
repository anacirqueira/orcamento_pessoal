/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'accounting.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/js/store.js\");\n\n\n\n(async function main() {\n    const obterElementos = function() {\n        const formReceita = document.getElementById('form-adicionar-receita');\n        const formDespesa = document.getElementById('form-adicionar-despesa');\n        return {\n            cabecalho: {\n                saldo: document.getElementById('saldo'),\n                principal: document.getElementById('progresso-principal'),\n                categorias: document.getElementById('progresso-categoria'),\n                visaoGeral: document.getElementById('visao-geral')\n            },\n            receita: {\n                tabela: document.getElementById('tabela-receitas'),\n                form: formReceita,\n                campos: {\n                    descricao: formReceita.querySelector('[name=descricao]'),\n                    valor: formReceita.querySelector('[name=valor]')\n                }\n            },\n            despesa: {\n                tabela: document.getElementById('tabela-despesas'),\n                form: formDespesa,\n                campos: {\n                    descricao: formDespesa.querySelector('[name=descricao]'),\n                    valor: formDespesa.querySelector('[name=valor]'),\n                    categoria: formDespesa.querySelector('[name=categoria]')\n                }\n            }\n        };\n    }\n\n    /* const storeGenerica = chave => {\n        return {\n            listar: () => {\n                return new Promise((resolve, reject) => {\n                    setTimeout(function() {\n                        const itens = localStorage.getItem(chave);\n\n                        if (!itens) {\n                            resolve([]);\n                            return;\n                        }\n\n                        resolve(JSON.parse(itens))\n                    }, 2000);\n                })\n            },\n            salvar: function(items) {\n                return new Promise(function(resolve) {\n                    setTimeout(function() {\n                        localStorage.setItem(chave, JSON.stringify(items));\n                        resolve();\n                    }, 2000);\n                })\n            }\n        }\n    } */\n\n    const receitasStore = new _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('receitas');\n    const despesasStore = new _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('despesas');\n\n    const elementos = obterElementos();\n\n    const categorias = [\n        {\n            identificador: 'lazer',\n            descricao: 'Lazer',\n            previsto: 320\n        },\n        {\n            identificador: 'alimentacao',\n            descricao: 'Alimentação',\n            previsto: 800\n        },\n        {\n            identificador: 'moradia',\n            descricao: 'Moradia',\n            previsto: 700\n        },\n        {\n            identificador: 'transporte',\n            descricao: 'Transporte',\n            previsto: 500\n        }\n    ];\n\n    const previstoDeReceita = 4000;\n\n    const criarOpcaoCategoria = function(categoria) {\n        const elemento = document.createElement('option');\n        elemento.innerHTML = categoria.descricao;\n        elemento.value = categoria.identificador;\n        return elemento;\n    }\n\n    const carregarSelectDeCategoria = function() {\n        categorias.forEach(function(categoria) {\n            elementos.despesa.form.categoria.appendChild(criarOpcaoCategoria(categoria));\n        });\n    }\n\n    const agrupar = function(items, propriedade) {\n        return items.reduce(function(acumulador,item) {\n            (acumulador[item[propriedade]] = acumulador[item[propriedade]] || []).push(item);\n            return acumulador;\n        }, {});\n    }\n\n    const padLeft = function(numero, quantidade, caracter) {\n        return Array(quantidade-String(numero).length+1).join(caracter||'0')+numero;\n    }\n\n    const formatarData = function(data) {\n        let dataFormatada = data;\n        if (typeof(data) == 'string') {\n            dataFormatada = new Date(data);\n        }\n\n        return `${padLeft(dataFormatada.getDate(), 2)}/${padLeft(dataFormatada.getMonth(), 2)}`;\n    }\n\n    const renderizarReceita = function(receita) {\n        return `<tr>\n            <td class=\"coluna-descricao-transacao\">\n                ${receita.descricao}\n                <p class=\"categoria-label\">Receitas</p>\n            </td>\n            <td class=\"coluna-valor-transacao\">${Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'accounting.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(receita.valor, \"R$ \", 2, '.', ',')}</td>\n        </tr>`;\n    }\n\n    const ordenarPorDataMaisRecente = function(a, b) {\n        if (new Date(b) < new Date(a)) {\n            return -1;\n        }\n        if (new Date(b) > new Date(a)) {\n            return 1;\n        }\n        return 0;    \n    }\n\n    const obterCategoria = function(identificador) {\n        return categorias.find(function(categoria) {\n            return categoria.identificador == identificador;\n        })\n    }\n\n    const renderizarDespesa = function(despesa) {\n        const descricaoCategoria = obterCategoria(despesa.categoria).descricao;\n        return `<tr>\n            <td class=\"coluna-descricao-transacao\">\n                ${despesa.descricao}\n                <p class=\"categoria-label\">${descricaoCategoria}</p>\n            </td>\n            <td class=\"coluna-valor-transacao\">${Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'accounting.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(despesa.valor, \"R$ \", 2, '.', ',')}</td>\n        </tr>`;\n    }\n\n    const renderizarDespesas = function() {\n        const despesasAgrupadas = agrupar(despesas, 'data');\n        elementos.despesa.tabela.innerHTML = '';\n        Object.keys(despesasAgrupadas)\n            .sort(ordenarPorDataMaisRecente)\n            .forEach(function(grupo) {\n                elementos.despesa.tabela.innerHTML += `<tr>\n                    <td class=\"coluna-data\" colspan=\"2\">${formatarData(grupo)}</td>\n                </tr>`;\n                despesasAgrupadas[grupo].forEach(function(despesa) {\n                    elementos.despesa.tabela.innerHTML += renderizarDespesa(despesa);\n                });\n            });\n    }\n\n    const renderizarReceitas = function() {\n        const receitasAgrupadas = agrupar(receitas, 'data');\n        elementos.receita.tabela.innerHTML = '';\n        Object.keys(receitasAgrupadas)\n            .sort(ordenarPorDataMaisRecente)\n            .forEach(function(grupo) {\n                elementos.receita.tabela.innerHTML += `<tr>\n                    <td class=\"coluna-data\" colspan=\"2\">${formatarData(grupo)}</td>\n                </tr>`;\n                receitasAgrupadas[grupo].forEach(function(receita) {\n                    elementos.receita.tabela.innerHTML += renderizarReceita(receita);\n                });\n            });\n    }\n\n    const calcularTotais = function() {\n       const totaisDespesas = despesas.reduce(function(acumulador, despesaAtual) {\n            if (!acumulador.hasOwnProperty(despesaAtual.categoria)) {\n                acumulador[despesaAtual.categoria] = 0;\n            }\n\n            acumulador[despesaAtual.categoria] += Number.parseFloat(despesaAtual.valor);\n            acumulador.despesas += Number.parseFloat(despesaAtual.valor);\n            return acumulador;\n       }, { despesas: 0 });\n       \n       const totalReceita = receitas.reduce(function(acumulador, receita) {\n            acumulador += Number.parseFloat(receita.valor);\n            return acumulador;\n       }, 0);\n\n       return Object.assign({\n            receitas: totalReceita,\n            total: totalReceita - totaisDespesas.despesas\n       }, totaisDespesas);\n    }\n    \n    const renderizarProgressoCategoria = function(categoria, totais) {\n        let totalCategoria = 0;\n        if (totais.hasOwnProperty(categoria.identificador)) {\n            totalCategoria = totais[categoria.identificador];\n        }\n\n        return `<div>\n            <h5><span class=\"ofuscado\">${categoria.descricao} ${Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'accounting.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(totalCategoria, 'R$ ', 2, '.', ',')}</h5>\n            <progress value=\"${totalCategoria}\" max=\"${categoria.previsto}\"></progress>\n        </div>`\n    }  \n\n    const renderizarColunaPrincipal = function(totais) {\n        const previstoDespesas = categorias.reduce(function(acumulador, categoria) {\n            acumulador += categoria.previsto;\n            return acumulador;\n        })\n\n        elementos.cabecalho.principal.innerHTML = '';\n\n        elementos.cabecalho.principal.innerHTML += renderizarProgressoCategoria({\n            descricao: 'Receitas',\n            identificador: 'receitas',\n            previsto: previstoDeReceita\n        }, totais);\n\n        elementos.cabecalho.principal.innerHTML += renderizarProgressoCategoria({\n            descricao: 'Despesas',\n            identificador: 'despesas',\n            previsto: previstoDespesas\n        }, totais);;\n    }\n\n    const renderizarColunaCategorias = function(totais) {\n        elementos.cabecalho.categorias.innerHTML = '';\n        categorias.forEach(function(categoria) {\n            elementos.cabecalho.categorias.innerHTML += renderizarProgressoCategoria(categoria, totais);\n        })\n    }\n\n    const renderizarItemVisaoGeral = function(item) {\n        return `<div class=\"visao-geral-container\">\n            <h5><span class=\"ofuscado\">${item.descricao}</h5>\n            <span class=\"texto-grande\">${Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'accounting.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(item.valor, 'R$ ', 2, '.', ',')}</span>\n        </div>`\n    }\n\n    const renderizarVisaoGeral = function({ receitas: totalReceitas, despesas: totalDespesas, total }) {\n        elementos.cabecalho.visaoGeral.innerHTML = '';\n\n        elementos.cabecalho.visaoGeral.innerHTML += renderizarItemVisaoGeral({\n            descricao: 'Receitas',\n            valor: totalReceitas\n        });\n\n        elementos.cabecalho.visaoGeral.innerHTML += renderizarItemVisaoGeral({\n            descricao: 'Despesas',\n            valor: totalDespesas\n        });\n\n        elementos.cabecalho.visaoGeral.innerHTML += renderizarItemVisaoGeral({\n            descricao: 'Economia',\n            valor: total\n        });\n    }    \n\n    const renderizarCabecalho = function() {\n        const totais = calcularTotais();\n\n        renderizarColunaPrincipal(totais);\n\n        renderizarColunaCategorias(totais);\n\n        renderizarVisaoGeral(totais);\n\n        elementos.cabecalho.saldo.innerHTML = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'accounting.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(totais.total, 'R$ ', 2, '.', ',');\n    }\n\n    let receitas = [];\n    const receitasPromise = receitasStore.listar();\n    receitasPromise.then(function(receitasArmazenadas) {\n        receitas = receitasArmazenadas;\n        renderizarReceitas();\n    })\n\n    let despesas = [];    \n    const despesasPromise = despesasStore.listar();\n    despesasPromise.then(function(despesasArmazenadas) {\n        despesas = despesasArmazenadas;\n        renderizarDespesas();\n    })\n\n    await Promise.all([\n        receitasPromise,\n        despesasPromise\n    ]);\n    renderizarCabecalho();\n    carregarSelectDeCategoria();\n\n    elementos.receita.form.onsubmit = async function(event) {\n        event.preventDefault();\n\n        const receita = {\n            data: new Date(new Date().setHours(0,0,0,0)).toISOString()\n        };\n\n        Object.keys(elementos.receita.campos).forEach(function(campo) {\n            const { value } = elementos.receita.campos[campo];\n            receita[campo] = value;\n        });\n\n        receitas.push(receita);\n        try {\n            await receitasStore.salvar(receitas)\n            elementos.receita.form.reset();\n            renderizarReceitas();\n            renderizarCabecalho();\n            alert('Receita salva com sucesso!');\n        } catch {\n            alert('Ocorreu um erro ao salvar a receita');\n        }\n    }    \n\n    elementos.despesa.form.onsubmit = function(event) {\n        event.preventDefault();\n\n        const despesa = {\n            data: new Date(new Date().setHours(0,0,0,0)).toISOString()\n        };\n\n        Object.keys(elementos.despesa.campos).forEach(function(campo) {\n            const { value } = elementos.despesa.campos[campo];\n            despesa[campo] = value;\n        });\n\n        despesas.push(despesa);\n        despesasStore\n            .salvar(despesas)\n            .then(function() {\n                elementos.despesa.form.reset();\n                renderizarDespesas();\n                renderizarCabecalho();\n        \n                alert('Despesa salva com sucesso!');\n            }).catch(function() {\n                alert('Ocorreu um erro ao salvar a despesa');\n            });\n    }\n})();\n\n//# sourceURL=webpack://orcamento_pessoal/./src/js/index.js?\n}");

/***/ }),

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ storeGenerica)\n/* harmony export */ });\nclass storeGenerica {\n    constructor(chave) {\n        this.chave = chave;\n    }\n\n    listar = () => {\n        return new Promise((resolve, reject) => {\n            setTimeout(() => {\n                const itens = localStorage.getItem(this.chave);\n\n                if (!itens) {\n                    resolve([]);\n                    return;\n                }\n                \n                resolve(JSON.parse(itens))\n            }, 400);\n        })\n    }\n\n    salvar = (items) => {\n        return new Promise((resolve) => {\n            setTimeout(() => {\n                localStorage.setItem(this.chave, JSON.stringify(items));\n                resolve();\n            }, 400);\n        })\n    }\n}\n\n\n//# sourceURL=webpack://orcamento_pessoal/./src/js/store.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;