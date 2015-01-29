git pull
source v/bin/activate
    rm -rf _build
    make slides
    ln -s _build/slides/index.html index.html
cd humanhacking
    rm -rf _build
    make slides
    ln -s _build/slides ../humans
cd ../dobc
    rm -rf _build
    make slides
    ln -s _build/slides ../dobc
cd ../git
    rm -rf _build
    make slides
    ln -s _build/slides ../git
cd ../intermediateirc
    rm -rf _build
    make slides
    ln -s _build/slides ../irc
deactivate
