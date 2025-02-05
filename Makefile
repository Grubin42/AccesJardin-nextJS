# Makefile

DOCKER_COMPOSE_DEV = docker compose -f docker/docker-compose.dev.yml
DOCKER_COMPOSE_PROD = docker compose -f docker/docker-compose.yml

.PHONY: dev prod build-prod down

# Démarre l'environnement de développement avec hot reload.
dev:
	$(DOCKER_COMPOSE_DEV) up --build

# Démarre l'environnement de production en arrière-plan.
prod:
	$(DOCKER_COMPOSE_PROD) up --build -d

# Arrête et supprime les containers (développement et production).
down:
	$(DOCKER_COMPOSE_DEV) down
	$(DOCKER_COMPOSE_PROD) down

# Reconstruit l'image de production.
build-prod:
	$(DOCKER_COMPOSE_PROD) build