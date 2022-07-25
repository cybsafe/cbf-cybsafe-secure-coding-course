.PHONY: clean-build
clean-build:
	docker compose build --no-cache

.PHONY: start
start:
	docker compose up -d
	sleep 10
	open http://localhost:4001

.PHONY: stop
stop:
	docker compose down
