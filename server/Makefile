.PHONY: start_up

start_up: update_libs
	cat .env.example > .env

	docker-compose up -d

update_libs:
	rm -rf ./node_modules/
	rm -rf ./package-lock.json

	npm i
