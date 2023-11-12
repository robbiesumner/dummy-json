# Dummy-JSON
> Prüfungsaufgabe der Vorlesung Webprogrammierung an der DHBW Karlsruhe

## Verwendete Technologien

### Next.js / React

Die Anwendung wurde mit [Next.js](https://nextjs.org/) erstellt. Es enthält einen eingebauten Router und ermöglicht mit React das Erstellen von HTML-Komponenten, die modular genutzt werden können.

Jede Seite im Ordner [`app/`](./app) stellt eine spezifische Route dar. Die Datei [`app/page.js`](./app/page.js) ist die Hauptdatei, die bei jedem Aufruf ausgeführt wird. Sie enthält die Navigation und den Footer. In [`app/components/`](./app/components) sind die einzelnen Komponenten definiert, die in den Seiten verwendet werden.

### Tailwind CSS

Tailwind CSS ist ein CSS-Framework, das es ermöglicht, CSS-Attribute direkt in den HTML-Elementen zu definieren. Man muss keine CSS-Dateien schreiben und kann mit Abkürzungen in `className=""` direkt die Attribute definieren.

## Installation
Nachdem der Code lokal auf der Maschine liegt, müssen die Abhängigkeiten installiert werden.
```
npm install
```

### Lokal ausführen
```
npm run dev
```