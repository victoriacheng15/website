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

run_rome() {
  pnpm rome:apply && pnpm rome:write
}

action_array=("update main" "create blog branch" "run rome")

PS3="Select the action: "
select action in  "${action_array[@]}"
do
  case $action in
    ${action_array[0]})
      update_main
      exit
      ;;
     ${action_array[1]})
      create_blog_branch
      exit
    ;;
     ${action_array[2]})
      run_rome
      exit
    ;;
  esac
done