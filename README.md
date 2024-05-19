# Docker image build & compose up

```
docker compose -f compose.yml -f compose-dev.yml up -d --build=
```

# Docker compose down

```
docker compose -f compose.yml -f compose-dev.yml down -v
```

# Inside Container

```
docker exec -it node-app bash
```

# Docker App Log

```
docker logs node-app -f
```

# Scale

```
docker compose -f compose.yml -f compose-dev.yml up -d --scale node-app=2
```
