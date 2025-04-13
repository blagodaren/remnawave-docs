# Переменные окружения
Список доступных переменных окружения для настройки Remnawave.

## Основная панель (бэкенд) {#panel}

### Порт приложения

Порт для основной панели внутри Docker контейнера.

```bash
APP_PORT=3000
```

### Порт метрик

Порт для метрик внутри Docker контейнера.

```bash
METRICS_PORT=3001
```

### REDIS

Хост и порт Redis.

```bash
REDIS_HOST=remnawave-redis
REDIS_PORT=6379
```

### API экземпляры

Количество экземпляров API для запуска.

Возможные значения:

- `max` (запуск экземпляров на всех ядрах)
- `<число>` (запуск экземпляров на указанном количестве ядер)
- `-1` (запуск экземпляров на всех ядрах минус 1)

Оставьте значение по умолчанию для запуска 1 экземпляра. \
Большинству пользователей не потребуется менять это значение, оно может помочь достичь лучшей производительности при 40k+ пользователях.

:::warning
Не устанавливайте значение больше, чем количество физических ядер на вашей машине.
:::

```bash
API_INSTANCES=1
```

### DATABASE_URL

URL базы данных. Поддерживается только Postgres.

Формат: `postgresql://{пользователь}:{пароль}@{хост}:{порт}/{база_данных}`

```bash
DATABASE_URL="postgresql://postgres:postgres@remnawave-db:5432/postgres"
```

### JWT

Обязательно измените секреты.

Рекомендуется использовать генератор случайных строк для создания секретов с минимальной длиной 64 символа.

Эти значения используются для подписи/проверки JWT токенов.

:::danger

Не используйте учетные данные по умолчанию в продакшене.
Обязательно сгенерируйте надежные секреты!

:::

Вы можете сгенерировать секреты следующей командой:

```bash
openssl rand -hex 64
```

```bash
JWT_AUTH_SECRET=change_me
JWT_API_TOKENS_SECRET=change_me
```

### Telegram

Эти значения используются для отправки уведомлений в Telegram бот.

Вы можете установить одинаковый `chat id` для `TELEGRAM_ADMIN_ID` и `NODES_NOTIFY_CHAT_ID`.

`NODES_NOTIFY_CHAT_ID` используется для отправки уведомлений об изменениях статуса узлов, поэтому рекомендуется настроить его на канал с включенными уведомлениями.

`IS_TELEGRAM_ENABLED` используется для включения/отключения уведомлений Telegram. Возможные значения: `true`, `false`.

```bash
IS_TELEGRAM_ENABLED=false
TELEGRAM_BOT_TOKEN=change_me
TELEGRAM_ADMIN_ID=change_me
NODES_NOTIFY_CHAT_ID=change_me
```

### FRONT_END_DOMAIN

Домен фронтенда, используемый middleware Helmet.

Пример: `FRONT_END_DOMAIN=panel.example.com`

```bash
FRONT_END_DOMAIN=*
```

### SUBSCRIPTION PUBLIC DOMAIN

Путь по умолчанию для URL подписки: `/api/sub/<sub uuid>`.

Это значение используется для удобного доступа к URL подписки во фронтенде и API.

Должен быть действительным доменом, без http/https. Не ставьте `/` в конце домена/пути.

```bash
SUB_PUBLIC_DOMAIN=example.com/api/sub
```

### Документация

Включение документации.

```bash
IS_DOCS_ENABLED=true
```

Если `IS_DOCS_ENABLED` установлено в `true`, вы можете настроить пути к SwaggerUI и Scalar.

Вы можете свободно исследовать все маршруты и конечные точки API.

:::tip

Проверьте страницу `API Keys` в панели администратора с включенным `IS_DOCS_ENABLED` для быстрого доступа к документации.

:::

```bash
SWAGGER_PATH=/docs
SCALAR_PATH=/scalar
```

### PROMETHEUS

Метрики включены по умолчанию, в настоящее время их нельзя отключить.

Вы можете настроить учетные данные для доступа к метрикам.

:::danger

Не используйте учетные данные по умолчанию в продакшене.

:::

Вы можете сгенерировать секреты следующей командой:

```bash
openssl rand -hex 64
```

```bash
METRICS_USER=admin
METRICS_PASS=change_me
```

Метрики доступны по пути `/metrics` на `METRICS_PORT`.

Пример конфигурации Prometheus:

```yaml
global:
    # scrape_interval: 15s
    scrape_timeout: 10s
    evaluation_interval: 15s
scrape_configs:
    - job_name: 'remnawave'
      scheme: http
      metrics_path: /metrics
      static_configs:
          - targets: ['remnawave:3001']
      scrape_interval: 30s
      basic_auth:
          username: admin
          password: change_me
```

### Webhook

Включение webhook.

Возможные значения: `true`, `false`.

```bash
WEBHOOK_ENABLED=false
```

Если webhook включен, вы должны настроить URL и секрет.

:::danger

Не используйте учетные данные по умолчанию в продакшене.

:::

`WEBHOOK_SECRET_HEADER` используется для подписи payload webhook, должен быть не менее 32 символов. Разрешены только a-z, 0-9, A-Z.

Вы можете сгенерировать секреты следующей командой:

```bash
openssl rand -base64 64
```

```bash
WEBHOOK_URL=https://webhook.site/1234567890
WEBHOOK_SECRET_HEADER=vsmu67Kmg6R8FjIOF1WUY8LWBHie4scdEqrfsKmyf4IAf8dY3nFS0wwYHkhh6ZvQ
```

### Общие переменные окружения

Эти переменные не используются самим Remnawave, но могут использоваться базой данных Postgres или Cloudflare Tunnel, если вы будете запускать их из того же файла `docker-compose.yml`.

```bash
CLOUDFLARE_TOKEN=ey...
POSTGRES_USER=username
POSTGRES_PASSWORD=password
POSTGRES_DB=database_name
``` 