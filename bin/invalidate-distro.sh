aws cloudfront create-invalidation --distribution-id E2WF56K88USHWA --paths "/*"

sleep 30

aws cloudfront create-invalidation \
    --distribution-id E2WF56K88USHWA \
    --paths "/*"