# Gruppenarbeit: Clients in Netzwerke

## Inhaltsverzeichnis
- [Client in Netzwerk einbinden](#client-in-netzwerk-einbinden)
- [Client in Netzwerk einbinden einfach erklärt](#client-in-netzwerk-einbinden-einfach-erklärt)
- [Client Definition](#definition)
- [Client in Netzwerk einbinden Erklärung](#client-in-netzwerk-einbinden-erklärung)
    - [Leistungen und Anschlussdosen](#leistungen-und-anschlussdosen)
    - [WLAN-Anschlussmöglichkeiten](#wlan-anschlussmöglichkeiten)
    - [IP-Konfiguration](#ip-konfiguration)
    - [Netzwerkdokumentation](#netzwerkdokumentation)
    - [Client mit WLAN verbinden](#client-mit-wlan-verbinden)
- [IP-Konfiguration überprüfung: ipconfig](#ip-konfiguration-überprüfung-ipconfig)
- [Zusammenfassung](#zusammenfassung)

---

#### Client in Netzwerk einbinden
- **Neueinstellungen vornehmen:** Bevor ein neuer Rechner in das Netzwerk eingebunden wird, müssen verschiedene Konfigurationen vorgenommen werden.

- **Konfigurationsnotwendigkeiten klären:** Welche spezifischen Einstellungen sind erforderlich, damit der Client reibungslos im Netzwerk funktioniert?

- **Netzwerkzustand dokumentieren:** Es ist wichtig, den Zustand des Netzwerks vor der Integration des Clients zu dokumentieren, um eventuelle Veränderungen nachvollziehen zu können.

- **Überprüfung der IP-Konfiguration:** Mit welchem Befehl können die IP-Einstellungen überprüft werden, um sicherzustellen, dass sie korrekt sind?

---

#### Client in Netzwerk einbinden einfach erklärt
- **Netzwerklast abschätzen:** Bevor wir einen neuen Computer in ein Netzwerk integrieren, müssen wir herausfinden, wie viele Daten darüber übertragen werden. Das hilft uns, die richtige Technologie (wie Router und Kabel) auszuwählen.

- **LAN-Ausbau überprüfen:** Wir müssen sicherstellen, dass das Netzwerk in der Praxis genauso aussieht wie in der Dokumentation. Wenn nicht, müssen wir die Dokumentation aktualisieren.

- **IP-Konfiguration:** Das Wichtigste ist, dem neuen Computer eine eindeutige IP-Adresse zuzuweisen. Diese Adresse ermöglicht es, den Computer im Netzwerk zu finden und anzusprechen.

- Beispiele:
    - IP-Adresse
    - IP-Konfiguration
    - Subnetzmaske
    - DNS-Adresse

---

#### Definition
- Ein Client ist ein Endgerät oder eine Software, die mit einem Server kommuniziert, um bestimmte Daten zu bekommen. Hierbei ist der Client die Schnittstelle zum Benutzer (z.B. ein Laptop oder ein Browser)

---

### Client in Netzwerk einbinden Erklärung

#### Leistungen und Anschlussdosen
- **Leitungen und Dosen prüfen:** Bevor wir Clients anschließen können, müssen wir sicherstellen, dass die notwendigen Kabel und Anschlussdosen vorhanden sind.

- **Ortsbesichtigung:** Eine Vor-Ort-Überprüfung ist erforderlich, um sicherzustellen, dass die tatsächliche Netzwerkinfrastruktur mit den Dokumentationen übereinstimmt.

- **Lage und Bezeichnung:** Besonderes Augenmerk sollte darauf liegen, dass die Position und Bezeichnung der Anschlussdosen und Verteiler genau dokumentiert und korrekt sind.

- **Patchfelder dokumentieren:** Die Verbindungen auf den Patchfeldern müssen ebenfalls sorgfältig dokumentiert sein. Dies hilft bei der Verfolgung und Fehlerbehebung von Verbindungsproblemen im Netzwerk.

Die Überprüfung und genaue Dokumentation von Leitungen, Anschlussdosen und Patchfeldern sind entscheidend, um eine reibungslose Client-Integration in das Netzwerk sicherzustellen.

#### WLAN-Anschlussmöglichkeiten
- **Ortsbesichtigung:** Auch WLAN-Anschlussmöglichkeiten müssen vor Ort überprüft werden. 

- **Dokumentation nutzen:** Die Netzwerkdokumentation gibt einen Überblick über die Position der Access Points und deren Reichweite.

- **Access Points finden:** Manchmal sind Access Points schwer zu finden und können sich hinter Verkleidungen verstecken.

- **Messgeräte verwenden:** Es gibt spezielle Messgeräte, die dabei helfen, Access Points zu orten und die Stärke des WLAN-Signals zu messen.

#### IP-Konfiguration
- **Eindeutige IP-Adressen:** Jeder Client in einem Netzwerk benötigt eine eindeutige IP-Adresse, damit Datenpakete korrekt adressiert werden können.

- **IP-Adresse des Routers (Standardgateway):** Clients müssen die IP-Adresse ihres Routers kennen, da dieser die Datenpakete zwischen dem Client und dem Rest des Netzwerks weiterleitet.

- **IP-Adresse des DNS-Servers:** Der DNS-Server (Domain Name System) ermöglicht die Zuordnung von URLs zu den entsprechenden IP-Adressen. Dies ist notwendig, um Webseiten und andere Dienste im Internet zu erreichen.

- **Funktionsweise des DNS-Servers:** Wenn du beispielsweise `http://localhost` besuchen möchtest, benötigst du die IP-Adresse des Webservers von `localhost`. Der DNS-Server übersetzt die URL in die zugehörige IP-Adresse, damit dein Browser die Verbindung herstellen kann. Dieser Vorgang wird "Namensauflösung" genannt.

- **Automatische Netzwerkkonfiguration:** In den meisten Fällen werden die Netzwerkeinstellungen von Clients automatisch bezogen. Dies geschieht über einen DHCP-Server, der den Clients automatisch IP-Adressen zuweist. Diese automatische Konfiguration minimiert Fehler und erleichtert die Integration neuer Clients ins Netzwerk.

Die Überprüfung der WLAN-Anschlussmöglichkeiten und die Nutzung von Messgeräten sind wichtige Schritte, um sicherzustellen, dass das drahtlose Netzwerk effizient funktioniert und eine ausreichende Abdeckung bietet.

---

![Lokales Bild](/Lernfeld%203/Clients%20in%20Netzwerke/IP-Address-Database.svg)

---

#### Netzwerkdokumentation
- **Wichtige Informationen festhalten:** Eine genaue Dokumentation ist von höchster Bedeutung, um ein Netzwerk effizient zu verwalten. Jede Änderung am Netzwerk sollte erfasst und dem Netzwerkbetreiber gemeldet werden.

- **Messprotokoll für Netzwerkleitungen:** Für jede Netzwerkleitung sollte ein Messprotokoll erstellt werden. Dieses Protokoll erfasst elektrisch-physikalische Parameter wie Leitungslänge, Verdrahtung, Signallaufzeit und Laufzeitunterschiede der Kabelpaare.

- **Dokumentation der WLAN-Access-Points:** Die genaue Position aller WLAN-Access-Points muss dokumentiert werden. Dazu gehören auch Feldstärkemessungen an repräsentativen Standorten im Gebäude oder außerhalb, die in einen Lageplan eingetragen werden.

- **Netzwerkpläne:** Netzwerkpläne sind entscheidend und sollten in der Dokumentation nicht fehlen. Sie enthalten Informationen über Netzwerkgeräte und beschreiben den Informationsfluss innerhalb des Netzwerks.

Eine umfassende Netzwerkdokumentation ist unerlässlich, um die Effizienz, Sicherheit und Fehlerbehebung im Netzwerk zu gewährleisten. Sie bietet eine klare Übersicht über die Netzwerkinfrastruktur und ermöglicht eine gezielte Verwaltung und Wartung.

---

#### Client mit WLAN verbinden
- **WLAN-Passwort benötigt:** Um einen Client erstmalig mit einem WLAN zu verbinden, benötigt man das passende WLAN-Passwort. Dieses Passwort ist erforderlich, um Zugriff auf das drahtlose Netzwerk zu erhalten.

- **Client als Access Point nutzen:** Ein bereits mit dem WLAN verbundener Rechner kann auch als Access Point für andere Geräte dienen. Dazu müssen die Hotspot-Einstellungen aufgerufen und ein Passwort festgelegt werden.

- **Freigabe des WLANs:** Durch die Einrichtung eines Hotspots wird das WLAN auf andere Geräte sichtbar gemacht. Der ursprüngliche Rechner übernimmt die Rolle eines Routers, sodass andere Geräte auf das WLAN zugreifen können.

Dieser Prozess ermöglicht es, einen Client als Zugangspunkt für andere Geräte im WLAN zu nutzen, was nützlich sein kann, wenn zusätzliche Geräte auf das Internet zugreifen müssen.

---

#### IP-Konfiguration überprüfung: ipconfig
Um die aktuellen IP-Konfigurationen auf einem Windows-Rechner anzuzeigen, kann der Befehl "ipconfig" in der Eingabeaufforderung (Konsole) verwendet werden. Dieser Befehl listet wichtige Netzwerkinformationen auf, darunter:

- IP-Adresse: Die individuelle Netzwerkadresse des Computers.
- Subnetzmaske: Bestimmt den Bereich des Netzwerks, zu dem der Computer gehört.
- Standardgateway: Die IP-Adresse des Routers oder Gateways, über das der Computer auf andere Netzwerke zugreift.
- DNS-Server: Die IP-Adresse des Servers, der Domain-Namen in IP-Adressen umwandelt.
- Weitere Informationen: Zu den weiteren Informationen gehören MAC-Adresse, DHCP-Status und vieles mehr.

Die Verwendung von "ipconfig" ist äußerst nützlich, um Netzwerkprobleme zu diagnostizieren, die IP-Konfiguration zu überprüfen oder allgemein Einblick in die Netzwerkeinstellungen des Windows-Computers zu erhalten.

---

![Lokales Bild](/Lernfeld%203/Clients%20in%20Netzwerke/ipconfig.png)

---

#### Zusammenfassung
1. **Client-Funktion:** Ein Client ist ein Endgerät oder eine Software, die mit einem Server kommuniziert und Daten abruft. Er ist die Schnittstelle für den Benutzer.

2. **LAN-Ausbau überprüfen:** Vor der Integration muss der physische Netzwerkaufbau (Leitungen, Anschlussdosen) überprüft werden.

3. **IP-Adressen:** Jeder Client benötigt eine eindeutige IP-Adresse, sowie die IP-Adresse des Routers (Standardgateway) und des DNS-Servers.

4. **Netzwerkdokumentation:** Die genaue Dokumentation der Netzwerkstruktur und -topologie ist entscheidend. Tools wie jNetMap können hierbei hilfreich sein.

5. **IP-Konfiguration überprüfen:** Mit dem Befehl "ipconfig" können die IP-Konfigurationen von Windows-Rechnern angezeigt werden. Dies ist nützlich für die Überprüfung und Fehlerbehebung der Netzwerkeinstellungen.

Durch diese Schritte kann die Integration von Clients in das Netzwerk reibungslos erfolgen und die Netzwerkeffizienz gewährleistet werden.

---
