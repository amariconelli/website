
npm run build && ^
cd .\dist && ^
echo amariconelli.luccas.dev > CNAME && ^
git init && ^
git add -A && ^
git commit -m "deploy in .bat file" && ^
git push -f git@github.com:lucasmenchon/consultancy-website.git main:gh-pages && ^
cd ..