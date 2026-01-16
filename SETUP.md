# Valentine's Day Setup-Anleitung

## 🎯 Übersicht
Eine romantische Valentine's Day Website auf Deutsch für deine Freundin!

## 📧 E-Mail-Benachrichtigung einrichten

### Schritt 1: EmailJS Account erstellen
1. Gehe zu [https://www.emailjs.com/](https://www.emailjs.com/)
2. Erstelle einen kostenlosen Account
3. Bestätige deine E-Mail-Adresse

### Schritt 2: E-Mail Service hinzufügen
1. In deinem EmailJS Dashboard, klicke auf "Add New Service"
2. Wähle deinen E-Mail-Provider (z.B. Gmail, Outlook, etc.)
3. Folge den Anweisungen zur Verbindung deines E-Mail-Kontos
4. Notiere dir die **Service ID**

### Schritt 3: E-Mail Template erstellen
1. Klicke auf "Email Templates" → "Create New Template"
2. Verwende folgendes Template:

**Subject:** 💕 Sie hat JA gesagt!

**Body:**
```
Großartige Neuigkeiten!

{{message}}

Datum: {{date}}
```

3. Speichere das Template und notiere dir die **Template ID**

### Schritt 4: Deine Credentials eintragen
1. Öffne die Datei `Pages/Page 5/yes.js`
2. Ersetze die Platzhalter mit deinen echten Werten:
   - `DEINE_USER_ID` → Deine EmailJS Public Key (findest du unter "Account" → "General")
   - `DEIN_SERVICE_ID` → Die Service ID aus Schritt 2
   - `DEIN_TEMPLATE_ID` → Die Template ID aus Schritt 3
   - `DEINE_EMAIL@example.com` → Deine E-Mail-Adresse, an die die Benachrichtigung gesendet werden soll

Beispiel:
```javascript
emailjs.init('user_abc123xyz');

const templateParams = {
  to_email: 'deine-email@gmail.com',
  message: 'Sie hat JA gesagt! 💕',
  date: new Date().toLocaleString('de-DE')
};

emailjs.send('service_xyz789', 'template_abc456', templateParams)
```

## 🚀 Auf GitHub Pages veröffentlichen

### Schritt 1: GitHub Repository erstellen
1. Gehe zu [GitHub](https://github.com)
2. Klicke auf "New Repository"
3. Benenne es z.B. "valentine" (wichtig: verwende Kleinbuchstaben)
4. Mache es **Private** wenn du willst, dass nur Personen mit dem Link es sehen können
5. Klicke auf "Create Repository"

### Schritt 2: Code hochladen
Öffne Git Bash oder Terminal in diesem Ordner und führe aus:

```bash
git init
git add .
git commit -m "Initial commit: Valentine's Day website"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/valentine.git
git push -u origin main
```

**Wichtig:** Ersetze `DEIN-USERNAME` mit deinem GitHub Benutzernamen!

### Schritt 3: GitHub Pages aktivieren
1. Gehe zu deinem Repository auf GitHub
2. Klicke auf "Settings" → "Pages" (in der linken Seitenleiste)
3. Unter "Source" wähle "main" Branch
4. Klicke auf "Save"
5. Nach 1-2 Minuten ist deine Seite live!

### Schritt 4: URL erhalten
Die URL wird sein: `https://DEIN-USERNAME.github.io/valentine/`

Schicke diese URL deiner Freundin! 💕

## 📱 Mobile Optimierung
Die Website ist bereits für Handys optimiert und funktioniert auf allen Geräten!

## 💡 Tipps
- Teste die Website erst selbst, bevor du sie verschickst
- Überprüfe, ob die E-Mail-Benachrichtigung funktioniert
- Du kannst die Website personalisieren, indem du Texte in den HTML-Dateien änderst
- Die Seite funktioniert am besten, wenn sie über HTTPS (GitHub Pages) aufgerufen wird

## 🎨 Weitere Anpassungen
Du kannst die Website weiter personalisieren:
- Bilder in `Pages/Assets/` austauschen
- Texte in den HTML-Dateien ändern
- Farben in den CSS-Dateien anpassen

Viel Erfolg! 🍀💕
