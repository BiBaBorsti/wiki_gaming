---
title: Linux - Apache(edited)
description: description
sidebar:
  label: Apache
  order: 0
tableOfContents: true
---
### Nützliche Konsolenbefehle

```bash title="Apache vHost aktivieren"
sudo a2ensite [virtualhost.conf]
```

```bash title="Apache vHost deaktivieren"
sudo a2dissite [virtualhost.conf]
```

```bash title="Apache-Konfiguration neu laden"
sudo systemctl reload apache2
```

```bash title="virtuelle Python-Umgebung aktivieren"
source /opt/venv/bin/activate
```

```bash title="virtuelle Python-Umgebung deaktivieren"
deactivate
```

```bash title="dev-Umgebung aktivieren"
python3 manage.py runserver
```

```bash title="Deploy"
python3 manage.py collectstatic
```


### Beispielkonfiguration

```shell title="/etc/apache2/sites-available/board.conf"
<VirtualHost *:80>

ServerName board.84er.eu
ServerAlias board.84er.eu
ServerAdmin www-data@board.84er.eu

Alias /static /opt/board/staticfiles

<Directory /opt/board/staticfiles>
  Require all granted
</Directory>

<Directory /opt/board/board>
 <Files wsgi.py>
  Require all granted
 </Files>
</Directory>

WSGIDaemonProcess board python-path=/opt/board python-home=/opt/venv
WSGIProcessGroup board
WSGIScriptAlias / /opt/board/board/wsgi.py

</VirtualHost>
```
