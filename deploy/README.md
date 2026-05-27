# swarph.ai deploy runbook

> Every step is a DEPLOY action — run only at go-live (commander-gated). DNS is at **Namecheap** (Advanced DNS tab), NOT OVH.

## 1. DNS (commander, Namecheap → Advanced DNS)
    A     @    51.38.39.156
    AAAA  @    2001:41d0:305:2100::60c5
    A     www  51.38.39.156
    AAAA  www  2001:41d0:305:2100::60c5
Verify on a public resolver (local cache may lag): `dig +short @1.1.1.1 swarph.ai`

## 2. Static files -> /var/www (nginx can't traverse /home/ubuntu)
    sudo mkdir -p /var/www/swarph-ai
    sudo cp -r web/. /var/www/swarph-ai/
    sudo chmod -R a+rX /var/www/swarph-ai

## 3. TLS
    sudo certbot certonly --nginx -d swarph.ai -d www.swarph.ai \
      --non-interactive --agree-tos --email pierresamson@gmail.com

## 4. nginx
    sudo cp deploy/nginx-swarph-ai.conf /etc/nginx/sites-available/swarph.ai
    sudo ln -sf /etc/nginx/sites-available/swarph.ai /etc/nginx/sites-enabled/
    sudo nginx -t && sudo systemctl reload nginx
    # reload isn't instant — wait ~1s before smoke-testing or you'll see stale 404s

## 5. Smoke (use --resolve if local DNS lags)
    curl -sI --resolve swarph.ai:443:51.38.39.156 https://swarph.ai/ | head -1   # 200
