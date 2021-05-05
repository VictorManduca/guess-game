.PHONY: start_server

update_libs:
	rm -rf ./node_modules/
	rm -rf ./package-lock.json

	npm i

start_server: update_libs
	cat .env.example > .env
	docker-compose up -d
