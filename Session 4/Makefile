.PHONY: build
build:
	docker compose build

.PHONY: cyb-start
cyb-start:
	docker compose up -d

.PHONY: cyb-stop
cyb-stop:
	docker compose down

.PHONY: restart-all
restart-all: cyb-stop build cyb-start

.PHONY: show-headers
show-headers:
	@echo "$$(tput setaf 6)$$(tput setab 0)═══════════════════════════════$$(tput sgr 0)"
	@echo "$$(tput setaf 6)$$(tput setab 0)  👎    Default cofig     👎   $$(tput sgr 0)"
	@echo "$$(tput setaf 6)$$(tput setab 0)═══════════════════════════════$$(tput sgr 0)"
	@curl -I http://localhost:9081
	@echo "$$(tput setaf 6)$$(tput setab 0)═════════════════════════════════$$(tput sgr 0)"
	@echo "$$(tput setaf 6)$$(tput setab 0)  👍    Base secure cofig     👍 $$(tput sgr 0)"
	@echo "$$(tput setaf 6)$$(tput setab 0)═════════════════════════════════$$(tput sgr 0)"
	@curl -k -I https://localhost:9443

