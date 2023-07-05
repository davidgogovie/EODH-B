#!/bin/bash
#INSTALL NODEJS AND INSTALL AND RUN EODH-B
cd ~
test=google.com
if nc -zw1 $test 443 && echo |openssl s_client -connect $test:443 2>&1 |awk '
  $1 == "SSL" && $2 == "handshake" { handshake = 1 }
  handshake && $1 == "Verification:" { ok = $2; exit }
  END { exit ok != "OK" }'
then
  echo "we have connectivity"
  apt update
  apt upgrade
  #termux-setup-storage
  apt install nodejs
  apt install wget
  apt install git
fi
# if nc -zw1 google.com 443; then
#   echo "we have connectivity"
# fi
if [ ! -d 'EODH-B' ]; then
  #wget https://github.com/davidgogovie/EODH-B.git
  git clone https://github.com/davidgogovie/EODH-B.git
  echo "EODH-B downloaded................"
fi
cd ~/EODH-B
if [ ! -d 'node_modules' ]; then
  npm install
  echo "node_modules installed ................"
fi
# netstat -plten | grep :8000
# npx kill-port 8000
# npx kill-port 4000
# kill -9 $(lsof -t -i:8000)
# kill -9 $(lsof -t -i:4000)
killall node
node server.js
