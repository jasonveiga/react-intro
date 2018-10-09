#!/bin/sh

#
# Here are some additional dependencies you might find useful
#
npm i --save \
    bootstrap \
    reactstrap \
    @fortawesome/fontawesome-svg-core \
    @fortawesome/free-solid-svg-icons \
    @fortawesome/react-fontawesome

# Some links for CSS provided with node packages
cd public
ln -s ../node_modules/bootstrap/dist bootstrap
