#!/bin/bash
cd "${0%/*}"    #Switch to script directory

if [ -z $(which tmux) ]; then
    echo "Please install tmux"
    echo -e "Linux\t sudo apt install tmux"
    echo -e "Mac\t brew install tmux"
    exit 0
else
    echo "Using tmux to run servers"
    echo "Make sure that npm start works on both server and template!"
    echo "Killing old sessions if found... please wait"
    tmux kill-session -t bubble
    sleep 3


    tmux new-session -s bubble -d
    tmux split-window -h

    tmux send-keys -t 0 "cd server" Enter
    tmux send-keys -t 0 "npm start" Enter

    tmux send-keys -t 1 "cd template" Enter
    tmux send-keys -t 1 "npm start" Enter

    tmux attach -t bubble
fi

