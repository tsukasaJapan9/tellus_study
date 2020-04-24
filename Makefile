.PHONY: log hrestart hdyno

hlog:
	heroku logs -a video-chat-sample -t

hrestart:
	heroku restart -a video-chat-sample

hdyno:
	heroku ps -a video-chat-sample
