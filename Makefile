# Personal site — https://github.com/ALBE1405/who-am-I
#
#   make                  Build, commit, and push to GitHub
#   make MSG="..."        Same, with a custom commit message
#   make install          Install dependencies
#   make dev              Local preview
#   make build            Production build

REMOTE_URL ?= https://github.com/ALBE1405/who-am-I.git
BRANCH ?= main
MSG ?= Update personal website

.DEFAULT_GOAL := deploy

.PHONY: help install dev build lint format start checkin deploy

node_modules: package-lock.json package.json
	npm ci
	@touch node_modules

help:
	@printf '%s\n' \
	  'make                  Build, commit, and push to GitHub' \
	  'make MSG="..."        Same, with a custom commit message' \
	  'make install          Install npm dependencies' \
	  'make dev              Start the local preview server' \
	  'make build            Create a production build' \
	  'make lint             Lint the project' \
	  'make format           Format the project' \
	  'make start            Build and preview the production output' \
	  'make checkin          Commit and push to GitHub' \
	  'make deploy           Same as make'

install: node_modules

dev: node_modules
	npm run dev

build: node_modules
	npm run build

lint: node_modules
	npm run lint

format: node_modules
	npm run format

start: build
	npm run start

checkin:
	@git rev-parse --is-inside-work-tree >/dev/null
	git add -A
	@if git diff --cached --quiet; then \
		echo 'Nothing to commit.'; \
	else \
		git commit -m "$(MSG)"; \
	fi
	@if git remote get-url origin >/dev/null 2>&1; then \
		git remote set-url origin "$(REMOTE_URL)"; \
	else \
		git remote add origin "$(REMOTE_URL)"; \
	fi
	git push -u origin "HEAD:$(BRANCH)"

deploy: build checkin
