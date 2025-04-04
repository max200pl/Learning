# Redis and AngularJS

## Architecture Take Redis data and show it in AngularJS

```mermaid
flowchart TD

subgraph "Angular App (Client)"
    A1[Component: ConfigList] --> A2[Service: ConfigApiService]
    A1 --> A3[Component: ConfigEdit]
end

subgraph "ASP.NET MVC (Backend)"
    B1[ConfigApiController]
    B2[ConfigService: IConfigService]
    B3[RedisRepository]
end

subgraph "Data Layer"
    B4[(Redis)]
end

A2 -- "HTTP GET /api/config/redis/keys" --> B1
A2 -- "HTTP GET /api/config/redis/{key}" --> B1
A2 -- "HTTP POST /api/config/redis" --> B1

B1 --> B2
B2 --> B3
B3 --> B4

B1 --> C1[ProductConfig]
B2 --> C2[ConfigViewModel]

C1 <---> C2

```

<!-- markdownlint-capture -->

[Controller] ⇄ [Service Layer] ⇄ [RedisRepository] ⇄ Redis
                         ⇅
                 [ViewModelBuilder]
                         ⇅
               [ProductConfig] ⇄ [ConfigViewModel]
