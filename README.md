# Sicherheitsaudit Tiefbau

Programm für Sicherheitskontrollen, Rundgänge und Audits auf der Tiefbaustelle.
Läuft vollständig im Browser, ohne Server und ohne Anmeldung. Alle Daten bleiben
auf dem Gerät, auf dem sie erfasst wurden (lokaler Gerätespeicher des Browsers).

## Was hier drin liegt

| Datei | Zweck |
|---|---|
| `index.html` | das ganze Programm in einer Datei |
| `manifest.json` | Name, Farben und Symbole der installierten App |
| `sw.js` | Offline-Zwischenspeicher, damit die App ohne Empfang startet |
| `icon*.png` | App-Symbol (Warnweste) in allen benötigten Grössen |
| `.nojekyll` | sagt GitHub Pages, dass nichts umgebaut werden soll |

## Demo-Fassung (Testkopie)

Dieses Repository ist die **Entwicklungsfassung**. Die Pilotnutzer arbeiten mit `Sicherheitsaudit`.
Beide liegen auf derselben Adresse `tobiasvogel98.github.io`, deshalb ist die Demo bewusst getrennt:

* eigener Gerätespeicher (`sademo_audit_v2`, `sademo_user`), die Pilotdaten bleiben unberührt
* eigener Offline-Zwischenspeicher (`sademo-…`), räumt nur die eigenen Fassungen auf
* auf dem Home-Bildschirm heisst sie **SA Demo**

Bei einer Übernahme in die Live-Fassung diese drei Punkte zurückstellen, sonst sind die
Pilotdaten nach dem Update scheinbar weg.

### Stand Phase 1 (20.11.2026)

* **Wochencheck** für den Polier (24 Punkte, alle 7 Tage). Der Tagescheck bleibt als
  Abfahrtskontrolle der Maschinen und gilt nicht mehr als täglich fällig.
* **Begründung am Mangel**: Warum gefährlich, Bild des Sollzustands (antippen für Text),
  häufigste Massnahmen zum Antippen. Seit 20.11. nachmittags je **Thema** statt je Regel:
  alle 328 Prüfpunkte (Wochencheck, Tagescheck, Rundgang, Audit, Geräteprüfung, Systemaudit)
  sind einem von 40 Themen zugeordnet, angezeigt als «Betrifft: …».
* **Notfallblatt mit Kroki**: Bauführer → Baustellen → Baustelle öffnen → Abschnitt
  «Notfallblatt mit Kroki». Einmal erfassen (Koordinaten LV95 oder WGS84, Arzt, Spital,
  Sammelplatz, zwei Kartenbilder), ein PDF: Seite 1 Notfall-Liste mit Kroki der Baustelle
  und QR-Code zum Standort, Seite 2 Umgebung mit QR-Code zur Route ins Spital.
  Der Polier sieht es unter «Meine Baustelle». Kroki lässt sich aus Bild, PDF oder
  Word-Datei (.docx) einlesen, Seite wählen, Ausschnitt mit dem Finger einrahmen
  (PDF-Leser pdf.js 3.11, Apache 2.0, liegt in `pdfjs/` und läuft offline).
* **Erstanweisung neue Person** (Instruktionen): Checkliste mit 10 Punkten, Unterschrift der
  Person und des Instruierenden, trägt die Instruktionen in der Personenliste nach, PDF.
* **10-Minuten-Schulung** (Instruktionen): Thema aus den 40 Themen mit Leitfaden und Sollbild,
  danach unterschreiben alle nacheinander auf dem iPad, Abwesende werden vermerkt, PDF mit
  Unterschriften. Auch die bisherige Instruktion sammelt jetzt die Unterschriften auf dem iPad.
* **Gefahrenermittlung vor Baubeginn** (ASA-Element 5): Baustellen → Baustelle öffnen. 18
  Gefahrenbereiche, einmal pro Baustelle durch den Bauführer; erscheint als fällig, solange sie
  fehlt, und zählt zur Bereitschaft für den Polier. Massnahmen landen in den Massnahmen.
* **ASA-Übersicht** (Start → Auswertung): 10 Elemente der EKAS-Richtlinie 6508, wo sie im
  Programm abgedeckt sind und der Stand heute mit Ampel, als PDF.
* **Baustellen-Paket**: Bauführer → Baustellen → Baustelle öffnen → «Paket für Polier speichern».
  Polier → Daten / Geräte → «Daten zusammenführen». Das Gerät stellt sich auf Polier und
  diese Baustelle ein.
* **Meine Baustelle** für den Polier: Personen, Maschinen, SiGe-Konzept, Vorbereitungsstand,
  nur lesen.

## Veröffentlichen (einmalig, ca. 5 Minuten)

1. Auf **github.com** einloggen → oben rechts **+** → **New repository**
2. Name: `sicherheitsaudit` · Sichtbarkeit: **Public** · kein Häkchen bei
   „Add a README file" → **Create repository**
3. Auf der leeren Seite: **uploading an existing file** anklicken
4. **Den Inhalt** dieses Ordners hineinziehen — also `index.html`, `manifest.json`,
   `sw.js`, alle `icon*.png`, `.nojekyll` und diese `README.md`.
   Nicht den Ordner selbst, sondern die Dateien darin.
5. Unten **Commit changes**
6. Oben **Settings** → links **Pages** → unter „Build and deployment" bei
   *Source* **Deploy from a branch** wählen, Branch **main** und Ordner **/ (root)**
   → **Save**
7. Eine Minute warten, Seite neu laden. Oben steht dann die Adresse:
   `https://<dein-benutzername>.github.io/sicherheitsaudit/`

## Auf dem iPad installieren

1. Die Adresse in **Safari** öffnen (nicht Chrome — nur Safari darf auf dem
   iPhone/iPad zum Home-Bildschirm hinzufügen)
2. **Teilen**-Symbol unten → **Zum Home-Bildschirm**
3. Es erscheint die orange Warnweste mit dem Namen **Sicherheitsaudit**
4. Die App startet im Vollbild, ohne Browserleiste, und funktioniert ohne Empfang

Auf Android: Chrome öffnen → Menü → **App installieren**.

## Neue Version veröffentlichen

1. In `sw.js` die Zeile `const VERSION = 'sademo-v9';` um eins erhöhen
   (sonst zeigen bereits installierte Geräte weiter die alte Fassung)
2. Beide Dateien (`index.html`, `sw.js`) im Repository ersetzen:
   Datei anklicken → Stift → Inhalt ersetzen → Commit.
   Oder einfacher: **Add file → Upload files** und beide überschreiben.
3. Nach ein bis zwei Minuten holen sich die installierten Geräte die neue Fassung
   beim nächsten Start selbst.

## Wichtig zum Datenschutz

* Das Repository ist **öffentlich** — der Programmcode und der Fragenkatalog sind
  für alle sichtbar. Das ist unbedenklich, solange hier **keine echten Baustellen-,
  Personen- oder Mängeldaten** abgelegt werden.
* Erfasste Kontrollen werden **nie** zu GitHub übertragen. Sie bleiben im Browser
  des jeweiligen Geräts.
* GitHub Pages ist nur die Auslieferung des Programms, keine Datenablage.
