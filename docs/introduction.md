---
layout: doc
title: О Remnawave
description: Мощный инструмент управления прокси
---

# О Remnawave

[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/panel?sort=semver&style=for-the-badge&logo=github&label=Panel)](https://github.com/remnawave/panel)

Remnawave - это мощное программное обеспечение для управления прокси (веб-приложение), которое позволяет управлять сотнями прокси-аккаунтов с высокой производительностью и доступностью. Remnawave построен на основе Xray-core и реализован с использованием TypeScript, NestJS и React.

## Почему Remnawave?

Remnawave разработан как платформа, ориентированная на простоту и эффективность. Он подходит как для личного использования, так и для крупномасштабных проектов. С Remnawave вы можете легко управлять своими пользователями с расширенными настройками и удовлетворять различные требования. Эта платформа дает вам полный контроль над трафиком и ресурсами, позволяя создавать лучший опыт, используя его расширенные функции. Кроме того, Remnawave обладает высокой гибкостью и масштабируемостью, что позволяет расширять вашу инфраструктуру без ограничений.

## Возможности

- Готовый к использованию веб-интерфейс
- Реализован как REST API
- Поддержка интеграции с несколькими серверами для распределения и масштабирования инфраструктуры (Remnawave-node)
- Поддержка протоколов Vmess, VLESS, Trojan и Shadowsocks
- Возможность активации нескольких протоколов для каждого пользователя
- Возможность создания нескольких пользователей на одном входящем соединении
- Поддержка нескольких входящих соединений на одном порту (fallbacks)
- Ограничения на основе трафика и срока действия
- Периодические ограничения трафика (например, ежедневные, еженедельные и т.д.)
- Поддержка ссылок подписки, совместимых с различными клиентами ✨
- Автоматическая генерация ссылок для общего доступа и QR-кодов
- Мониторинг ресурсов сервера и потребления трафика
- Поддержка конфигураций Xray
- Поддержка TLS и REALITY
- Telegram бот
- Встроенный интерфейс командной строки (CLI)
- Возможность создания нескольких администраторов

## Компоненты

### Panel

Основная точка входа для Remnawave, содержит документацию и релизы.

### Backend

[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/backend?sort=semver&style=for-the-badge&logo=github&label=Backend)](https://github.com/remnawave/backend)
[![Docker Hub](https://img.shields.io/docker/v/remnawave/backend?sort=semver&style=for-the-badge&logo=github&label=Docker)](https://hub.docker.com/r/remnawave/backend)

Бэкенд для Remnawave, написанный на NestJS.

### Frontend

[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/frontend?sort=semver&style=for-the-badge&logo=github&label=Frontend)](https://github.com/remnawave/frontend)

Фронтенд для Remnawave, написанный на React.

### Node

[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/node?sort=semver&style=for-the-badge&logo=github&label=Node)](https://github.com/remnawave/node)
[![Docker Hub](https://img.shields.io/docker/v/remnawave/node?sort=semver&style=for-the-badge&logo=github&label=Docker)](https://hub.docker.com/r/remnawave/node)

Node для Remnawave, написанный на TypeScript.

### XTLS-SDK

[![NPM](https://img.shields.io/npm/v/@remnawave/xtls-sdk?sort=semver&style=for-the-badge&logo=npm&label=NPM)](https://www.npmjs.com/package/@remnawave/xtls-sdk)
[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/xtls-sdk?sort=semver&style=for-the-badge&logo=github&label=GitHub)](https://github.com/remnawave/xtls-sdk)

TypeScript/JavaScript SDK для взаимодействия с XTLS/Xray-core - мощным инструментом сетевого прокси, поддерживающим протоколы VLESS, XTLS, REALITY и другие. Построен на основе официального проекта Xray-core.

Ключевые особенности:
- Полная поддержка TypeScript
- Обертка вокруг функциональности Xray-core
- Поддержка основных функций и протоколов XTLS/Xray

### XTLS-SDK-NestJS

[![NPM](https://img.shields.io/npm/v/@remnawave/xtls-sdk-nestjs?sort=semver&style=for-the-badge&logo=npm&label=NPM)](https://www.npmjs.com/package/@remnawave/xtls-sdk-nestjs)
[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/xtls-sdk-nestjs?sort=semver&style=for-the-badge&logo=github&label=GitHub)](https://github.com/remnawave/xtls-sdk-nestjs)

Простая обертка для NestJS.

### Внутренние контракты использования

#### Backend Contract

[![NPM](https://img.shields.io/npm/v/@remnawave/backend-contract?sort=semver&style=for-the-badge&logo=npm&label=NPM)](https://www.npmjs.com/package/@remnawave/backend-contract)

#### Node Contract

[![NPM](https://img.shields.io/npm/v/@remnawave/node-contract?sort=semver&style=for-the-badge&logo=npm&label=NPM)](https://www.npmjs.com/package/@remnawave/node-contract) 