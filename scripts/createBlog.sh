#! /usr/bin/bash

read -p "Enter your title: " title
read -p "Enter tags: " tags
read -p "Enter image alt: " alt
read -p "Enter month: " mm
read -p "Enter day: " dd

slug=$(echo $title | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
formatted_alt=$(echo $alt | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

year=$(date +"%Y")
month=${mm:-$(date +"%m")}
day=${dd:-$(date +"%d")}

folder=$month-$day-$slug

function createBlog() {
  mkdir $folder

  cd $folder

  touch index.md

  echo --- >> index.md
  echo slug: $slug >> index.md
  echo title: $title >> index.md
  echo authors: victoria >> index.md
  echo tags: [$tags] >> index.md
  echo hide_table_of_contents: false >> index.md
  echo --- >> index.md 
  echo -e "\n" >> index.md
  echo "![$alt](./$formatted_alt.webp)" >> index.md
  echo -e "\n" >> index.md 
  echo "<!--truncate-->" >> index.md
}

cd blog

if test -d $year; then
  cd $year

  createBlog
else
  mkdir $year 
  cd $year

  createBlog
fi
