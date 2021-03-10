#!/bin/bash

npm i

cd frontend/

npm i

npm run build

cd ..

mv frontend/dist/ .

mv dist/ public/

mv public/ src/

echo "/frontend"  | tee -a .gitignore

echo "DONE!!"
