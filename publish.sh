set -x

cd ~/dev/repos/iith_virtual_closet

npm run build

cp -r ~/dev/repos/iith_virtual_closet/www/* ~/dev/repos/virtual-closet

cd ~/dev/repos/virtual-closet

git add .

git commit -m "publish"

git push origin master