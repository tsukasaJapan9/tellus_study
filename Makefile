.PHONY: log hrestart hdyno

log:
	heroku logs -a video-chat-sample -t

restart:
	heroku restart -a video-chat-sample

dyno:
	heroku ps -a video-chat-sample
