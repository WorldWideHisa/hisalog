.PHONY: up down build ps setup

setup:
	@make down
	@make build
	@make up

up:
	docker compose -f ./docker/compose.yaml up -d

down:
	docker compose -f ./docker/compose.yaml down --remove-orphans

build:
	docker compose -f ./docker/compose.yaml build --no-cache
	
logs:
	docker compose -f ./docker/compose.yaml logs -f

ps:
	docker compose -f ./docker/compose.yaml ps -a

bash:
	docker compose -f ./docker/compose.yaml exec nuxt bash
