include .env

.PHONY: up down stop prune ps shell logs mutagen

default: up

## help	:	Print commands help.
help : docker.mk
	@sed -n 's/^##//p' $<

## up	:	Start up containers.
up:
	@echo "Starting up containers for for $(PROJECT_NAME)..."
	docker compose pull
	mutagen-compose up -d --remove-orphans
	mutagen-compose start

## down	:	Stop containers.
down: stop

## start	:	Start containers without updating.
start:
	@echo "Starting containers for $(PROJECT_NAME) from where you left off..."
	mutagen-compose start

## stop	:	Stop containers.
stop:
	@echo "Stopping containers for $(PROJECT_NAME)..."
	mutagen-compose stop
	@docker stop $(shell docker ps --filter name=$(shell basename $(shell pwd ))-mutagen --format "{{ .ID }}") > /dev/null 2>&1

## prune	:	Remove containers and their volumes.
##		You can optionally pass an argument with the service name to prune single container
##		prune mariadb	: Prune `mariadb` container and remove its volumes.
##		prune mariadb solr	: Prune `mariadb` and `solr` containers and remove their volumes.
prune:
	@echo "Removing containers for $(PROJECT_NAME)..."
	@mutagen-compose down -v $(filter-out $@,$(MAKECMDGOALS))

## ps	:	List running containers.
ps:
	@docker ps --filter name='$(PROJECT_NAME)*'

## shell	:	Access `php` container via shell.
##		You can optionally pass an argument with a service name to open a shell on the specified container
shell:
	docker exec -ti -e COLUMNS=$(shell tput cols) -e LINES=$(shell tput lines) $(shell docker ps --filter name='$(PROJECT_NAME)_$(or $(filter-out $@,$(MAKECMDGOALS)), 'node')' --format "{{ .ID }}") sh
## local_vendor	:	Populates local vendor folder
.PHONY: init_project
init_project:
	docker cp "$(shell mkcert -CAROOT)/rootCA.pem"  $(shell docker ps --filter name='^/$(PROJECT_NAME)_node' --format "{{ .ID }}"):/etc/ssl/certs/rootCA.pem
##		You can optinally pass an argument with the service name to limit logs
##		logs php	: View `php` container logs.
##		logs nginx php	: View `nginx` and `php` containers logs.
logs:
	@docker-compose logs -f $(filter-out $@,$(MAKECMDGOALS))
# https://stackoverflow.com/a/6273809/1826109
%:
	@: