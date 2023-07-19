## Deploy on AWS (S3)

```bash
yarn run build
# or
npm run build
# then
aws s3 cp build s3://awesomebucket.click --recursive 
```