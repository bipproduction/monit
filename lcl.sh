#!/bin/bash
case $1 in
    -p|--push)
        git add -A
        git commit -m "auto"
        git push origin main
    ;;
    *)
        echo "
        MENU
        -p | --push push
        "
    ;;
esac