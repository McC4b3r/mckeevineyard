#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_DIR="$ROOT_DIR/src/images/actualPics"
THUMB_OUTPUT_DIR="$ROOT_DIR/src/images/gallery-thumbs"
MODAL_OUTPUT_DIR="$ROOT_DIR/src/images/gallery-modal"
TEMP_DIR="$(mktemp -d)"
THUMB_SIZE=600
THUMB_INTERMEDIATE_MAX=1000
MODAL_MAX=1800

sources=(
  "1.3_Edit 2..jpg"
  "8.2019_01DSC_0251.jpg"
  "custon 1_Edit_01.jpg"
  "DSC_0014_0002.jpg"
  "DSC_0094.JPG"
  "DSC_0130.JPG"
  "DSC_0138.JPG"
  "DSC_0140.JPG"
  "DSC_0159_0004_01.jpg"
  "DSC_0230.JPG"
  "DSC_0299.JPG"
  "DSC_0328_0007_02.jpg"
  "DSC_0357.JPG"
  "DSC_0364_0005.jpg"
  "DSC_0499.jpg"
  "DSC_0506.JPG"
  "DSC_0518.JPG"
  "DSC_0571.JPG"
  "DSC_0589.JPG"
  "DSC_0596_01.jpg"
  "DSC_0637_00001_00002.jpg"
  "Napa Fire 8.1720.JPG"
  "Waalbridge fire 8.21.20.JPG"
  "Walbridge fire 8.21.20.JPG"
)

mkdir -p "$THUMB_OUTPUT_DIR" "$MODAL_OUTPUT_DIR"
setopt NULL_GLOB
rm -f "$THUMB_OUTPUT_DIR"/*.jpg "$MODAL_OUTPUT_DIR"/*.jpg

cleanup() {
  rm -rf "$TEMP_DIR"
}

trap cleanup EXIT

index=1
for source in "${sources[@]}"; do
  input_path="$SOURCE_DIR/$source"
  temp_path="$TEMP_DIR/thumb-${index}.jpg"
  thumb_output_path="$THUMB_OUTPUT_DIR/gallery-$(printf "%02d" "$index").jpg"
  modal_output_path="$MODAL_OUTPUT_DIR/gallery-$(printf "%02d" "$index").jpg"

  sips -s format jpeg -Z "$THUMB_INTERMEDIATE_MAX" "$input_path" --out "$temp_path" >/dev/null
  sips -c "$THUMB_SIZE" "$THUMB_SIZE" "$temp_path" --out "$thumb_output_path" >/dev/null
  sips -s format jpeg -Z "$MODAL_MAX" "$input_path" --out "$modal_output_path" >/dev/null

  index=$((index + 1))
done

echo "Generated $((index - 1)) gallery thumbnails in $THUMB_OUTPUT_DIR"
echo "Generated $((index - 1)) gallery modal images in $MODAL_OUTPUT_DIR"
