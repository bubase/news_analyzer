# Дипломный проект News Analyzer
Cервис для анализа происходящих в мире событий. Его задача — установить, насколько популярны новости на определённую тему.

### Версия проекта: 0.0.1

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

## Ссылка на проект:
### https://bubase.github.io/news_analyzer
