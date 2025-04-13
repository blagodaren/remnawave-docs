# About Remnawave

[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/panel?sort=semver&style=for-the-badge&logo=github&label=Panel)](https://github.com/remnawave/panel)

Remnawave is a powerful proxy management software (web application) that allows you to manage hundreds of proxy accounts with high performance and accessibility. Remnawave is built on top of Xray-core and implemented using TypeScript, NestJS and React.

## Why Remnawave?

Remnawave is designed as a platform focused on simplicity and efficiency. It caters to both personal and large-scale needs. With Remnawave, you can easily manage your users with advanced settings and meet various requirements. This platform gives you full control over traffic and resources, allowing you to create the best experience by leveraging its advanced features. Additionally, Remnawave is highly flexible and scalable, enabling you to expand your infrastructure without limitations.

## Features

- Ready-to-use web-based user interface
- Implemented as a REST API
- Supports integration with multiple servers for infrastructure distribution and scalability (Remnawave-node)
- Supports Vmess, VLESS, Trojan, and Shadowsocks protocols
- Ability to activate multiple protocols for each user
- Ability to create multiple users on a single inbound
- Supports multiple inbounds on a single port (fallbacks)
- Traffic and expiration date-based limitations
- Periodic traffic limitations (e.g., daily, weekly, etc.)
- Supports Subscription link compatible with various clients ✨
- Automatically generates sharing links and QR codes
- Server resource monitoring and traffic consumption
- Supports Xray configurations
- Supports TLS and REALITY
- Telegram bot
- Built-in command-line interface (CLI)
- Ability to create multiple administrators

## Components

### Panel

Main entrypoint for Remnawave, containts this documentation and releases.

### Backend

[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/backend?sort=semver&style=for-the-badge&logo=github&label=Backend)](https://github.com/remnawave/backend)
[![Docker Hub](https://img.shields.io/docker/v/remnawave/backend?sort=semver&style=for-the-badge&logo=github&label=Docker)](https://hub.docker.com/r/remnawave/backend)

Backend for Remnawave, written in NestJS.

### Frontend

[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/frontend?sort=semver&style=for-the-badge&logo=github&label=Frontend)](https://github.com/remnawave/frontend)

Frontend for Remnawave, written in React.

### Node

[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/node?sort=semver&style=for-the-badge&logo=github&label=Node)](https://github.com/remnawave/node)
[![Docker Hub](https://img.shields.io/docker/v/remnawave/node?sort=semver&style=for-the-badge&logo=github&label=Docker)](https://hub.docker.com/r/remnawave/node)

Node for Remnawave, written in TypeScript.

### XTLS-SDK

[![NPM](https://img.shields.io/npm/v/@remnawave/xtls-sdk?sort=semver&style=for-the-badge&logo=npm&label=NPM)](https://www.npmjs.com/package/@remnawave/xtls-sdk)
[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/xtls-sdk?sort=semver&style=for-the-badge&logo=github&label=GitHub)](https://github.com/remnawave/xtls-sdk)

A TypeScript/JavaScript SDK for interacting with XTLS/Xray-core - a powerful network proxy tool that supports protocols like VLESS, XTLS, REALITY and more. Built on top of the official Xray-core project.

Key features:
- Full TypeScript support
- Wrapper around Xray-core functionality
- Supports core XTLS/Xray features and protocols

### XTLS-SDK-NestJS

[![NPM](https://img.shields.io/npm/v/@remnawave/xtls-sdk-nestjs?sort=semver&style=for-the-badge&logo=npm&label=NPM)](https://www.npmjs.com/package/@remnawave/xtls-sdk-nestjs)
[![GitHub Tag](https://img.shields.io/github/v/tag/remnawave/xtls-sdk-nestjs?sort=semver&style=for-the-badge&logo=github&label=GitHub)](https://github.com/remnawave/xtls-sdk-nestjs)

A simple wrapper for NestJS.

### Internal usage contracts

#### Backend Contract

[![NPM](https://img.shields.io/npm/v/@remnawave/backend-contract?sort=semver&style=for-the-badge&logo=npm&label=NPM)](https://www.npmjs.com/package/@remnawave/backend-contract)

#### Node Contract

[![NPM](https://img.shields.io/npm/v/@remnawave/node-contract?sort=semver&style=for-the-badge&logo=npm&label=NPM)](https://www.npmjs.com/package/@remnawave/node-contract) 