#!/bin/bash

# (mw) for some reason, gradlew errors when being run from an npm script.
# after some exploring, i think this is because of environment variables, as the
# script errors immediately after the environment variables are set.
#
# see `./android/gradlew app:installDebug -p android --debug`
#
# and then i discovered
#
# - https://stackoverflow.com/questions/37171043/gradle-build-daemon-disappeared-unexpectedly-it-may-have-been-killed-or-may-hav
# - https://github.com/gradle/gradle/issues/3117
#
# turns out `npm_package_description` had a unicode character (the peach emoji)...

env -u npm_package_description $@
