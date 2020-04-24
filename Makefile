.PHONY: log hrestart hdyno

run:
	node char-server/app.js

log:
	heroku logs -a video-chat-sample -t

restart:
	heroku restart -a video-chat-sample

dyno:
	heroku ps -a video-chat-sample
