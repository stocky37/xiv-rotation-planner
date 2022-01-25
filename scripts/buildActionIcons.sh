#!/bin/bash

# NOTE: MUST be run from project root

XIVAPI=https://xivapi.com
API=http://localhost:8080

tmp=$(mktemp -d -p .)
images=public/images
output="$images/actions"
pushd $tmp

echo "Downloading action icons..."
curl -s $API/jobs \
  | jq -r '.[].name' \
  | xargs -I{} curl -s $API/jobs/{} \
  | jq -r '.actions[].icon' \
  | sort | uniq \
  | xargs -I{} -n 1 -P 8 curl -sOC - $XIVAPI/{}
popd

echo "Combining with overlay icon..."
for f in $tmp/*.png; do
  convert -extent 46x46 -background none -page +3+2 "$f" -page -1+0 "$images/action-overlay-medium.png" -flatten "png00:$output/$(basename $f)"
done

rm -rf "$tmp"
