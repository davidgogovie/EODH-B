#!/bin/bash
# alias kill3000="fuser -k -n tcp 3000"
# kill -9 $(lsof -i:3000 -t) 2> /dev/null # kills the process without error messages
pid=$(lsof -i:8000 -t); kill -TERM $pid || kill -KILL $pid
pid=$(lsof -i:4000 -t); kill -TERM $pid || kill -KILL $pid
pid=$(lsof -i:19006 -t); kill -TERM $pid || kill -KILL $pid
# lsof -n -i:3000 | grep LISTEN | awk '{ print $2 }' | uniq | xargs -r kill -9
# start all servers
STRING="STARTING all servers ..."
echo $STRING

# start json server
#gnome-terminal -- sh -c json-server --watch data/db.json --host 127.0.0.1 --port 8000
x-terminal-emulator -e json-server --watch data/db.json --host 127.0.0.1 --port 8000

# start backend server
#gnome-terminal -- sh -c serve -s public
x-terminal-emulator -e node server.js

# start frontend server
#gnome-terminal -- sh -c npm start
x-terminal-emulator -e npm run client
#x-terminal-emulator -e npm start

# launch app
url="http://127.0.0.1:19006"
google-chrome "$url"

#"$@"
#exec "$SHELL"