#! /usr/bin/bash

update_main() {
  git checkout main
  sleep 1
  git fetch && git pull origin main
}


create_blog_branch() {
  read -p "the blog title: " title

  git checkout -b blog/$title
}

PS3="Select the action: "
select action in  update-main blog-branch
do
  case $action in
    update-main)
      update_main
      exit
      ;;
    blog-branch)
      create_blog_branch
      exit
    ;;
  esac
done