echo -e "\e[1;34mjunaidrahim.me - Portfolio Website\e[0m"
echo -e "\e[1;32mDeploying to junadirahim.github.io\e[0m"
echo "..."

echo "Removing Files"
rm -rf ../junaidrahim.github.io/*
cp -r public/* ../junaidrahim.github.io/

echo -e "\e[1;32mStarting Commit and Push\e[0m"
cd ../junaidrahim.github.io && git add . && git commit -m "latest deploy" && git push origin master