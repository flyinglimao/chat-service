#/bin/sh
source .env
etcd --name $NAME --initial-advertise-peer-urls http://127.0.0.1:$PEER_PORT \
  --listen-peer-urls http://127.0.0.1:$PEER_PORT \
  --listen-client-urls http://127.0.0.1:$CLIENT_PORT \
  --advertise-client-urls http://127.0.0.1:$CLIENT_PORT \
  --initial-cluster-token chat-cluster \
  --initial-cluster $CLUSTER \
  --initial-cluster-state $STATE