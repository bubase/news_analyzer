# Дипломный проект News Analyzer
Cервис для анализа происходящих в мире событий. Основной функционал: поиск новостей по запросу и вывод аналитики по популярности новости за неделю. Сделан как дипломный проект для Яндекс.Практикума.

## Ссылка на проект:
https://bubase.github.io/news_analyzer

Версия проекта: 0.1.2

**Стек:** JavaScript(ES6, с использованием ООП), CSS(Flex), HTML5, БЭМ, Git, Webpack.

## Что есть сейчас:
- Полностью свёрстан проект (адаптивно);
- Добавлен свайпер (Swiper API);
- Настроен Webpack (в том числе hot reload, Babel, PostCSS для вендорных префиксов);
- Основной JavaScript код;
- Работа с NewsAPI и GitHubAPI;
- Защита от XSS;
- Базовые компоненты;
- Валидация через JS;

## В разработке:
- Использование SCSS


## Как развернуть проект:
npm run "вид сборки"
```
# Финальная сборка для использования
"build": "rimraf dist && webpack --mode production",
# Для разработки на локальном сервере, с автообновлением страницы при сохранении файла
"dev": "webpack-dev-server --mode development --open --watch",
# Размещение на хостинг gh-pages
"deploy": "gh-pages -d dist",

#Соответствующие сборки для Windows:
"build-w": "cross-env rimraf dist && webpack --mode production",
"dev-w": "cross-env webpack-dev-server --mode development --open --watch",
"deploy-w": "cross-env gh-pages -d dist"
```

